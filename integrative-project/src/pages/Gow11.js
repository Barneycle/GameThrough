import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Gow11 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

  const navigate = useNavigate();

  const handlePrevious = () => {

      navigate('/gow10');
  
  };

  const handleNext = () => {

      navigate('/gow12');
  
  };

  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>Return to the Summit</h1>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
    <h3 className='text-white font-mono text-2xl'> This guide will refrain from story spoilers whenever possible, but may indicate possible spoilers in boss fights or other encounters - proceed at your own risk. </h3>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Go Back Through the Tower</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Now that you have both the chisel AND the rune needed to initiate travel to Jotunheim, the only step remaining is to make it back to the summit. Unfortunately, Brok’s tinkering with the Mystic Gateways has conveniently left that place as the only one not working. However, all other portals are now open to you, which means you can backtrack or explore almost anywhere in Midgard by this point, including the Wildwoods, to finally uncover the Hidden Chamber of Odin, which hides one of Odin’s Ravens and a very challenging Realm Tear Encounter.</p>
    <p className='text-white text-xl mt-10 mb-10'>You should also take the time to upgrade or buy any new gear you need to - Brok should have a lot more stuff for you to look at now, including new armor for both Kratos and Atreus. By this point, Atreus should have his quiver fully upgraded and his Talon Bow at level 5 - if you have the Hacksilver to spare. Kratos should also have enough gear and upgrades to be at level 5 as well, as the enemies you’ll face - even when backtracking - will start to appear much tougher than before.</p>
    <p className='text-white text-xl mt-10 mb-10'>You should have also gotten enough XP by now to fully unlock all of Atreus’ Skills, and have most of Kratos’ skills for his axe and shield, as well as the newly unlocked skills for the Blades of Chaos. Any leftover experience can also fuel upgrades for your Runic Attacks and Summons.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now head across Tyr’s Bridge to the tunnel through the Vanaheim Tower (you can take on the Realm Tear Encounter here if you want to test your might against two level 6 Revenants).</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Journey Back to the Mountain</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Out in the Foothills, the skies will grow ominous as several enemies come crawling out to stop you, including an Ogre and Fierce Wulver. Be sure to kill the Nightmares before they can enhance the Wulver, and they should be easily overwhelmed if you’ve been upgrading your gear.</p>
    <p className='text-white text-xl mt-10 mb-10'>If you take the left path you’ll find that the skymover lift is not operational. Head past it and through the Scorn Poles to find one you can now disable by destroying the Hel Bramble, and open the now revealed Coffin to find the Sigil of the Weapon - a Legendary Enchantment!</p>
    <p className='text-white text-xl mt-10 mb-10'>Instead of taking the skymover up, instead, move up the main path up the hill - and you’ll find several Scorn Poles have been removed, and Reavers instead have taken up position to stop you.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>To the right of the path leading up is a stone tomb that has been sealed. If you look up to the left you can spot some of Hel Bramble blocking a receptacle, but it has no wind.</p>
    <p className='text-white text-xl mt-2 mb-2'>Head back down to the path to the area with some coffins to find the Winds of Hel trapped behind some Hel Bramble and cut it away, then carry it to the stone tomb to unlock it, letting you open a Legendary Chest.</p>
    <p className='text-white text-xl mt-2 mb-2'>It contains the Blast of Hephaestus - a Light Runic Attack for your Chaos Blades.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Note that you can also check out the path on the right to finally open the Hidden Chamber of Odin here, and take the lift down to find another imprisoned Valkyrie and one of Odin’s Ravens hiding in the rafters of the chamber next to the lift.</p>
    <p className='text-white text-xl mt-10 mb-10'>Back on the path to the mountain, climb up the ledge to where you fought your first Ogre, only to have Realm Tears open on all sides as Broods spill out to rush you. They might not be infused with frost like in Helheim, but they are still susceptible to the Blades of Chaos, and the rapid spinning attacks can help ward them off on all sides of you - just be wary of their leaping attacks and have Atreus use a Runic Summon to keep them off-balance and off your back.</p>
    <p className='text-white text-xl mt-10 mb-10'>After defeating the horde of Broods, head through the door to the path to the mountain entrance, and be sure to look right as you enter to finally clear out the Hel Bramble blocking a Coffin here for some Hardened Svartalfheim Steel. Watch your back, as several Nightmares will appear all around you as you advance - use your Blades of Chaos to grab and chuck them at each other until they all go down.</p>
    <p className='text-white text-xl mt-10 mb-10'>Continue up the path and look to the right of the zipline for a Hacksilver Chest blocked by Hel Bramble, then go up the narrow path towards the mountain entrance. A bolt of lightning will strike the path blocking off the long cliff path, forcing you to go right and up instead.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once inside the mountain, you’ll encounter a rather grim scene. Once it’s over you can head left to find a wall of sap that used to block your path - but no longer!</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lone Marker Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Behind the sap wall to the left of the golden statue inside The Mountain is a powered-down Lore Marker. You can take the crystal from in front of the statue to uncover the Lore Marker’s readings: Rites of Fjorgyn.</p>

    </div>
    
    <p className='text-white text-xl mt-10 mb-10'>Past the sap wall is a shortcut up to the lift room - but first you’ll have to deal with some nasty Tatzelwurms - watch for their poisonous spits and either pin them with a freezing axe toss, or reflect their poison back at them with your shield. Then you can take the chain up top and enter the room where you used the minecart lift to ascend upwards.</p>
    <p className='text-white text-xl mt-10 mb-10'>It’s fairly important to note at this point that Atreus’ attitude is changing to the point where he’ll start ignoring your orders, preferring to rush in and choke or stab enemies instead of firing when you command - or even using different arrow types. You can’t reign him in right now, so just be prepared to deal with enemies a bit differently.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find a New Path Up to the Summit</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>The minecart lift room is almost as you remember - but of course, some new monsters have taken to infesting the place since you were gone - including various Draugr, and some Poison Wolves. Atreus will likely charge in on the Draugr, so take out the Wolves before they can harass you and then assist the boy.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>A coffin and Artifact are found in this main lift room - blocked by World Tree Sap under a platform near the minecart tracks leading to the next room.</p>
    <p className='text-white text-xl mt-2 mb-2'>Shatter the embedded crystal to retrieve the next piece of the Bottoms Up Artifact set: the Tall Goblet, and open the Coffin to get Solid Svartalfheim Steel.</p>

    </div>
    
    <p className='text-white text-xl mt-10 mb-10'>You can check out the Hidden Chamber of Odin if you want and claim one of Odin’s Ravens by the imprisoned Valkyrie, otherwise head up the platform to the left of the chamber entrance to find a lift covered in Hel Bramble. You can take this up to a new area.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you exit the lift you’ll be ambushed by all sorts of Draugr, and Atreus will rush in to fight them on his own. Watch out for the Power Draugr and detonate them with a ranged axe when you see them light up, then rush in for the kill.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>To the right of the lift exit is a small hole you can have Atreus clamber up to, and he’ll drop a chain down that goes above the lift area. Here there is writing on a far door, and Atreus will translate the Rune Reads: Sleeping Monsters.</p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>After translating the message, a level 6 Ogre will burst out, flanked by Nightmares, and then by some Draugr. Thankfully Atreus will listen to your commands for this fight, and you can also look for a hanging red urn above to drop on the Ogre to seriously damage it and anything else nearby. Lay one the stun damage to get on top of it and smash the Draugr to pieces, then finish the monster yourself.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>In the room where the Ogre burst out of is a stone tomb sealed by the Winds of Hel. To find these winds, drop down to the level below and break apart some Hel Bramble in a room to the right to find a receptacle you can carry.</p>
    <p className='text-white text-xl mt-2 mb-2'>Place it near the base of the platform leading up to the upper level, then return to break through a wooden wall door near the Hel Bramble to find a Hacksilver Chest and the Winds of Hel.</p>
    <p className='text-white text-xl mt-2 mb-2'>Take the wind to the receptacle you placed, then climb up and grab them from up top before sprinting to the tomb to reveal a Legendary Chest that holds Hyperion Slam - a Heavy Runic Attack for the Blades of Chaos.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Return to the floor below and take the path left as it swings around the pit to where a corpse holds some Hacksilver, and a Draugr may show himself nearby.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Treasure Map Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Enter the next passage and look for a scroll on the ground and have Atreus read it to uncover the Treasure Map: The Last Place They’d Look.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>As Atreus forges ahead you’ll find yourself in the room below the tall area that led to the Summit. Atreus will charge forth and wake up a sleeping Ancient you’ll be forced to deal with it.</p>
    <p className='text-white text-xl mt-10 mb-10'>Wait for the chest to expose and toss your axe inside, and quickly follow up by throwing the bombs it expels back on it. Do this quickly, and it can be stunned twice in a row letting you finish it off quickly. Be sure to loot it for the crafting ingredients and a Rare Enchantment.</p>
    <p className='text-white text-xl mt-10 mb-10'>After killing the Ancient, be sure to look around this large area. There’s a font of Shatter Crystals near the central pulley system - you can toss one back around the corner at a Coffin encased in sap to get Hardened Svartalfheim Steel, as well as an Enchantment.</p>
    <p className='text-white text-xl mt-10 mb-10'>You can also throw the Shatter Crystal at a wall of red sap in the corner to find a minecart behind it.</p>
    <p className='text-white text-xl mt-10 mb-10'>Pull it out under a tall ledge, then check behind it for a dead body holding Hacksilver, then climb the minecart to reach the ledge where another Coffin waits holding a Mythic War Belt of Clarity and Hardened Svartalfheim Steel.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Head across to the opposite side of the large room and up a hall into a new area. Here you can find a table with a scroll on the floor that Atreus can read to translate the Scroll: Asgard Sealed.</p>

    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>The last of the Bottoms Up Artifacts is lying next to a body near where you found the scroll. Collect this Artifact: the simple cup, to complete your set.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>As you shimmy to the other side of the ledge, look right to find a Coffin holding the Mythic Pauldrons of Clarity and some Hardened Svartalfheim Steel, then move forward to meet up with Sindri again. This is a good time to sell the artifacts you’ve gained to pay for some upgrades or new buys - like Legendary Armor for Atreus.</p>
    
    </div>
    

    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>The Black Rune</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>Escape from Helheim</p>

    </button>

    </div>

    </motion.div>

  )
}

export default Gow11