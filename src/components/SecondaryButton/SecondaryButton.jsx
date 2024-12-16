import React from 'react'
import { ArrowRight } from 'lucide-react'

const SecondaryButton = ({label}) => {
  return (
    <button className='btn rounded-full flex gap-2 justify-center w-auto items-center'>
        {label}    
        <ArrowRight size={15} />
    </button> 
  )
}

export default SecondaryButton