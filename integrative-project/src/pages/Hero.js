import React from 'react'
import Typed from 'react-typed'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate();

  const handleClick = () => {

    navigate('/login');

};

  return (

    <div className='text-white'>

        <div className='max-w-[2480px] mt-[-100px] w-full h-screen mx-auto text-center flex flex-col justify-center '>

            <h1 className='text-[#00df9a] font-mono font-bold text-7xl p-2 md:text-9xl sm:text-6xl md:py-6' >Welcome to GameThrough!</h1>
            <p className='md:text-7xl sm:text-6xl text-3xl font-mono md:py-6'>Your Gateway to Gaming Adventure</p>
            
            <div className='flex justify-center items-center '>

              <p className='md:text-5xl sm:text-4xl text-xl font-mono py-4'>This website is all about</p>
              <Typed className='md:text-5xl sm:text-4xl text-xl font-mono pl-4' strings={['video game walkthroughs']} typeSpeed={120} backSpeed={140} loop/>

            </div>

            <button onClick={handleClick} className='bg-[#00df9a] w-[200px] rounded-md font-mono my-6 mx-auto py-3 text-black'>Get Started</button>

        </div>

    </div>

  )

}

export default Hero