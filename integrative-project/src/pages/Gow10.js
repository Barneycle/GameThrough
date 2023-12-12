import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const GOW10 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/gow9');
    
    };

    const handleNext = () => {

        navigate('/gow11');
    
    };
  
    return (
  
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>
  
      <h1 className='text-5xl text-white font-mono p-10 text-center'>The Black Rune</h1>
  
      <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>
  
      <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
      <h3 className='text-white font-mono text-2xl'> This guide will refrain from story spoilers whenever possible, but may indicate possible spoilers in boss fights or other encounters - proceed at your own risk. </h3>
  
      </div>
  
      <div className='p-20 items-center justify-between'>
  
      <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return to the Boat</h2>

      <p className='text-white text-xl mt-10 mb-10'> With Atreus on the mend and well enough to travel, it’s time to head back to your original goal below Tyr’s Temple. However, now that you have the power to both clear out Hel Bramble and use the Winds of Hel, almost every avenue is now open to you, and you can almost fully explore every area you’ve been to now. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location: </h3>
    <p className='text-white text-xl mt-2 mb-2'>In fact, as you head down to the Witch’s Cave, head to the right of the well to where the Cipher Chest was to find Hel’s Wind, and grab it.  </p>
    <p className='text-white text-xl mt-2 mb-2'> Take it to a receptacle to the left of the bridge to the Witch’s House, then down below to the lone platform in the middle of the lower cave area.  </p>
    <p className='text-white text-xl mt-2 mb-2'> Cross to the other side of the cave to place the wind on an upper platform above some Hel Bramble. Then destroy the bramble and move the giant pallet of stones to the middle so you can grab the Winds of Hel and jump across to the other side and place it in a stone vault. </p>
    <p className='text-white text-xl mt-2 mb-2'>This will reveal a Legendary Chest holding the Rampage of the Furies - a new Light Runic Attack for your Blades of Chaos.  </p>
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Idunn Apple Location: </h3>
    <p className='text-white text-xl mt-2 mb-2'> Return back up the well out of the Witch’s Cave to where the turtle resides, and look at the giant arch you summoned using the sand bowl. The right side of the arch has Winds of Hel on it, and you can transfer it to the left side of the arch. </p>
    <p className='text-white text-xl mt-2 mb-2'>Now head up the chain to the high ridge above where you spotted the runes for the sand bowl, and grab the Winds before turning and running down the path and placing them below a rune mechanism for a moment.  </p>
    <p className='text-white text-xl mt-2 mb-2'>Then taking them the rest of the way to a receptacle behind the Nornir Chest to activate it - revealing three “B” symbols rotated around. You'll need to make sure the top of the spinning mechanism above the Winds of Hel receptacle has the "B" looking rune, the one below it has the "^^" looking rune.  </p>
    <p className='text-white text-xl mt-2 mb-2'> Then leave the winds in the final rune receptacle until it cycles to the backwards "B" looking rune before taking the Winds to the chest to open it. </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Take the lift back down to the water to find a boat washed ashore behind the lift. After a scene of certain revelations, you’ll be free to head back to the Shore of Nine. At this point, with Atreus by your side and most of the Mystic Gateways active, you’ll be able to fully explore many areas, and revisit old locations to bypass puzzles that stopped you before. </p>
    <p className='text-white text-xl mt-10 mb-10'>You can also return to Helheim with your son to grab the last few collectibles that you couldn’t get earlier - but fair warning, enemies will reappear along the road to Hel that are much tougher than when you were there last. Should you brave the path anyway, you can have Atreus break a Shatter Crystal on the first tall bridge back in Helheim to find one of Odin’s Ravens, a Hacksilver Chest, and a Coffin with an Enchantment.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Down on the floor below, another small wall of red sap can be exploded to reach a Legendary Chest that holds The Charm of Infinite Storms - an Epic Talisman. Head to the farther tall bridge to find one last Shatter Crystal to break that leads to a Hidden Chamber of Odin, hiding two Family Heirloom Artifacts, two of Odin’s Ravens and an imprisoned Valkyrie. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Use the Sand Bowl to Reach Tyr’s Vault</h2>

    <p className='text-white text-xl mt-10 mb-10'>When you are ready to continue, head back to Tyr’s Vault at the bottom of the temple and finish what you started. After Atreus reads the riddle, look along the wall to find the answer, and the solution will cause the floor to descend.  </p>
    <p className='text-white text-xl mt-10 mb-10'>As the elevator goes down, be sure to take a look at and enjoy all the murals and inscriptions of Tyr - and his apparent travels to other civilizations.  </p>
    <p className='text-white text-xl mt-10 mb-10'> When the lift finally hits the bottom, head down the path past the roots of the World Tree into an ominous hallway leading to a very large chamber. As you approach the site of the Black Rune, giant spinning rings will fly up to encase the rune in magic - shielding it from your reach. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Deactivate the Vault’s Defenses</h2>

    <p className='text-white text-xl mt-10 mb-10'>Ignore the vast riches that ring the vault and focus on the task at hand - you’ll need to find a way to get past each of the floating rings that guards the Black Rune.  </p>
    <p className='text-white text-xl mt-10 mb-10'>As Mimir points out, the rings of the defensive barrier have the Winds of Hel on them - but in order to deactivate them you’ll need to find a place to store these winds. </p>
    <p className='text-white text-xl mt-10 mb-10'>Grab the first one and look off to the right for a passage past a health/rage/experience stone to find a smaller chamber ringed by fire above, an a receptacle for the Winds of Hel in the middle.  </p>
    <p className='text-white text-xl mt-10 mb-10'> As you pass the winds on, the receptacle will retreat into the ground, replacing the platform with a wheel mechanism. Turn the wheel and you’ll open two more doors in this chamber to some very fast-moving and dangerous gears. Be sure to also inspect a nearby small table to find a small knife that Atreus can play around with. </p>
    <p className='text-white text-xl mt-10 mb-10'> There’s a passage behind the wheel mechanism to a hall with a giant spinning saw blade that takes up the width of the room. Use your axe and aim for the points above it to pivot the blades allowing you to pass along the side, and do the same for the second saw blade to reach a Coffin holding Solid Svartalfheim Steel. </p>
    <p className='text-white text-xl mt-10 mb-10'><p className='text-white text-xl mt-10 mb-10'> </p> </p>
    <p className='text-white text-xl mt-10 mb-10'>The last pair of saw blades don’t retract, but they do have exposed gears you can freeze. Stop one, and wait until it aligns with the other to restart it, giving you an opening to enter the next Winds of Hel receptacle chamber.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Once Kratos is done admiring the treasures, you can inspect a nearby scarab artifact from Egypt, and then look for a door you can open back to the central vault room. </p>
    <p className='text-white text-xl mt-10 mb-10'>Once back in the central room - prepare for a sizeable fight with Draugr pouring out from every crevice to do battle with you. It’s worth noting that the fiery-blooded Draugr aren’t as susceptible to the Blades of Chaos as the icy Reavers are, so swap to your axe and fists if you want (or continue to use the Blades as a crowd control weapon).  </p>
    <p className='text-white text-xl mt-10 mb-10'> After taking out the invading undead, grab the Winds of Hel from the second revolving ring and carry it back to the room you just opened with the scarab. Watch out as Nightmares appear to try and distract you - place the Winds of Hel in the receptacle then latch onto the Nightmare to toss them aside. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Idunn Apple Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Down the hall opposite from the main vault room are two alternating spiky blocks moving horizontally into the wall. You can freeze the second one and dodge past the first to find a Nornir Chest at the end of hall.  </p>
    <p className='text-white text-xl mt-2 mb-2'>Turn around and look at the active spike block to find the “C” looking rune on this side when it extends.  </p>
    <p className='text-white text-xl mt-2 mb-2'> Head back into the previous room and look along the shelves to the left of the hall of spinning saw blades to find the “R” looking rune. </p>
    <p className='text-white text-xl mt-2 mb-2'> Finally, head into the new hall across from the wheel mechanism where spiky blocks slam down from above to spot the “N” looking run up on the right side of the first block. Return to the unlocked Rune Chest to collect another of the Idunn Apples. </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Head into the hallway across from the wheel mechanism to where three spiky blocks smash down from above. While Atreus climbs into a tunnel, freeze the first block with your axe and watch the second and third blocks alternate.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Since the second one slams down before the last raises, you can’t wait under it, so instead look for a passage to the left of the second and third spiky blocks to hide until it’s safe to dart past into the next chamber. </p>
    <p className='text-white text-xl mt-10 mb-10'> This chamber includes another receptacle for the Winds of Hel - as well as a giant mural for the wolves Skol and Hati that chase the sun and moon. Look for an exit back into the vault - but note that the final Winds of Hel don’t rotate downwards to a place where you can grab them. Instead, look to the right of the vault exit to find a section of cracked wall you can climb up to an upper balcony. </p>
    <p className='text-white text-xl mt-10 mb-10'>Up here, several Power Weapon Draugr will appear flanked by Nightmares - as long as you take the Nightmares out first (or yank them and throw them at the Draugr), you can then rush and take out the Draugr, or kick them off the balcony for an easy kill.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>While you’re up on the balcony, look around for some runes along the wall for Atreus to translate the Rune Reads as a Rune Vault Clue: “Thought is faster than wind”. </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Knowing this, it becomes apparent that simply grabbing the Winds of Hell from the inner ring and making your way down to the lower floor won’t give you enough time to sprint across to the receptacle. You’ll need to find a place to store the Winds while you move to the lower level. </p>
    <p className='text-white text-xl mt-10 mb-10'>Thankfully, that place should be just below the active Winds: the unpowered outer ring. Place the Winds of Hel in the outer ring after taking it from the inner ring, then climb back down using the chain.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Now you should be able to nab the Winds of Hel and race back into the nearby chamber to place it on the receptacle.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Now you can use the final wheel mechanism to lower the vault down - and deal with a devious trap.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Escape the Trap</h2>

    <p className='text-white text-xl mt-10 mb-10'>In a clever trap, Kratos will be pinned to the wheel mechanism, while Atreus must figure out how to align the mural of Skol and Hati. The gold wolf eats the sun, and the silver wolf eats the moon, and Midgard - the green earth - should be between them. There are three levers to pull - the ones on the side lower the icon above them, while the middle lever moves all the objects along to one side.  </p>
    <p className='text-white text-xl mt-10 mb-10'>First, pull the right lever to lower the green symbol down, then the middle lever to push the sun and moon left, positioning the sun over the left lever.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Pull the left lever next to store the moon, and then pull the middle lever to send the sun all the way to the right. Now you can pull the right and left levers to bring back the moon on the left side and the green icon in the middle, and complete the puzzle.  </p>
    <p className='text-white text-xl mt-10 mb-10'> You won’t be out of the fire just yet - when prompted, have Atreus use his knife to stop the wheel mechanism, and you’ll be out of the trap, but at a certain cost…. </p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat the Grendel of the Ashes and Grendel of the Frost</h2>

    <p className='text-white text-xl mt-10 mb-10'>As you unlock the Black Rune and learn its secrets, two guardians will awake to do battle. These foes look like Trolls in that they use a giant pillar to fight with - and it stands to reason that they can also be countered like a Troll. Have Atreus aim for their faces or throw your axe to stun it then get in close.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Be wary though, as they are a lot more mobile than Trolls, and can rush great distances to lunge with their weapons and slam down with unblockable attacks, or sweep them to the side in several spins that you’ll need to dodge twice or more - or be ready to block.  </p>
    <p className='text-white text-xl mt-10 mb-10'>They may also swing their weapon around to slam down and create stone pillars that can hurt or blind you.  </p>
    <p className='text-white text-xl mt-10 mb-10'>The secret to their strengths lie in their affinity: The Grendel of Ashes burns - but it weak to the Leviathan Axe, while the Grendel of Frost is immune to the axe but takes damage from your Chaos Blades.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Despite this, even if you choose to focus on one Grendel, you’ll find that they can share health, and regenerate as one lowers its health to compensate - making it seem like you’re making no progress. </p>
    <p className='text-white text-xl mt-10 mb-10'>Don’t worry about this too much, as you’ll eventually drain both of their health by focusing your attacks one on - just be sure your attacks aren’t blocked by the one immune to your current weapon and keep them separated, while using Atreus to damage both of them equally using his Runic Summon. Shock Arrows also work well with the upgraded chain lightning to damage both foes at once.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Once you finish focusing on the first of the Grendels, the other should be near dead as well from siphoning all his life to his friend, so swap weapons and take him out and defeat the pair. Be sure to loot both Trolls to get a Chaos Flame, Tartarus Rage - the Heavy Runic Attack for your Blades of Chaos, and some Hardened Svartalfheim Steel. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location: </h3>
    <p className='text-white text-xl mt-2 mb-2'>Now that you’ve cleared out the Grendels, look back to the chamber that trapped you to find the platform has risen up to reveal a Legendary Chest in an alcove, and open it to get Weightless Grips of Protection.  </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Now you can exit Tyr’s Temple via the elevator (look for the doorway with the arrow sign), and have Atreus use the sand bowl to ride it straight up to the top and exit onto the bridge. Now, the path to Jotunheim awaits. </p>
    <p className='text-white text-xl mt-10 mb-10'>To continue following our complete God of War walkthrough, be sure to click the link below to jump to our next walkthrough guide.  </p>


      </div>
      
      <div className='mx-auto grid md:grid-cols-2 gap-2'>
  
      <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>
  
      <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
      <p className='items-center mt-2 text-xl text-white'>The Sickness</p>
  
      </button>
  
      <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>
  
      <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
      <p className='items-center mt-2 mb-2 text-xl text-white'>Return to the Summit</p>
  
      </button>
  
      </div>
  
      </motion.div>
  
    )
  }
  
  export default GOW10