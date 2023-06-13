import React from 'react'
import logo from '../public/logo.svg'
import Image from 'next/image'
function Navbar() {
  return (
    <div className='flex justify-start align-middle '>
<Image 
src={logo}
alt='car-logo'
width={200}
/>
    </div>
  )
}

export default Navbar