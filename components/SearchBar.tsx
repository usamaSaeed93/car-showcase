'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
interface funcInterface{
  func: ()=> {
    make:string
    modal:string

  }
}
interface makeandModal{
  make:string
  modal:string
}

// const handleSubmit=(event:makeandModal)=>{
  //   const {make,modal}=event;
  // }
  
  export default function  SearchBar({func}:funcInterface) {
    const [makeModal,setMakeModal]=useState<makeandModal>();
    console.log(makeModal?.make)
    console.log(makeModal?.modal)
    const handleInputChange = (event:any) => {
      const { name, value } = event.target;
      setMakeModal((prevMakeModal) => ({
        ...prevMakeModal,
        [name]: value
      }) as makeandModal);
    };
    const sendBack=()=>{
      
    }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className='flex justify-evenly'
    >
    {/* <form onSubmit={handleSubmit}> */}

    <TextField name='make' id="outlined-basic" label="Company Name" variant="outlined"  onChange={handleInputChange} />
     
    <TextField name='modal' id="outlined-basic" label="Car Modal" variant="outlined"  onChange={handleInputChange} />

    <button onClick={sendBack}></button>
    {/* </form> */}
    
</Box>
  );
}
