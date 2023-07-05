'use client'
import React from 'react'
import { useState,useEffect } from 'react'
import { carDetailsInterface } from '.'
import Image from 'next/image'
import hero from '../public/hero.png'
import { getCarImages } from './Request'
interface roughProp {
  full : string
  raw : string
  regular: string
  small: string
  small_s3 : string
  thumb: string
  
}
export default function CarDetails({details}:carDetailsInterface ) {
  const entries = Object.entries(details);
  const [image,generateImage]=useState<roughProp>();
  useEffect(()=>{
const res =getCarImages("nissan").then(res=>generateImage(res.results[0].urls))
  },[])
console.log(image?.raw)
  return (
  <div>
 
   <Image 
   src={image!== undefined ? image.full :  ""} 
   alt='none'
   className='w-56 md:w-96 bg-blue-700 rounded-[30px] '
   width={224}
   height={100}
   />
<div className='flex flex-row w-full gap-1 justify-evenly'>
<Image 
   src={hero}
   alt='none'
   className='w-16 md:w-24 bg-blue-700 mt-2 '
   width={64}
   height={64}
   />
    <Image 
   src={hero}
   alt='none'
   className='w-16 md:w-24 bg-blue-700 mt-2 '
   width={64}
   height={64}
   />
    <Image 
   src={hero}
   alt='none'
   className='w-16 md:w-24 bg-blue-700 mt-2 '
   width={64}
   height={64}
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
