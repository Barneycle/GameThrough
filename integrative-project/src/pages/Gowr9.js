import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const GOWR9 = () => {

    useEffect(() => {

        window.scrollTo(0, 0);
      
      }, []);

    const navigate = useNavigate();
  
      const handlePrevious = () => {
  
          navigate('/gowr8');
      
      };
  
      const handleNext = () => {
  
          navigate('/gowr10');
      
      };
  
    return (
  
        <div className='mx-auto h-screen max-w-[1240px]'>
  
        <h1 className='text-5xl text-white font-mono p-10 text-center'>The Word of Fate</h1>

        <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>
    
        <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
        <h3 className='text-white font-mono text-2xl'> This walkthrough will include story spoilers for the third quest, Old Friends, so proceed with caution.  </h3>
    
        </div>

        <div className='p-20 items-center justify-between'>

        <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Travel to Midgard</h2>

        <p className='text-white text-xl mt-10 mb-10'>Hoping the Norns can help provide the answers needed, it’s time to travel to Midgard with Freya. However, before speaking with Brok by the door, it’s crucial that you speak with Sindri and purchase any necessary upgrades or equipment you might need, as with stakes this high, who knows what you could encounter out there. Now is also an excellent time to upgrade and unlock new skills for both Kratos and Freya.  </p>

        <p className='text-white text-xl mt-10 mb-10'>Once you’re ready to continue, speak with Brok by the front door, where he’ll return Kratos’ Guardian Shield, all fixed and brand new. Then, outside, head to the Mystic Gateway and travel to Midgard.  </p>

        <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find the Wolves at the Kennel</h2>

        <p className='text-white text-xl mt-10 mb-10'>Arriving at Kratos’ home, follow Freya to the wolves at the kennel and interact with the sled by the fire. Having prepped the sled, open the gate by Freya.  </p>

        <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Follow the Wolves to the Norns</h2>

        <p className='text-white text-xl mt-10 mb-10'>Upon opening the gate, climb onto the sled and command the wolves forward, where they’ll lead you to the Lake of Nine. Once you arrive, the wolves will begin to track the scent of the Norns.  </p>
        <p className='text-white text-xl mt-10 mb-10'> However, with no waypoint marker to guide you, you’ll need to watch the wolves' movement, specifically the direction in which their heads are pointing, to find the path you must travel. </p>
        <p className='text-white text-xl mt-10 mb-10'> If you observe their movements carefully, they’ll eventually lead you to the northeast corner of the lake, where you’ll stop by a ledge. We’ve provided the location in the image above if you’re stuck. </p>
        <p className='text-white text-xl mt-10 mb-10'>Unable to travel any further by sled, climb the ledge and follow the path forward – be sure to pick up the two Hacksilver pouches found by the fallen enemies to your left along the way.  </p>
        <p className='text-white text-xl mt-10 mb-10'>Reaching King’s Grave, jump down the ledge to the ground below, where you're ambushed by a group of Raiders, Hel-Raiders, and a Fierce Ogre. Thankfully, the area where you encounter the enemies is quite large, so you’ll have plenty of room to avoid their quick and powerful melee attacks.  </p>
        <p className='text-white text-xl mt-10 mb-10'>As for the Fierce Ogre, he’s incredibly slow-moving, so you’ll have no trouble kiting him around the outskirts of the area. However, as long as you’re moving, the Ogre won’t be able to use its punishing melee strikes or slam attacks on you. Additionally, you can also opt to use the large stone pillars as further obstacles while they’re still standing.  </p>
        <p className='text-white text-xl mt-10 mb-10'>Much like your encounter with the Flame Gradungr, some of the attacking Hel-Raiders will have unique Life Bars that protect their health, so you’ll need to attack with the correct weapon to deplete this Life Bar before dealing real damage. It’s also worth noting that these enemies possess a Runic Armor buff, meaning they can not be interrupted by Runic Attacks.  </p>
        <p className='text-white text-xl mt-10 mb-10'> With that in mind, you’ll want to ensure you’re using your Blades of Chaos to take down the Hel-Raiders with the protective Life Bar. </p>
        <p className='text-white text-xl mt-10 mb-10'>Clearing the area, head to the middle and interact with the pile of rubble to receive the Inert Hilt of Skofnung. Then, with the magical powers of the hilt clearing the path forward, follow Freya.  </p>
        <p className='text-white text-xl mt-10 mb-10'>Before Freya beings to dispel the Norns illusions, loot the Red Coffin to receive Dwarven Steel and some Hacksilver. Revealing a dead-end, continue right, where you’ll find a Mystic Gateway and latch by the ledge, which you can kick down to create a shortcut.  </p>

        <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Continue Tracking the Norns</h2>

        <p className='text-white text-xl mt-10 mb-10'>To continue tracking the Norns, return to your sled and watch as the wolves begin to pick up the Norns scent again, leading you to the far southwest corner, up a path littered with destroyed ships.  </p>
        <p className='text-white text-xl mt-10 mb-10'>You’ll reach an old derelict outpost at the end of the path. Once you’re ready, exit the sled and climb over the fallen ship mast, where you’ll find one of Odin’s Ravens sitting inside a hole in the underside of the boat’s hull – below this, you’ll find a Hacksilver pouch beside a fallen enemy.  </p>
        <p className='text-white text-xl mt-10 mb-10'> Once collected, follow Freya along the path, looting the Hacksilver chest and Healthstones. Then, reaching yet another potential secret path, have Freya work her magic on the wall, revealing yet another dead-end. </p>
        <p className='text-white text-xl mt-10 mb-10'>Before returning to your wolves, head left beneath the stone arch, where you’ll find more Healthstones and unlock a Mystic Gateway.  </p>
        <p className='text-white text-xl mt-10 mb-10'>When returning to your wolves, you’ll be ambushed by a Frost Gradungr and more Raiders. Thankfully, the Frost Gradungr is much like its cousin, the Flame Gradungr, which uses all of the same attacks, but will instead use ice instead of fire.  </p>
        <p className='text-white text-xl mt-10 mb-10'> Like facing the Fierce Ogre, you’ll want to use your Blades of Chaos to deplete the Frost Gradungr’s protective Life Bar. </p>
        <p className='text-white text-xl mt-10 mb-10'> If you’re struggling to deal damage, we recommend using the large tree trunk in the area to deal some hefty AoE damage to any surrounding enemies. </p>
        <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, return to your wolves and follow the new trail they have picked up – this one will lead you up a path to the northwest corner of the lake.  </p>
        <p className='text-white text-xl mt-10 mb-10'>Upon arriving, climb over the stone pillar and continue up the path.  </p>
        <p className='text-white text-xl mt-10 mb-10'> Before climbing the ledge, look west, where you’ll discover a Nornir Chest. Here’s how you can complete it. </p>

        <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Well of Urd - Nornir Chest 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>The C Rune will be across to the left of the Nornir Chest, close to where you can start the climb up the cliff. </p>
    <p className='text-white text-xl mt-2 mb-2'> The N Rune will be at the top of the cliffs: use the grapple points close to the C Rune to get up top. When you’re there, the N Rune will be on your left. </p>
    <p className='text-white text-xl mt-2 mb-2'> The R Rune you may have spotted on your way up. To access it, simply drop down from where the N Rune was to the middle level. It’ll be up on the left-hand wall. </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once you’re ready to continue, climb the ledge and grapple across the gaps until you reach the top. From here, collect the Hacksilver pouch just to your right, and then continue toward Freya, where you’ll need to use your Axe to clear a way through the ice.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Before doing so, you can take a slight detour down the ledge to your left, where you’ll find a Hacksilver chest and the R Rune for the Nornir Chest.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Upon clearing the way through the ice, you’ll encounter another group of Raiders – defeat them to continue.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, climb up the rock face. Before reaching the top, you’ll have the opportunity to climb left, where you’ll find a Legendary Chest nearby.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Well of Urd - Legendary Chest 1</h3>
    <p className='text-white text-xl mt-2 mb-2'> Just before reaching the top, you’ll have the option to keep climbing up or go left: you’ll want to go left.</p>
    <p className='text-white text-xl mt-2 mb-2'>  Here, turn around and look for the broken square spot on the cliff wall. Then, drop down the cliff's edge – be sure to pick up the Hacksilver pouch to your right before dropping down – and you’ll be able to smash through it, with the chest found directly in front of you.</p>
    <p className='text-white text-xl mt-2 mb-2'> The chest contains the Rond of Purification. This item, when equipped, means that should Kratos become afflicted by Frost, Burn, Poison, or Bifrost, performing a Shield Strike (double-tapping L1) will cleanse him of the ailment and deal that status damage to the target! </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>When reaching the top, defeat the group of Raiders – avoid taking damage as much as possible, as you’ll be limited on Healthstones throughout this battle.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Well of Urd - Odin’s Raven 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>Once you’ve defeated all of the Raiders at the top, face East, and you’ll see the Raven perched on top of a ruined stone column.  </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Head inside and follow the path right – you’ll find a Hacksilver chest to your left not too far in after entering the cave.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Jump down the ledge and loot the Hacksilver pouch next to the fallen enemy to your left. You will also find another Hacksilver pouch on the ground just further ahead. With the path blocked, use your Blades of Chaos to burn the Bramble on the wall to your right to reveal some cliff holds you can climb and grapple across to the ledge above.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once you reach the ledge above, loot the Hacksilver pouch and chest to your right, and before you can near the Red Coffin, you’ll encounter a powerful Traveler, whose armor is reinforced and cumbersome, so getting through it will be your biggest challenge.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'> During our encounter, we found that defeating the Traveler was completely optional, as once he spawns, you can run through the tunnel and into the clearing ahead, and he will not follow. Here's what you'll be missing out on in terms of reward: Healthstone, Ragestone, Hacksilver pouch, and some Bonded Leather.</p>
    </div>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat the Traveler</h2>

    <p className='text-white text-xl mt-10 mb-10'>Featuring a five-sectioned health bar, defeating the Traveler won’t be easy, as his reinforced armor will mean neither your Axe nor Blades of Chaos can break through. So, you’re going to need to get creative with your damage.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Thankfully, the Traveler is extremely slow-moving, so as long as you’re watching his two primary attacks (an unblockable sword slam and a break block sword swing) and dodging out of the way as quickly as possible, your chances of taking damage are quite slim. </p>
    <p className='text-white text-xl mt-10 mb-10'>As the battle progresses, though, he will incorporate a new attack that sees him raising his hand in the air as he charges a powerful shockwave that will generate immense damage and leave you somewhat blinded. The charge-up is quite lengthy, so as long as you act quickly and retreat to safety, you’ll avoid taking damage.  </p>
    <p className='text-white text-xl mt-10 mb-10'>It’s important to note that the shockwave AoE is very large, so you’ll need to back away as far as possible. Due to his slow movements, we found it was best to lure him from one side to the other; this allowed us ample time to unleash damage, while also ensuring we always had enough space to avoid the attack.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'>Never back yourself up against a wall. Not only will this make dodging attacks more difficult, but it’ll also mean you will have much less time to avoid his damaging AoE attack. </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>In terms of damage, the most effective method we found to defeat the Traveler was to use our Blades of Chaos – charging them before an attack made a notable difference. While you won’t be able to penetrate the Traveler’s armor with your Axe or Blades, that doesn’t mean he’s not susceptible to burn and fire damage. So, we found that spiking our Blades into the ground in front of him with R2 would create a heavy burn explosion that would deal quite a bit of damage.  </p>
    <p className='text-white text-xl mt-10 mb-10'>And if you’re wondering, getting in close was never an issue, as the Blades of Chaos have quite a bit of range to them, so by the time he moved close enough to launch an attack, we were able to dodge out of the way. Unfortunately, we also found that Freya wasn’t much help throughout this battle, as she wasn’t able to penetrate his armor. But, with that said, we did find her Vanir Magic to be exceptionally helpful – but if you don’t have those unlocked, it’s not too much of a big deal.  </p>
    <p className='text-white text-xl mt-10 mb-10'>In addition, we found the charged light attacks helpful, especially when the Traveler was inflicted with the burn status. Still, the damage was often minimal, so we mostly opted to defeat him with our spiked explosion method.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Lastly, if you require health, you’ll find a single Healthstone just past the Red Coffin by the wall, as well as a stone pillar that Kratos can launch into the Traveler to deal some rather helpful damage.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return to the Wolves and Continue Tracking the Norns (Continued)</h2>

    <p className='text-white text-xl mt-10 mb-10'>After defeating the Traveler, loot the Red Coffin to receive Stonewood and some Hacksilver. Upon looting the coffin, continue through the small tunnel and into the clearing, where you’ll encounter two Dark Elf Warriors – Freya’s Sigil arrows are especially helpful during this encounter.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Once defeated, collect the Healthstone in the southeast corner and proceed over the fallen log southwest. Turn left a few meters ahead, and you’ll find two Hacksilver pouches on the ground beside fallen enemies. </p>
    <p className='text-white text-xl mt-10 mb-10'>After collecting the Hacksilver, follow the path over the bridge, where you’ll encounter a group Hel-Reavers and a Gulon. Once defeated, continue along the trail, where you’ll also find a Healthstone beside a fallen enemy – collect it.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Not too far ahead, you’ll encounter two more Gulons and a Dark Elf Warrior that you’ll need to defeat. Once the area is clear, loot the Red Coffin to your right, which contains Stonewood and some Hacksilver. Then, continue up the path toward the wall you’ll need to climb, where a Hel-Revenant will stop you. </p>
    <p className='text-white text-xl mt-10 mb-10'> This powerful creature will spawn two Ice Nightmares, which we recommend defeating first to avoid taking any unexpected damage from their icy attacks when your attention is focused elsewhere. </p>
    <p className='text-white text-xl mt-10 mb-10'>Once dealt with, it’s time to take down the Hel-Revenant, but its quick movements and unblockable ice quake that it’ll send toward you can make the battle a little challenging.  </p>
    <p className='text-white text-xl mt-10 mb-10'>During our encounter, we found it best to stay at a distance, using Freya’s Hex arrows to temporarily stun the creature for a brief moment, where you can then unleash Axe combos.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Dealing with the Revenant, loot your rewards, followed by the Hacksilver pouch and chest down the path to your left, and then proceed to climb up the wall. Here, you’ll encounter a Frost Phantom.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat the Frost Phantom</h2>

    <p className='text-white text-xl mt-10 mb-10'>Despite having a health bar split into four separate sections, you will destroy two bars simultaneously; this damage is dealt automatically when destroying the Springs over the two phases.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'>Hit the Phantom’s core to build stun. Strike when it’s glowing to stagger it. </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Here are some quick tips and tricks for taking down the Frost Phantom: </p>
    <p className='text-white text-xl mt-10 mb-10'> As Freya suggests at the beginning of the battle, it's crucial to your success to attack the Phantom's core at every opportunity. The more you can stagger the Phantom, the quicker you'll be able to stun the creature, ending the battle.  </p>
    <p className='text-white text-xl mt-10 mb-10'> When staggering the Phantom, it'll only be downed for a short period, so you'll want to ensure you constantly recall your Leviathan Axe as quickly as possible after each attack. This way, you'll always have your Axe ready and available when the Phantom is staggered. </p>
    <p className='text-white text-xl mt-10 mb-10'>  The Phantom's attacks are pretty forgiving in the AoE department, as you'll find that you often have time to toss your Axe at the core before having to dodge out of the way to avoid any incoming attacks. </p>
    <p className='text-white text-xl mt-10 mb-10'>  Standing close to the Frost Phantom will offer no advantages and will make you vulnerable to quick melee attacks that are challenging to block. So, be sure to stand at a distance, traveling around the outskirts to avoid taking damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>  If you need health, you'll find plenty of Healthstones scattered about the area's outskirts, often beside fallen enemies.</p>
    <p className='text-white text-xl mt-10 mb-10'>  While the best time to target the Frost Phantom's core is when it's glowing, which occurs when it's performing an attack, don't hesitate to throw your Axe at its standard core, as every bit of stagger damage will ultimately help stun the creature faster. </p>
    <p className='text-white text-xl mt-10 mb-10'> If you're struggling with health, don't be afraid to run away from its attacks, as most revolve around targeting your last known location.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Frost Phantom - Phase One</h2>

    <p className='text-white text-xl mt-10 mb-10'>Across the first and second phases of the Frost Phantom battle, your primary focus will be to attack the Phantom's core to build stun, indicated by the large white bar beneath its main health bar.  </p>
    <p className='text-white text-xl mt-10 mb-10'>While your primary focus will be to hit the Phantom's core to build stun, striking the core while it's glowing will stagger it for a short moment, leaving it vulnerable to heavy melee damage, which will help fill the stun bar quickly.  </p>
    <p className='text-white text-xl mt-10 mb-10'> During this phase, you'll need to keep an eye out for several attacks that include: </p>
    <p className='text-white text-xl mt-10 mb-10'>      Tail Swipe Attack (Block Break) - When standing within melee range, the Phantom will swing its tail toward you in a quick swiping motion.</p>
    <p className='text-white text-xl mt-10 mb-10'>     Orb Toss Attack (Blockable) - When crouching, the Phantom will toss orbs out to your location, indicated by glowing circles on the ground. </p>
    <p className='text-white text-xl mt-10 mb-10'>      Tidal Wave Attack(Unblockable) - Rearing up into the air, the Phantom will form a tidal wave shape, which will see it crashing down into the ground for a significant unblockable AoE attack. Thankfully, this attack can be partially blocked by either of the two stone Springs in the area.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you've filled the core's stun bar, you'll need to destroy the purple glowing Spring that'll appear in one of the two stone pillars in the area. When using your Axe to destroy the pole, you'll deplete two whole health bars.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Frost Phantom - Phase Two</h2>

    <p className='text-white text-xl mt-10 mb-10'>The process for defeating the Frost Phantom in phase two is nearly identical; however, you will need to be wary of three new attacks that will occur.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Here are the new attacks that will occur throughout the second phase:  </p>
    <p className='text-white text-xl mt-10 mb-10'>      Slam Attack - After dealing melee damage to the Phantom after briefly being stunned, it'll perform a slam attack that will see it crashing down into the ground, creating a small AoE shockwave. The glowing rings around the boss indicate the AoE of this attack.</p>
    <p className='text-white text-xl mt-10 mb-10'>      Shock Wave - Rearing up, the Phantom will crash into the ground, sending a wave of damage your way. You'll need to ensure you're backing up as quickly as possible -- the AoE for this attack is quite large, so you'll need to be very far away to avoid taking damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you've filled the stun bar, you'll be prompted to destroy the final Spring in the area. After destroying the Spring, the Phantom will rise, and you'll need to target its core once more before you can perform the finishing move (R3).  </p>
    <p className='text-white text-xl mt-10 mb-10'> Upon defeating the Frost Phantom, you will receive a Healthstone, Ragestone, Honed Metal, Stonewood, Dwarven Steel, Bonded Leather, Shattered Runes, Chaos Flame, and a Jewel of Yggdrasil as a reward. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return to the Wolves and Continue Tracking the Norns</h2>

    <p className='text-white text-xl mt-10 mb-10'>Once you’re ready to continue, loot the area of any unused Healthstones and lift the large stone pillar west. Then, follow the path forward, where you'll find another Healthstone by the fallen enemies just ahead.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Climb the set of ledges and loot the Red Coffin to your right to receive Stonewood and Hacksilver before heading into the cave, where you’ll find a door.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Before too long, you'll be overrun by a group of Legion; we found the Blade of Chaos' light attacks to be the best here, as they helped keep the creatures at bay.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’ve defeated all of the Legion, you’ll enter a scene with Mimir, where you’ll need to free him from the tree, but Sigrun will stop you. While you won’t need to defeat the entire onslaught of Reavers, Exploding Nightmares, and Hel-Revenants, you will need to last for quite some time, so we recommend using Kratos’ rage if you’re running low on health.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Next, Kratos will have his own dream-like sequence, where you’ll have to defeat a large group of Einherjar and Raiders. </p>
    <p className='text-white text-xl mt-10 mb-10'>After the short cutscene, follow Freya, where you’ll encounter a Kelpie. Taming the creature, climb up and watch as it leads you to the Norns’ hideout.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once inside the unexpected location, follow the path forward and open the vines, where you’ll enter a cutscene that sees the group speaking with the Norns.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Revealing Heimdall's plan to kill Atreus, return to the Kelpie, who will lead you back to the surface. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Leave the Norns</h2>

    <p className='text-white text-xl mt-10 mb-10'> Ready to leave, follow the path into the cave – you’ll find a Hacksilver pouch to your right when first entering – and jump down the ledges. Before leaving the cave, jump across the gap to your right to find a Red Coffin containing Dwarven Steel and some Hacksilver. </p>
    <p className='text-white text-xl mt-10 mb-10'> Once looted, continue forward; you’ll find another Hacksilver pouch beside a fallen enemy to your left when entering the next small cave. </p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, climb up to the ledge above. Reaching the top, turn right at the brazier to find another Hacksilver chest.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Before breaking through the roof, squeeze through the gap just right of the wall to find a Red Coffin containing Honed Metal and some Hacksilver.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Returning to the main path, retrace your steps and use the zipline as a shortcut to return to the wolves. After using the zipline, you’ll find a Hacksilver pouch and chest to your left.  </p>
    <p className='text-white text-xl mt-10 mb-10'>When returning to the wolves, follow them down the path until you reach one Sindri’s Workshop and a Mystic Gateway nearby. Before returning to Sindri’s place, speak with Sindri at his workshop to upgrade your equipment.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Lake of Nine - Lore 1 - Tyr’s Left Bracer</h3>
    <p className='text-white text-xl mt-2 mb-2'> Before returning to Sindri's through the Mystic Gateway, head southeast a short distance, where you’ll find Tyr’s Gauntlets of Guiding Light on the ground beside the Rune Read. </p>
    <p className='text-white text-xl mt-2 mb-2'> This Lore is part of the Guiding Light Favor and can be found on the bracelet of the Tyr statue’s arm close to the Lake of Nine Mystic Gateway. </p>
    </div>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Ask the Dwarves</h2>

    <p className='text-white text-xl mt-10 mb-10'>Once inside, speak with Sindri and Brok at their workshop to request help defeating Heimdall. Knowing the perfect item that can help, the pair will attempt to reconstruct Draupnir, but before doing so, you’ll need to acquire a few more things from Svartalfheim.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Travel to Svartalfheim</h2>

    <p className='text-white text-xl mt-10 mb-10'>Once you’re ready to continue, head to the Mystic Gateway and make your way to Svartalfheim with Brok, Freya, and Mimir – this will conclude the mission.  </p>

    </div>

<div className='mx-auto grid md:grid-cols-2 gap-2'>

<button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

<div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
<p className='items-center mt-2 text-xl text-white'>Into the Fire</p>

</button>

<button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

<div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
<p className='items-center mt-2 mb-2 text-xl text-white'>Forging Destiny</p>

</button>

</div>

</div>
)
}


export default GOWR9