import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const GOW4 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/gow3');
    
    };

    const handleNext = () => {

        navigate('/gow5');
    
    };
  
    return (
  
      <div className='mx-auto h-screen max-w-[1240px]'>
  
      <h1 className='text-5xl text-white font-mono p-10 text-center'>The Light of Alfheim</h1>
  
      <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>
  
      <p className='text-white font-mono text-2xl'> SPOILER WARNING:</p>
      <p className='text-white font-mono text-2xl'> This guide will refrain from story spoilers whenever possible, but may indicate possible spoilers in boss fights or other encounters - proceed at your own risk. </p>
  
      </div>
  
      <div className='p-20 items-center justify-between'>
  
      <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find a Way to the Light</h2>
      
      <p className='text-white text-xl mt-10 mb-10'>  As you make your way down the bridge, you’ll of course realize while certain aspects of this area seem similar to Midgard, you won’t find anything you’ve left behind in that realm. New treasures and terrors alike await in this realm. </p>
      <p className='text-white text-xl mt-10 mb-10'> The realm of the light elves is full of trees and groves, as well as odd pink roots that block your path - but you can throw your axe at the pulsating mass in the center to grant passage. At the next blockage, look up to the right to spot a denizen of this world, the translucent light elves, locked in mortal combat with the winged dark elves. The bodies around you point to a war being waged even now.  </p>
      
      <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
      
      <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
      <p className='text-white text-xl mt-2 mb-2'>Along the path, look to the right to spot a circle of Rune Reads to have Atreus read from. It’s a message about The Eternal War between elves in this realm.           </p>
      
      </div>

      
      <p className='text-white text-xl mt-10 mb-10'>Just to the right of the runes, destroy the pink roots to reveal a Hacksilver Chest. Up ahead you’ll spot a Light Elf, but it will soon be killed as several Dark Elves appear, and you happen to be in the wrong place at the wrong time.   </p>
      <p className='text-white text-xl mt-10 mb-10'>Dark Elves flit around on their wings before dive-bombing with their spears in a two hit combo or one strong hit, or shooting fiery beams at a distance. You can keep one out of the fight by freezing it with an axe throw, or use your runic abilities to keep them off-balance. Refrain from heavy attacks that launch them into the air, as you won’t be able to juggle them effectively thanks to their wings - they’ll just fly and retreat - unless you freeze them first.   </p>
      <p className='text-white text-xl mt-10 mb-10'>These enemies can also block attacks, requiring strong attacks or the shield break upgrade if you want to push through to damage them. Make sure Atreus is helping out either by distracting them with his melee attacks and chokes or peppering arrows to distract them.   </p>
      <p className='text-white text-xl mt-10 mb-10'>After killing the trio, head up to find more pink roots - and note that destroying one of the pulsating cores isn’t enough - you need to line them up so you can strike both at once in order to do away with the blockage for good.  </p>
    
      <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
      
      <h3 className='text-white font-mono text-2xl'>Favor - The Realm of Fire</h3>
      <p className='text-white text-xl mt-2 mb-2'>Look to your right as you pass through the gate to find another of the Cipher Chests. This contains another piece of the Muspelheim Cipher needed to enter that realm for the Favor: The Realm of Fire.          </p>
      
      </div>
    
      <p className='text-white text-xl mt-10 mb-10'>Head down the path to the beach area to find Sindri and a new shop he’s set up. Buy or upgrade if you need to - he has new items to sell - and consider buying or upgrading some gear to reach or get close to level 2. Enemies are starting to get tough, and you’ll want to keep up. Remember that upgraded gear can be socketed with enchantments that can further boost your skills, and you have a Frozen Flame from killing the Ogre to upgrade your Leviathan Axe to level 3!    </p>
      <p className='text-white text-xl mt-10 mb-10'>After speaking with Sindri, turn around to spot a boat tangled in some roots. Move along to the right side so you can line up all three pulsating cores and hit them with one throw, then move the boat onto the water.   </p>
  
      <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Get to the Ringed Temple</h2>

      <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
      
      <p className='text-white text-xl mt-2 mb-2'> Note: It’s easily missed, but keep a look out for a low hanging glowing blue dew hanging from a branch along the water. Have Atreus pluck it to find the Yggdrasil’s Dew of Cooldown, a passive item that will permanently increase your Cooldown by 2.   </p>
      
      </div>
      
      <p className='text-white text-xl mt-10 mb-10'> As you paddle through the narrow stream you’ll come to the region known as the Lake of Light.    </p>
      <p className='text-white text-xl mt-10 mb-10'> This place, much like the Shore of Nine, is home to some smaller side adventures should you choose to partake - but be wary of danger. To the Southeast lies the Light Elf Sanctuary, and to the far West is the Light Elf Shore - both places you can dock at. There’s also a sand bowl near the entrance to the lake that poses a new riddle - but there are no runes present to help you find the answer yet.   </p>
      <p className='text-white text-xl mt-10 mb-10'>Moving onward to the Ringed Temple, you can dock your boat and approach to find the light bridge sealed away by roots that move to cover the crystal.    </p>
      <p className='text-white text-xl mt-10 mb-10'> The Dark Elves will soon ambush you in a larger group. Don’t panic, and try to focus on one and stun the others to break their formation. Make use of Atreus to help pluck them out of the air, or use your axe throw to slow them down - if they are not moving around too much.     </p>
      <p className='text-white text-xl mt-10 mb-10'> After they get taken out, you’ll find that you can’t drop down from here - but there are two wheel mechanisms near the dock. Pulling on them will reveal large runes that come up out of the water - runes that might be used for the sand bowl back near the lake entrance.     </p>
      <p className='text-white text-xl mt-10 mb-10'>Take out the Dark Elf reinforcements and go back to the boat moving back to the lake entrance where the sand bowl riddle is. Now that you can see the runes, Atreus can pick out the answer, revealing a large trench in the lake leading down to the temple depths.      </p>
      <p className='text-white text-xl mt-10 mb-10'> As you enter the Ringed Temple Trench, more Dark Elves will come at you from all sides.      </p>
      <p className='text-white text-xl mt-10 mb-10'> Spartan Rage can help even the odds here as you pummel them and smack them around to keep them from flying away. Make sure you freeze them when you can so they can’t dodge around as quickly, and use your Runic Abilities whenever they are active to thin out their ranks.      </p>
     
      <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Reactivate the Ringed Temple Bridge</h2>

      <p className='text-white text-xl mt-10 mb-10'> Once the area is clear, look around to spot some hanging crates tied to those pink roots you can hit to get some Hacksilver. Behind you are two different rooms full of caged Draugr and a mechanism in the middle of the room. </p> 
     
      <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

      <h3 className='text-white font-mono text-2xl'>Legendary Chest Location:</h3>
      <p className='text-white text-xl mt-2 mb-2'>One of the rooms has a broken mechanism, but the other can be used to unlock the cages.           </p>
      <p className='text-white text-xl mt-2 mb-2'> Check the cells here to find Hacksilver on a corpse in one room, and the other room has a blocked path to a chest you can spy. Throw your axe at the root over the chest, then leave back to the center room and look into the cell from the blocked doorway. </p>
      <p className='text-white text-xl mt-2 mb-2'>Summon your axe back and it will hit both roots on the way back, unlocking the door and allowing you to loot the Legendary Chest for Thiazi’s Talon, a Heavy Runic Attack.  </p>
      
      </div>

    <p className='text-white text-xl mt-10 mb-10'>Continue down the main path towards the temple only to find a giant chasm blocking your advance. You’ll need to find a way to cross - and it may involve going down.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Idunn Apple Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>To the side you’ll find a locked Nornir Chest - but the runes seem nowhere to be found. Crossing to the other side you’ll spot a coffin up on a ledge you can’t reach, and a rune is hiding nearby. However, to find them all, look for a wheel mechanism nearby and slowly lower the central floor with it.        </p>
    <p className='text-white text-xl mt-2 mb-2'>You’ll spot a gear as well as an “R” looking Rune - so freeze the gear and drop down to punch the rune, then look where you dropped down from to spot a “C” looking rune to punch as well.  </p>
    <p className='text-white text-xl mt-2 mb-2'> Now return to the wheel and completely lower both the middle and outer platforms, then look behind you to spot the last “N” looking rune, and hop up on the ledge to break it so you can unlock the Nornir Chest holding the Idunn Apple . Be sure to also yank your axe back when standing on the platform where the last rune was, as it will bring you up to the Coffin holding Runic Forearm Bracers and Soft Svartalfheim Steel. </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Use the wheel mechanism to lower the platforms down all the way and you’ll see a narrow passage going inside the outer temple. Freeze the gear while you run inside to another prison-like area. T  </p>
    <p className='text-white text-xl mt-10 mb-10'> here’s another wheel mechanism here so you can return back outside - try using it and you’ll notice a hidden coffin that’s just in the wall you can lower a bit to your level, and then throw your axe at the gear on the right. Head back down the passage to open the Coffin and you’ll get a Rare Enchantment - a Fragmented Heart of Alfheim. It reduces all damage from Dark Elves’ attacks by 12% and is VERY useful in this area, so put it to use! </p>
    <p className='text-white text-xl mt-10 mb-10'> Head through the prison (there doesn’t seem to be any way to open the cells with the Draugr yet) into a room with two root cores you can angle to hit both at once. As you climb out, you’ll be ambushed by a big ugly Dark Elf and his Dark Elf Warriors. </p>
    <p className='text-white text-xl mt-10 mb-10'> At this point, you’ll temporarily lose both your axe and Atreus - but Kratos has rage to spare. So much so that in the following fight, you’ll have unlimited Spartan Rage, so waste no time killing every Dark Elf that comes your way. </p>  
    <p className='text-white text-xl mt-10 mb-10'>When the closest enemies have been dealt with, you’ll need to find a way to the far platform. Look to the right for a large wall and start beating it up until you can rapidly tap Circle to create a platform over to the middle.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Now that you have back with you, you’ll be up against a host of Dark Elf Warriors. These guys are more armored than the others you’ve fought, and move faster to charge their lance with dashing attacks that can break your guard and cause shockwaves even if they miss hitting you directly. The attacks can also blind and darken your vision - which can make tracking their movement a pain. Try and freeze one with an axe toss and then beatdown the other with Atreus using his arrows to build up stun before it can fly away to kill them quickly. </p>
    <p className='text-white text-xl mt-10 mb-10'> After the two warriors go down, you might notice a nearby chest wrapped in roots. Look for a small path going down the opposite side to a dead elf holding Hacksilver. </p>
    <p className='text-white text-xl mt-10 mb-10'> Look under the bridge to the right to spot one of two pulsating centers - the other is under the chest, and you can arc the shot to hit both at the same time. Now you can return up to the main platform and open the Coffin to get 1 Soft Svartalfheim Steel</p>
    <p className='text-white text-xl mt-10 mb-10'> Since the main two pathways needs the light of Alfheim to cross, look for a doorway on the other side of the platform from the chest and enter through there. Inside is another prison-like area with more Draugr behind bars, and an inactive lift in the middle. Exit through the door on the right to a larger area with a path below. </p>
    <p className='text-white text-xl mt-10 mb-10'>Down here, you’ll need to cut away the roots so the Light of Alfheim can seep through and power up a bridge. Cross to the other side and climb up where more Dark Elves will ambush you.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Be on alert for one hanging back by a balcony trying to snipe you - you can embed an axe in his face, and rip it out when he tries to prepare another ranged blast. </p>
    <p className='text-white text-xl mt-10 mb-10'> As you kill them, you’ll accidentally awaken an Ancient - a being made of stone and elements that really wants you dead.</p>
    <p className='text-white text-xl mt-10 mb-10'> To kill it, you’ll need to hit the weak point that it expels its elemental attacks from - which can get risky as you’ll need to dodge the beams first. If you hit its juicy center, it will expel orbs onto the ground. After you finish dodging its blast, grab an orb and toss it back to detonate to explosive effect, further exposing the weak point to attack. </p>
    <p className='text-white text-xl mt-10 mb-10'>Keep this strategy up and you’ll be able to stun it fairly fast, letting you climb on top to deal additional damage until you are thrown off. Some Dark Elf Warriors will soon join the fight - use the giant rock in the middle as cover as you lure the elves to you can get rid of them so you can focus back on the elemental and repeat the process of stunning it until the creature falls.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Note that killing an Ancient will give you some great loot - including another Dark Elf Enchantment (they stack!) and the Ancient’s Heart - which you can trade with the Dwarves to craft the Ancient’s Armor. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Be sure to check the left side of this platform after the battle, and you’ll find a Legendary Chest holding Njord’s Tempest, a Light Runic Attack.          </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Now that you’re at the “root” of the problem, it’s time to clear out this gunk that’s blocking the main bridge into the inner temple. Throw your axe to get rid of the protective layer, then go up close and charge your axe into the core to explode it. This will bring all the bridges in this room back online, allowing you an easier way to get back to the top. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Enter the Temple</h2>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> With the bridges back, head to the upper bridge on the side opposite the door out to reach a dead end with several Light Elf bodies. </p>
    <p className='text-white text-xl mt-2 mb-2'>One of whom holds one of the Spoils of War Elven Artifacts.         </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Head across the new bridge back to the prison room to find the lift now fully operational, which will take you back up the pit you saw at the bridge entrance earlier. Now you can cross the bridge and enter the blue door into the Ringed Temple proper… but the door doesn’t seem to have a spot where you can open it. Whoops.     </p>
      
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find Another Way Into the Temple</h2>
      
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Horn of Blood Mead Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>From the inactive door, go left down a small path to spot some of the Rune Bells that signify a Nornir Chest. It’s located behind a blocked door, but if you look from the left side of the door you can spot a second pulsating core on the right - and hit both to clear the doorway to the chest </p>
    <p className='text-white text-xl mt-2 mb-2'>The “N” looking rune is right above it, while the “C” and “R” runes are just outside straight and to the right.       </p>
    <p className='text-white text-xl mt-2 mb-2'> Be sure to hit them fast to unlock the chest and gain what should be the third Horn of Blood Mead - increasing your maximum rage meter!</p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Head down the other path to bump into Sindri again. Since you have the Ancient’s Heart, he’ll be able to develop new crafting recipes to make some really awesome armor - but you’ll need more resources in order to purchase them. </p>
      
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Just to the right of Sindri you can spot another Jotnar Shrine to open to find a lore shrine for Groa, a Giant Sorceress.  </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> When you’re ready, look for the small crawlspace to the left of Sindri to enter the temple, and get ready for a welcoming party. </p>
    <p className='text-white text-xl mt-10 mb-10'>As you drop down into the long chamber, a Dark Elf Summoner will appear to do what he does best: Summon reinforcements. He’ll keep doing this too, as well as using his weapon to send shockwaves and projectiles - so focus fire on him first before taking out the two Warriors that flank him.  </p>
    <p className='text-white text-xl mt-10 mb-10'> When they’re dead, look back at the wall you dropped down to knock a hanging pot down for some Hacksilver. </p>
    <p className='text-white text-xl mt-10 mb-10'>There’s also a coffin covered in roots here, and three pulsating cores on different strands along the hall. Run past the lowest one and turn around to toss your axe upwards at all three of them, and you’ll unlock the Coffin to get 1 Soft Svartalfheim Steel.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Further along the ring passage you’ll come across a host of Exploding Nightmares. They’re pretty much heat-seeking missiles of poison - get back and launch your axes at them while dodging the incoming Dark Elves. Once your sure no more are coming, turn your attention to the elves and rush and stun them to take them out.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>At the end of the hall a giant spire rises out of the temple - look along the wall going up to find a ring of Rune Reads in one of the indentations, and have Atreus translate the Keep Safe the Light message for you.        </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>You can’t see the pulsating cores needed to open the coffin on the side, so jump the gap into the next room and then head right until you can spot the line of three cores and hit them all to unlock the Coffin, and return to get a Runic War Belt.   </p> 
    <p className='text-white text-xl mt-10 mb-10'> Back in the foggy room, go left and hop up a ledge and move on until you come to a wall with handholds you can jump to.   </p>
    <p className='text-white text-xl mt-10 mb-10'> This will lead you to the Ringed Temple Interior, where the Dark Elves have covered the light in hive of sorts. Cross over to the base of the hive and engage the Dark Elves here.  </p>
    <p className='text-white text-xl mt-10 mb-10'>A Summoner is among them, so either unload on him quickly or use Atreus to disrupt him when he tries to spin his staff and create more reinforcements. You can also try and get behind them and knock them off ledges for a quick kill.  </p>
    <p className='text-white text-xl mt-10 mb-10'> When the crew lies dead, turn your attention to the root core and break it open before powering up your axe to explode the core. It’s not enough to get rid of the hive, but it will cast a big enough glow to activate a bridge nearby. </p>
    <p className='text-white text-xl mt-10 mb-10'> Cross the bridge and head left, moving slowly for when a group of Explosive Nightmares appear. Hang back and take it easy as they drift to you, and use your axe throwing to detonate them all from a safe distance before moving up and crossing back to the center. </p>
    <p className='text-white text-xl mt-10 mb-10'> More Nightmares will appear, as will a Dark Elf Summoner. Quickly rush in and disrupt his summoning and then keep knocking him into the wall to finish him quickly before he gets the chance to move away. Kill the other Nightmares and any other Elves who join the fight, then look for another pulsating core to rip open. </p>
 
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Break Into the Hive</h2>
    <p className='text-white text-xl mt-10 mb-10'>Coming up the ramp after crossing the bridge, you’ll be at the entrance to the hive - which is surrounded by more pulsating cores. Don’t be discouraged, you only need to trim them in certain ways.  </p>

    <p className='text-white text-xl mt-10 mb-10'> Walk up to the one at the door, and turn left to spot a group of three you can hit in one go. Look above you to see the roots above that connect the next group of three and line them up as well. Finally, line up the last three that ends with the doorway to completely get rid of all the cores to gain entry to the Hive. </p>
    <p className='text-white text-xl mt-10 mb-10'>Inside the Hive, it’s a fairly tight path. Sidle through the opening and head up the ramp to a wall you can climb to the top. Keep moving forward until you reach a low passage that will accidentally take you straight to the center of the hive. Take note of all the occupants as you quitely make your way up the side.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Destroy the Hive and Claim the Light</h2>
    <p className='text-white text-xl mt-10 mb-10'>You’re going to need to be ready to move as you reach the first core. Throw your axe and charge it up like you did with the others.  </p>
    <p className='text-white text-xl mt-10 mb-10'>When the path crumbles, jump down and get ready to fight through a horde of Dark Elves. Luckily these grunts will fall pretty quick as Atreus will hem them in front of you. Use either Spartan Rage or your Runic Abilities to clear a path in front of you, favoring charging attacks that bring your forward.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Skills like Whirling Storm also work well letting you dodge forward and attack to keep your enemies at bay. Near the end when the path widens, go for moves like Invaldi’s Anvil to beat back everyone around you to make the final push.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once you clear a path to the final core, destroy it, and the temple will come to life. However, before the task is complete, Kratos will need to do one last thing to get the Bifrost infused with the light.  </p>
    <p className='text-white text-xl mt-10 mb-10'> As you enter the light, chase the flickering flame across familiar territory until you reach the end. When you reappear again, turn around and look for a cave to enter and climb a long wall until you reach the next path. Walk forward, and the event will soon end. </p>
    <p className='text-white text-xl mt-10 mb-10'>When you return, rejoin Atreus at the ledge and use the Bifrost to infuse his bow with Light Arrows - now you will be able to create light bridges wherever you see the blue crystals!  </p>
    <p className='text-white text-xl mt-10 mb-10'>Manually aim at the blue crystal from afar and have Atreus shoot it to create a bridge across. On the other side, drop down to a lower level and look around. There’s a blue crystal here but it’s been cast aside, and you can carry it to either of the receptacles here.  </p>
    <p className='text-white text-xl mt-10 mb-10'>If you want to get something extra before leaving, note the coffin above the middle receptacle and place the crystal there, and you’ll make a bridge connecting the upper walkway. Now you can get to the coffin and open it for a final Fragmented Heart of Alfheim Enchantment.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Return back down to the lower level and put the crystal on the receptacle near the large roots blocking more crystals, and it will create a bridge back to the centers lower level. Cross it, and deal with a few Nightmares before heading left. </p>
    <p className='text-white text-xl mt-10 mb-10'>There’s a chest here, and if you stand to the right of the first pulsating core you can spot another one behind the roots to hit both, netting you a Hacksilver Chest.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Now head under the roots to the other side of the platform to find another bridge to create back to the outer ring.  </p>
    <p className='text-white text-xl mt-10 mb-10'>A few Dark Elves will try and stop you by shooting projectiles - stun them with an axe toss and close the distance to knock them off ledges.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Create another bridge under the roots and look back to align all three pulsating cores, and you’ll have opened up a path to make a bridge to the exit. Thankfully, another core on the center island can be dispersed to reveal a crack to climb up back to the top.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Back at the Light, another crew of Dark Elves will try to ambush you. Remember that you can now upgrade Atreus’ Skills with the Light Arrows to increase stun damage or weaken enemies to make more use of his new ability. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Have Atreus target the newly exposed crystal on the top ring to make a new bridge to the doorway.          </p>
    <p className='text-white text-xl mt-2 mb-2'>Over here a few more Dark Elves will try and get in your way, and they guard a nearby Legendary Chest that holds Strike of the Utgard, a Light Runic Attack.  </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>The way forward seems to be blocked by a wall of light, but if you look up you can spot a blue crystal hanging like a pendulum. Look along the chain for a piece you can target with your axe to break the chain and deactivate the wall.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Now that the blue crystal is on the wall, pick it up and place it in the nearby receptacle. You’ll notice a Lore Marker stone nearby but the runes can’t be read - it turns out that it needs the Light to become readable, so have Atreus hit the crystal to see its contents: The Light of Alfheim.       </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Head up to the next room where the mysterious blue door that blocked your progress was earlier. It turns out there’s a sand bowl on a higher level needed to activate it but you’ll need to clear a path. </p>
    <p className='text-white text-xl mt-10 mb-10'> You can’t hit the pulsating roots from this angle, so return back down to the Lore Marker and take the crystal back up to this room. Place it on the only open slot to have Atreus unlock a bridge above it. Climb the platforms to the right to get up to the higher vantage point and cross over - giving you a perfect shot of the three pulsating root cores. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Horn of Blood Mead Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>In the middle of the new bridge is a Nornir Chest, and nearby are the three Rune Seal Bells you need to hit quickly to unlock it. The “R” looking rune is found just behind the chest, while the “C” looking rune is to the left through a broken window past the dead body of an elf.       </p>
    <p className='text-white text-xl mt-2 mb-2'>Finally, turn back the way you came to find the “N” looking rune hanging over the platforms going back down. You can hit the first two while standing in front of the chest, then sprint right to hit the last. Hitting all of them quickly will unlock the Nornir Chest to get you a Horn of Blood Mead. </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Drop back down and put the blue crystal in the newly opened spot. Make sure to point out the symbol above the door, then go around behind the crystal to spot a wall with a hole up the side you can boost Atreus into. Once he runs up and carves the rune into the sand bowl, the way out will finally be open to you.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return to the Boat</h2>

    <p className='text-white text-xl mt-10 mb-10'> If you’re in the mood for sidequests, be sure to stop by Sindri’s shop below to learn about Fafnir’s Hoard of treasure. Otherwise, head back along the bridge towards the giant trench you opened - which means you’ll need to take the long way to get back to your boat on the other side of the trench. </p>
    <p className='text-white text-xl mt-10 mb-10'>Use the lift on the right to go back down to the prison area - and note that many cells are now open...which might be good or bad. At the very least, you can loot the Hacksilver Chest.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Look around the cells to spy and open one with the body of a dead Light Elf. It might be dark, but you can use the Bifrost as a light source to explore the cell and grab one of the Spoils of War Artifacts from the dead body.          </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> As you head through the closed door into the main body of the trench, you’ll find out that someone has triggered its closure above you, casting the trench into near-darkness. The boat is still at the other end, so continue cautiously. Two Poison Revenants will try and ambush you, so make sure and utilize sprinting attacks to follow up from Atreus stunning them and dodge around the poison fissures they sweep. </p>
    <p className='text-white text-xl mt-10 mb-10'>The crystals down in this area are still inactive, but luckily you have Atreus and his Light Arrows. There are two paths going off to either side of the trench room. Facing the trench, the one on the right leads to a room with another crystal receptacle and a locked door, so take the left path instead.  </p>
    <p className='text-white text-xl mt-10 mb-10'> In this small room you’ll find plenty of barriers triggered by a hanging crystal. Strike it down with your axe and get ready to be ambushed by Draugr from the different cells. They should be a pushover for you at this point, as long as you don’t let them surround you. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Check the interior of the cells here to find the body of a Light Elf, and loot the corpse to find another of the Spoils of War Artifacts.       </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> If you want to try out a side puzzle, grab the blue crystal and carry it all the way over to the opposite room with the receptacle. This will activate the locked door, but you’ll need the right runes to unlock it, which are located on four spinning mechanisms around you. </p>
    <p className='text-white text-xl mt-10 mb-10'>Quickly hit the sides with your axe until you find the runes that look like a “B”, “E”, an downward slanted “F” and an upward slanted “F”. If you are too slow, the puzzle will reset, but with practice you’ll have it unlocked in no time. Inside the treasure room is a Coffin that holds Runic Scaled Spaulders and Soft Svartalfheim Steel.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Take the crystal back to the trench room and look for a lower platform with a receptacle for the crystal. Use it to create a bridge across back to where the long pathway to the sand bowl you first took down here is located. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Before you dash off, remember that wheel mechanism you used to lower the platforms to a tunnel leading into a prison area. Return down there to find the doors open and the Draugr gone.        </p>
    <p className='text-white text-xl mt-2 mb-2'>Search the cells for the body of a Light Elf holding another of the Spoils of War Artifacts, and add it to your collection.  </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> You can check the cells next to the sand bowl for anything else you missed, and then get ready for a fight - as the leader of the Dark Elf invasion force isn’t going to let you leave without a fight. </p>


    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Svartalqfurr</h2>

    <p className='text-white text-xl mt-10 mb-10'>This Dark Elf is tough - but he at least behaves similarly to his friends. He likes to flit around before dashing in with this lance to skewer you or swing it in a wide arc, but leaves plenty of time to wind up for you to either prepare to dodge, disrupt or time a block at the last moment to off-balance him.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Trouble comes when he starts launching projectiles. He’ll frequently dash backwards while leaving projectiles behind for you to step on. If you get hit, you’ll be blinded, and if you thought this sucked before, it’s downright impossible to find him in the darkened arena. You’ll need to back off and keep dodging more projectiles until your vision returns - so watch for his attacks that send three projectiles into the ground across a wide area. </p>
    <p className='text-white text-xl mt-10 mb-10'> He’ll also dash back and prepare to charge. When he does this on the ground and you spot him coming, dodge to the side or ready a Runic Attack to disrupt his charge. In the air, he’s much more powerful, and will slam into the ground sending a blinding shockwave that will make things worse. If you’re already blinded, keep moving and dodging until you have your sight back, and look to Atreus to figure out his general position. </p>
    <p className='text-white text-xl mt-10 mb-10'>Use Atreus to keep him busy while you dash across and hit him with your Runic Attacks, and be ready to counter his melee strikes or dodge backward if he plants blinding explosives at your feet. You can’t stun him, so just focus on taking his health down and avoiding getting blinded to keep on the offensive. If you do get blinded, play it safe and keep dodging until you can see.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Once he’s out of health, perform a finisher on him to defeat this pesky fly for good. He’ll drop an Etched Crest of Cunning Enchantment, as well as a Runic Summon. This item can be imbued into Atreus’ bow to summon beasts to help fight for you. It’s on a cooldown just like your Runic Attacks, and you can hold down the square button to activate it in combat. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return to Midgard</h2>

    <p className='text-white text-xl mt-10 mb-10'> Now it’s time to finally leave the temple behind for good. Take the sand bowl elevator up and out to get back to your boat. </p>
    <p className='text-white text-xl mt-10 mb-10'> If you’re feeling up to it and haven’t explored them before, there’s still the two distant shores to explore for some fairly quick loot: </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Odin’s Raven Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>The Light Elf Shore is home to one of Odin’s Ravens perched on the pedestal of one of those Light Elf monuments to the left as you enter. You can either toss your axe it from the beach, or from the balcony on the side of the large tree.        </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>After clearing out Draugr and Nightmare near the beach, look in the giant tree for a hanging box full of Hacksilver. There are three light crystals embedded in the ground you can hit to reveal a Realm Tear Encounter, which will pit you against two higher level dual-wielding Draugr. Moving right down the beach you’ll find a Hidden Chamber door to the left, and straight ahead leads to a tunnel. Here you can find a chest blocked by roots - cut the one over the gap and jump across, then turn around to toss your axe through all three.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Legendary Chest:</h3>
    <p className='text-white text-xl mt-2 mb-2'>At the other end of the tunnel from the group of roots, head out onto the platform overlooking the beach to find a Legendary Chest holding Frost Giant’s Frenzy - a Heavy Runic Attack. There’s also a hanging box out in the rock in front of you, be sure to knock it down and grab it to get some Aegir’s Gold.       </p>
    
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>As you drop down from the platform with the Legendary Chest, look for the body of a dead Light Elf to find another of the Spoils of War Artifacts and add it to your collection.        </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> The Light Elf Shore has some Tatzelwurms and ranged Draugr waiting for you on the shore, as well as several roots on the left that block another entrance. Kill the enemies and look for a gate at the far end and a lever that will raise the gate - but only for a few moments. On the other side will be two more Tatzelwurms waiting for you. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Idunn Apple Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>From beyond the first gate, take a left along a path to a gazebo with a Nornir Chest overlooking the river leading to the Ringed Temple. The hanging bell seals here have no markings so it’s a game of trial and error.    </p>
    <p className='text-white text-xl mt-2 mb-2'>The correct bells are located behind the chest to the left, directly to the right of the chest, and directly in front of the chest in the doorway.  </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Head back through the other gate that’s blocked by two roots. To raise it, hit the lower one so the gate can raise, and before it slams shut again hit the upper root and let the gate smash the lower root. </p>
    <p className='text-white text-xl mt-10 mb-10'>Now you can head onto a balcony overlooking the water where a Realm Tear is. This thing will summon two high-level Heavy Draugr to fight you, which can be a bit risky considering the damage they deal. Try to keep them separated or stunned, and if you can get the stun meter up on one of them, toss them into the water for a quick kill. Defeating both of them will grant you Dust of Realms, which can be used to upgrade your Talismans.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>From the balcony over the water, head right to find the path blocked by two roots you can cleave apart. Cross the root bridge and look down to the left to spot the roots blocking your path and a door below. Hit all of them and a nearby Artifact on the ground will be revealed - the last of the Spoils of War Artifacts       </p>
    
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>With the roots gone, there’s a new tunnel to the side you can take into a small room with a Legendary Chest covered by three pulsating cores nearby - two of which are on separate hanging bars.          </p>
    <p className='text-white text-xl mt-2 mb-2'> Use the nearby wheel mechanism to rotate the bars all the way, and watch as they rotate back slowly to align while facing the only stationary core at the top, and you can toss your axe as they all align. This will unlock the chest to reveal the Amulet of Kvasir - a rare Talisman that slows time upon perfect dodges. </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Make your way back to Tyr’s Temple and sell your loot at Sindri. Note that if you were unable to pick up some items that were dropped in now inaccessible areas of the temple, you can claim them in the Lost Items section from his menu. </p>
    <p className='text-white text-xl mt-10 mb-10'>Return back to the temple and use the Bifrost to make your way back to Midgard, and to the Shore of Nine. Back in Midgard, you can talk to Brok about meeting his brother, and he’ll jealousy buff your weapon - just slightly. He also has new armor to sell, and you can take him up on a side Favor: Second Hand Soul - a task to enter the Volunder Mines.  </p>
    <p className='text-white text-xl mt-10 mb-10'> As you head across the bridge to the Vanaheim Tower, you’ll be attacked by Speed Draugr. These guys aren’t as much of a pushover as regular Draugr, as they can sprint at you with high speed to hit before you can react. Watch for their feet to ignite to signal a dash and counter them when they come to attack. </p>
    <p className='text-white text-xl mt-10 mb-10'>Inside the tower, you’ll note the blue crystals that adorn the inner walls can now be shot - but beware. This triggers a Realm Tear, a way to defeat high-level enemies to get Realm Dust to enhance your Talismans. The enemies you’d summon would include level 6 Revenants, who can likely kill you in a single hit at your current state, so you may want to hold off on those.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Back inside the tunnel to the Foothills, the bridge the Witch made is gone, forcing you to drop down. Now you can find a blue crystal here - if you carry it to the receptacle you can activate it to highlight a Lore Marker: Beware of Seidr.         </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>As you enter the Foothills, beware an incursion of Rabid and Poison Wolves that will come down from the mountain to ambush you. You can either head left and take Sindir’s Skymover back up, or take the long way up - it’s your choice. Head to the mountain path, and see if the Light of Alfheim will serve you here.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Dispel the Black Breath</h2>

    <p className='text-white text-xl mt-10 mb-10'>When prompted, take out the Bifrost and use its light to beat back the darkness. Slowly move forward and the dark smoke will be pushed back as you make your way up the path, and at the base, Kratos will finally dispel the Black Breath - and your path up the mountain will be made clear.  </p>
    <p className='text-white text-xl mt-10 mb-10'> To continue following our complete God of War walkthrough, be sure to click the link below to jump to our next walkthrough guide. </p>

    </div>
      
      <div className='mx-auto grid md:grid-cols-2 gap-2'>
  
      <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>
  
      <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
      <p className='items-center mt-2 text-xl text-white'>A Realm Beyond</p>
  
      </button>
  
      <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>
  
      <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
      <p className='items-center mt-2 mb-2 text-xl text-white'>Inside the Mountain</p>
  
      </button>
  
      </div>
  
      </div>
  
    )
  }
  
  export default GOW4