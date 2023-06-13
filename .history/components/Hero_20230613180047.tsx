import React from 'react'
import CustomButton from './CustomButton'
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
    </div>
  )
}
