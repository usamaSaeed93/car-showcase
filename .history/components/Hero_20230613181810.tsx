'use client'
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'
import hero_Image from '../public/hero.png'
export default function Hero() {
    const handleEvent=()=>{

    }
  return (
    <div className='hero'>
<div className="flex-1 pt-36 padding-x">
    <h1 className='hero__title'>
Find Book or Rent a car directly - Quickly and Easily
    </h1>
    <p className='hero__subtitle'>
        Streamline your car rental experience with our effortless booking process.
    </p>
    <CustomButton title="Click" styles="flex" handleEvent={handleEvent}/>
</div>
<div className="hero__image-container">
    <div className="hero__image">
<Image 
src={hero_Image}
alt='hero_image'
/>
<div className="hero__image-overlay" />


    </div>
</div>
    </div>
  )
}
