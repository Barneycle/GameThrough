import React from 'react'
import alvin from '../assets/alvin.jpg'
import mac from '../assets/mac.jpg'
import irish from '../assets/irish.jpg'
import alec from '../assets/alec.jpg'

const About = () => {

    return (

        <div className='w-full h-screen py-[10rem] px-4 bg-[#36454F]'>
            
        <div className='max-w-[2480px] mx-auto grid md:grid-cols-4 gap-8'>
    
            <div className='w-full shadow-xl bg-gray-900 flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
    
                <img className='mx-auto mt-[-3rem] bg-transparent rounded-lg' src={irish} alt="/" />
                <h2 className='text-2xl font-mono text-center py-8 text-[#00df9a]'>Irish Kim Avila - Front-End Developer</h2>
                <p className='text-center text-xl text-white font-mono py-3'>Irish Kim Avila is observant and ready to learn new things.</p>
    
            </div>
    
            <div className='w-full shadow-xl bg-gray-900 flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
    
                <img className='mx-auto mt-[-3rem] bg-transparent rounded-lg' src={alvin} alt="/" />
                <h2 className='text-2xl font-mono text-center py-8 text-[#00df9a]'>Alvin Pulla - Designer</h2>
                <p className='text-center text-xl text-white font-mono py-3'>Alvin Pulla is an open and honest person who doesn’t believe in misleading other people and tries to be fair in everything I do.</p>
    
            </div>
    
            <div className='w-full shadow-xl bg-gray-900 flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
    
                <img className='mx-auto mt-[-3rem] bg-transparent rounded-lg' src={mac} alt="/" />
                <h2 className='text-2xl font-mono text-center py-8 text-[#00df9a]'>Mac John Frey Nebran - Quality Assurance</h2>
                <p className='text-center text-xl text-white font-mono py-3'>Mac John Frey Nebran is an ambitious individual driven by a passion for continuous learning and growth. Committed to turning dreams into reality, likes to thrive on challenges and believe in the power of kindness in every pursuit.</p>
    
            </div>

            <div className='w-full shadow-xl bg-gray-900 flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
    
                <img className='mx-auto mt-[-3rem] bg-transparent rounded-lg' src={alec} alt="/" />
                <h2 className='text-2xl font-mono text-center py-8 text-[#00df9a]'>Alec Campana - Full-Stack Developer</h2>
                <p className='text-center text-xl text-white font-mono py-3'>Professional over-thinker, aspiring champion of procrastination, and expert in the delicate dance of starting a task right before the deadline – because nothing says 'challenge accepted' like racing against the clock. I have a talent for turning simple decisions into complex life debates and can effortlessly transform a five-minute task into a three-hour adventure.</p>
    
            </div>
    
        </div>
    
        </div>
      )
    
}

export default About