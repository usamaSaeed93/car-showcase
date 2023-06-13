'use client'
import React from 'react'
import { customButtonProps } from '.'
function CustomButton({title,styles,handleEvent}:customButtonProps) {
  return (
   <button
   disabled={false}
   className={styles}
   onClick={handleEvent}
   >
<span className='flex-1'>
{title}
</span>
   </button>
  )
}

export default CustomButton