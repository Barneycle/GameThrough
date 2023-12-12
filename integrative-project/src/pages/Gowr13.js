import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Gowr13 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/gowr12');
    
    };

    const handleNext = () => {

        navigate('/gowr14');
    
    };

  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>Creatures of Prophecy</h1>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
    <h3 className='text-white font-mono text-2xl'>This walkthrough will include story spoilers for the first quest, Surviving Fimbulwinter, so proceed with caution.</h3>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Travel to Vanaheim, When Ready</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Following the cutscene, now is the perfect time to use up your available XP to purchase new Skills, Skill Mods, or upgrades for abilities like Runic Attacks and Rage. In addition, we highly recommend that you speak with Sindri and Brok at their workshop to purchase any new equipment upgrades before embarking to Vanaheim to help Freya free her brother from the Einherjar.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once ready to continue, journey to the Mystic Gateway by Freyr’s Camp.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Reach Freyr’s Camp</h2>

    <p className='text-white text-xl mt-10 mb-10'>Arriving in Vanaheim, have Atreus destroy the Soundstone on the nearby log and board the canoe.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before following the river right toward Freyr’s camp, be sure to pick up the Yggdrasil’s Dew that’s found along the bank of the river, directly across from the log you destroyed – this will grant +2 Vitality.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once collected, continue right – grabbing the Hacksilver barrel along the way – until you reach the beach. From here, throw your Draupnir Spear into the two Wind Vents to create rod swings to cross the gaps.</p>
    <p className='text-white text-xl mt-10 mb-10'>Following the path into Freyr’s camp, you’ll have the chance to uncover two collectibles, a Rune Read and a Legendary Chest, if you haven't already collected them.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Freyr’s Camp - Lore 2 - Vanaheim Lullaby</h3>
    <p className='text-white text-xl mt-2 mb-2'>As you’re traveling into Freyr’s Camp, you’ll come across two large wooden boats leaning up against a large stone – you’ll find the Rune Read depicting one of Vanaheim’s lullabies.</p>

    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Freyr’s Camp - Legendary Chest 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>Chest Contains:</p>
    <p className='text-white text-xl mt-2 mb-2'>From the Vanaheim Lullaby Rune Read, take the path northwest and jump across to the other side of the stream. Use your Draupnir Spear on the Wind Fissure to reveal a short path that leads to the Legendary Chest.</p>

    </div>
    
    <p className='text-white text-xl mt-10 mb-10'>Once you’re ready to continue, head to the center of Freyr’s camp, where you’ll find that it has been abandoned.</p>
    <p className='text-white text-xl mt-10 mb-10'>After interacting with the leftover food by the campfire, you’ll enter a cutscene with a Vanir Archer, who turns out to be Hildisvini, the boar that Atreus injured in the previous game.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Walk with Hildisvini</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Following the cutscene, follow Hildisvini as he leads you outside the camp's gates. Learning that he requires your assistance to check on Skoll and Hati, before doing so, though, you’ll need to destroy a large boulder that’s blocking your way forward – use your Draupnir Spear on the Wind Fissure to clear the path.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find Skoll and Hati</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Now that the path is clear, continue forward and grapple across the gap. Keep following the trail a short distance and squeeze through the tree roots after climbing over logs.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat the Fierce Stalker</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Emerging from the other side, you’ll encounter a Fierce Stalker. If you took down the Yggdrasil Rift at The Forge during Forging Destiny, you should be well prepared to take down the Level 4 creature; however, if not, here are some handy tips to help you defeat the creature.</p>
    <p className='text-white text-xl mt-10 mb-10'>Do note that both the Leviathan Axe and Blades of Chaos are effective on the Fierce Stalker; however, we found the blades allowed us more breathing room to escape her lance swipes when we weren’t able to parry them.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white font-mono text-2xl'>Tips and Tricks for Defeating the Fierce Stalker</p>
    <p className='text-white text-xl mt-2 mb-2'>While most Stalkers prefer to use a bow, the Fierce Stalker has taken up a lance and has managed to perfect her skills with it.</p>
    <p className='text-white text-xl mt-2 mb-2'>Unlike standard Stalkers, the Fierce Stalker has a range of new attacks and abilities that you’ll need to be wary of, as one wrong move could land you in serious trouble.</p>
    <p className='text-white text-xl mt-2 mb-2'>Jousting Charge Attack</p>
    <p className='text-white text-xl mt-2 mb-2'>Indicated by yellow block break rings, the Fierce Stalker will come charging toward you with her lance. While the safest option will be to dodge out of the way just before she reaches you, you can also block the incoming attack or parry it at just the right time, stopping her in her tracks. Stunned for a brief moment, this is the perfect opportunity to unleash as much damage as possible onto her.</p>
    <p className='text-white text-xl mt-2 mb-2'>Stomp and Kick Attack</p>
    <p className='text-white text-xl mt-2 mb-2'>When you’re within melee range, there’s a chance the Fierce Stalker will rear up on its hind legs before slamming its front hooves into you. This attack is blockable, but a well-timed parry will leave her temporarily stunned.</p>
    <p className='text-white text-xl mt-2 mb-2'>Swipe and Slam Attack</p>
    <p className='text-white text-xl mt-2 mb-2'>Much like the Stomp Attack, the Fierce Stalker will perform three consecutive swipe attacks that can be blocked and parried when timed just right. However, she’ll often combine this attack with two unblockable swipe variants indicated by red circles.</p>
    <p className='text-white text-xl mt-2 mb-2'>While it depends on your positioning, we found that it’s best to roll backward when avoiding her swipe attacks, and side-to-side to avoid the slam attacks was the most ideal way to prevent taking damage.</p>

    </div>
    
    <p className='text-white text-xl mt-10 mb-10'>Just be warned, though, towards the end of the fight, several exploding Wisps will enter the fight; you’ll want to destroy these while keeping at a distance. If you’re too close, they’ll lodge themselves into the ground, creating a large ring that will see them electrocuting anyone inside.</p>
    <p className='text-white text-xl mt-10 mb-10'>Being an Ephemeral begin, they can’t be hit by most attacks, so you’ll want to lock them down with a Runic Arrow before they can be attacked. Once vulnerable, the wisps can then be dealt with in a single hit, causing them to be knocked away and explode – damaging nearby enemies with a bit of luck.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon defeating the Fierce Stalker, you will be rewarded with a Healthstone, Ragestone, and some Bonded Leather.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find Skoll and Hati (Continued)</h2>
   
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, loot any Healthstones scattered about and continue through the gap beneath the wooden structure nearby. Jump across the gap and grapple up the ledge above – collect the Healthstone to your left, then jump down to the ground below.</p>
    <p className='text-white text-xl mt-10 mb-10'>Here, you’ll be attacked by a group of Cursed Gulons controlled by a Nokken. You’ll need to defeat this sneaky Seidr creature before taking down the Gulons, as their rhythmic chant will make enemies under their control invulnerable to damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>When taking down the Gulons, be wary of their explosive ring that appears on the ground upon dying – standing inside this ring upon exploding will cause significant damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, you’ll be able to uncover a Legendary Chest nearby that contains the Tap to Reveal. Here’s what you need to know about accessing the chest.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Freyr’s Camp - Legendary Chest 2</h3>
    <p className='text-white text-xl mt-2 mb-2'>Chest Contains - Axe Heavy Runic Attack - Leviathan’s Roar.</p>
    <p className='text-white text-xl mt-2 mb-2'>Upon clearing the area of Nokken and Gulons, look toward the large stone wall by the river – here, you’ll spot a Wind Fissure on the wall that can be destroyed with your Draupnir Spear. Climbing the now exposed rock holds, reach the top and proceed to climb across the wooden beams, toward the Legendary Chest in the distance.</p>
    <p className='text-white text-xl mt-2 mb-2'>While the Runic Attack may not be extremely powerful, it’s among the fastest Heavy Runic in the game and will deal much more Stun damage when upgraded.</p>
   
    </div>
    
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue with the story, head northeast and climb beneath the tree roots.</p>
    <p className='text-white text-xl mt-10 mb-10'>When reaching an intersection ahead, turn right and use your Draupnir Spear to destroy the Wind Fissure.</p>
    <p className='text-white text-xl mt-10 mb-10'>Continue through the newly cleared path and collect the Hacksilver pouch beside the fallen enemy to your left – beware of the explosive plant that’ll spit acid toward you when looting the pouch. When reaching the intersection, look at the tree to your west to discover one of Odin’s Ravens sitting atop it.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before continuing left, you’ll discover some Red Fungi Bramble hiding a Red Coffin containing Asgardian Ingot, Dwarven Steel, and some Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon igniting the Bramble, you’ll encounter two Cursed Tatzelwurms and a Cursed Nokken that’ll attempt to control them – defeat them, but be wary of the poison they’ll spit.</p>
    <p className='text-white text-xl mt-10 mb-10'>Continue through the newly cleared path and collect the Hacksilver pouch beside the fallen enemy to your left – beware of the explosive plant that’ll spit acid toward you when looting the pouch. When reaching the intersection, look at the tree to your west to discover one of Odin’s Ravens sitting atop it.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>To prevent a Tatzelwurm from burrowing, be sure to either interrupt their burrowing animation with an attack or freeze them with your Axe to temporarily stop them from burrowing.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Having defeated the creatures and looted the Red Coffin, continue following the path until you reach a fork in the road – pick up the Hacksilver pouch bride the fallen enemy to your right.</p>
    <p className='text-white text-xl mt-10 mb-10'>From the fork, you can continue following the path straight to find Skoll and Hait’s den; otherwise, if you head left, up the curved path, you’ll discover The Aesir Promise Lore Scroll on the ground, as well as a Nornir Chest, which is guarded by a Wulver.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Eastern Barri Woods - Nornir Chest 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>After climbing up the curved path, you’ll discover the Nornir Chest at the top, beneath a large curved archway. Here’s the solution to locating all Rune letters needed to open the chest.</p>
    <p className='text-white text-xl mt-2 mb-2'>The D Rune is found on the stairs up here, close to the circular ruins. Look for it on the left-hand side at the base of a tree trunk. It’s covered in Hel’s Bramble: you can set up a Hex Bubble chain to reach it, but there’s also a spot to the left of the rock pictured above where Kratos can get close enough to reach it on his own. Hit the switch once on the left to turn it to the D Rune.</p>
    <p className='text-white text-xl mt-2 mb-2'>The F Rune is also very close to the Nornir Chest. To the left of the Nornir Chest is an archway: look between this archway and the Nornir Chest to spot the spinner. Hit it once on the right-hand paddle to get it onto the F Rune.</p>
    <p className='text-white text-xl mt-2 mb-2'>The C Rune’s Spinner is through the archway to the left of the Nornir Chest. Unfortunately, there’s a Wulver here dining on an unlucky Einherjar, so you’ll have to defeat it within incredibly tight quarters.</p>
    <p className='text-white text-xl mt-2 mb-2'>Once it’s down, stand at the end of the path looking South-West-ish, and you’ll spot the spinner in the distance in the ruin of a dome. Aim just a little above the right-hand paddle with the Leviathan Axe to spin it to the C Rune (the Draupnir Spear doesn’t have enough mass to turn it).</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>As you progress toward Skoll and Hati’s den, pick up any Healthstones you find along the way.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Recover the Stolen Moon</h2>

    <p className='text-white text-xl mt-10 mb-10'>Having seen the prophecy in which the Einherjar have taken the moon, you’ll need to return the moon to the sky to awaken the sleeping wolves. To do so, shimmy across the ledge that leads northwest and follow the path as you head toward the war camp near The Abandoned Village.</p>
    <p className='text-white text-xl mt-10 mb-10'>Not too far ahead, you’ll encounter a spitting plant and a Resource bucket hanging above the path. You’ll also find a Hacksilver pouch ahead to your left beside a fallen enemy.</p>
    <p className='text-white text-xl mt-10 mb-10'>Continuing along the path, you will soon stumble across two poisonous purple plants blocking the way – use your Axe to freeze it in order to pass.</p>
    <p className='text-white text-xl mt-10 mb-10'>After passing through the poisonous gas, you’ll encounter two Einherjar, who will eventually call for backup – defeat them and then proceed to break open the wooden gate with your Blades of Chaos.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon breaking through the gate, head inside the ruined building, where you’ll spot a new Einherjar enemy before they quickly teleport away. Collect the Rune Read on the wall to your left after the encounter.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once collected, drop down the nearby ledge and grapple across the gap to the distant hut, where you’ll spot the mysterious enemy again. Arriving in the hut, loot the Hacksilver coffin to your right, then leave through the left exit and continue forward until you reach a large vase covered in red rope.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before climbing the ledge to your right, you’ll find a Red Coffin at the end of the path ahead that contains Dwarven Steel and some Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>Having looted the coffin, continue up the ledge and use your Draupnir Spear to create a zipline across the pond. From here, destroy the Wind Fissure on the door, where you’ll learn that the area is empty.</p>
    <p className='text-white text-xl mt-10 mb-10'>Suspecting an ambush, search for any and all Healthstones and Ragestones around the area as needed, and then proceed to climb up to the platform in the northeast corner.</p>
    <p className='text-white text-xl mt-10 mb-10'>Here, you’ll encounter a variety of incoming Einherjar forces that range from standard Einherjar, Einherjar Warriors, and Einherjar Archers.</p>
  
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Tips for the Einherjar Ambush</h3>
    <p className='text-white text-xl mt-2 mb-2'>1. Like the initial battle in this location, be sure to take full advantage of the grapple points and large stone blocks that are scattered about the area. Not only do the stone blocks deal large amounts of enemies when tossed toward them, but the grapple points are fantastic methods for escaping enemies when you’re low on health, or simply need a moment to recuperate.</p>
    <p className='text-white text-xl mt-2 mb-2'>2. Since most Einherjar are quite slow to climb up onto the ledges, it's easy to lure them close by, where you can then rain down on them with a melee attack from above.</p>
    <p className='text-white text-xl mt-2 mb-2'>3. Einherjar Archers will continually close their guard with shields. You can break their guard when engaging in close-range combat and performing a Shield Strike or when using a Sigil Arrow, as this can disable their shield from a distance.</p>
    <p className='text-white text-xl mt-2 mb-2'>4. Running low on health or overwhelmed by the incoming forces? Don’t be afraid to run around the area, as it offers plenty of space to escape any pursuing Einherjar. As you explore the area, you’ll also find plenty of Healthstones about.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, return to the northeast platform and lower the chain down the ledge. As you reach the bottom, you'll encounter the Einherjar responsible for keeping the moon imprisoned, and she has fled with the moon.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Pursue the Einherjar Thief</h2>

    <p className='text-white text-xl mt-10 mb-10'>Pursing the Einherjar thief, follow Atreus as he climbs up the set of ledges, where you’ll soon be ambushed by another group of Einherjar that will burst through the stone wall.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once defeated, head beneath the large circular structure and take the path left to a small balcony. Here, you’ll find one of Odin’s Ravens perched beneath a statue embedded into the large tree across the pond, a Wind Vent southwest that you can plug with your Draupnir Spear.</p>
    <p className='text-white text-xl mt-10 mb-10'>After plugging the Wind Vent, swing across the gap and continue following Atreus, and you’ll be ambushed again when approaching the mysterious Einherjar.</p>
    <p className='text-white text-xl mt-10 mb-10'>Take down the Einherjar Warrior and use your Draupnir Spear to destroy the Wind Fissure located at the base of the waterfall. Then, using the newly revealed rock holds, climb up the waterfall. Upon reaching the top of the cliff, you’ll come face-to-face with the mysterious Einherjar thief and a Wyvern.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat the Einherjar and Wyvern</h2>

    <p className='text-white text-xl mt-10 mb-10'>As long as you’re moving about the area, parrying and blocking the few attacks sent your way, the Wyvern will mostly be distracted by Atreus.</p>
    <p className='text-white text-xl mt-10 mb-10'>If you can perfect the parries, the Wyvern's health will be passively depleted throughout the battle. For this reason, we recommend focusing most of your attention on the Einherjar thief, as her powerful attacks and protected health bar make for a deadly combo.</p>
    <p className='text-white text-xl mt-10 mb-10'>Here are some handy tips that you need to know about defeating each enemy.</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Tips for Defeating the Einherjar Thief</h3>
    <p className='text-white text-xl mt-2 mb-2'>1. Weak to the Levithan Axe, use the weapons charged frost attacks to quickly and effectively deplete the Einherjar Thief’s protected health bar.</p>
    <p className='text-white text-xl mt-2 mb-2'>2. Thankfully, the Einherjar Tamer does not perform any unblockable attacks and will focus mostly on melee attacks, in which she’ll swing her large flail-like weapon toward you. When parried just right, you’ll leave her stunned for a short moment.</p>
    <p className='text-white text-xl mt-2 mb-2'>3. The second lightning attack will occur when you’re standing within close range, as the creature will rise above the ground before flapping its wings and sending out a shockwave of electricity. Again, rolling sideways will be your best bet to dodge the attack, but its quick speed makes it quite challenging to parry.</p>

    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Tips for Defeating the Wyvern</h3>
    <p className='text-white text-xl mt-2 mb-2'>1. Despite mostly being distracted by Atreus throughout the fight, it’ll still stop to unleash several attacks your way throughout the battle. Now, the Wyvern has three primary attacks, all equally deadly – but blockable!</p>
    <p className='text-white text-xl mt-2 mb-2'>2. The Wyvern can perform two variants of its lightning attack. The first and most common lightning attack will see the creature tossing two balls of lightning into the air before quickly targeting your location. While you can dodge this attack by swiftly moving sideways, your best option will be to parry the attack, as you can send the lightning back toward the creature, stunning it briefly, or toward the Einherjar Tamer, who will be dealt significant damage. This attack is performed twice, so prepare for another onslaught of balls following a very minor break.</p>
    <p className='text-white text-xl mt-2 mb-2'>3. The second lightning attack will occur when you’re standing within close range, as the creature will rise above the ground before flapping its wings and sending out a shockwave of electricity. Again, rolling sideways will be your best bet to dodge the attack, but its quick speed makes it quite challenging to parry.</p>
    <p className='text-white text-xl mt-2 mb-2'>4. Now, the Wyvern's next attack is arguably the most challenging to perfect the timing, as not only is the charge performed quickly, but its animation is slightly strange as it swoops toward you. If you fail to parry the attack, the Wyvern will grab ahold of you, tossing you into the air before slamming you to the ground – obviously, not the most ideal outcome.</p>
    <p className='text-white text-xl mt-2 mb-2'>5. If you do manage to perfect the parry on this attack, you’ll knock the creature to the ground, sending it into a temporarily stunned state, leaving it vulnerable to heavy melee damage.</p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Upon defeating the two enemies, loot the area of any Healthstones and Ragestones, and then proceed to pick up the glowing blue statue by the base of the large maple tree, where you’ll learn that it's an artifact from Helheim.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return to Skoll and Hati</h2>

    <p className='text-white text-xl mt-10 mb-10'>Ready to return the moon to Skoll and Hati, squeeze through the gap in the wall to the south. Continue ahead, looting the Hacksilver pouch by the fallen Einherjar to the right of the Wind Vent. Then, using your Draupnir Spear, plug the Wind Vent and climb up to the ledge above.</p>
    <p className='text-white text-xl mt-10 mb-10'>Follow Atreus as he leads you along the path, defeating the Einherjar that’ll appear along the way.</p>
    <p className='text-white text-xl mt-10 mb-10'>Finally, reaching the Skoll and Hati’s den, shimmy back across the ledge.</p>
    <p className='text-white text-xl mt-10 mb-10'>Entering a cutscene, Atreus will turn dawn to dusk, fulfilling even more of the prophecy that leads to Ragnarok.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return to Freyr’s Camp</h2>

    <p className='text-white text-xl mt-10 mb-10'>Now that all is right with Skoll and Hati, it’s time to deliver the good news to Hildisvini at Freyr’s camp.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you follow Atreus back to the camp, you’ll be ambushed by a group of Legion and an Einherjar Warrior when reaching the stairs that lead to the nearby Nornir Chest.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>The forest is just as deadly as ever, so be wary of the poisonous plants as you journey back to the camp.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once dealt with, continue following the path until you reach another Einherjar Tamer – take her out. If you didn’t grab it earlier, shoot down the Resource bucket hanging from the tree branch above the path. At the end of the track, head through the crawl space, where you’ll find yourself ambushed by two Dreki.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat the Dreki’s</h2>

    <p className='text-white text-xl mt-10 mb-10'>Performing a variety of melee and projectile attacks, both Dreki’s will fight a similar battle to the one you experienced during The Quest for Tyr; however, the two Dreki's will each have their own unique elemental ailment that you'll need to take into consideration. So, with that said, here's what you need to know about</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Dreki Colors - Ailments Explained</h3>
    <p className='text-white text-xl mt-2 mb-2'>1. The Purple and Red Dreki is acid/poison based, so you'll need to be wary of its unblockable projectile attacks that will leave damage inducing pools on the ground.</p>
    <p className='text-white text-xl mt-2 mb-2'>2. The Blue and Yellow Dreki is electricity based. So, while its standard electrical attacks are blockable, you'll need to be wary of its unblockable electricity attacks that it'll frequently toss if it's the only remaining Dreki.</p>
    <p className='text-white text-xl mt-2 mb-2'>Knowing that the Dreki's will take on a more aggressive form once one is defeated, we highly recommend that you attempt to keep both Dreki health bars fairly even. This will remove the need to face the Dreki's stronger form.</p>

    <h3 className='text-white font-mono text-2xl'>Melee Attacks</h3>
    <p className='text-white text-xl mt-2 mb-2'>1. Along with spitting saliva, the Dreki will perform two major melee attacks that deal significant damage should you not block them. The first melee attack will see the Dreki launching toward you, you'll need to parry or block this attack, otherwise the Dreki will grab ahold of you, slamming you to the ground.</p>
    <p className='text-white text-xl mt-2 mb-2'>2. The next melee attack is nearly identical to start with, as the creature will leap toward you; however, this time, landing much closer before performing a yellow (block break) attack in the form of a chomp.</p>
    <p className='text-white text-xl mt-2 mb-2'>3. Following this attack, the Dreki is known to then quickly turn and swipe its large tail in your direction - you can either block this attack with your shield or simply dodge out of the way. Atreus typically indicates when this attack is coming, warning you to raise your shield if you're not correctly protecting yourself.</p>
    <p className='text-white text-xl mt-2 mb-2'>4. Successfully parrying the Dreki's melee attacks will leave the creature temporarily stunned, and vulnerable to damage for several moments while it recovers.</p>
    <p className='text-white text-xl mt-2 mb-2'>5. So, once you've stunned one of the Dreki's, we recommend rushing the creature and unleashing as much heavy damage as possible before the stun effect runs out. This includes using your Runic Attack. Using the Runic Attack early in a fight is recommended so you can get the cooldown timer going as soon as possible.</p>

    <h3 className='text-white font-mono text-2xl'>Projectile Attacks</h3>
    <p className='text-white text-xl mt-2 mb-2'>1. While both Dreki will occasionally target you on foot, you’ll find that one will usually retreat to the water, where it’ll either toss salvia or poisonous spitballs toward you. While the salvia can be blocked or parried, the poisonous balls cannot.</p>
    <p className='text-white text-xl mt-2 mb-2'>2. So, focusing on the incoming attacks indicator at the bottom of the screen is crucial to your success during this fight, as in most cases, the Dreki within the water will not be within your view.</p>
    <p className='text-white text-xl mt-2 mb-2'>3. Should you attack a Dreki while it is within the water, it'll launch out of the water and begin to attack you on foot.</p>
    <p className='text-white text-xl mt-2 mb-2'>4. This isn't necessarily ideal, as trying to block and parry multiple incoming melee attacks can be quite challenging.</p>
   
    <h3 className='text-white font-mono text-2xl'>Fight Differences After One Dreki's Death</h3>
    <p className='text-white text-xl mt-2 mb-2'>Once you've defeated at least one Dreki, the remaining Dreki will add two new attacks to its arsenal. Now, these attacks are unique to each Dreki, so the attacks you'll be facing will entirely depend on which Dreki is still alive within the fight.</p>
    <p className='text-white text-xl mt-2 mb-2'>1. If you're battling the Purple and Red Dreki, you'll need to watch when it begins to drip with poisonous acid, as the creature will unleash a powerful poisonous gas cloud toward you. While dodging is an option, it'll leave you vulnerable as the Dreki will follow you with the cloud. So, we recommend you just stand and block the attack while it's occuring.</p>
    <p className='text-white text-xl mt-2 mb-2'>2. Next up, if the Dreki begins to drip with poison and shake, stand well clear, as poisonous acid will spray from the creature, damaging anything within a few meters. Just be warned, the acid pools from this attack are spread sideways, so rolling backward will be your safest option.</p>
    <p className='text-white text-xl mt-2 mb-2'>3. Now, much like the Dreki you faced in The Quest for Tyr, the Blue and Yellow Dreki will begin to unleash powerful, unblockable electrical attacks. The first sees the creature charging an AoE attack that will leave an electrical field surrounding the creature for a short moment.</p>
    <p className='text-white text-xl mt-2 mb-2'>4. The next attack will see it spitting out electrical spots that you'll need to avoid; otherwise, you will need to mash Circle in order to escape its electrical pull. This will leave you vulnerable to incoming melee attacks.</p>
   
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once you've defeated both the Dreki's, loot the rewards dropped to receive a Heavy Runic Attack for your Draupnir Spear called Artillery of Ancients, a Chaos Flame weapon upgrade, and some Dragon Tooths.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Rescue Freyr from the Einherjar</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Before leaving camp, be sure to speak with Brok and Lunda at their workshop and make any necessary purchases and upgrades before you venture out – trust us, you’ll need them.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon purchasing any upgrades, follow Freya west as she leads you through a shortcut to Njord, the temple where the Einherjar is keeping her brother.</p>
    <p className='text-white text-xl mt-10 mb-10'>Arriving by the river, board the canoe and listen as Freya informs you of the plan. Once ready, head northwest through the gap in the wall – here, you’ll find a Yggdrasil’s Dew.</p>
    <p className='text-white text-xl mt-10 mb-10'>After a short distance, dock your canoe along the shore and follow the path north, where you’ll need to take down some Wisps.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once defeated, travel through the tunnel beneath the giant tree, and take down the Wight and its Wisps ahead.</p>
  
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Some of the Wight's explosive lightning attacks can be interrupted, and others can be parried. Stay alert and take note of the differences.</p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>With the Wight defeated, follow Freya through the crawl space beneath the large tree to the north and defeat the Einherjar on the other side.</p>
  
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Throughout the area, you’ll discover explosive plants lining the walls. Lure enemies near them and then destroy the plants to cause significant amounts of damage to any nearby Einherjar.</p>
  
    </div>

    <p className='text-white text-xl mt-10 mb-10'>After defeating the Einherjar, two Wulvers will enter the area; however, one will be controlled by a Cursed Nokken, so be sure to take down the sneaky little creature to ensure the Wulver is vulnerable to your attacks.</p>
    <p className='text-white text-xl mt-10 mb-10'>Defeating any remaining Einherjar reinforcements, lift the large stone pillar and continue following Freya, where you’ll encounter some Draugr Guards controlled by a Cursed Nokken.</p>
    <p className='text-white text-xl mt-10 mb-10'>To reach the Cursed Nokken, you’ll need to destroy the Bramble found on the large tree to your left with your Blades of Chaos.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon burning the Bramble, defeat the Nokken that will have appeared, and proceed to defeat the two Dragur Guards – remember, swinging widely won’t break their guard, instead, use a Shield Strike (L1+L1) to create an opening.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, climb up the northwest ledge and loot the Hacksilver pouch by the fallen enemy. Upon collecting, interact with the shrine and drag your specter along the edge of the water-filled bell to turn night into day.</p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue toward the temple, jump down the ledge and grapple up to the ledge that leads southwest.</p>
    <p className='text-white text-xl mt-10 mb-10'>Follow the bridge to the end, where you’ll spot a group of Einherjar by the cliff's edge – take them down. If you’re struggling to defeat the Einherjar with the protected health bar, consider using your Draupnir Spear, as we found that to be quite effective.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Lure enemies toward the stump in the area, and once close, use it to create a large knockback effect that can send enemies toppling over the cliff edge.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>When the area is clear, continue over the log, follow the path forward, and drop down the ledge. Use your Draupnir Spear on the Wind Vent to reach the ledge above, where you’ll find a Red Coffin containing Petrified Bone, Dwarven Steel, and some Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>A short distance forward, you’ll encounter some Scorn Plants. To pass them, you’ll require Freya to Hex the first Scorn Plant and then freeze it with your Axe. Once that plant is frozen, use your Axe to freeze the next one, allowing you to pass through.</p>
    <p className='text-white text-xl mt-10 mb-10'>On the other side, continue following the path – being wary of the spitting plants along the way – until you reach a fallen-down archway.</p>
    <p className='text-white text-xl mt-10 mb-10'>Head beneath the archway and take down the Einherjar on the other side.</p>
    <p className='text-white text-xl mt-10 mb-10'>Follow the bridge to the end, where you’ll spot a group of Einherjar by the cliff's edge – take them down. If you’re struggling to defeat the Einherjar with the protected health bar, consider using your Draupnir Spear, as we found that to be quite effective.</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Remember, when facing enemies with protected health bars, keep an eye out for their health bar color, as Orange is weak to your Axe, whereas Blue is weak to your Blades of Chaos.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, climb onto the platform and pull open the wooden gates leading north.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon opening the large gates, continue forward and stop by the fallen creature. Look over the ledge and throw your Draupnir Spear into the Wind Vent to create a path forward. As you continue into The Northern Wilds, you’ll encounter a vault-like gate – use the chain to help Freya open it.</p>
    <p className='text-white text-xl mt-10 mb-10'>On the other side, burn the Red Fungi Bramble blocking access to the Celestrial Altar, where you’ll call on Skoll to change the time of day. Once day has turned to night, jump down the ledge, where you’ll enter a cutscene.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Gulltoppr</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Having given away your location, Heimdall will appear, and despite Freya’s offer to help, Kratos deems this a battle he must face alone. So, first up, you’ll be facing Gulltoppr, a powerful, Lion-like creature. Fortunately, in terms of difficulty and mechanics, Gulltoppr is relatively straightforward and mechanically simple, as the battle will mostly be a fight of dodging, parrying, and then attacking when the creature is stunned. With that said, let us get started.</p>
    <p className='text-white text-xl mt-10 mb-10'>Straight out the gate, Gulltoppr will perform a bucking-bull-like attack, which you’ll want to Shield Strike to interrupt. Be careful of your timing when trying to interrupt this attack, as failing to do so will see you get stomped.</p>
    <p className='text-white text-xl mt-10 mb-10'>However, should you be successful in Shield Striking the creature in time, you’ll manage to stun it for a brief moment temporarily.</p>
    <p className='text-white text-xl mt-10 mb-10'>While the stun is relatively short, it’s more than enough time to deal some quick heavy melee strikes with your Draupnir Spear before treating back out of range.</p>
    <p className='text-white text-xl mt-10 mb-10'>When coming to after being stunned, Gulltoppr will perform either one of two attacks: a BiFrost explosion or a series of melee swipes. While the melee swipes can be blocked and countered, the BiFrost explosion cannot.</p>
    <p className='text-white text-xl mt-10 mb-10'>So, should you notice Gulltoppr beginning to glow purple, back away quickly as he’ll unleash a BiFrost AoE explosion. While you don’t need to be too far away, we recommend backing up quite a bit, as it’ll allow you to throw your Draupnir spear from afar, dealing some minor but passive damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before Gulltoppr begins to charge toward you, keep an eye out for Heimdall’s BiFrost attack, as he’ll toss a spell toward you that you’ll need to dodge well out of the way; otherwise, you’ll become afflicted with BiFrost. Alternatively, you can send the attack back toward Heimdall if you successfully parry it, but this is quite risky.</p>
    <p className='text-white text-xl mt-10 mb-10'>Following the BiFrost attack, Gulltoppr will rush toward you with an unblockable charge attack, which we found dodging sideways just before he reaches you to be the most effective way to avoid this attack, as while the creature turns, you’ll be able to toss more Draupnir Spears in its direction.</p>
    <p className='text-white text-xl mt-10 mb-10'>Repeat these steps until you have depleted enough of Gulltoppr’s health bar and are prompted with R3 to finish the creature.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Heimdall</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Having killed Gulltoppr, it’s time to take down Heimdall, who is much more powerful and mechanically challenging.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Heimdall Phase One</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Throughout this battle, you’ll want to use your Draupnir Spear, as its unpredictability makes this the only weapon that can cause Heimdall damage. So, starting the fight, throw your Draupnir Spear at Heimdall until he has a handful of the spears, and then detonate them. This will briefly stun Heimdall, causing him to catch onto Kratos’ plan quickly.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Heimdall Phase One Attacks</h3>
    <p className='text-white text-xl mt-2 mb-2'>1. Rushing toward you, Heimdall will flip his sword before lunging it toward you in a stabbing motion. Unable to block the attack, be sure you’re dodging quickly to avoid taking a devastating blow.</p>
    <p className='text-white text-xl mt-2 mb-2'>2. Performing two variants of melee attacks, he’ll first walk toward you before performing a push attack. While the damage is minor, dodging the attack will be your best bet.</p>
    <p className='text-white text-xl mt-2 mb-2'>3. Heimdall's second melee attack is arguably his hardest attack to dodge. You'll need to watch as Heimdall closes the distance and grabs the large horn from his pocket. Indicated by a rapid yellow ring, you’ll have the chance to parry this attack, but again, Heimdall will dodge out of the way, avoiding any damage. Like earlier in the battle, rolling out of the way will save you from taking any further damage.</p>
    <p className='text-white text-xl mt-2 mb-2'>4. Charging up a purple glow in his hand, Heimdall will quickly toss a ball of Bifrost toward you. While you can parry the attack, we advise against it, as the risk of missing the parry outweighs the damage it can deal you, considering Heimdall will dodge the parried ball of Bifrost.</p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Now that Heimdall has caught on to Kratos' plan, you’ll want to create a line of Spears on the ground, luring Heimdall over them, where you can then detonate them, causing him to become stunned. Then, while Heimdall is stunned, rush toward him and press R3 when prompted to enter a short cutscene.</p>
    <p className='text-white text-xl mt-10 mb-10'>Still unable to touch Heimdall, you’ll need to repeat these steps until you have filled his stun meter to full, where Kratos will finally break through his guard.</p>
    <p className='text-white text-xl mt-10 mb-10'>Ending the first battle phase, Heimdall will now engage in more robust and challenging combat, so be prepared.</p>
    <p className='text-white text-xl mt-10 mb-10'>It’s also worth noting that should you die from this point onwards, the battle will restart from the beginning of Phase Two.</p>
     
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Heimdall Phase Two</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Now vulnerable to melee attacks, target Heimdall and unleash as many light/heavy melee attacks and explosive spears as possible. Performing all three of the same attacks as Phase One, Heimdall will also introduce several new attacks.</p>
    <p className='text-white text-xl mt-10 mb-10'>While we'll discuss the specifics further in our tip section below, these new attacks include a Realm Shift in which Heimdall slows time and an explosive Bifrost sword slam.</p>
    <p className='text-white text-xl mt-10 mb-10'>Throughout the fight, Heimdall will become empowered by his Bifrost abilities, enabling a protected health bar. Invulnerable to melee attacks, you’ll need to deplete the protected bar by unloading as many explosive Spears as possible into him. Each Spear detonated within his range will lower this protective bar, enabling melee attacks to deal damage once again.</p>
    <p className='text-white text-xl mt-10 mb-10'>With that said, here are some handy tips and tricks that’ll help you take down Heimdall quickly and efficiently.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Tips and Tricks for Defeating Heimdall</h3>
    <p className='text-white text-xl mt-2 mb-2'>1. Following Heimdall’s unblockable Bifrost Sword Slam, he’ll become temporarily stunned and vulnerable to melee attacks. Now is a great time to unleash your Spartan Rage and heavy melee strikes, as when effective, you’ll be able to deplete quite a significant amount of Heimdall’s health each time.</p>
    <p className='text-white text-xl mt-2 mb-2'>2. Heimdall will also show a brief moment of vulnerability after performing his unblockable stab attack.</p>
    <p className='text-white text-xl mt-2 mb-2'>3. Parrying Heimdall’s block break melee swipe will deal a large amount of damage while also managing to push him back, leaving him open to damage for a very slight moment.</p>
    <p className='text-white text-xl mt-2 mb-2'>4. During Heimdall's Realm Shift attack, you’ll have the opportunity to either block or dodge his incoming attack. More often than not, we found that attempting to dodge during this moment was quite risky, as you’ll need to be especially quick to raise your shield in time to avoid damage.</p>
    <p className='text-white text-xl mt-2 mb-2'>5. Couple this with being unable to cancel out animations, and you’ll likely take more damage than what it’s worth. So, we recommend dodging this attack whenever possible, but be sure to dodge sideways, as going back can be costly as Heimdall's melee swipe sees him lunging forward each time.</p>
    <p className='text-white text-xl mt-2 mb-2'>6. Don’t sleep on your Runic Abilities, as unleashing the likes of the Artillery of the Ancients and Thrust of a Thousand Soldiers can be highly damaging.</p>
    <p className='text-white text-xl mt-2 mb-2'>7. While your light and heavy melee attacks will deal the most damage to Heimdall, don’t be afraid to continue tossing out Spears, as all bits of damage, whether small or large, will add up, and better yet, charge spears can be a great way to interrupt his attacks.</p>
    <p className='text-white text-xl mt-2 mb-2'>8. For this battle, we found the Rond of Purification extremely beneficial, as its ability to cleanse any Bifrost aliment helped us avoid unnecessary damage. While Shield Striking Heimdall can be a little challenging, he'll become much more susceptible to these attacks as the battle wears on.</p>
    <p className='text-white text-xl mt-2 mb-2'>9. When tossing Spears into Heimdall, be sure to explode them as soon as possible, as each time Heimdall Realm Shifts or moves quickly, he'll dispose of the spears, resulting in no damage being dealt.</p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once you’ve depleted enough of Heimdall’s health bar, press R3 when prompted to land a finishing blow – or so you thought.</p>
    <p className='text-white text-xl mt-10 mb-10'>Despite Kratos’ warning, Heimdall continues to pursue Kratos, having regenerated his arm after Kratos exploded it with his Draupnir Spear. Like before, shifting into phase three will create a checkpoint should you happen to die.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Heimdall Phase Three</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>This battle phase is significantly faster paced, as the now enraged Aesir will charge at Kratos whenever the moment arises. Without his sword handy, Heimdall will be forced to introduce several new attacks to his arsenal. These attacks include:</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Melee Charge</h3>
    <p className='text-white text-xl mt-2 mb-2'>1. Rushing toward Kratos with an unblockable charge attack, Heimdal will grab ahold of Kratos, slamming him into the ground, should you fail to dodge the attack. Additionally, should you avoid the attack, Heimdall will be vulnerable to incoming attacks for a brief moment.</p>

    <h3 className='text-white font-mono text-2xl'>Melee Fist Slam</h3>
    <p className='text-white text-xl mt-2 mb-2'>1. Much like Heimdall's charge attack, he'll leap toward you, slamming his fist down into the ground, a small Bifrost AoE shockwave.</p>

    <h3 className='text-white font-mono text-2xl'>Melee Punch Swipes</h3>
    <p className='text-white text-xl mt-2 mb-2'>1. Much like Heimdall’s horn swipe, he’ll rush toward you, unleashing some quick and consecutive punches. While the punches can be parried, we recommend dodging this attack, as timing the parry can be tricky and especially dangerous.</p>

    <h3 className='text-white font-mono text-2xl'>Charged Bifrost Attack</h3>
    <p className='text-white text-xl mt-2 mb-2'>1.When you’re within close range, Heimdall will slam his fist into the ground as he charges a powerful Bifrost explosion. You can stun Heimdall and interrupt this attack with a Shield Strike, causing him to be knocked back and stunned for a short moment.</p>
    <p className='text-white text-xl mt-2 mb-2'>2. Take full advantage of this and unleash as much heavy damage as possible. If you’re too far away and unable to interrupt the attack, back up as quickly as possible and avoid the red-ringed floor; otherwise, you’ll take a large amount of damage and be afflicted with Bifrost.</p>

    <h3 className='text-white font-mono text-2xl'>Bifrost Boulder Throw</h3>
    <p className='text-white text-xl mt-2 mb-2'>1. Much like his Bifrost toss from Phase Two, Heimdall’s hand will glow purple before picking up a large ball from the ground and tossing it in your direction. Unblockable, your best option will be to dodge sideways to avoid taking a hit.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Despite introducing some new attack variations, the general premise of the battle remains: aim to stagger Heimdall with parries and attack with everything you have when he's temporarily vulnerable.</p>
    <p className='text-white text-xl mt-10 mb-10'>Then, once he recovers from his stagger, retreat to a safe distance, and repeat until he is finally defeated.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon defeating Heimdall, you’ll receive the Hilt of Hofud and Emblem of the Nine Reams Amulet Enchantment.</p>

   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Regroup with Freyr's Allies</h2>
    
   <p className='text-white text-xl mt-10 mb-10'>Now that Heimdall is dead, it’s time to regroup Freya and help rescue her brother. Once you’re ready to continue, break open the wooden gate with your Blades of Chaos and follow the path toward the burning temple. After climbing the ledge, you’ll spot Atreus and Freya carrying her brother as they leave the burning building below.</p>
   <p className='text-white text-xl mt-10 mb-10'>From the ledge, turn left and follow the path forward. Before climbing over the next log, collect the Hacksilver pouch and Ragestone found in the small clearing.</p>
   <p className='text-white text-xl mt-10 mb-10'>Continue over the log and grapple across to the building when prompted, where you’ll regroup with your allies.</p>
   <p className='text-white text-xl mt-10 mb-10'>Surrounded, defeat the Einherjar Warriors and Archers. Just remember, when you're running low on health, use the grapple points to escape any potentially dangerous situations or incoming attacks.</p>
   <p className='text-white text-xl mt-10 mb-10'>After clearing a few waves of Einherjar, you’ll come face to face with an Einherjar Captain.</p>
   <p className='text-white text-xl mt-10 mb-10'>Wary of their Bifrost magic, dodge sideways to avoid taking damage when the Captain begins to glow purple and slams his weapon into the ground, creating a way of Bifrost that'll come your way.</p>
  
   <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Captains can use Bifrost magic to exchange their scythe for a spear, capable of fast-moving charging attacks, Weapon switching this way is fast, so you’ll have to keep watch as they change up their tactics.</p>
    
    </div>

  
   <p className='text-white text-xl mt-10 mb-10'>One of the most effective ways to take down the Einherjar Captain is with your Draupnir Spear, as its explosive spears can briefly stagger the Aesir when detonated.</p>
   <p className='text-white text-xl mt-10 mb-10'>When charging up its melee attack, utilize your Shield Strike to stagger the Captain even further, leaving him vulnerable to damage for several moments.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, pick up Freyr by the door, and you’ll soon enter a QTE (Quick Time Event) sequence, where you’ll automatically run forward along the path, fending off any attacking Einherjar and Gulons by pressing R1 and R2 when prompted.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once reaching the safety of the shore, you’ll enter a lengthy cutscene that sees the group escaping the temple and returning to Freyr’s camp.</p>
   
   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return to Sindri’s House</h2>
   
   <p className='text-white text-xl mt-10 mb-10'>Having returned to Freyr’s camp, follow Atreus as he leads you out of the camp. Once you're by the shore, head to the Mystic Gate, that’s not too far away by boat, and return to Sindri’s house.</p>
   <p className='text-white text-xl mt-10 mb-10'>Making it back to Sindri's, interact with the table inside and watch as a cutscene unfolds, which sees Kratos revealing that he killed Heimdall, further proving that the prophecy is true.</p>

    </div>
    
    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Reunion</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>Unlocking the Mask</p>

    </button>

    </div>

    </motion.div>

  )
}

export default Gowr13