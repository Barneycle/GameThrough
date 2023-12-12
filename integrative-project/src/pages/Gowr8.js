import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const GOWR8 = () => {

    useEffect(() => {

        window.scrollTo(0, 0);
      
      }, []);

    const navigate = useNavigate();
  
      const handlePrevious = () => {
  
          navigate('/gowr7');
      
      };
  
      const handleNext = () => {
  
          navigate('/gowr9');
      
      };
  
    return (
  
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>
  
        <h1 className='text-5xl text-white font-mono p-10 text-center'>Into the Fire</h1>

        <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>
    
        <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
        <h3 className='text-white font-mono text-2xl'> This walkthrough will include story spoilers for the third quest, Old Friends, so proceed with caution.  </h3>
    
        </div>

        <div className='p-20 items-center justify-between'>

        <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Search for the Mask Fragment with Thor</h2>

        <p className='text-white text-xl mt-10 mb-10'>Arriving in Muspelheim, press Square to equip the Mask, which is attuned to Atreus’ goal and will radiate light when he is following the correct path. With the Mask equipped, turn toward the rumble to your left, which Thor will clear to create a way forward.  </p>

        <p className='text-white text-xl mt-10 mb-10'>Following the newly cleared path, you’ll soon encounter a group of Draugr – take them down with Ingrid’s help by pressing Square to direct her attacks or holding Square for a flurry of slashes.  </p>
        <p className='text-white text-xl mt-10 mb-10'> Once the area is clear, equip the Mask (Left D-Pad) and walk toward the end of the path, where Atreus will suggest climbing the ledge above – instead of climbing, Thor will fly Atreus up the ledge. </p>
        <p className='text-white text-xl mt-10 mb-10'> Here, you’ll encounter several Draugr, which you’ll need to defeat with Thor’s help. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'> Be sure to make use of Ingrid, as when timed right, she can interrupt an incoming enemy’s attack, which is incredibly helpful when facing multiple enemies that happen to be targeting you.</p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>After the encounter, let's pick up some resources before equipping the Mask.  </p>
    <p className='text-white text-xl mt-10 mb-10'> To get started, loot the Red Coffin found toward the back of the area; this chest will contain Ydalir Timber, Stonewood, and some Hacksilver. Furthermore, on the opposite side of the lava waterfall, you’ll find a small gap beneath the wall, where you’ll find a Healthstone, a Hacksilver chest, and a secret path that Atreus does not possess the ability to access.</p>
    <p className='text-white text-xl mt-10 mb-10'> Ready to continue, equip the Mask and have Thor clear the rubble left of the lava waterfall. On the other side, you’ll find a Nornir letter to your left, past the burning ground. You’ll need to return to this area later with Kratos to unlock it. </p>
    <p className='text-white text-xl mt-10 mb-10'> As you head up the mountain, shoot down the Resource Bucket to receive some Dwarven Steel. Then, continuing forward, shimmying across the ledge beneath the lava flow. On the other side, you’ll enter a short cutscene with Thor before you’re interrupted by a group of Draugr and Cursed Tatzelwurms. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'> When encountering shielded Draugr, interrupt their blue-ringed charge attacks with a Shield Strike to stun them temporarily before they can unleash a powerful attack. Another handy tip is to ensure you’re utilizing the lava pits found throughout Muspelheim, as pushing your enemies into them will see them disintegrate.</p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once clear, loot the Hacksilver and Resource Buckets hanging from the igneous rocks above the fire pits and pick up any Healthstones scattered about the area. With everything collected, equip the Mask and have it lead you between the two sizeable igneous rock pillars by the cliff's edge. </p>
    <p className='text-white text-xl mt-10 mb-10'> Suggesting you need to head down, Thor will ask Atreus to look at something by the ledge you shimmied across earlier. Then, having found a rather interesting way down, loot the Hacksilver pouch beside the skeleton to your left. Then, pick up the nearby Healthstone and continue up the small ledge, where Thor will take you further down the cliff. </p>
    <p className='text-white text-xl mt-10 mb-10'> Here, you’ll encounter even more Draugr that you need to defeat. Not too far into the fight, three Ogres will enter the battle. While Thor will deal most of the damage to them, you’ll still need to be wary of their powerful, unblockable slam and rock toss attacks, as they can deal devastating damage when caught off guard. </p>
    <p className='text-white text-xl mt-10 mb-10'> Once you’ve defeated all the creatures, be sure to loot their rewards to receive some Hacksilver pouches, Ydalir Timber, and the Runic Summon, Falcon’s Dive. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Investigate Surtr’s Shrine</h2>

    <p className='text-white text-xl mt-10 mb-10'>With Thor taking on the Muspelheim challenges above, it’s time to investigate the Surtr’s Shrine, so head through the gap beneath the old gateway. On the other side, loot the Healthstone from the fallen Draugr to your right, and continue toward the shrine at the end of the path by climbing up the wall next to the gap you can't cross.  </p>
    <p className='text-white text-xl mt-10 mb-10'>As you climb up the rock face, loot the small enclosure you’ll find along the way before climbing down to the ground – Atreus will reference this as an area that he and Kratos had explored during the first game.  </p>
    <p className='text-white text-xl mt-10 mb-10'> When reaching the other side of the gap, continue toward the door, where you’ll encounter a group of Wisps, which are being summoned by the glowing pink obelisk found within a cave to your left – destroy it with the help of Ingrid. Inside this cave, you’ll find a Hacksilver pouch next to a skeleton by the lava’s edge. </p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, loot the Hacksilver chest along the right wall before opening Sutr’s Shrine, where you’ll encounter a surprising guest as you learn more about the prophecy. After the cutscene, Return to the main path.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Upon climbing through the gap, you’ll encounter a large group of Draugr, Cursed Tatzelwurms, and Exploding Nightmares – you’ll need to defeat them without Thor’s help.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Throughout the encounter, utilize Ingrid's attacks at all possible moments, as it’s incredibly easy to get overwhelmed by the sheer number of enemies in the area. You’ll also want to move about as much as possible, as staying in one place for too long will get you poisoned by the Tatzelwurms or flame balled by a Draugr. </p>
    <p className='text-white text-xl mt-10 mb-10'> Thankfully, if you’re running low on health, you’ll find plenty of Healthstones scattered about the area, mainly around the outskirts.</p>
    <p className='text-white text-xl mt-10 mb-10'> Once you’ve dealt with the enemies, use the Mask (Left D-Pad) to find a path through the old ruined gates. With the way clear, continue up the mountain and use the Mask once again as you near the molten lava pit, where you’ll enter a very brief cutscene. When prompted, mash Circle to retrieve the Mask from the lava. </p>
    <p className='text-white text-xl mt-10 mb-10'>Having saved the Mask, Thor will return you to Odin, where you’ll reveal that a new phrase has appeared on the Mask.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Go Back to Atreus’ Quarters</h2>

    <p className='text-white text-xl mt-10 mb-10'>Agreeing to stay and help Odin translate the Mask, it’s time to head back to Atreus’ Quarters. Before doing so, loot the area around The Rift, where you’ll find a Legendary Chest and some Hacksilver Pouches and Chests before climbing up the stairs.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’re ready to continue, climb up the flight of stairs and open the door. Inside Odin’s Study, loot the two Hacksilver pouches you’ll find on the table and along the wall to your right, followed by the Hacksilver chest to your left.  </p>
    <p className='text-white text-xl mt-10 mb-10'>With everything collected, exit the Study and return to your room. Before doing so, you’ll have the opportunity to speak with Thrud in her room, as well as eavesdrop on a conversation between Thor and Sif that’s occurring behind the large double doors next to Atreus’ room.  </p>
    <p className='text-white text-xl mt-10 mb-10'>After listening to the conversation, return to your room. Here, you can upgrade your equipment via the wardrobe or continue the main story by interacting with the bed, where you’ll enter a cutscene that sees Kratos convincing Freya to help him find the Norns, concluding the mission.  </p>
     
        </div>

<div className='mx-auto grid md:grid-cols-2 gap-2'>

<button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

<div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
<p className='items-center mt-2 text-xl text-white'>The Runaway</p>

</button>

<button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

<div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
<p className='items-center mt-2 mb-2 text-xl text-white'>The Word of Fate</p>

</button>

</div>

</motion.div>
)
}


export default GOWR8