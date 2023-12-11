import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const GOW14 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/gow13');
    
    };

    const handleNext = () => {

        navigate('/gow15');
    
    };
  
    return (
  
      <div className='mx-auto h-screen max-w-[1240px]'>
  
      <h1 className='text-5xl text-white font-mono p-10 text-center'>Between the Realms</h1>
  
      <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>
  
      <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
      <h3 className='text-white font-mono text-2xl'> This guide will refrain from story spoilers whenever possible, but may indicate possible spoilers in boss fights or other encounters - proceed at your own risk. </h3>
  
      </div>
  
      <div className='p-20 items-center justify-between'>
  
      <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Explore the Realm Between Realms</h2>

      <p className='text-white text-xl mt-10 mb-10'> Despite the warnings you had to never stray off the path of the World Tree, it’s time to throw caution to the wind. </p>
      <p className='text-white text-xl mt-10 mb-10'> Before you do so, now is a good time to spend all the hard-earned Hacksilver you’ve gotten and upgrade or buy armor you need, and make sure Atreus’ has maxed out his bow and quiver. Once you’ve gotten everything in order, head to the nearest Mystic Gateway, and select the only option - the Realm Between Realms. </p>
      <p className='text-white text-xl mt-10 mb-10'> Now in the roots of the World Tree, head out onto the plateau that you were told never to interact with - until now. </p>
      <p className='text-white text-xl mt-10 mb-10'>You’ll arrive further down in the roots of the World Tree at the hidden Jotunheim Tower - cast out of the realms into the space between. Head down the lone path until you reach the tower, and enter to find what’s inside.  </p>
      <p className='text-white text-xl mt-10 mb-10'> It turns out there’s not much - yet. Health and Rage stones lie in the corner, and four sealed doors are all around - as well as a pedestal. Use the Unity Stone with the pedestal to activate the tower - and prepare for a gauntlet. </p>

      <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Survive the Gauntlet of the Realms</h2>

      <p className='text-white text-xl mt-10 mb-10'>As the Unity Stone activates the tower, you’ll have to survive an ambush as all four doors open to spew forth hordes of Broods. Quickly swap to your Blades of Chaos and start attacking in all directions and swing your blades to ward off foes in all directions - being ready to dodge if any leap toward you.  </p>
      <p className='text-white text-xl mt-10 mb-10'> Keep it up and keep pivoting to cover all angles until all the Broods are defeated and the doors close. </p>
      <p className='text-white text-xl mt-10 mb-10'>If you get blinded, hand back and shield up and be ready to dodge away from more projectiles as you keep Atreus firing at them. Watch out for two Nightmares that also enter and quickly get rid of them or use your Blades of Chaos to harpoon and fling them at the Lords. If you can get them on the ground, you may want to use Spartan Rage to keep them staggered while you dish out the damage.  </p>
      <p className='text-white text-xl mt-10 mb-10'> The next gauntlet comes straight from Hel - so swap back to the Blades of Chaos and prepare to take on several shielded Hel-Reavers followed by Hel-Vikens. </p>
      <p className='text-white text-xl mt-10 mb-10'>Use your Runic Attacks to spread chaos and flame and pierce through their shields, then duck around the Viken attacks and follow up with heavy hits from your blades until they fall.  </p>
      <p className='text-white text-xl mt-10 mb-10'> Be sure to heal up for the next fight, as the fires of Muspelheim will unleash not just an Ogre but a Troll as well. When Daudi Munr appears, try and rush the Ogre to stun him as fast as you are able, then set him to start punching the Troll to deal as much damage as you can before he falls. </p>
      <p className='text-white text-xl mt-10 mb-10'> Several Draugr will enter the fight at this time, so you’ll want to lure and clear them out while dodging the flame waves that the Troll summons. He can also leap great distances, so you’ll want to be constantly on the move and avoiding the flames he can ignite around the place. </p>
      <p className='text-white text-xl mt-10 mb-10'> Once he gets lower on health, have Atreus lay into him with Light Arrows to build up his stun fast and punch him in the face until you can finish him off for good. Be sure to loot the body to get the Wrath of Artemis - a Light Runic Attack for your Blades of Chaos. </p>
      <p className='text-white text-xl mt-10 mb-10'>With the gauntlet finally over, head outside to find yourself back in Midgard, with the Jotunheim tower finally intact and back to link all the realms together. Now you can finally activate the Realm Travel Room to link with the tower that stands before you.  </p>
      <p className='text-white text-xl mt-10 mb-10'>To continue following our complete God of War walkthrough, be sure to click the link below to jump to our next walkthrough guide.  </p>


</div>
      
      <div className='mx-auto grid md:grid-cols-2 gap-2'>
  
      <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>
  
      <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
      <p className='items-center mt-2 text-xl text-white'>A Path to Jotunheim</p>
  
      </button>
  
      <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>
  
      <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
      <p className='items-center mt-2 mb-2 text-xl text-white'>Jotunheim in Reach</p>
  
      </button>
  
      </div>
  
      </div>
  
    )
  }
  
  export default GOW14