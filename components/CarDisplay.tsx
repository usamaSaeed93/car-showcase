'use client'
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { getCars } from './Request'
import CarCard from './CarCard'
import { carsDataInterface } from '.'
interface carcard{
  car:carsDataInterface
}
interface makeandModal{
  make:string
  modal:string
}
async function  CarDisplay() {
  const [makeModal,setMakeModal]=useState<makeandModal>();
  const carData=(make:string,modal:string)=>{
    setMakeModal({make , modal});
  }
  const carsData = await getCars("Nissan","Ultima")
const isDataEmpty = !Array.isArray(carsData);
  return (
    <>
    <div className="flex">
<SearchBar func={carData}/>
    </div>
<div className='flex justify-evenly flex-wrap flex-col md:flex-row'>

  {
    carsData && carsData?.map( car =>{
      return <div className='m-3'>
        <CarCard car={car} />
      </div>
    })
  }
  </div>
    </>
  )
}

export default CarDisplay