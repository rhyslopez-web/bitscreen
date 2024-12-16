import React from 'react'
import { Play } from 'lucide-react'

const MainPlayButton = ({label}) => {
  return (
    <button className='btn rounded-full flex gap-3 btn-primary w-auto items-center'>
        {label}    
        <Play/>
    </button> 
  )
}

export default MainPlayButton