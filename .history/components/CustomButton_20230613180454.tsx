import React from 'react'
import { customButtonProps } from '.'
function CustomButton({title,styles,handleEvent}:customButtonProps) {
  return (
   <button
   disabled={false}
   className={styles}
   onClick={handleEvent}
   >

   </button>
  )
}

export default CustomButton