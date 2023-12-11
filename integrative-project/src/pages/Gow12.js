import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const GOW12 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/gow11');
    
    };

    const handleNext = () => {

        navigate('/gow13');
    
    };
  
    return (
  
      <div className='mx-auto h-screen max-w-[1240px]'>
  
      <h1 className='text-5xl text-white font-mono p-10 text-center'>Escape From Helheim</h1>
  
      <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>
  
      <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
      <h3 className='text-white font-mono text-2xl'> This guide will refrain from story spoilers whenever possible, but may indicate possible spoilers in boss fights or other encounters - proceed at your own risk. </h3>
  
      </div>
  
      <div className='p-20 items-center justify-between'>
  
      <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find a Way Out of Helheim</h2>

      <p className='text-white text-xl mt-10 mb-10'> Remember that bridge that Freya and Mirmir told you never to cross, like, not ever? Well Kratos and Atreus are now far past that bridge, into the frozen bowels of Helheim itself. Getting out of Hel won’t be easy, even if you aren’t dead already. </p>
      <p className='text-white text-xl mt-10 mb-10'>Start by looking for a path on the left to climb up the side of the tower and onto an upper platform. The first of many Reavers will appear up here - it’s a good idea to switch to your Blades of Chaos in this area.  </p>
      <p className='text-white text-xl mt-10 mb-10'>After killing the Reaver, be sure to clear out the Hel Bramble and move out onto the balcony and go left to find a Hacksilver Chest next to a gate back into the center of the tower.  </p>
      <p className='text-white text-xl mt-10 mb-10'>Cross the bridge and jump to the other side where two Hel-Shadow Scouts will attack - you can impale them with your Blades of Chaos and use Elemental Surge or Explosion to blow them apart, then turn your attention to the ones that appeared behind you.  </p>
      <p className='text-white text-xl mt-10 mb-10'>As you enter the next tower, you’ll see visions of Hel - part of the torture that awaits those who are trapped here. Look for a ledge to climb over and then down to the bottom of the tower.  </p>
      <p className='text-white text-xl mt-10 mb-10'> Down here there are two receptacles for Winds of Hel over a doorway, and some of the Wind is behind some Hel Bramble in the corner. </p>
      <p className='text-white text-xl mt-10 mb-10'> Note that one of the door locks has a gear - throw your Wind at the left side of the door then freeze the gear while it’s unlocked. Then take the winds back and place them on the right side to open the path up. </p>
      <p className='text-white text-xl mt-10 mb-10'> You can also climb down past where the first Winds are to a lower platform above the water leading to a Coffin that holds Solid Svartalfheim Steel - but watch out for an ambushing Hel-Reaver. </p>
      <p className='text-white text-xl mt-10 mb-10'>Back up top, go through the door to run straight into a Hel-Traveler. There’s not a lot of room to maneuver, so be ready with the dodges to the side or block his side swings and have Atreus unload arrows into him to take him out fast. Be sure to loot him for materials as well as Chaos Flame to upgrade your Blades of Chaos for when you make it out of here.  </p>
      <p className='text-white text-xl mt-10 mb-10'> Clearing away the Hel Bramble on the side you can spot a coffin out of reach on a distant platform. </p>
      <p className='text-white text-xl mt-10 mb-10'> Open the gate on the other side then go right around the tower to find a block you can push all the way to the end. </p>
      <p className='text-white text-xl mt-10 mb-10'>Return to the balcony above to leap to the block, and then to the Coffin that holds Hardened Svartalfheim Steel. Cross the next bridge to find Baldur facing his own demons and visions of the past, as you learn a very big secret about his heritage. Keep crossing the ledges until you climb up and around to the other side.  </p>
      <p className='text-white text-xl mt-10 mb-10'> When you drop down, look to the left behind some weapon racks to climb through a tiny passage to the other side where a Coffin holds Hardened Svartalfheim Steel and an Enchantment. </p>
      <p className='text-white text-xl mt-10 mb-10'> Dropping down from the ledge here, several Hel-Reavers will attack, flanked by some Nightmares, and then two Hel-Vikens armed with heavy maces. This is a good place to unleash your Runic Attacks to destroy and stagger your foes, then dodge around the Viken’s overhead swings to hit them from the side. </p>

      <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
        
    <h3 className='text-white font-mono text-2xl'>Horn of Blood Mead Location: </h3>
    <p className='text-white text-xl mt-2 mb-2'> Although it’s not marked on the region summary, you can find a Nornir Chest if you head left instead of right to the ship, and push a stone into a hole to cross over to the first tower.  </p>
    <p className='text-white text-xl mt-2 mb-2'> Clear the Hel Bramble and pull out the block a bit and look to the side of the block to find the “N” looking rune in the block. If you pull it a tiny bit out of its alcove you can hit it from the backside. </p>
    <p className='text-white text-xl mt-2 mb-2'>Head past the alcove you slid into to look out over the frozen water, and look left ot find another of the "C" looking rune.  </p>
    <p className='text-white text-xl mt-2 mb-2'>Finally, pull the block all the way back to a high ledge and climb up to find a chest of Hacksilver, and look down to the right for the “R” looking rune behind a small pillar. Now you can open the Rune Chest for a Horn of Blood Mead.  </p>
    </div>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Use the Ship</h2>

    <p className='text-white text-xl mt-10 mb-10'> Head across the opposite walkway to move a stone out of the way and board the old ship - hopefully it still works. The deck is covered in Hel Bramble, so ignite the two giant piles on the front and back. </p>
    <p className='text-white text-xl mt-10 mb-10'>Look along the back of the ship for a wheel mechanism to pull up the now freed sails. After traveling a short distance, the ship will hit a giant iceberg, because of course nobody is sailing this thing.  </p>
    <p className='text-white text-xl mt-10 mb-10'>To remedy this problem, go to the forward end of the ship and break apart the wooden point holding the sails in place. Now that the sails are flying loose, go back to the wheel mechanism and pull the sails back even further so that they catch the heated air from the fires burning on the ship. Amazingly enough, this will lift the ship up into the air - that is until it catches into a tower and gets the ship stuck again.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Hop off the ship onto the platform it caught on and head along the tower balcony to find a Coffin - loot it and you’ll get the Stone of Fire Supremacy - a Legendary Enchantment that increases burn damage, very useful in this realm!  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location: </h3>
    <p className='text-white text-xl mt-2 mb-2'>Though also not marked in the region summary, you can find a Legendary Chest as you enter the tower itself to find a spinning mechanism you can throw your axe at to raise a platform.  </p>
    <p className='text-white text-xl mt-2 mb-2'> Make sure your off the platform when you hit it, then duck under to the balcony on the opposite side of the tower to find a Legendary Chest that holds Icarus Storm, a Light Runic Attack for your Blades of Chaos. </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Return to the bridge that got you across from the ship to find a wheel mechanism you can use to raise the bridge - but don’t worry, it will hit an upper bridge allowing you to get back to it before it flies away. However, two Ice Revenants will appear to stop you.  </p>
    <p className='text-white text-xl mt-10 mb-10'> They are annoyingly tough to beat and cause ice fissures to slow you down - but you can still use Atreus from his vantage point to stun them with Shock Arrows long enough for you to bring the pain. </p>
    <p className='text-white text-xl mt-10 mb-10'>Next, enter the tower and look for the spinning mechanism to hit with your axe, and raise it up to the second level. Once off the lift, recall your Axe to let the lift drop. Use the top of the lift to get a Hacksilver Chest on your right. After collecting the chest, you can cross the drawbridge and shove off to take to the skies once more.  </p>
    <p className='text-white text-xl mt-10 mb-10'>As you enter the Skies of Helheim, Hel-Reavers will begin appearing on the sides of the ship like sky pirates - only instead of plunder they’re here to stop you by any means necessary.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Many of them will start trying to freeze the two bonfires on the ship, and you can’t let that happen. Try using the Elemental Surge or Explosion once harpooning them, or use your Runic Attacks to clear a path and stop them. You can also use Atreus and his abilities to stun them too - just keep moving, pivoting, and fighting. If you see the fires get low, be sure to reignite them with your blades to keep the fires bright.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Eventually, your ship will be literally harpooned from down below in an attempt to stop you. You’ll have to interact with the harpoon to dislodge it, but that means getting past the Hel-Viken first. He’ll be flanked by lots of Hel-Broods in the process, so keep whirling those Blades of Chaos until they all fall away, then head to the harpoon once the combat is finished. </p>
    <p className='text-white text-xl mt-10 mb-10'>As you continue the journey, more Hel-Reavers will appear, now with several ranged attackers taking up vantage spots on the platforms above. Quickly yank them down with your blades and then start alternating running back and forth along the ship, using wide attacks to catch all the Reavers in your attacks, and making use of Runic attacks whenever you are able.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Be sure each of the bonfires is topped off with flames before you dash to the other side, and keep fighting back as more of them appear.  </p>
    <p className='text-white text-xl mt-10 mb-10'> After fighting off the next long wave, more harpoons will hit the ship from multiple sides, with one staying fast near the front bonfire. Race over and pull it off, then turn around to face two Ice-Revenants that will start darting around the ship. </p>
    <p className='text-white text-xl mt-10 mb-10'> Make sure Atreus is ready to pepper them with arrows as you follow up with big attacks to take them down quickly, and keep an eye out for any Nightmares they may produce as they warp around. After killing them, race to the other bonfire and pull off the other harpoon lodged near it.</p>
    <p className='text-white text-xl mt-10 mb-10'> The ship will glide and curve around a few towers before making a beeline for Tyr’s Temple, but more Hel-Reavers will appear, starting with a few Hel-Viken. Try and take one of them out as fast as you can before others start appearing to freeze the fires. </p>
    <p className='text-white text-xl mt-10 mb-10'> Then, lure the other Viken near a pile of other Reavers attacking you, and catch them in in a wide-sweeping Runic Attack like Hyperion Slam. Keep running back and forth (you can sometimes outpace the Viken and focus on the ones attacking the flames). </p>
    <p className='text-white text-xl mt-10 mb-10'>Eventually - even more harpoons will shoot forth, entangling the front of the ship, and more Hel-Reavers will appear - backed by an Ogre.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Focus all your fire on the Ogre as soon as he jumps down, and unleash your Spartan Rage if you have to - once you get him stunned, you can send him crashing around the ship and slam into all remaining Reavers easily tossing them aside, and then you can mop up the Ogre if he isn’t dead already, along with whoever survived the attack. </p>
    <p className='text-white text-xl mt-10 mb-10'> When the ship is clear, you won’t be able to reach the harpoons at the front, and so the only course of action is to just toss the front of the ship off entirely. However, one last vision of the past will appear to haunt you, before Kratos and Atreus make their escape onto Tyr’s Temple. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Escape Helheim</h2>

    <p className='text-white text-xl mt-10 mb-10'> You’ll crash down into a Hidden Chamber of Odin - somehow not marked on your region map. Before you interact with the sealed door, head into the opposite door to find a Coffin that holds an Eye of the Outer Realm - an Epic Enchantment bonus to all stats. </p>

</div>
      
      <div className='mx-auto grid md:grid-cols-2 gap-2'>
  
      <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>
  
      <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
      <p className='items-center mt-2 text-xl text-white'>Return to the Summit</p>
  
      </button>
  
      <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>
  
      <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
      <p className='items-center mt-2 mb-2 text-xl text-white'>A Path to Jotunheim</p>
  
      </button>
  
      </div>
  
      </div>
  
    )
  }
  
  export default GOW12