import React from 'react'
import { Play } from 'lucide-react'

const MainPlayButton = ({label}) => {
  return (
    <button className='btn rounded-full flex gap-2 hover:btn-outline bg-neutral-100 w-auto items-center text-black justify-center'>
        {label}    
        <Play fill='black' size={15}/>
    </button> 
  )
}

export default MainPlayButton