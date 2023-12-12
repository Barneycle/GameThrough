import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Gowr15 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/gowr14');
    
    };

    const handleNext = () => {

        navigate('/gowr16');
    
    };

  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>Hunting for Solace</h1>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>

    <p className='text-white font-mono text-2xl'>SPOILER WARNING:</p>
    <p className='text-white font-mono text-2xl'>This walkthrough will include story spoilers for the first quest, Surviving Fimbulwinter, so proceed with caution.</p>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Hunt with Atreus</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Arriving back home in Midgard, follow Atreus down to the wolf's den and squeeze through the crack in the wall as you head in the direction of deer.</p>
    <p className='text-white text-xl mt-10 mb-10'>On the other side, exit the cave, and Atreus will spot some tracks in the snow that lead south, past the fallen tree trunk.</p>
    <p className='text-white text-xl mt-10 mb-10'>Climbing beneath the trunk, continue following Atreus further south, where you’ll soon come across a large deer in the distance when jumping over a large gap.</p>
    <p className='text-white text-xl mt-10 mb-10'>Following the short cutscene, you’ll now be playing as Atreus. Aiming the bow for the deer’s heart, pull back (L2) and launch your shot.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before you can let go, Kratos will stop Atreus, informing him that they cannot escape their problems and convincing him to seek out Sindri.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find Sindri</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Enough running; it’s time to seek out Sindri and ensure that he’s okay following Brok’s death. Playing as Kratos, follow Atreus across the gap and return to the wolf’s den, where you’ll have to prep the sled. With the wolves ready, open the gate ahead and climb onto the sled, where you’ll head to Tyr’s temple at the Lake of Nine.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon reaching the lake, head all the way east, where you'll find a lift that'll take you to the bridge that leads to Tyr's temple.</p>
    <p className='text-white text-xl mt-10 mb-10'>Reaching the top of the bridge – pick up the Hacksilver pouch opposite the lift – travel west until you reach the workshop inside the main temple building. Along the way, loot the two Hacksilver chests that can be found just to your left as you climb down the stairs upon exiting the lift and just to the right of the temple door.</p>
    <p className='text-white text-xl mt-10 mb-10'>Failing to console Sindri over Brok’s death, it’s time to return to Sindri’s House and prepare for war.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return Home and Prepare for War</h2>
   
    <p className='text-white text-xl mt-10 mb-10'>Following the cutscene, return to your sled. Following the waypoint marker, head to the nearest Mystic Gateway and return to Sindri’s House.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon entering the house, you’ll enter a cutscene that sees Freya making a plan to unite the realms, as the group will need a large army should they wish to take down Asgard and Odin. Once the cutscene ends, head outside and use the Mystic Gateway to travel to Muspelheim as you seek out Surtr and his wife, Simara, to create a giant Asgard-destroying monster.</p>
    
    </div>
    
    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Unlocking the Mask</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>The Summoning</p>

    </button>

    </div>

    </motion.div>

  )
}

export default Gowr15