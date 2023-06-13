'use client'
import React from 'react'
import logo from '../public/logo.svg'
import Image from 'next/image'
import CustomButton from './CustomButton'
const SignIn=()=>{

}
function Navbar() {
  return (
    <div className='flex justify-evenly align-middle '>
<Image 
src={logo}
alt='car-logo'
width={200}
className='p-10'
/>
<CustomButton title='Sign In' handleEvent={SignIn} styles='rounded-[30px] pr-10'/>
    </div>
  )
}

export default Navbar