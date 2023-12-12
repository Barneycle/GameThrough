import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Gow3 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

  const navigate = useNavigate();

  const handlePrevious = () => {

      navigate('/gow2');
  
  };

  const handleNext = () => {

      navigate('/gow4');
  
  };

  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>A Realm Beyond</h1>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>

    <p className='text-white font-mono text-2xl'>SPOILER WARNING:</p>
    <p className='text-white font-mono text-2xl'> This guide will refrain from story spoilers whenever possible, but may indicate possible spoilers in boss fights or other encounters - proceed at your own risk. </p>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Follow the Witch</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>With the path up the mountain blocked for the moment, you need an alternative, and it may lie beyond the realm of Midgard. </p>
    <p className='text-white text-xl mt-10 mb-10'>First thing’s first - follow your ally back to Sindri’s skymover and watch it get fixed, allowing you to bypass trekking back down the Foothills to where Sindri’s Shop was. </p>
    <p className='text-white text-xl mt-10 mb-10'>Head to the door back through the cave and temple, and you’ll find that your friend has some tricks to get across gaps and shut down Scorn Poles...hopefully you’ll get some of that power for yourself soon. </p>
    <p className='text-white text-xl mt-10 mb-10'>As you exit the tower, you’ll learn more about the world - including what those crazy undead blue guys are called, and your friend will ask you to head down the stairs to your left toward the dock - and then turn right. </p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Realign the Bridge</h2>

    <p className='text-white text-xl mt-10 mb-10'> As the way forward is made for you, it's your job to fix up the damage to Tyr’s Temple. Look for a large broken and extended axle past the new bridge you crossed and put it back into place.  </p>
    <p className='text-white text-xl mt-10 mb-10'>You can now push the axle to move the entire temple island and bridge to point to a new tower. Keep pushing until the bridge points to the East, and then come back up top. </p>
    <p className='text-white text-xl mt-10 mb-10'>Now you can enter the temple (Brok seems to be taking a break and surely won’t mind) and a new bridge will be extended to the center of the temple. Atreus bow will soon be enchanted with the same ability to create these bridges - but only after you have received the Light of Alfheim in the next realm. </p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Travel to Alfheim</h2>

    <p className='text-white text-xl mt-10 mb-10'> Once through the next door, you’ll find yourself in the Realm Traversal Room. Follow your ally to the center where the roots of the World Tree surround a platform in a darkened room, and head around the back to inspect a pedestal. </p>
    <p className='text-white text-xl mt-10 mb-10'>As you watch, the platform will turn into a map of the Shore of Nine, showing the temple and the realm that the bridge leads to - the realm you wish to enter. Currently you’re pointed at Vanaheim, but Odin has prevented travel to this realm. Instead, turn the wheel to Alfheim. Once you select it, you’ll be given the Travel Rune needed to access this realm. Lock in your destination and the Bifrost will activate, focusing on the blue crystal that will send you to this new realm.</p>
    <p className='text-white text-xl mt-10 mb-10'>It may not look like you’ve gone anywhere - but looks can be deceiving, as the different realms are both alike and unlike. </p>
    <p className='text-white text-xl mt-10 mb-10'>As you exit the temple, you’ll see just how different things are. You can also spot the Light of Alfheim in the distance - but it appears to be fading, which can’t be good. Before your friend leaves, you’ll be warned that the Bifrost is out of juice, and must be replenished with the Light of Alfheim...but another warning is interrupted. You’re on your own now - best be cautious of the dangers ahead.</p>
    <p className='text-white text-xl mt-10 mb-10'>To continue following our complete God of War walkthrough, be sure to click the link below to jump to our next walkthrough guide. </p>

    </div>
    
    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Path to the Mountain</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>The Light of Alfheim</p>

    </button>

    </div>

    </motion.div>

  )
}

export default Gow3