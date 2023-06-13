import React from 'react'
import logo from '../public/logo.svg'
import Image from 'next/image'
import CustomButton from './CustomButton'
function Navbar() {
  return (
    <div className='flex justify-start align-middle '>
<Image 
src={logo}
alt='car-logo'
width={200}
className='p-10'
/>
<CustomButton />
    </div>
  )
}

export default Navbar