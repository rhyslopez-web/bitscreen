import React from 'react'
import Lottie from 'react-lottie';
import Loading from '../../lotties/Loading.json'

const LoadingScreen = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Loading,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

  return (
    <div className='h-screen flex justify-center items-center'>
      <Lottie 
	    options={defaultOptions}
        height={50}
        width={50}
      />
    </div>
  )
}

export default LoadingScreen