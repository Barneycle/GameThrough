import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Botw11 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/botw10');
    
    };

    const handleNext = () => {

        navigate('/botw12');
    
    };

  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>
        
    <h1 className='text-5xl text-white font-mono p-10 text-center'>Vah Medoh Dungeon</h1>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Dungeon Map</h2>

    <p className='text-white text-xl mt-10 mb-10'>Once you start the dungeon, run ahead and you’ll see a glowing eye on the wall to the right. Shoot an arrow out to remove the malice. You want to make it across to the other side of the room. There are blocks in the center of the room and you can use Magnesis to push or pull some of them. Alternatively, you can use the wind geyser and paraglider over to the other side. Defeat the small guardian and activate the pedestal ahead.</p>
    <p className='text-white text-xl mt-10 mb-10'>The Map in this dungeon will allow you to tilt the Divine Beast. This will cause platforms and items to drift accordingly.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>1st Terminal</h2>

    <p className='text-white text-xl mt-10 mb-10'>In the main room drop to the bottom floor and head through the passage on the left side. You will see an eye all the way in the distance; use your bow and snipe at the eye. On the map, change the tilt of the dungeon to the top and it will cause a cart to move over to you. Step into the cart and choose the bottom tilt of the dungeon and the cart will move back to the other side.</p>
    <p className='text-white text-xl mt-10 mb-10'>Climb up the staircase here and place the Sheikah Slate onto the pedestal to activate the first terminal.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>2nd Terminal</h2>

    <p className='text-white text-xl mt-10 mb-10'>Pass through the door and look up to find a glowing eye. You want to get rid of this guy so he doesn’t bother you. Tilt the dungeon downward and you’ll see a large battering ram move against the wall next to the door you came out of. If you follow the rails to where this battering ram leads, there is a large glowing switch that needs to be pushed in. However, there are two gates that are blocking the pathway.</p>
    <p className='text-white text-xl mt-10 mb-10'>Just above the rail you will notice two windmills that are also on rails. The only way to lift the gates is to cause the windmills to spin. There is also a nearby switch on the ground, and if you strike it with your sword, a window will open, causing wind to blow in the direction of the opening. The wind will blow and if it hits the windmills, they will spin, causing the gates to open.</p>
    <p className='text-white text-xl mt-10 mb-10'>The trick here is that we need to hit the large switch with the battering ram with full force in order to press it all the way down. We want to start with the tilt of dungeon down, and then change the tilt up, so the battering ram moves all the way across the rails. However, this will also cause the second windmill to move, which will close the gate. In order to keep that windmill in place, use your Magnesis ability to hold it in place, allowing the battering ram to hit the switch. Run inside and activate the terminal.</p>
    <p className='text-white text-xl mt-10 mb-10'>Note: This is not the only way to solve this particular puzzle. Later in the dungeon you will find a large spherical ball and you can bring it over to this switch, avoiding having to use the battering ram.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>3rd Terminal</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Return to the main room and if you fall down, use the wind geyser to get back up. Looking towards the main room from the wind geyser, glance to the left and look at the ceiling. There is a glowing eye here, so nail it with an arrow. Just beneath the platform where the glowing eye is located is a wall that you can climb up. Tilt the dungeon up so that the nearby platform moves all the way to this side of the room. Step onto the platform and then tilt the dungeon down. You can toggle the tilt so the platform stops right in front of the wall. Climb up and up the treasure chest to get an Ancient Core.</p>
    <p className='text-white text-xl mt-10 mb-10'>From here use the Paraglider to glide through to the next room. There is some malice on the wall to the left and you can shoot the eye above it to get rid of the malice. There terminal is located on this higher ledge and there are a couple ways to reach it. You can climb the staircase on either side of the room and then tilt the room so that the platform with the pedestal is lower than you. Use the paraglider to glide over and activate the 3rd terminal.</p>
    <p className='text-white text-xl mt-10 mb-10'>In this same room you can tilt the dungeon up and glide over to the treasure chest that is above the door to get a Knight’s Claymore.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>4th Terminal</h2>

    <p className='text-white text-xl mt-10 mb-10'>In the same room as the previous terminal, you’ll see a small spherical hole where you can drop a round ball. Drop a round ball into the hole and as long as the dungeon is tilted up, the ball will role into the hole towards the boulder ahead. Blast the bomb to destroy the boulder.</p>
    <p className='text-white text-xl mt-10 mb-10'>Toss a second bomb into the hole and let it roll all the way to the end. Hit the switch that is right next to where you dropped the bomb and it will cause wind to blow through a window, blowing the bomb to the other side of the room. Detonate the bomb and it will blast through a wall, revealing a large spherical ball.</p>
    <p className='text-white text-xl mt-10 mb-10'>Tilt the dungeon downward and the ball will roll out. Use Magnesis to grab the ball and pull it on the route where you initially dropped the spherical ball. Tilt the dungeon up again and the ball will roll right into the switch, opening the door. Run ahead and activate the 4th terminal.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>5th Terminal</h2>

    <p className='text-white text-xl mt-10 mb-10'>Run to the main room in the center of the dungeon. From the wind geyser, drop down to the bottom floor and then head through the door on the left side. If you look across the gap, you can see the final terminal in the distance. Turn to the right and you’ll see a slightly higher ledge that is a bit closer. Tilt the dungeon up and then paraglide over to the final terminal.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Windblight Ganon</h2>

    <p className='text-white text-xl mt-10 mb-10'>Return to the start of the dungeon and ride the large wind geyser up to the top of the dungeon. Here you can access the main control panel to trigger the boss fight with the Scourge of Divine Beast Vah Medoh: Windblight Ganon.</p>
    <p className='text-white text-xl mt-10 mb-10'>For this battle, I recommend having a bunch of arrows, as they will come in handy for the second phase of this fight. Without arrows, the second part of the battle becomes a bit trickier. All in all this boss can be a bit challenging, but if you have some patience, you should be able to get by in a few tries.</p>
    <p className='text-white text-xl mt-10 mb-10'>During the first phase Windblight Ganon will appear at various parts of the arena and he will do one of two attacks. Either he’ll summon a small tornado, or he will shoot out four consecutive lasers from his arm cannon. During the tornado attack, there isn’t too much you can do, just run away and you’ll easily be able to dodge the attack.</p>
    <p className='text-white text-xl mt-10 mb-10'>When Windblight Ganon shoots his four lasers, he will stop for a moment and if he’s on the ground level, he is vulnerable. The lasers are quite easy to avoid as long as you stay on the move and don’t run directly into him. If Windblight Ganon is on the ground level, after he shoots his lasers, run up to him and deliver some attacks. If you are using a two-handed weapon, I recommend using faster, one-handed attacks to do multiple hits. After a few hits, you’ll want to run away as Windblight Ganon will attack. Just repeat this same exact process and use some patience.</p>
    <p className='text-white text-xl mt-10 mb-10'>After you hit Windblight Ganon enough times, he’ll drop to the ground and you can run over and deliver a series of attacks.</p>
    <p className='text-white text-xl mt-10 mb-10'>After half of his health is gone, Windblight Ganon will now begin to summon some satellites. When he performs his laser attack, the lasers will bounce off of the satellites and then come after you. It is a much more dangerous attack than before, but still nothing that you can’t just run away from. Windblight Ganon will still summon tornadoes and this time he’ll summon two at a time. Still, nothing you can’t just run away from.</p>
    <p className='text-white text-xl mt-10 mb-10'>While you can defeat the satellites with some arrows, they will eventually respawn. I would recommend just avoiding them, as they aren’t too much of a hassle as long as you stay on the move. Occasionally Windblight Ganon will spawn on the ground level and shoot arrows. You can run up to him and deliver sword slashes, just like before. However, that is a bit less frequent. A much safer strategy at this point is to simply use arrows. Whenever he is floating around, just deliver an arrow right at its eye for maximum damage. You can use the wind geysers and launch an aerial attack with your bow to get a better shot in.</p>
    <p className='text-white text-xl mt-10 mb-10'>When Windblight Ganon’s health is really low, he will resort to shooting a red laser at you, much like the Guardians. Don’t bother trying to block it, but instead, just hide behind a boulder. Keep at it until Windblight Ganon has been defeated.</p>

    <div className='mx-auto grid md:grid-cols-2 gap-8'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Rito Village</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>Captured Memories</p>

    </button>

    </div>

    </div>

    </motion.div>

  )

}

export default Botw11