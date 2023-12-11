import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Gow13 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

  const navigate = useNavigate();

  const handlePrevious = () => {

      navigate('/gow12');
  
  };

  const handleNext = () => {

      navigate('/gow14');
  
  };

  return (

    <div className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>A Path to Jotunheim</h1>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
    <h3 className='text-white font-mono text-2xl'> This guide will refrain from story spoilers whenever possible, but may indicate possible spoilers in boss fights or other encounters - proceed at your own risk. </h3>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Show Tyr’s Key Plans to Brok</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>With the real secret of Tyr revealed, you may have a new option now that the other door to Jotunheim is closed. You’ll need a key to enter another secret vault in Tyr’s Temple, but first you need to speak to the Dwarves.</p>
    <p className='text-white text-xl mt-10 mb-10'>Head through the next chamber to find a lift in the far corner to take back down to the temple. Since the door back to Helheim isn’t working, go to the World Tree and set a course back for Midgard. At this point you’ll learn some very interesting tidbits about Baldur, but more on that later. For now, head outside and go speak to Brok at the forge.</p>
    <p className='text-white text-xl mt-10 mb-10'>With a little unexpected help, Tyr’s Key will be successfully forged for you, and the path awaits you just below the temple. Now that you’ve started finding Ciphers of Niflheim, and broken friendships have been amended, new armor and upgrades await you at the forge -so be sure to take a look before heading off!</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-yellow-700 rounded-lg'>

    <p className='text-white font-mono text-2xl'>Note:</p>
    <p className='text-white text-xl mt-2 mb-2'>As you head out down and around Tyr’s Temple, you can spot the corpse of Baldur’s dragon off in the distance under the World Serpent. When you get the chance, take a boat to the Forgotten Caverns and climb up to the top and look near the body of the dragon to find a Dragon Tear buried near him.</p>

    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>As you descend down to the outer ring of Tyr’s Temple, sprint around to the Northwest side facing Asgard Tower to find a Legendary Chest surrounded by Hel Bramble. Break it apart to open the chest and receive Weightless War Handles - Rare Blades Pommels for your Blades of Chaos.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Head to the lower outer ring around Tyr’s Temple, and look for the entrance to the vault that can be found on the East side facing the Alfheim tower. With the key in hand, approach the mysterious door and enter to the hidden chamber within.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Explore Tyr’s Hidden Chamber</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>As you enter the long forgotten chamber encrusted with barnacles, head up the path to a light crystal, and shoot it with Light Arrows to form a path. Here you’ll find yourself in a mirrored room of the Realm Travel Room, only the floor has now become the ceiling. Above you, look for the different realm doors, and keep heading around the room until you spot a glowing orb above - similar magic to one Tyr hid the Black Rune behind.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you watch, the giant upside down Jotunheim door will open, as will two smaller doors on either side that are at your level. Enter one of the doorways and cross the small bridges of light across the gap to the other side. Look along the passage at the various tapestries before finding a way back to the Jotunheim Door on the left.</p>
    <p className='text-white text-xl mt-10 mb-10'>Inside the Hall of Tyr, there are two giant statues holding chains that connect to the Jotunheim door. Pass by the sand bowl to the foot of the upside door and note the Rune for Jotunheim.</p>
    <p className='text-white text-xl mt-10 mb-10'>Interact below the rune to find that the entire temple is on an axle - and its possible to flip the entire temple if you can break the chains that hold it in place.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Break the Chains</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Stepping back, the two giant statues will move positions to reveal runes across their body, and the sand bowl will become active. After reading the riddle, have Atreus inspect each of the statues to reveal the writings. This will turn the bowl into a lever that allows you to descend into the bowels of the temple where the chains are linked.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Turn around from the lift to find a Jotnar Shrine that Atreus can translate to learn about Bergelmir.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Take a look out the balcony at the underside of the temple and the roots of the World Tree, and further beyond where the chains link. You have two paths to travel - left and right. Going right leads to a hall of traps that include spiky blocks that will slam down from above.</p>
    <p className='text-white text-xl mt-10 mb-10'>Freeze the first block when it's down, so you can freeze the second block when it's above.</p>
    <p className='text-white text-xl mt-10 mb-10'>Then, wait for the first block to rise to get through to the second (safety, while your axe is there), and wait for the third to rise to dash beneath it.</p>
    <p className='text-white text-xl mt-10 mb-10'>In the chamber beyond you’ll find a ritual room of sorts, with a Coffin in the corner that holds Bracers of the World Serpent and Hardened Svartalfheim Steel.</p>
    <p className='text-white text-xl mt-10 mb-10'>Look nearby to spot a piece of Shatter Crystal you can grab, and then look at the traps in the hall beyond to find that the spiky blocks don’t rise far enough up to get under. Thankfully, World Tree Sap has been spread on the floor here - toss the shatter crystal and have Atreus detonate it. This will let the first spiky block fall into the ground, allowing you to climb onto it when it raises up.</p>
    <p className='text-white text-xl mt-10 mb-10'>However things, get a little more tricky when you realize the next block has spikes above it as well, as does the third. This means that the second the second block lowers and the third rises up, you’ll need to sprint across them, and quickly dodge roll forward when you hit the ground to escape the deathtrap into the chamber with the first chain.</p>
     
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>In the room with the chains you need to break, look along the right wall for some Rune Reads that Atreus can translate: Leave Them in Peace.</p>

    </div>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Favor - The Realm of Fog:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Next to the Rune Reads, look for a Cipher Chest that holds another key to the Niflheim Cipher and part of the Favor: The Realm of Fog.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Now that you’ve explored the chamber, head to the balcony and pull the chains apart. However, as you admire your handiwork, two Realm Tears will appear bringing two angry Travelers, and a trap will emerge from the center to spew fire.</p>
    <p className='text-white text-xl mt-10 mb-10'>Take this fight slow and careful - remember that the Traveler with a shield doesn’t move too fast, so bait the other into lunging at you and unloading your attacks on him.</p>
    <p className='text-white text-xl mt-10 mb-10'>You’ll also need to remember the positions of the rotating fire spouts - if things get too close, back off and wait for the Traveler to charge you again. Once the first is dead, you can then focus on the slower Traveler, and back off when the flame spouts get too close for comfort.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you kill them, be sure to quickly loot them for their trophies and armor shards - then turn your attention to the incoming swarm of Hel-Reavers from previous chamber.</p>
    <p className='text-white text-xl mt-10 mb-10'>Some of them will likely get caught in the spiky block traps, but the rest will charge forth to attack. Swap to your Blades of Chaos and mow them down, then look to the traps to freeze the closest block - and reflect projectiles from the two remaining Reavers in the far chamber, then cross once they are dead.</p>
    <p className='text-white text-xl mt-10 mb-10'>Back in the ritual room, another fire spout trap will appear in the middle as more Hel-Reavers start crawling out of the woodwork. The spouts can hurt them as well as it can hurt you - so be mindful when dodging around, and make use of the Spear of Chaos to hit foes from the other side of the spouts, or use Elemental Slash to hit the Reavers that hide behind ice barriers.</p>
    <p className='text-white text-xl mt-10 mb-10'>Eventually two Hel-Vikens will emerge, and you’ll need to be wary of dodging around their attacks and not accidentally roll into a fire spout. Once all the Hel-Reavers are gone, the trap will stop spewing fire, and you can return to the lift chamber by freezing the closest spiky block and sprinting across.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now it’s time to enter the opposite hall filled with traps - this time, spinning saw blades!</p>
    <p className='text-white text-xl mt-10 mb-10'>The amount of blades spaced out means it’s impossible to run through currently, so freeze the closest saw blade and wait for the one behind it to space to the opposite side before stopping the freeze.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now freeze the second saw blade and wait for the first one to sync up behind it before unfreezing it, and you’ll slowly spot more and more blades to freeze and unfreeze when they all align - by the end most of them will be right behind each other, letting you sprint along to one side to avoid them.</p>
    <p className='text-white text-xl mt-10 mb-10'>In the next chamber, a stone tomb on the left holds one of two Winds of Hel - while the hall past it has a stationary saw blade with a receptacle for the Winds of Hel, and another to the right. Place the Winds in receptacle on the right first, and it will start rotating the blade. Wait until it is in a top corner to take out the Winds and place them in the blade itself - causing it to retract back and forth.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Pull out the Winds of Hel when the saw blade is retracted to one corner to keep it that way, and return it to the stone tomb in the previous chamber.</p>
    <p className='text-white text-xl mt-2 mb-2'>Now cross past the blade to find another with Winds in it, and return that to the stone slab as well to open up a Legendary Chest that holds Hyperion Grapple - a Heavy Runic Attack for the Blades of Chaos.</p>
    
    </div>
    
    <p className='text-white text-xl mt-10 mb-10'>Return the Winds of Hel to the set of three saw blades to note that one on the right does not move.</p>
    <p className='text-white text-xl mt-10 mb-10'>Grab the Winds from the top saw blade as it retracts up, and place it in the saw blade on the right so that it moves in time with the one on the left to create a brief opening to run through.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>The last piece of lore down here is located in this chamber along with the chains you seek, have Atreus translate the Rune Reads to finish the sentence started in the opposite room: Good Gods?</p>

    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Favor - The Realm of Fog:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Also in the room with the lore and the chain is another of the Cipher Chests that carries a piece of the Niflheim Cipher, needed for the Favor: The Realm of Fog.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Now that you’ve made it to the last chain needed to be broken, toss it aside and get ready for another incursion of enemies.</p>
    <p className='text-white text-xl mt-10 mb-10'>This time it’s Draugr, so swap to your Leviathan Axe and tear them to pieces, hanging back to throw your axe when the fire spouts from the central trap gets in the way.</p>
    <p className='text-white text-xl mt-10 mb-10'>When you start hearing roaring, turn your attention to the balcony where the chain was to spy an incoming Ogre.</p>
    <p className='text-white text-xl mt-10 mb-10'>Rush over and get behind him and rack up the stun damage with help from Atreus to get on top of the Ogre and beat up the Draugr while lighting the Ogre on fire to finish it off.</p>
    <p className='text-white text-xl mt-10 mb-10'>The trap-filled hall back the way you came will have changed a bit to make it easier to cross - but get ready to fight when you enter the room before, as another fire spout will emerge and several Heavy Draugr will come to fight.</p>
    <p className='text-white text-xl mt-10 mb-10'>Feel free to hang back and backpedal out of their reach while tossing your axe and having Atreus weaken them, then dash in for the kill when you’re sure the fire spouts can’t hit you.</p>
  
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Flip the Temple</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>With both chains gone, return to the central room and take the lift back up to the upper level. Now you can grab the edge of the inner temple and pull it high enough to send the thing spinning on an axis to flip the entire thing upside down!</p>
    <p className='text-white text-xl mt-10 mb-10'>Before you climb out of here, look back to find a large boat model has descended from the ceiling above the lift. There’s a small Light Crystal in the middle of the boat - and hitting it will illuminate runes on the floor around the lift.</p>
    <p className='text-white text-xl mt-10 mb-10'>You can align these ghostly images with the runes engraved on the floor by hitting the sides of the boat with your axe to spin it until they all match up.</p>
    <p className='text-white text-xl mt-10 mb-10'>This will lower two small doors on ledges to either side of the main entrance to the lift room, and you can climb up to find a Coffin on each ledge - besides Hardened Svartalfheim Steel, one holds the Pauldrons of the World Serpent, while the other carries the War Belt of the World Serpent.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now that the temple is flipped, you can climb up the side from the spot you flipped it from to enter the Room Between Realms to find it flipped now, with you looking at the world tree upside down below you.</p>
    <p className='text-white text-xl mt-10 mb-10'>On this platform, head to the other side and you’ll find the mysterious object you saw earlier - and unlock it to acquire the Unity Stone - an object that allows you travel the Realm Between Realms, no longer held back by staying on the path of the World Tree. Jotunheim is finally in reach!</p>
    <p className='text-white text-xl mt-10 mb-10'>Continue your journey in God of War with our walkthrough guide for the next chapter:</p>
   
    </div>
    

    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Escape From Helheim</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>Between the Realms</p>

    </button>

    </div>

    </div>

  )
}

export default Gow13