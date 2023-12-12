import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Gow5 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

  const navigate = useNavigate();

  const handlePrevious = () => {

      navigate('/gow4');
  
  };

  const handleNext = () => {

      navigate('/gow6');
  
  };

  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>Inside the Mountain</h1>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>

    <h2 className='text-white font-mono text-2xl'>SPOILER WARNING:</h2>
    <h2 className='text-white font-mono text-2xl'> This guide will refrain from story spoilers whenever possible, but may indicate possible spoilers in boss fights or other encounters - proceed at your own risk. </h2>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Ascend the Mountain</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>With the Black Breath dispelled, the way forward will be made clear. However, it will still require a bit of work to get up. Jump across the gap to the wall of the mountain and follow the yellow etching up the side of the mountain. </p>
    <p className='text-white text-xl mt-10 mb-10'>Climbing up you’ll find yourself in the literal mouth of a cave - the mouth of the face carved into the rock. Use the Bifrost to dispel more of the black breath until the cave entrance is revealed. From here, you can find an easy shortcut back down the mountain to the side, where a much shorter drop leads to a dead body holding Hacksilver, a coffin locked by roots you can’t open yet, and a zipline for an easy exit. </p>
    <p className='text-white text-xl mt-10 mb-10'>Head through the giant door and enter the mountain. Inside is a large chamber with an ominous statue at the other end of a gap. On your side, you can find a sandbowl with a riddle. There’s also one of two blue crystals nearby, and a lever that doesn’t seem to affect anything yet. Shooting the only crystal here will reveal half of the puzzle if you pull the lever, so we need to find the other crystal in this area. </p>
    <p className='text-white text-xl mt-10 mb-10'>Head left, and you’ll find a passage with the blue crystal and a bucket of Hacksilver hanging overhead - beware the two Speed Draugr’s that will zoom around the corner to take you by surprise. Let them make the first move and counter to keep them pinned or otherwise stunned. </p>
    <p className='text-white text-xl mt-10 mb-10'>Since the end of the hall leads to a wall of red sap, grab the blue crystal and place it back in the receptacle. Pull back the lever once both blue crystals are active and have Atreus read the puzzle solution. Doing this won’t create a bridge - but it will open a new door to the right. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Traverse the Dark Caves</h2>

    <p className='text-white text-xl mt-10 mb-10'> With only your Bifrost to light the way, enter the new cave and look for smaller blue crystals that serve as torches. Once you drop into the pit, take a right and crawl through the passage until you can spot a larger cavern with Draugr patrolling the bridge above.  </p>
    <p className='text-white text-xl mt-10 mb-10'>There are some stairs hiding up to the left, take them up to find yourself at the other end of the pit you dropped down, and look for a Coffin next to a crystal torch that holds the Scaled Bracers of Focus. </p>
    <p className='text-white text-xl mt-10 mb-10'>Return to the main path and lift a boulder out of the way to make it to the underside of the bridge - where a Revenant will appear and spawn several Fire Nightmares. Try and keep the Revenant hemmed in with Atreus’ arrows and your stunning moves and be ready to pivot and reface as soon as the Revenant vanishes. </p>
    <p className='text-white text-xl mt-10 mb-10'>After killing the monster, look above where you came in for a lone crystal - shoot it and you’ll reveal several buckets full of Hacksilver you can knock down to loot. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Odin's Raven Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> You might hear the spectral chirping of a raven nearby - cross the bridge you are on under the bridge above you, and turn back to look down the hole on the side of the bridge to spot the spectral green raven hopping about on a wooden plank. </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Ignore the rune seal for a moment, and break some crates to the right of the ledge going up to find a side path ending in a gap towards a coffin on another island. Return and jump up the ledge to take out some Draugr, and look for your vantage point back down to spot a blue crystal under the gap to form a bridge to the coffin, which will net you a Solid Svartalfheim Steel. </p>
    <p className='text-white text-xl mt-10 mb-10'>The upper area with the Draugr is pretty open, so be sure inspect it thoroughly. Many inactive Draugr litter the area, as do blue crystals.</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Head along the right path to find a crystal torch and illuminate it to notice a wooden door to the right. </p>
    <p className='text-white text-xl mt-2 mb-2'> Break through it into a small chamber with a dead body hiding behind a table that holds one of the Bottoms Up Artifacts, a two-headed cup. </p>

    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Horn of Blood Mead Location: </h3>
    <p className='text-white text-xl mt-2 mb-2'> Try the left path this time to find a blue crystal stashed around some rocks below another rune seal. To the left is a wooden wall that’s hiding another blue crystal you can shoot to raise a path up to a Nornir Chest. </p>
    <p className='text-white text-xl mt-2 mb-2'> The runes don’t show, but they are painted in red on the walls above. Head back down the ramp to switch the rune here to the “R” looking symbol. </p>
    <p className='text-white text-xl mt-2 mb-2'> The one below the high bridge next to the chest should be the “n” looking symbol. </p>
    <p className='text-white text-xl mt-2 mb-2'> There’s one more high up to the left of the higher bridge you are on - get close to the far brazier and aim a bit high to switch it to the “B” looking rune. This will unlock the Nornir Chest to reveal a Horn of Blood Mead. </p>

    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Across the high bridge from the Nornir Chest is a small room with an unpowered Lore Marker. </p>
    <p className='text-white text-xl mt-2 mb-2'> Two ranged Draugr will appear behind you to try and ambush you - take them out and head back down the light ramp to find the stashed crystal, and bring it back to the chamber to reveal the Lore Marker: The Great Mountain. </p>

