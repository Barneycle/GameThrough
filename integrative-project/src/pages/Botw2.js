import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Botw2 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

   const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/botw1');
    
    };

    const handleNext = () => {

        navigate('/botw3');
    
    };

  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>
        
    <h1 className='text-5xl text-white font-mono p-10 text-center'>Dueling Peaks</h1>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Dueling Peaks Tower</h2>

    <p className='text-white text-xl mt-10 mb-10'>Once you are ready to leave the Great Plateau, be sure your main quest objective is toggled as Seek Out Impa so that marker appears on the map. Run over to the east end of the Great Plateau or just warp over to Ja Baij Shrine. From there, use your newly acquired Paraglider to leap off of the Plateau, heading eastward.</p>
    <p className='text-white text-xl mt-10 mb-10'>Dueling Peaks is the massive rock structure to the east that you can see from a great distance. It’s a mountain with a split directly in the middle, allowing for a narrow valley to squeeze through. Right next to this pathway, there is the Dueling Peaks Tower and that is our next destination. If you like, when the tower is visible, activate the Sheikah Scope, move the cursor to directly on top of the tower, and assign a pin. This will help orient you, especially as the map is not yet revealed.</p>
    <p className='text-white text-xl mt-10 mb-10'>Along the path you will come across the Bosh Kala Shrine. You can tackle the shrine if you so choose (click the link to open a page with a mini-walkthrough), but definitely activate it so you can use it as a warp point in the future. Make your way eastward, crossing the Proxim Bridge. Continue making your way towards the massive rock structure in the distance. As you draw near you will see the Tower, located just north of the shallow river. Swim across, or use Cryonis to raise ice towers in the water which you can leap across, to reach the north side, but beware of the enemy Octoroks that are in the water. You can defeat them by deflecting a rock back with your shield. Be sure to pick up any Octo Balloons they drop, as this item is useful for solving puzzles. Dropping an Octo Balloon on something will lift even heavy objects into the air.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you draw near to the tower, swim on over and begin scaling it. These towers are rather tall and can be quite tedious to ascend. Use your stamina selectively. While jumping increases speed, you spend more stamina jumping than you do for climbing the same distance at your normal speed. Save jumping for when you know you’ll reach the next ledge without running out of stamina. When you reach the top, place the Sheikah Slate into the Pedestal to open up the beacon, revealing the map for this region.</p>
    <p className='text-white text-xl mt-10 mb-10'>Additionally, doing so will unlock the Sheikah Sensor. This feature will cause the Sheikah Slate to react whenever there is a shrine nearby that you have yet to visit. If you move in the direction where the reaction is strongest, you can usually find the Shrine, though some are more difficult to locate. For an overview of all shrines, use the Shrine Locations page.</p>
    <p className='text-white text-xl mt-10 mb-10'>It is recommended to complete as many shrines as you have the patience for. Feel free to get sidetracked and roam far and wide completing them, as they often contain additional rewards, not just Spirit Orbs. The main quest will wait for you!</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Dueling Peaks Stable</h2>

    <p className='text-white text-xl mt-10 mb-10'>Assuming you’re moving forward on the main quest, we want to head eastward through the Dueling Peaks’ valley. There is a river here, along with a pathway on the side of the river, so Paraglide over to that side. As you travel eastward, you’ll see that your Sheikah Sensor will vibrate, highlighting the nearby shrine that is on the higher ledge to the north. You can detour if you’d like and complete the Ree Dahee Shrine, but otherwise continue heading eastward.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you exit the valley, you’ll find another shrine just north of the river. This one however has spikes around it, blocking off the entrance. You can use your Cryonis ability on the water to create a pillar, and then jump over to the entrance of the Ha Dahamar Shrine. Complete the Shrine if you’d like, but otherwise, just use it as a warp location. Completing the shrine will clear the spikes around it, however you can run up the shrine along its backside to escape the area without taking damage if you do not complete it.</p>
    <p className='text-white text-xl mt-10 mb-10'>Head over to the Dueling Peaks Stable where you can talk with many of the characters. The depth of character interaction is deep in this game and they will often provide many extraneous background details to further your immersion into the world. For instance, wandering characters might be frightened by nearby monsters and reward you if you fight them off. Characters you have already met will have their name above their head when you get close; this helps easily identify characters you have not yet talked to. Also, characters with a quest available to you will have a red exclamation mark icon when you get close enough to them to show their name. Important and/or quest-related characters will often have a line or two of dialogue simply when you walk near them, to entice you to interact with them. And if you accidentally start a side quest you don’t intend to do right away, it will wait for you forever and you can do other things as much as you want. Ultimately, it’s strongly recommended to spend time talking to as many people as you enjoy talking to. Play the way you have the most fun!</p>
    <p className='text-white text-xl mt-10 mb-10'>There are a few optional things to complete in and around the stable; these can be completed at any time, do so as you wish. When you are satisfied, continue forward with the main quest, Seek Out Impa.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Kakariko Village</h2>

    <p className='text-white text-xl mt-10 mb-10'>The path heading northward is a bit of a curvy road, but it is fairly straightforward and there isn’t much to see. There is one optional quest to complete on the path, as described below. Continue on if you want to focus on the main quest.</p>
    <p className='text-white text-xl mt-10 mb-10'>Continue northward until you reach Kakariko Village. Once you arrive in town, you should again run around and talk with as many of the characters as you wish. There are many side-quests and goodies to grab here, though all are optional and listed below. </p>
    <p className='text-white text-xl mt-10 mb-10'>When you have side-tracked yourself as much as you can stand and you’re ready to progress, head towards the Seek Out Impa objective marker to find Impa’s house.</p>
    <p className='text-white text-xl mt-10 mb-10'>NOTE: Just opposite Impa’s House by the pond you will find a Goddess Statue. This is similar to the one found in the Temple of Time, and can be used to exchange Spirit Orbs obtained from Shrines for more hearts or stamina.</p>
    <p className='text-white text-xl mt-10 mb-10'>There are two guards blocking the pathway, but after talking to them, they will see your Sheikah Slate and let you pass. Climb up and enter the house here to meet Impa. Speak with Impa, who says much of what we just learned from the King on the Great Plateau. Impa will then guide you towards the direction of the Hateno Village.</p>
    <p className='text-white text-xl mt-10 mb-10'>At this point, even if you are primarily following the main quest, things really begin to open up as there are multiple primary objectives, which can be done in any order you like (or even skipped entirely). You can also partially complete an objective, go do something else, and come back later (or never finish it either). The freedom to play as you please in this game cannot be overstated. Therefore, do not consider this a linear walkthrough. If you prefer to head in a different direction, simply select the relevant chapter and have at it. Your Adventure Log will help you keep track of any Main Quests, Shrine Quests, or Side Quests you have located, including ones you have already completed.</p>
    <p className='text-white text-xl mt-10 mb-10'>For the purposes of our walkthrough, however, we recommend to head to Hateno Village as the next step. In our opinion, this is the closest, easiest, and most rewarding direction to head at this point.</p>
    
    <div className='mx-auto grid md:grid-cols-2 gap-8'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Great Plateau</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>Hateno Village</p>

    </button>

    </div>

    </div>

    </motion.div>

  )


}

export default Botw2