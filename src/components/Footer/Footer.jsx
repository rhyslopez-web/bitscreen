import React from 'react'

const Footer = () => {
  return (
    <footer className='p-10 bg-black flex flex-col lg:flex-row justify-between items-center gap-10'>
        <div className='flex flex-col justify-center items-center lg:items-start'>
            <p className='font-semibold text-white'>Sources</p>
            <ul>
                <li><a href='https://yts.mx/api'>Documentation</a></li>
            </ul>
        </div>
        
        <div className='text-center lg:text-end lg:w-1/4'>
            <span className>This website is developed strictly for educational & demonstration purposes. I do not own/upload any of the data.</span>
        </div>


    </footer>
  )
}

export default Footer