import React from 'react'
import logo from '../public/logo.svg'
import Image from 'next/image'
function Navbar() {
  return (
    <div className='flex justify-start align-middle h-10'>
<Image 
src={logo}
alt='car-logo'
/>
    </div>
  )
}

export default Navbar