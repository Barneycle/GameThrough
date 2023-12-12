import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Gowr11 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/gowr10');
    
    };

    const handleNext = () => {

        navigate('/gowr12');
    
    };

  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>Unleashing Hel</h1>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
    <h3 className='text-white font-mono text-2xl'>This walkthrough will include story spoilers for the second quest, The Quest for Tyr, so proceed with caution.</h3>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find Odin in His Study</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Following the cutscene with Kratos, the scene will transition to Asgard, where Thrud will inform Atreus that Odin requests to see him in his office. So, before leaving your room, be sure to purchase any items or upgrades from the wardrobe. Then, once you’re ready, leave the room.</p>
    <p className='text-white text-xl mt-10 mb-10'>On your way to Odin’s Office, you’ll have the chance to explore Thor and Sif’s room, as well as eavesdrop on a conversation between Sif and Thrud when listening from outside her door. However, when reaching Odin’s Office, you’ll find it empty.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Check the Library</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>With Odin not in his office, head through the door at the back of the room and make your way down the set of stairs, where you’ll find Odin working at his desk.</p>
    <p className='text-white text-xl mt-10 mb-10'>When nearing Odin, you’ll enter a cutscene that sees him explaining his reasoning behind killing the Ymir and building his house in Asgard. After instructing Atreus and Thrud to search for the missing Mask fragment in Helheim, Heimdall will tag along, as he has his own mission to attend to in the region.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find the Final Mask Fragment</h2>
   
    <p className='text-white text-xl mt-10 mb-10'>Arriving in Helheim, it’s now time to find the final Mask Fragment that is hidden somewhere in Helheim. To get started, equip the Mask by pressing Left on the D-Pad, continue up the stairs, and then along the path – looting the Hacksilver chest you’ll find along the way.</p>
    <p className='text-white text-xl mt-10 mb-10'>Reaching an opening, you’ll encounter a small group of Hel-Walkers. Take them down with Thrud and Ingrid’s help.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once clear, loot the Resource pouch by the fallen soldier and continue over the pillar. From here, follow Thrud until you encounter another group of Hel-Reavers and Ice Nightmares that you'll need to take down.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon clearing the area, continue along the path and turn the crank on the left side of the door to open it. Once open, continue to follow Thrud forward. Before rounding the corner and heading down the set of stairs, be sure to pick up the Hacksilver pouch before continuing.</p>
    <p className='text-white text-xl mt-10 mb-10'>Reaching the Docks of Vadgelmir, head along the dock. Just before you reach the large structure at the end, you’ll find a Hacksilver pouch beside a fallen soldier.</p>
    <p className='text-white text-xl mt-10 mb-10'>When reaching the large structure, equip the Mask and head toward the steel door, where you'll learn the door is blocked. Then, return to the dock, where you’ll now need to defeat a wave of Hel-Walkers that will break through the crates lined along the wall above.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once defeated, have Thrud help you push the large crate over to the gap in the wall to create a path forward.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon reaching the ledge above, head left, where you’ll discover a Legendary Chest. This chest contains the Tap to Reveal.</p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, make your way along the platform until you reach the large structure ahead. When entering, shoot the Soundstone barrels along the left wall to find a Hacksilver Pouch, then proceed to clear the two Soundstone grates on either side of the door.</p>
    <p className='text-white text-xl mt-10 mb-10'>On the right side, you’ll find a latch holding a weight up – shoot it to drop the weight to the ground. Once the weight has fallen to the ground, head back to the initial gate you attempted to open earlier and climb up the newly dropped weight.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you near the gate at the back of the room, you’ll be ambushed by more Hel-Walkers and a Hel-Revenant – defeat them. Upon defeating the Hel-Revenant, you’ll be rewarded with Ydalir Timber and some Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before leaving the room, destroy the two Soundstone barrels that can be found on top of the crates in the room to find some Hacksilver pouches. Then, destroy the Soundstone barrel blocking the grate in the back right corner of the room. Once the grate is destroyed, you'll now have a way through the otherwise locked door from earlier.</p>
    <p className='text-white text-xl mt-10 mb-10'>After jumping down through the grate, loot the nearby Red Coffin to receive some Ydalir Timber, Stonewood, and Hacksilver. Then, continue following the path forward, taking out the Hel-Brood and Ice Nightmares you’ll meet along the way. Behind the stack of crates where you encountered the Nightmares, you’ll find a Hacksilver chest.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before climbing the stairs to the upper level, be sure to loot the Resource pouch found behind some nearby crates. Then, at the top of the stairs, have Thrud open the door. Unable to fully open it, shoot the latch on the other side – this will send another weight crashing through the floor.</p>
    <p className='text-white text-xl mt-10 mb-10'>Return along the path until you reach the weight. Upon climbing up to the floor above, you’ll encounter a group of Hel-Walkers, this time including two heavy Hel-Walkers. Again, you'll need to watch for their powerful, unblockable melee attacks, as getting caught off guard by these attacks could make things messy.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once defeated, pick up any rewards and turn the crank to open the door.</p>
    <p className='text-white text-xl mt-10 mb-10'>Learning that the way forward is blocked, look for the Soundstone grate on the ground, which is hidden behind a large stack of crates. Destroy the Soundstone and jump down to the floor below.</p>
    <p className='text-white text-xl mt-10 mb-10'>From here, continue along the dock and equip the Mask, which will lead you to a large crate. Failing to push the crate forward, return to the crate you just jumped down and look across the gap; here, you’ll find a latch preventing Thrud from moving the box any further – shoot it.</p>
    <p className='text-white text-xl mt-10 mb-10'>Returning to Thrud, shoot the Soundstone grate on the roof and continue to climb to the upper floor.</p>
    <p className='text-white text-xl mt-10 mb-10'>Exit through the nearby door and proceed left, heading through the large arched doorway, where you’ll find a Red Coffin containing Ydalir Timber, Honed Metal, and some Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>After looting the coffin, have Thrud open the door on the opposite side of the room. Unable to open the door fully, shoot the latch that’ll appear between the gap just right of the door. Continue forward, taking out the Hel-Walkers and Hel-Brood that will attempt to stop you.</p>
    <p className='text-white text-xl mt-10 mb-10'>When reaching the room at the end of the path, loot the Hacksilver chest to your left and equip the Mask, revealing that the way forward is once again blocked. Needing to open the gate, Thrud will move a nearby crate, allowing Atreus access to the ledge above, where she hopes he'll find a way to lower the weight that's preventing them from moving forward.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you're ready, grapple up the ledge, and before jumping down the other side, loot the Hacksilver pouch you’ll find down the small path to your left.</p>
    <p className='text-white text-xl mt-10 mb-10'>After dropping down, follow the path left, where you’ll find a Legendary Chest. This chest contains the Wrath of the Wolf Runic Summon.</p>
    <p className='text-white text-xl mt-10 mb-10'>The backbone of many a playstyle in 2018, this ability summons three wolves that deal a good amount of damage as they pounce through enemies and across the battlefield.</p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, look toward the tower, where you’ll spot the weight hanging from a latch – destroy the latch to create a path through the locked gate. Before you can return to Thrud, though, you’ll be ambushed by a Level 3 and Level 4 Hel-Revenant. You’ll need to destroy these two Hel-Walkers with the help of Ingrid before you can continue. Be careful of the ice quake they'll send toward you, as this attack has a surprisingly long length.</p>
    <p className='text-white text-xl mt-10 mb-10'>Quick Tip: If you remain close to the Legendary Chest, the Revenants will become stuck behind the crates, making it much easier to defeat them, as you won't need to defend against their incoming attacks as often.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once the Revenants are defeated, continue up the chain and then take the path right through the doorway that was previously blocked by the weight. Before heading left, loot the Hacksilver chest along the wall to your right.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now, climb up the crates that lead left and jump across the gap. Continue to follow the path a short distance, where you'll discover a giant Hel-Hound is chained up.</p>
    <p className='text-white text-xl mt-10 mb-10'>Believing that the creature wants to be freed, head toward the left chain and help Thrud free him – you’ll need to mash Circle when prompted. Then, repeat this step for the next two chains.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon attempting to unlatch the third chain, the Hel-Hound will break free, escaping into Helheim. Once the wolf has escaped, head inside the chamber it was guarding – where you’ll find a dead end.</p>
 
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find a Way Back to Asgard</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Wrong about the mask fragment’s location; it’s time to make your way back to Asgard. Follow Thrud, where you’ll eventually enter a lengthy cutscene that sees Heimdall taunting the pair for their incompetence.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find Odin and Explain What Happened</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Returning the pair to Asgard, follow Heimdall up to Odin’s Study, where he’ll share the bad news regarding the mission.</p>
     
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return to Atreus’ Quarters</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>When asked to leave the office, return to your quarters – before doing so, be sure to eavesdrop on Thor and Sif in their room.</p>
    <p className='text-white text-xl mt-10 mb-10'>Following a short conversation with Ingrid in Atreus’s quarters, you’ll soon receive a knock on the door – answer it to enter a cutscene with Odin.</p>
     
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return to Sindri’s House</h2>
   
    <p className='text-white text-xl mt-10 mb-10'>Allowing Atreus to leave Asgard, you'll soon return to Midgard. From here, exit the house, and head toward the Mystic Gateway – before doing so, you’ll need to defeat three Hel-Reavers that attack.</p>
  
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Repel the Hel-Walkers</h2>
   
    <p className='text-white text-xl mt-10 mb-10'>Upon reaching Sindri’s house, you’ll find the Hel-Walkers have broken through to the realm – you'll need to help Freya, Sindri, and Brok take them down.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you progress through the fight, Freya will require your assistance. Head over to her and interact with the realm tear, where she’ll show you how to cast the spell needed to close the tear. When prompted, mash Circle.</p>
    <p className='text-white text-xl mt-10 mb-10'>Just as you’re about the close the realm tear, you'll be attacked by a Hel-Walker; however, before it can bite Atreus, Kratos will save him.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now playing as Kratos, you’ll unlock the Spartan Wrath, which sees a burst of wrath causing massive damage to just one enemy when activating Spartan Rage. With this new rage unlocked, fight your way through the Hel-Walkers as you attempt to distract them away from Freya and Atreus as they try to close the tear in the realm.</p>
    <p className='text-white text-xl mt-10 mb-10'>After a few moments of fighting, Freya and Atreus will close the rift (which is tied to a later side quest Favor), but not before causing a large explosion that will send Kratos flying through the air. The chapter will then conclude with a cutscene that sees Atreus reuniting with Kratos, revealing that the realm tears are indeed his doing as he freed Garm from his chains in Helheim.</p>
 
    </div>
    
    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Forging Destiny</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>Reunion</p>

    </button>

    </div>

    </motion.div>

  )
}

export default Gowr11