import React from 'react'
import { ArrowRight } from 'lucide-react'

const SecondaryButton = ({label}) => {
  return (
    <button className='btn btn-outline rounded-full flex gap-3 btn-secondary w-auto items-center'>
        {label}    
        <ArrowRight/>
    </button> 
  )
}

export default SecondaryButton