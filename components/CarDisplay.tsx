"use client";
import React, { useState, useEffect } from "react";
import { getCars } from "./Request";
import CarCard from "./CarCard";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { carsDataInterface } from ".";
interface carcard {
  car: carsDataInterface;
}
interface makeandModal {
  make: string;
  modal: string;
}
function CarDisplay(data:any) {

  const [makeModal, setMakeModal] = useState<makeandModal>();
  function carData(prop: makeandModal) {
    setMakeModal(prop);
    console.log(makeModal);
  }
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setMakeModal(
      (prevMakeModal) =>
        ({
          ...prevMakeModal,
          [name]: value,
        } as makeandModal)
    );
  };
  return (
    <>
      <div className="flex">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          className="flex justify-evenly flex-col md:flex-row"
        >
          <TextField
            name="make"
            id="outlined-basic"
            label="Company Name"
            variant="outlined"
            onChange={handleInputChange}
          />
          <TextField
            name="modal"
            id="outlined-basic"
            label="Car Modal"
            variant="outlined"
            onChange={handleInputChange}
          />
          <button onClick={(e) => e.preventDefault()}>Send Data</button>
        </Box>
      </div>
      <div className="flex justify-evenly flex-wrap flex-col md:flex-row">
        {data &&
          data.data.map((car: any) => {
            return (
              <div className="m-3">
                <CarCard car={car} />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default CarDisplay;
