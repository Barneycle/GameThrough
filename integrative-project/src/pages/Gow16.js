import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const GOW16 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/gow15');
    
    };

    const handleNext = () => {

        navigate('/');
    
    };
  
    return (
  
      <div className='mx-auto h-screen max-w-[1240px]'>
  
      <h1 className='text-5xl text-white font-mono p-10 text-center'>Mother's Ashes</h1>
  
      <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center bg-red-700 rounded-lg p-2 md:p-4'>
  
      <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
      <h3 className='text-white font-mono text-2xl'> This guide will refrain from story spoilers whenever possible, but may indicate possible spoilers in boss fights or other encounters - proceed at your own risk. </h3>
  
      </div>
  
      <div className='p-20 items-center justify-between'>
  
      <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Open a Passage to Jotunheim</h2>

      <p className='text-white text-xl mt-10 mb-10'> After everything this adventure has thrown at you, finally - the path to Jotunheim and your journey’s end awaits you. From Thamur’s Corpse, use the Mystic Gateway to travel back to Brok’s Shop at Tyr’s Temple and enter the Realm Travel Room. </p>
      <p className='text-white text-xl mt-10 mb-10'>Set a course for Jotunheim and use Mimir’s head to complete the travel into the realm of the giants.  </p>
      <p className='text-white text-xl mt-10 mb-10'> Leaving Mimir behind, climb the steps to enter the mountain range known as the Giant’s Fingers - and make for the tallest peak. Inside the large chamber, have Atreus inspect the various statues and carvings to learn more about the giants. </p>
      <p className='text-white text-xl mt-10 mb-10'> A wall on the right as you enter includes the Rune Reads: The Dream of Midgard. </p>
      <p className='text-white text-xl mt-10 mb-10'> Further up is another Lore wall of Rune Reads: The Guardian Returns. As you head up to the exit, Atreus will reveal more murals that depict a very interesting revelation. </p>
      <p className='text-white text-xl mt-10 mb-10'> After that, it’s time to head to the peak, and enjoy the ending that follows. </p>
      <p className='text-white text-xl mt-10 mb-10'>Your main journey may be at an end, but the world still beckons with secrets and mysteries. Be sure to head back the way you came to Midgard and keep the adventure going by checking out other quests to embark on:  </p>
      <p className='text-white text-xl mt-10 mb-10'>  8 Corrupted Valkyries are imprisoned in both Midgard and the other realms - these locations at the Hidden Chambers of Odin will now be revealed on your map if you haven’t found them.   </p>
      <p className='text-white text-xl mt-10 mb-10'> Two explorable realms: Muspelheim and Niflheim, both offer challenging quests to defeat enemies under challenging circumstance, and can reward you with amazing gear.</p>
      <p className='text-white text-xl mt-10 mb-10'>Side Quests (Favors) from both the Dwarven Brothers and the Restless Spirits may still be active and in need of completing. </p>
      <p className='text-white text-xl mt-10 mb-10'> Hidden regions can be found in all corners of the Shores of Nine, and can hide new collectibles like Legendary Chests, Nornir Chests, and Odin's Ravens.</p>

      <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 bg-cyan-900 rounded-lg p-2 md:p-4'>
      
      <p className='text-white text-xl mt-2 mb-2'>Be sure to also complete The Journey Home by heading back to your house in the Wildwoods for a little secret ending! Don't forget to check out our God of War Ending Explained guide for more details. </p>
      
      </div>

      </div>
      
      <div className='mx-auto grid md:grid-cols-2 gap-2'>
  
      <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>
  
      <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
      <p className='items-center mt-2 text-xl text-white'>Jotunheim in Reach</p>
  
      </button>
  
      <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>
  
      <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
      <p className='items-center mt-2 mb-2 text-xl text-white'>Home</p>
  
      </button>
  
      </div>
  
      </div>
  
    )
  }
  
  export default GOW16