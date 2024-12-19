import React from 'react'
import { Download } from 'lucide-react'

const DownloadButton = ({quality,type,link}) => {
  return (
    <a href={link} className='btn border-none rounded-full flex gap-2 hover:btn-outline bg-black w-auto items-center text-neutral-50 justify-center '>
        {quality + " " + type}
        <Download size={15} />
    </a>
  )
}

export default DownloadButton