</div>

    <p className='text-white text-xl mt-10 mb-10'>Take the zipline down from the Lore Marker and move along the right path. Against teh wall on teh right you will see a boaded up wal. Smash through it to find a fallen soilder holding one of the Artifacts Bottoms Up. Proceed down the path, taking out any meddling Draugr before you crawl through a long tunnel full of bodies. This will empty out behind the statue you saw earlier, so be sure to loot the Hacksilver Chest. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Have Atreus read the runes behind the statue to unveil the meaning behind the Rune Reads and the name of the statue: Durapror the Stag. </p>
    <p className='text-white text-xl mt-2 mb-2'> You can also break through the nearby wooden wall to find a Lore Scroll: The Serpent, and a stone to replenish health, rage, or grant XP. </p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Enter the doorway next to the crystal torch to come face to face with a Draugr armed with a fiery sword. He’ll use it to create lava fissures in the ground - which are unblockable. Wait for his strike and dodge to the side, then beat him into the wall until he dies. </p>
    <p className='text-white text-xl mt-10 mb-10'>You’ll be on the other side of the mysterious red sap wall you saw earlier, so the only other path is to go left, where more Power Draugr and Speed Draugr wait to jump down and ambush you. After killing them, look around and you’ll spot two ways up - a large wooden scaffold, and a rock wall to the left. </p>
    <p className='text-white text-xl mt-10 mb-10'>However, you can make out a coffin behind the scaffold wall. Look for a small opening to the right to crawl through to get behind the Coffin and loot it for a Solid Svartalfheim Steel. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Head up the rock face wall to the left of the scaffold, and you’ll come to a Rune Reading. Atreus will translate it as Hraezlyr - the Mountain Terror. That can’t be good. </p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Jump down after climbing up the rock wall and look to the right for a chain you can knock down the scaffolding for an easy way back.</p>
    <p className='text-white text-xl mt-10 mb-10'>Up ahead, look along the left behind some debris for another chain you can knock down to find a Hacksilver Chest. Head to the end of the hall and open the door to enter the Heart of the Mountain proper. </p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Head back and up the stairs from the chain that led you back into the temple, and you’ll find a path leading up to a Hacksilver Chest on the right sidepath, and some staircases dead ahead that lead to a wooden barricade.</p>
    <p className='text-white text-xl mt-2 mb-2'> Past the barricade is a large ornate wooden Jotnar Shrine, which you can open to reveal the lore of Skoll and Hati, the wolf-giants that chase the sun and moon. </p>

    </div>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Ascend the Cave Shaft</h2>

    <p className='text-white text-xl mt-10 mb-10'>In this giant room, you’ll need to find a way to lift the crane - and yourself - up to the top. It’s a big room, and there’s a lot to take in: To the left of the crane is a track leading to a sealed door with a minecart on the other side. </p>
    <p className='text-white text-xl mt-10 mb-10'>To the right of the door is some upper paths, but you can find a wooden barrier below hiding a Hacksilver Chest. There also appears to be a cave-in near the middle of the walkway, and you can hear the sound of a hammer somewhere near. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Across to the right is a large collapsed mine cart with writing on the back - a Rune Reading about Giants and Dwarves.</p>
  
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Past the mine cart is another of the Hidden Chambers we can’t activate yet, and the low ledge to the platform that overlooks the hidden chamber only has a weak wooden wall hiding a soldier holding Hacksilver. That leaves us with the mechanism by the lit torch near the center of the room. As you approach, check the walls leading to the hidden chamber and look behind debris to find a small crevice leading to an area with a Coffin holding Solid Svartalfheim Steel. </p>
    <p className='text-white text-xl mt-10 mb-10'>Approach the mechanism with the gear and ropes to loosen things up a bit too much, getting the rope stuck under a giant rock, and also clearing out the cave-in by the center where several Draugr will charge forth from. </p>
    <p className='text-white text-xl mt-10 mb-10'>Once the enemies have been cleared out, head down the new lit passage into a cave, and you’ll find Brok’s shop at the other end. The dwarf has a few new Pommel’s to buy, and you should be good to upgrade the Talon Bow to level 3!</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Odin's Raven Location</h3>
    <p className='text-white text-xl mt-2 mb-2'> To the right of the shop is a large cliff that overlooking the caverns under the mountain. Look up and you can spot a glowing green raven circling above - time it right to take him out with your axe.</p>
  
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Look around next to Brok’s shop for a small platform and you can just make out a coffin under it. </p>
    <p className='text-white text-xl mt-10 mb-10'>Climb up and look for a hole you can light up a torch on the other side and reveal another chest, then look to the left to break some debris and reveal a small passage to the Hacksilver Chest and Coffin to get Solid Svartalfheim Steel. </p>
    <p className='text-white text-xl mt-10 mb-10'>Up ahead the path will end in a long hall of traps, and the spinning mechanism to open them has no gear to freeze. Atreus will spot a passage to the right he can crawl through. This will leave you free to hit the revolving mechanism to open up half the hallway from spikes, but close the latter part. You’ll have to wait until the the walls around you start closing in for the other side of the hall to open up enough to sprint through. </p>
    <p className='text-white text-xl mt-10 mb-10'>Open the spiked door into the next room and you’ll find yourself on the other side of the large gate where the mine cart is stashed. There are some Draugr here hiding among the inactive ones - check your reticule when throwing your axe to see which ones are live if it lights up red.</p>
    <p className='text-white text-xl mt-10 mb-10'>There’s also a chattering noise coming from the right - look around to spot a small fiery but docile creature that will burrow into the ground when you get close. Wait for it to reappear and kill it, and it will drop a ton of loot - including World Serpent Scales, a Sturdy Sign of Perseverance, Solid Svartalfheim Steel, and Hacksilver! </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Odin's Raven Location</h3>
    <p className='text-white text-xl mt-2 mb-2'>Past the dead pack-beast and loot creature you killed, look to the right of a large door to find a small caved-in alcove with a torch crystal high above.</p>
    <p className='text-white text-xl mt-2 mb-2'>Light it up, then look into the opposite alcove above you to spot a glowing green raven poking its head out - and hit it with your axe.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Be sure to look up and break the chains on all the raised bridges above you, then look to the moveable minecart.</p>
    <p className='text-white text-xl mt-10 mb-10'>Start pushing, then break the chain when it stops, and keep moving it forward towards the door. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Artifact Location</h3>
    <p className='text-white text-xl mt-2 mb-2'>Stop a bit after pushing the minecart and look at the spot it was originally to find a spiked door you can push in. On the other side lies a dead body holding another of the Bottoms Up Artifacts, a Handled Goblet.</p>
  
    </div>

    <p className='text-white text-xl mt-10 mb-10'>You won’t be able to push the minecart through the sealed door, but if you stop it near the burning torch above you can climb up to a higher platform. Here you can head straight past a wooden barricade to open a door back to the other room, and kick down a chain, as well as use the larger chain mechanism to open up the large door to the minecart.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before you go pushing it out, cross the bridge you created over the minecart to the other side, and knock away some debris on the left to find a pit you can drop into with a Coffin holding Solid Svartalfheim Steel. Head back up and past the pit to take on a group of Draugr at the other bridge. There’s a bucket above the bridge you can knock down for Hacksilver. </p>
    <p className='text-white text-xl mt-10 mb-10'>Clear out the other Draugr on this side of the bridge, then move left and up some platforms to find a Coffin holding a Scaled Waist Guard of Focus. </p>
    <p className='text-white text-xl mt-10 mb-10'>Now return to the bottom and move the minecart through the opened door and towards where the crane was. Stop after the door to create a platform to the area above the tunnel leading to Brok’s Shop so that you can reach the rock with the trapped rope. Be sure to look up above you for a bucket you can hit that will drop Hacksilver. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location</h3>
    <p className='text-white text-xl mt-2 mb-2'>As you pass along the upper platform, look along the left side for a Legendary Chest that contains Falcon’s Dive - a Runic Summon for Atreus.</p>
  
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Be sure to knock down the chain on the side of the platform to create an easy way down, then head over to the large stone and rapidly tap circle to push it over side, and free the pulley system. However, as you drop down, a new Troll will emerge to do battle. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Jarn Fotr</h2>

    <p className='text-white text-xl mt-10 mb-10'>This Troll infuses himself with the power of ice, and like the last troll you fought, he’ll use it to deal more damage with both his weapon and his appendages - specifically his foot. When you see it begin to glow, be prepared for a mighty stomp that will send freezing fissures your way, likely two of them at once. </p>
    <p className='text-white text-xl mt-10 mb-10'>However, charging his appendages also leaves them vulnerable to attack - which is a good time to have Atreus focus on them or throw your axe to stun him. </p>
    <p className='text-white text-xl mt-10 mb-10'>He’ll also use a ice-infused slam of his weapon to send up an ice shockwave you’ll need to be wary of, as well as a sweep after his slam that can catch you off-guard. Make use of your Runic Attacks to keep him on the defensive and follow up with Atreus and his Runic Summon or Light Arrows. </p>
    <p className='text-white text-xl mt-10 mb-10'>At around half health, a bunch of Draugr will join the fight, and can make things really annoying for you - especially the Explosive Draugr. Reorient yourself to deal with them while keeping the Troll in view so you don’t get blindsided or hit by his ice fissures. This is also a good time to enable Spartan Rage to quickly take them down and then focus your remaining fury on the Troll. </p>
    <p className='text-white text-xl mt-10 mb-10'>Once you kill the great monster, make sure to loot his body for a Heavy Runic Attack: The River of Knives, some Solid Svartalfheim Steel, and a Frozen Flame! </p>
    <p className='text-white text-xl mt-10 mb-10'>Now that the room is clear, move the minecart into position before you return to the wheel mechanism and keep moving it until the crane is in place. Once it’s in place, don’t let go just yet - and throw your axe into the white gears to the side of the wheel mechanism. This will freeze it in place until you can climb onto the minecart, and then ride it up by getting your axe back. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Reach the Summit</h2>

    <p className='text-white text-xl mt-10 mb-10'>At the top of the makeshift elevator ride, you won’t be all the way up, but it’s progress. Before moving on, look around the light and smash aside debris to find a Hacksilver Chest in the corner. </p>
    <p className='text-white text-xl mt-10 mb-10'>As Atreus runs up the path, he’ll trigger a firespout trap up ahead. Have him crawl under the rocks to the right and wait for the fire to stop for a moment before sprinting past it. Up ahead are three more over a large gap - you’ll need to wait for the last one to start powering down before running and jumping over the ledge to dodge past the starting flame. </p>
    <p className='text-white text-xl mt-10 mb-10'>Up ahead, a large column with a coffin on top will spring to life to spout flames in a slow moving circle. It’s not as dangerous as it looks, as the column rotates fairly slowly, letting you carefully navigate the wide space. In fact, you can move to the right where the path opens up to quickly hop up a ledge to get some Hacksilver, and quickly move around close to column to find more Hacksilver by a body. </p>
    <p className='text-white text-xl mt-10 mb-10'>Moving forward, a Draugr will appear on a farther platform to hurl projectiles at you - either toss your axe quickly or wait behind a large column and use Countering Blast to send his attacks back at him. </p>
    <p className='text-white text-xl mt-10 mb-10'>Kill the second Draugr that appears on another short platform while hiding behind the first, then move forward to a wheel mechanism and quickly spin it down to lower the trap and loot the Coffin for Plated Pauldrons of Focus and Solid Svartalfheim Steel. </p>
    <p className='text-white text-xl mt-10 mb-10'>At the end of the path, meet back up with Atreus to find another lift that can raise you up - but only if you get rid of some ballast. There are two large stones here, push off one (and only one) to start rising into the air before stopping at a mid platform. Be sure to drop down here first to score some Hacksilver from a chest and a burnt body. </p>
    <p className='text-white text-xl mt-10 mb-10'>Return to the lift and push off the other rock to continue the ascent. After a trip up, the lift will hit the side of a wall, and angry Draugr will pour out, including Shield Draugr and Heavy Draugr. </p>
    <p className='text-white text-xl mt-10 mb-10'>Make use of your Block Break skill to keep the shielded foes off balance and keep them in front of you so you don’t get blindsided. </p>
    <p className='text-white text-xl mt-10 mb-10'>As the lift continues up, it will hit another stop, with even more Draugr arriving to fight. Dash into them as soon as they land and string together some combos with the help of Atreus before they can react, and then focus fire on the ranged Draugr above to finish the group off. Remember that depending on who you are aiming at, you can absorb a projectile from the Draugr above and redirect it at closer attackers. </p>
    <p className='text-white text-xl mt-10 mb-10'>After the battle, look for where the lift has smashed into the side of the rock and use the prompts to push it back into the open. It will ride up for a short while once more, before getting stuck as even more Draugr - followed by a very angry Ogre - appear to fight. </p>
    <p className='text-white text-xl mt-10 mb-10'>Now is a great time to use Spartan Rage or switch to your fists to start pummeling the monster, and have Atreus unload his arrows to raise the stun meter on the Ogre as quickly as possible. If you set him up, you can utilize the finisher to ride the ogre around and strike him while making him clean up most of the Draugr for you, and then finish off the ranged Draugr when you kill the Ogre. </p>
    <p className='text-white text-xl mt-10 mb-10'>Loot the Symbol of Cunning, 2 Solid Svartalfheim Steel, and Hacksilver from the dead Ogre and replenish any health lost before dislodging the lift once again. You’ll almost be at the top now, but one more obstacle will stand before you: The Mountain Terror </p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Hrӕzlyr</h2>

    <p className='text-white text-xl mt-10 mb-10'>As the fight begins, the beast will have a hold on the lift with one claw, while the other claw will lunge forth in an attempt to swipe you. You can target either the lunging claw or the stationary one - but if you hit the stationary one, the Mountain Terror will respond with lunging bites. His lunging attacks with claw and teeth are far reaching, meaning dodges won’t help you - but thankfully holding your shield out before the attack will negate the blow. </p>
    <p className='text-white text-xl mt-10 mb-10'>Play it careful here - strike a few times and ready your shield, then return to striking the claws and repeat the process until the beast lets go. You’ll be smashed into the far wall, so head to the side and start spamming circle to free the lift to get to the next phase. </p>
    <p className='text-white text-xl mt-10 mb-10'>As the beast retreats, it will leave behind an electrified tunnel that has also affected some of the weird sap, making it explosive when paired with the red crystals nearby. </p>
    <p className='text-white text-xl mt-10 mb-10'>You can use these Shatter Crystals to destroy the World Tree Sap when it’s been electrified, so make use of the one nearby to clear a path. </p>
    <p className='text-white text-xl mt-10 mb-10'>Shimmy across the next platform and detonate the next wall of World Tree Sap, before making your way along the passage and following the screams to the mountain exit. </p>
    <p className='text-white text-xl mt-10 mb-10'>After reaching the Mountain Terror once more, Atreus will go right as you go left to catch it off guard. Head along the path until it ends to jump to the dragon, and when you are able, start slashing until you get tossed into the boss arena. </p>
    <p className='text-white text-xl mt-10 mb-10'>As you land, note the Shatter Crystals strewn along the edges of the arena - this is your key. The Mountain Terror will start attacking by spewing lightning into the air that will strike from above in bolts - and you can see where they will fall by watching the ground. Let a few hit and keep running to dodge them, then sprint to a Shatter Crystal to collect it. </p>
    <p className='text-white text-xl mt-10 mb-10'>As the dragon prepares another volley - throw the Shatter Crystal, and the electric charge around the beast will cause it to detonate and stun the dragon, causing it to fall to the ground. </p>
    <p className='text-white text-xl mt-10 mb-10'>Waste no time and run up and start slashing with long combo attacks to unload damage until it wakes up and returns to its former position. </p>
    <p className='text-white text-xl mt-10 mb-10'>He’ll swoop to the other end of the arena, and use his claws to perform a shockwave slam. Shield through the blast and then run up to hit his claws, then back off to shield in case he tries to go for a bite. </p>
    <p className='text-white text-xl mt-10 mb-10'>After hitting his claws enough, he’ll alternate his position, and begin building up a beam of electric energy that will carve a line through the arena. </p>
    <p className='text-white text-xl mt-10 mb-10'>Quickly grab a Shatter Crystal and keep it with you as you sprint from one side of the arena to the other to stay out of the blast. </p>
    <p className='text-white text-xl mt-10 mb-10'>After his blast passes, toss the crystal towards where he started his attack (but keep your distance) and the crystal will explode in front of him. Do this a few times, and the dragon will fall to the ground again, letting you get a lot of combo hits in. </p>
    <p className='text-white text-xl mt-10 mb-10'>When he wakes again, shield from his impending attack, and then wait for him to change positions again. He’ll revert back to ground slams and keeping his claws out - but watch if he pulls back one claw, as the dragon will slam it forward in an unblockable attack that you can dodge to the side of. </p>
    <p className='text-white text-xl mt-10 mb-10'>When the dragon returns to using electric blasts from his new angle, stand next to the Shatter Crystals opposite him. It’s easier (and a bit safer) for you to wait at this far side until he starts inhaling to throw your crystal and then quickly dodge to the side to avoid both the crystal explosion as well as any electricity he sends your way. Keep doing this to knock him to the ground and take another chunk out of his health. </p>
    <p className='text-white text-xl mt-10 mb-10'>As Kratos forms a new plan in this next phase, so too will the dragon. He’ll now alternate using claw slams from both claws, requiring constant readying of your shield. As he backs off after a few hits, he’ll also alternate spraying electric beam blasts in a large area in front of him, and launching lightning strikes into the air to follow you from the sky. Quickly grab a Shatter Crystal and dodge strikes until you see him prepare for another lighting blast, then throw and dodge. </p>
    <p className='text-white text-xl mt-10 mb-10'>Be ready to move both away from him and keep mobile to avoid the lightning strikes - and keep throwing crystals while dodging when you see him begin his electric attack. Do this enough times, and he’ll fall again. Hit him with another few combos, then signal Atreus to finish the job. Use the prompts when indicated, and the dragon will fall before your might. </p>
    <p className='text-white text-xl mt-10 mb-10'>Sindri will reward your heroism by giving Atreus new arrows, and with another idea in mind, will ask you to carve the tooth out of the dead dragon. This will get you a Dragon Tooth and Dragon Tear - and a lot of experience. </p>
    <p className='text-white text-xl mt-10 mb-10'>Give him the tooth and he’ll enchant Atreus’ Bow to be able to shoot Shock Arrows - which can now be used to get rid of all the World Tree Sap you’ve been seeing in your adventures! </p>
    <p className='text-white text-xl mt-10 mb-10'>Remember that you can now switch between Light and Shock arrows to suit your needs, and both come with specific skill sets you can upgrade in your Skills Tab. While Light Arrows are great for stunning and weakening, Shock arrows can electrocute enemies and zap chain lightning between multiple targets. </p>
    <p className='text-white text-xl mt-10 mb-10'>Your tangle with the dragon has put you on the opposite side of the mountain, and there’s still a climb to be done to reach the top, leave Sindri behind and re-enter the mountain through the large cave entrance. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location</h3>
    <p className='text-white text-xl mt-2 mb-2'>As you enter this new cave, turn right and you’ll find World Tree Sap encasing a Legendary Chest in a small rooms. Have Atreus shoot it with his shock arrows to unlock the chest, and gain Tyr’s Revenge - a Light Runic Attack.</p>
  
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Look for a scaffolding you can climb up to the next level, where a Hel-Reaver will be possessed by a Nightmare Parasite - giving him stronger electric attacks in the process. Dodge his strikes and pummel him until the parasite is expelled and then finish it off. After killing them, look behind you for a ledge past the cliff you climbed up, and hop across to a Hacksilver Chest. </p>
    <p className='text-white text-xl mt-10 mb-10'>Before you is a large lift and a wheel mechanism, but World Tree Sap has encrusted two parts of the lift. Look behind the lift to the left side to spot the Shatter Crystal and have Atreus take aim to blow it apart. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Artifact Location</h3>
    <p className='text-white text-xl mt-2 mb-2'>After the wall of sap is gone, there will still be some shatter crystal left - more importantly, a path through the opened area leads to a dead man holding one of the Bottoms Up Artifacts - a large handled mug.</p>

    </div> 

    <p className='text-white text-xl mt-10 mb-10'>Since some of the Shatter Crystal still remains, use the wheel mechanism to lift it up next to the World Tree Sap and have Atreus hit it to explode the heavy rocks, sending them (and some Nightmares) crashing down. </p>
    <p className='text-white text-xl mt-10 mb-10'>Climb up the new path into a darkened corridor, and swap to Light Arrows to hit a crystal torch further up - bringing in more Hel-Reavers and Nightmare Parasites. </p>
    <p className='text-white text-xl mt-10 mb-10'>Watch out for the javelin-throwing reaver above as you take down the two below, and quickly kill the Parasite when it leaves one of the bodies. After they die, check the area they burst out of on the right to find a stone to give health, rage, or experience. </p>
    <p className='text-white text-xl mt-10 mb-10'>Up ahead, you’ll pass a World Tree Sap blocked passage to find Hel-Reavers praying to something. Engage them quickly - but watch for the Heavy Weapon-wielding enemy: A Hel-Viken. Like the Heavy Dragur, he can deal massive damage with big attacks that are either hard or impossible to block, and he’ll block your attacks and throws with his weapon. He can also plant his weapon in the ground to send frost fissures at you, and takes a lot of stunning to open up a weak spot. </p>
    <p className='text-white text-xl mt-10 mb-10'>Keep dodging around him while punching wherever you see an opening to build up his stun meter for a good finishing move - though you may have to do it twice with the amount of health this enemy possesses. Be sure to loot him for goods like a Symbol of Perseverance. </p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lore Location</h3>
    <p className='text-white text-xl mt-2 mb-2'>Look around the cliff here for some Shatter Crystal growing and take some, then return to the hall and toss it at the wall of World Tree Sap and have Atreus detonate it. Inside you’ll find a Jotnar Shrine with the history of Ymir.</p>

    </div> 

    <p className='text-white text-xl mt-10 mb-10'>Leave the nearby Nornir Chest for a moment and take a look at the raised bridge you need to get to. It’s encrusted with World Tree Sap, so grab a nearby Shatter Crystal and toss it over to have Atreus shatter the thing - but it will only lower to the floor above. Since it’s also covered in sap, toss a crystal at one of the upper pillars and have Atreus break that one too so you’ll have a path to the other side where Hel-Reavers await. While the ranged attackers may get powered up by the Nightmares, their projectiles won’t stagger you, but they are harder to reflect back - so rush them and stun them to get the Parasite out of their bodies. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Idunn Apple Location</h3>
    <p className='text-white text-xl mt-2 mb-2'>Head back down past the Nornir Chest the Reavers were praying to and go to the room with the Jotnar Shrine, where you can look up to the right to find the “N“ looking rune.</p>
    <p className='text-white text-xl mt-2 mb-2'>Head back up the bridge and look to the side of the bridge to spot the “C” looking rune to the side of some scaffolding. On the other side of the bridge you came up is a wheel mechanism you can use to raise the bridge back up to where you had to explode the world tree sap.</p>
    <p className='text-white text-xl mt-2 mb-2'>Take out your axe and freeze the gear nearby and hold it in place, and go up and look right to find the “R” looking rune. Return back down to the chest and open it to get another Idunn Apple.</p>
    
    </div> 

    <p className='text-white text-xl mt-10 mb-10'>Be sure to return to the top level using the bridge to also find a stone granting health, rage, or experience, as well as a Coffin up here that holds a little surprise! Deal with the surprise and you’ll get a Hardened Svartalfheim Steel and a Sturdy Sign of Perseverance. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lore Location</h3>
    <p className='text-white text-xl mt-2 mb-2'>At the top of the bridge, there’s a Lore Marker that’s encased in sap. To reveal it, head back down the bridge and grab some Shatter Crystal to toss on it, and after exploding it, have Atreus decipher The Long, Cruel War.</p>

    </div> 
    
    <p className='text-white text-xl mt-10 mb-10'>Head down the remaining passage past the Lore Marker until you reach a scaffold, and climb it up to a door leading back out to your goal: The Summit.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you slowly cross the deep snow to your goal, many Hel-Reavers will try and stop you. Engage them carefully, making sure not to get hit by their frost attacks that can enrage some of them. Make liberal use of your Runic Attacks and Atreus’ Runic Summon to knock them off-guard and try using your fists to rack up stun damage to end them quickly. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Artifact Location</h3>
    <p className='text-white text-xl mt-2 mb-2'>As you reach the gate to the summit, be sure to look left real quickly to find a dead body behind a large rock.</p>
    <p className='text-white text-xl mt-2 mb-2'>He carries one of the Bottoms Up Artifacts: A large cup and holder.</p>

    </div> 

    <p className='text-white text-xl mt-10 mb-10'>Strange blue roots block the entrance to the summit, but luckily there’s a crack in the rock to the side that you can climb up towards the sound of voices - one of them is ominously familiar. As you finally learn the name of your pursuer, keep climbing around the cliffside and finally up to the top near a great tree. As the scene unfolds, you’ll learn that this is in fact not your final destination, but plans will be made to see you to a new realm where your true goal lies. </p>
    <p className='text-white text-xl mt-10 mb-10'>To continue following our complete God of War walkthrough, be sure to click the link below to jump to our next walkthrough guide. </p>
   

    </div>
    
    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Home</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>A New Destination</p>

    </button>

    </div>

    </motion.div>

  )
}

export default Gow5