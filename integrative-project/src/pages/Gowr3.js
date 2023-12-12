import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const GOWR3 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

    const navigate = useNavigate();
  
      const handlePrevious = () => {
  
          navigate('/gowr2');
      
      };
  
      const handleNext = () => {
  
          navigate('/gowr4');
      
      };
  
    return (
  
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>
  
      <h1 className='text-5xl text-white font-mono p-10 text-center'>Old Friends </h1>

      <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>
  
      <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
      <h3 className='text-white font-mono text-2xl'> This walkthrough will include story spoilers for the third quest, Old Friends, so proceed with caution.  </h3>
  
      </div>
  
      <div className='p-20 items-center justify-between'>
  
      <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Enter the Mystic Gateway</h2>

      <p className='text-white text-xl mt-10 mb-10'> Hoping that Freya will be willing to share her knowledge, make your way through the Mystic Gate as you return to Midgard. Upon entering Yggdrasil, follow the path until the gateway opens. </p>

      <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Speak to Jormungandr</h2>

      <p className='text-white text-xl mt-10 mb-10'> Reaching Shores of Nine, follow Sindri down the snow-covered path as he seeks out Jormungandr. When reaching a large ledge, jump down and look to your right to find a pouch of Hacksilver on the ground. </p>
      <p className='text-white text-xl mt-10 mb-10'>Following Sindri, you’ll eventually reach a large golden gate – be sure to loot the Hacksilver chest to your left. You’ll need to shoot the two Soundstone plates on the gate to proceed.  </p>
      <p className='text-white text-xl mt-10 mb-10'>Once the gate is open, continue following Sindri until you come across some ledges to your right – at the top, you’ll find a Red Coffin. To access the Red Coffin, you’ll need to explode the red vase that can be seen when standing towards the left side of the ore. This coffin will contain Rawhide, Beast Scraps, and some Hacksilver.  </p>
      <p className='text-white text-xl mt-10 mb-10'> Return to Sindri and jump across the gap, where you’ll find a Hacksilver bucket hanging from a wooden beam. A few meters ahead, you’ll also discover a wooden barrel along the left side of the path that you can explode with your Sonic Arrows – this will contain some Hacksilver. </p>
      <p className='text-white text-xl mt-10 mb-10'> Once you’ve looted the barrel, continue down the path – you’ll find a bucket of resources hanging above the ledge you jump down – until you reach an intersection. The way to the right will lead you to some Hacksilver and an uncrossable stone pillar – so you’ll have to return this later. </p>
      <p className='text-white text-xl mt-10 mb-10'>Return to the intersection and follow Sindri to the fallen statue nearby. You will need to use your Sonic Arrows to explode the large piece of metal that’s hanging above the ruins. Failing to clear the path, climb back up the ledge near the intersection and return to where you blew up the barrel earlier.  </p>
      <p className='text-white text-xl mt-10 mb-10'> When looking down at the ruins, you’ll spot some Soundstone attached to the rubble by Sindri – destroy it to clear the path. Then, return to Sindri and climb through the ruins until you reach the other side, where you’ll face a large group of Draugr. While playing as Atreus, you can fire unlimited standard arrows by pressing L2 + R1 and Sonic Arrows by pressing L2 + R2 – the longer you hold these shots, the more charge, and power they’ll gain. </p>

      <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'> Much like when you can control Atreus’ attacks as Kratos, you’ll now be able to command Sindri to toss an explosive bomb as backup.</p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>To defeat the Draugr, we recommend firing a charged Sonic Arrow shot at them and then unleashing several melee attacks while they're stunned by the sonic damage. This combination is very effective, and if you’re playing on standard difficulty, you should be able to take them down before they regain their movement.  </p>
    <p className='text-white text-xl mt-10 mb-10'> In addition, you’ll also need to be wary of their unblockable melee attacks (indicated by the red circle), so try to keep a distance when possible. Once you’ve cleared the area and picked up any loot, follow Sindri and interact with the nearby lift – which Sindri will quickly repair. </p>
    <p className='text-white text-xl mt-10 mb-10'>When reaching the top, continue forward, and you’ll enter a cutscene that sees Atreus calling for Jormungandr with his abilities.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Head Back to the Mystic Gateway</h2>

    <p className='text-white text-xl mt-10 mb-10'>Following your brief conversation with Jormungandr, open the nearby door and follow the prompts. Failing to do so, Sindri will offer to open the door. <p className='text-white text-xl mt-10 mb-10'> </p> </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Speak with Freya</h2>

    <p className='text-white text-xl mt-10 mb-10'><p className='text-white text-xl mt-10 mb-10'> </p> </p>
    <p className='text-white text-xl mt-10 mb-10'> Once the area is clear, shoot down the red vase hanging from the roof to clear the gold ore blocking access to another Red Coffin – this coffin will contain Forged Iron, Beast Scraps, and some Hacksilver. </p>
    <p className='text-white text-xl mt-10 mb-10'> To the left of the coffin, shoot the Soundstone plaque attached to the wooden beams blocking the path. Clearing a path, squeeze through the gap, and then jump down the ledge, where you’ll enter a short cutscene. </p>
    <p className='text-white text-xl mt-10 mb-10'>Refusing to go further, Sindri will stay to clean up his shop. To continue your journey to Freya, climb the ledge opposite his shop.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Once you reach the top, continue left and climb around the cliff face. When reaching the ledge below, look across the gap, where you’ll find a Draugr shooting fireballs in your direction – shoot the red pot to defeat it. </p>
    <p className='text-white text-xl mt-10 mb-10'> Having dealt with the Draugr, collect the Hacksilver from inside the barrel to your right, and proceed to shimmy and climb your way across the ledge until you reach the other side. Making it safely across, squeeze through the gap, where you’ll find two pouches of Hacksilver inside some barrels directly to your left when reaching the other side. </p>
    <p className='text-white text-xl mt-10 mb-10'> When you’re ready to continue, follow the path as it leads you left down a set of stairs. At the bottom, you’ll encounter a Draugr – we recommend taking it out from afar to avoid any possible damage. Once you reach the base of the stairs, you’ll find even more Draugr you’ll need to defeat – like before, we recommend taking them out with your bow and arrow before you even cross over the gap. </p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, shoot down the bucket of Hacksilver and jump over the gap to collect any loot in the area. Continue along the path and destroy the Soundstone found on the wooden logs to clear a path.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Before you continue, angle yourself so you can see the red vase through the gap hidden behind the gold ore to your right – shoot this vase.  </p>
    <p className='text-white text-xl mt-10 mb-10'> With the ore cleared, use this space to get a better view of the Soundstone blocking the path forward. Behind this, you’ll also find another red vase that can be shot to access a Red Coffin. Once destroyed, defeat the Draugr that’ll spawn nearby and proceed left of the gap, where you’ll find a Red Coffin hidden in a small room containing Forged Iron, Beast Scraps, and some Hacksilver. </p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, jump across to the cliff face, and then follow it left until you reach the ledge filled with Draugr.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'>When defeating the Draugrs on the ledge above, shoot at the Soundstone that’s holding the wooden ledge up – this will send the Draugr standing above it, down the mountainside. You’ll want to prioritize the two Draugr that spawn on this ledge, as their fireballs will deal large amounts of damage if you fail to move in time. </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, loot the Hacksilver chest along the left ledge, and climb up the wall marked with white glyphs.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once you reach the top, you’ll find a Hacksilver barrel to your right and a Red Coffin hidden in a dark corridor when following the path left – it’ll contain Rawhide, Beast Scraps, and some Hacksilver.  </p>
    <p className='text-white text-xl mt-10 mb-10'> When returning to the main path, you’ll spot a deer that runs off through the doorway – follow it. As you round the corner, defeat the two nightmares that’ll appear with arrow-based attacks and continue following the path. </p>
    <p className='text-white text-xl mt-10 mb-10'>As you reach the end of the tunnel, you’ll find the deer dead, presumably killed by the roaming Draugr nearby – defeat it. Taking care of the Draugr, continue following the path up the ledge.  </p>
    <p className='text-white text-xl mt-10 mb-10'>When nearing the next tunnel entrance, take down the two Nightmares that will appear and continue inside – you’ll find a Hacksilver pouch to your left.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Reaching the base of the stairs, defeat the next group of Draugrs – you’ll need to be wary of the two Draugrs that will primarily toss fireballs towards your direction. </p>
    <p className='text-white text-xl mt-10 mb-10'>One of these Draugrs can be found at the end of the path, beside the Hacksilver chest, and another on the ledge to your right – take out this Draugr by shooting the Soundstone beneath the ledge it’s standing on.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Clearing the area, shoot down the resource bucket from the ceiling, just right of where you entered the area. From here, continue following the path left, looting the Hacksilver chest to your right, along the way.  </p>
    <p className='text-white text-xl mt-10 mb-10'> When entering the archway, follow the path right, where you’ll find some Hacksilver barrels and a red vase on a ledge that can be used to blow up the ore covering the Red Coffin just outside – this coffin will contain Slag Deposits, Beast Scraps, and some Hacksilver. </p>
    <p className='text-white text-xl mt-10 mb-10'> With those collected, return inside and follow the path left – you’ll need to defeat two more Nightmares as you round the corner – remember to keep your distance, or else you’ll receive AoE damage from their death explosion. </p>
    <p className='text-white text-xl mt-10 mb-10'>As you continue forward, use the last red vase to take out the Draugr that’ll come charging toward you when reaching the small set of stairs. With the Draugr dealt with, follow the path inside the tunnel and continue forward – at the end of the path, you’ll find a large Red Coffin that contains Forged Iron, Beast Scraps, and some Hacksilver.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once looted, jump down the ledge and speak to Sindri, who will call out to you from below. Following a short conversation, you’ll have the option to throw a snowball at him – there are currently no known consequences for throwing the snowball.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Just to the right of this interaction, you’ll find a Hacksilver pouch next to a frozen enemy.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, climb up the ledge and head through the slightly opened door. Follow the path down the mountain until you reach Freya’s campsite. Here, you’ll enter a lengthy cutscene that sees Atreus pleading with Freya to help them fight against Odin.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return Home to Sindri’s</h2>

    <p className='text-white text-xl mt-10 mb-10'>Despite what seemed like a promising conversation towards the end, Freya orders Atreus to leave and never return. Failing to obtain Freya’s assistance, climb the chain and loot the Legendary Chest that you’ll find to your left. This chest will contain a Tap to Reveal – so be sure to equip this via Atreus’ Accessory menu.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Having looted the chest, climb the nearby ledge and shimmy across the gap. From here, jump across the next gap and climb down the rock face until you reach the ground below. </p>
    <p className='text-white text-xl mt-10 mb-10'>When reaching the ground, head inside the small tunnel and destroy the Soundstone blocking the path forward – once destroyed, drop down the ledge and speak with Sindri. Following a short cutscene, you’ll be ambushed by Draugrs and Nightmares – defeat them with Sindri’s help.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Once defeated, squeeze through the gap in the wall and follow the path – you’ll find some Hacksilver pouches along the way. Dropping down the ledge into the open area where you initially fought Draugrs earlier in the level, a group of Nightmares will now ambush you – take them down to continue. </p>
    <p className='text-white text-xl mt-10 mb-10'> With the Nightmares dealt with, continue through the statue rubble, where you’ll learn from Sindri that Brok had once died many years ago, and despite Sindri’s best efforts, he wasn’t able to recover all of Brok’s souls. Having never shared this information with Brok, Sindri reveals that it has been eating away at him recently and encourages Atreus to tell his father about his meeting with Freya. </p>
    <p className='text-white text-xl mt-10 mb-10'>Making it through the rubble, retrace your steps to the Alfheim tower, defeating any Draugr you happen to run into. When reaching the elevator, have Sindri repair it, and make your way up to the top of the tower, where you’ll be able to take the Mystic Gate back to Sindri’s house.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Arriving at Sindri’s place, head inside, where you’ll enter a cutscene that sees Kratos revealing his plan to travel to Alfheim in search of further information. Ready to continue, stand up from the table and visit Sindri in his workshop to purchase any upgrades before heading out.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Travel to Alfheim</h2>

    <p className='text-white text-xl mt-10 mb-10'> Once you’re ready to head out, leave Sindri’s house and interact with the Mystic Gateway, where Ratatoskr will stop you. Following a cutscene, Ratatoskr will polish your Yggdrasil Seed of resin, allowing it to be used to travel to Alfheim. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'>If you've slain 6 Ravens, you may want to consider diverting to Niflheim: you'll have unlocked a piece of Armor you can pick up. </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>When ready, use the seed to travel through the Mystic Gateway with Atreus and Tyr. Once you’re inside Yggdrasil, enter the final door once it appears. You’ll now find yourself in Alfheim, ready to seek more information.  </p>

      </div>
      
      <div className='mx-auto grid md:grid-cols-2 gap-2'>
  
      <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>
  
      <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
      <p className='items-center mt-2 text-xl text-white'>The Quest for Tyr</p>
  
      </button>
  
      <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>
  
      <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
      <p className='items-center mt-2 mb-2 text-xl text-white'>Groa's Secret</p>
  
      </button>
  
      </div>
  
      </motion.div>
  
    )
  }
  
  export default GOWR3