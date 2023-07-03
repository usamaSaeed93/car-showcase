'use client'
import React from 'react'
import { useState,useEffect } from 'react'
import { carDetailsInterface } from '.'
import Image from 'next/image'
import hero from '../public/hero.png'
import {getCarImages} from '../components/Request'
export default async function CarDetails({details}:carDetailsInterface ) {
  const [images,setImages]=useState();
  useEffect(()=>{
    const res = getCarImages("nissan");
    console.log(res);
    const entries = Object.entries(details);
  },[])
  return (
  <div>
   <Image 
   src={hero}
   alt='none'
   className='w-56 md:w-96 bg-blue-700 rounded-[30px] '
   />
<div className='flex flex-row w-full gap-1 justify-evenly'>
<Image 
   src={hero}
   alt='none'
   className='w-16 md:w-24 bg-blue-700 mt-2 '
   />
    <Image 
   src={hero}
   alt='none'
   className='w-16 md:w-24 bg-blue-700 mt-2 '
   />
    <Image 
   src={hero}
   alt='none'
   className='w-16 md:w-24 bg-blue-700 mt-2 '
   />
</div>

<div className='w-full justify-evenly flex flex-col'>
{
entries.map(entry=> (
  
  <div className='flex flex-row justify-between  text-lg '>
    <span className='font-bold'>{entry[0]}</span>
    <span>{entry[1]}</span>
  </div>
 
  
))
}
</div>

  </div>
  )
}
