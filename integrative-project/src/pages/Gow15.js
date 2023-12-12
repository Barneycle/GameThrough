import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Gow15 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

  const navigate = useNavigate();

  const handlePrevious = () => {

      navigate('/gow14');
  
  };

  const handleNext = () => {

      navigate('/gow16');
  
  };

  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>Jotunheim in Reach</h1>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center bg-red-700 rounded-lg p-2 md:p-4'>

    <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
    <h3 className='text-white font-mono text-2xl'> This guide will refrain from story spoilers whenever possible, but may indicate possible spoilers in boss fights or other encounters - proceed at your own risk. </h3>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Realm Travel to Jotunheim</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>With the Jotunheim Tower back in the realm of Midgard, the path to the highest mountain in all the realms is within your grasp. Head across the newly aligned bridge and buy any last upgrades you need before entering the Realm Travel Room.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now, the tower of Jotunheim will appear on the travel map, finally allowing entry into the mythical realm of the giants.</p>
    <p className='text-white text-xl mt-10 mb-10'>However, as you set in the location to travel to - Mimir will point out that the gate is lacking a crystal to transmit through - as Tyr used his own eyes to do the job. Since Mimir only has one eye, you’ll need to find the other. Perhaps Brok and Sindri can help.</p>
    <p className='text-white text-xl mt-10 mb-10'>Head back into the forge and speak to the brothers about the location of Mimir’s hidden eye. It seems that Odin had a statue built to hide the eye - the same one that the World Serpent ate. Hopefully, he hasn’t fully digested it….</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center bg-yellow-700 rounded-lg p-2 md:p-4'>

    <p className='text-white text-xl mt-2 mb-2'>Warning: As Mimir points out, this will be the beginning of the end. Once you speak to the World Serpent, you will set events in motion that will keep you locked in until the story is complete - and while you can still explore in post-game, this is your last chance to do any leftover favors or gather collectibles in optional areas until then, so be sure you are ready to see this journey to the end before you talk to the World Serpent.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>By this point, you should be at least level 5 or level 6, have all (or most) of your skills fully unlocked, fully upgrade Atreus’ Talon Bow and Quiver, and have purchased (or found) Legendary Armor and upgraded it as best you can, with the best Enchantments you can find. Any other XP should be dumped into the Runic Attacks and Summons you use the most, and your Talismans and Pommels should also be upgraded as well.</p>
    <p className='text-white text-xl mt-10 mb-10'>When you’re ready to go, head up the lift to the horn that summons the World Serpent. It looks like he may still have the remnants of the statue in his belly… but you might have to do something unpleasant to get in there.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find Mimir’s Eye</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Head down the stairs to the boat and make for the Niflheim Tower where the serpent has submerged partly into the lake - opening his jaws nice and wide for your arrival. Once inside the Belly of the Beast, you’ll have to keep rowing through the darkened insides of the serpent to find what you seek.</p>
    <p className='text-white text-xl mt-10 mb-10'>Eventually, the insides start to light up as you spot all sorts of things ingested by the snake - large rocks, trees, ruins...the works. You can also spot glimmering pools of Aegir’s Gold you can loot.</p>
    <p className='text-white text-xl mt-10 mb-10'>Look along the “shore” on the left side to spot a place to beach your boat to find a Hacksilver Chest, then get back on the boat towards the illuminated hammer of Thor in the distance.</p>
    <p className='text-white text-xl mt-10 mb-10'>It turns out the serpent not only ate the top part of the statue - but an entire pulley system as well… somehow.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you move up the path, be sure to look right to spot the spinning mechanism you can hit with your axe to move a platform around a circle, then freeze it in place when it hits the upper ledge.</p>
    <p className='text-white text-xl mt-10 mb-10'>Break up some debris at the end of the path and start climbing up and along the statue until you can jump down to the platform you moved. Hop down and retrieve your axe to move the platform back to the other side and then climb up.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Favor - The Realm of Mist:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Be sure to look left to the top of the pulley system for a Cipher Chest you can jump to, and open it to find the final Cipher piece for Niflheim, allowing you to travel to a new and dangerous realm to complete the Favor: The Realm of Fog.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Now jump back and open the big glowing Legendary Chest to find Mimir’s missing eye - and plop it back in his head. Time to head back to the travel room!</p>
    <p className='text-white text-xl mt-10 mb-10'>Look for a zip-line to quickly take back down to the boat and start sailing to the mouth of the serpent - only to be interrupted by the return of an old nemesis. This time, you’ll need to find a way to stop your enemy for good.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Baldur</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>When the battle begins, you’ll find that Freya will be trying to stop both of you by encasing you in vines. If this happens, rapidly tap circle to burst out and continue launching yourself at your foe.</p>
    <p className='text-white text-xl mt-10 mb-10'>He uses many of his regular moves - including warping around striking from different angles, but if you wait for the right moment you can parry his attack and knock him back, and also use Atreus in tandem with your own attacks.</p>
    <p className='text-white text-xl mt-10 mb-10'>Unfortunately, he still is pretty much invincible, and will regenerate health several times. Still, don’t let up and keep up the offensive until Baldur tackles you, at which point a scene will occur that finally causes him to become vulnerable to harm!</p>
    <p className='text-white text-xl mt-10 mb-10'>When the battle begins anew, you can finally start damaging him fo real - but he’ll be much faster and more aggressive.</p>
    <p className='text-white text-xl mt-10 mb-10'>Worse, you’ll be constantly interrupted by the force above you that will slam into the ground and send freezing waves in your direction. Hold out your shield to block and hopefully Baldur will get knocked down by them.</p>
    <p className='text-white text-xl mt-10 mb-10'>After fighting for a bit, Baldur will become enraged and imbued by frost - which means its a good time to pull out your Blades of Chaos by now. He’ll supercharge many of his attacks with frost now - including a frost fissure stomp and sending projectiles into the air at you.</p>
    <p className='text-white text-xl mt-10 mb-10'>He may also detonate if you stay close for too long, so be ready to backpedal at a moments notice.</p>
    <p className='text-white text-xl mt-10 mb-10'>The force above you may also hover over the area, and you can just make out glowing circles on the ground as traps where the roots will spring forth to keep you or Baldur in place - if you can spot these traps you can avoid them while damaging Baldur in his trapped state.</p>
    <p className='text-white text-xl mt-10 mb-10'>Keep fighting until he gets to around half health when Freya tries to stop the fight again. Push the obstacle out of your way and you’ll be hurled into a new arena where Atreus has a vantage point from up top. Baldur will appear again - this time infused in fire which means its time to swap weapons again. Baldur will also be joined by continual waves of Fire Broods that will try and swarm you from all sides with their unblockable grabs.</p>
    <p className='text-white text-xl mt-10 mb-10'>Try and dodge around and use sweeping strikes like the Strike of the Utgard to keep them off you, then focus on Baldur.</p>
    <p className='text-white text-xl mt-10 mb-10'>He’ll still use his tracking fissure move and dive into the air and explode downward moves, only they’ll be charged with fire, and his slam will cause explosions to burst around him for a few moments, stunning you if you try and rush in. Hang back and throw your charged up axe, then when the explosions fade go for a heavy runic attack or blow while he gets up.</p>
    <p className='text-white text-xl mt-10 mb-10'>Keep this up until the next scene that will bring you into the air, and when Baldur tries to get on top of you, remember your fight atop the dragon - hold block while he flails, and then when he gets up for bigger strikes dodge to the side and counter back after he misses. Use the prompts for Atreus when able as you crash down below, then activate Spartan Rage when able.</p>
    <p className='text-white text-xl mt-10 mb-10'>For the final part of the fight, he will alternate being on fire or freezing, so swap to whichever weapon you need when you can to keep up the offensive.</p>
    <p className='text-white text-xl mt-10 mb-10'>Stun him from using his ranged or powered up attacks with Atreus and keep him hemmed in with Runic Summons while you follow up with combos and Runic Strikes.</p>
    <p className='text-white text-xl mt-10 mb-10'>Don’t let up, and be ready to block and counter when starts dodging around for a combo strike attack.</p>
    <p className='text-white text-xl mt-10 mb-10'>When you damage him enough, you can perform a tag team strike with Atreus using his command prompts to end the fight with your foe. At last, the long battle will be at an end, but at a cost nevertheless.</p>
    <p className='text-white text-xl mt-10 mb-10'>With Baldur defeated, it’s time to finally complete the journey.</p>
    <p className='text-white text-xl mt-10 mb-10'>To continue following our complete God of War walkthrough, be sure to click the link below to jump to our next walkthrough guide.</p>
   
    </div>
    

    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Between the Realms</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>Mother's Ashes</p>

    </button>

    </div>

    </motion.div>

  )
}

export default Gow15