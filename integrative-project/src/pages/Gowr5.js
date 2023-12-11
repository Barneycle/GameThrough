import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Gowr5 = () => {

    useEffect(() => {

        window.scrollTo(0, 0);
      
      }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/gowr4');
    
    };

    const handleNext = () => {

        navigate('/gowr6');
    
    };

  return (

    <div className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>The Lost Sanctuary</h1>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
    <h3 className='text-white font-mono text-2xl'>This walkthrough will include story spoilers for the first quest, Surviving Fimbulwinter, so proceed with caution.</h3>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Explore Ironwood with Angraboda</h2>

    <p className='text-white text-xl mt-10 mb-10'>After the cutscene with Angrboda, follow her as she leads you through the Ironwood forest. Upon reaching the large rocks marked with glyphs, Angrboda will clear the path with her magic – here, Atreus will also unlock several new skills, which can be purchased through the Skills menu with XP.</p>

    <p className='text-white text-xl mt-10 mb-10'>Continue to the large fallen tree trunk at the end of the path and have Atreus clear the Soundstone blocking the way forward. Once cleared, continue following Angrboda until you need to clear another tree trunk of Soundstone to pass through to the other side.</p>
    <p className='text-white text-xl mt-10 mb-10'>Making it through, loot the Hacksilver chest to your left, then continue up the ledge and follow Angrboda over the makeshift bridge before leaping (circle) across the gap at the end of the path. At the top of the ledge, shoot down the bucket filled with Shattered Runes directly in front of you and continue through the hollow tree trunk.</p>
    <p className='text-white text-xl mt-10 mb-10'>Reaching the other side, defeat the group of Draugr that will attack with Angrboda’s help – she’ll toss colorful-exploding spells toward them, dealing small amounts of damage. Once the area is clear, loot the Hacksilver chest to your left before following Angrboda through the giant tree trunk nearby.</p>
    <p className='text-white text-xl mt-10 mb-10'>On the other side, follow the path left over the fallen tree trunk and loot the Red Coffin – the coffin contains Forged Iron, Ydalir Timber, and some Hacksilver. Continuing left, climb the ledge and have Atreus shoot the Soundstone plaque connected to the chainmail above to expose a grapple point.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon grappling across the gap, take down the two Exploding Nightmares and proceed down the ledge to your left.</p>
    <p className='text-white text-xl mt-10 mb-10'>After defeating the Nightmare, continue down the ledge and look for a large ledge at the end of the wall to your left. Climb up and loot the resource bucket hanging directly above. From here, continue forward and destroy the wooden structure with bright blue writing; this will reveal a Lore Scroll you can pick up. Please note this Lore is untracked and is not required for 100% completion.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once collected, continue following the path, destroying the next set of wooden structures, and climb the ledge to your left. From this ledge, shoot the Soundstone plaque in the distance, lowering a grapple point you can use to cross the gap.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon crossing the gap over the pond, defeat the two Exploding Nightmares that’ll appear, then loot the Hacksilver chest nearby before continuing. Once ready, vault over the fallen log, and proceed to jump and grapple across the next set of gaps.</p>
    <p className='text-white text-xl mt-10 mb-10'>Reaching the other side, defeat the four Exploding Nightmares that roam the area, and before climbing the ledge, be sure to loot the Legendary Chest to your left, which contains the Rampaging Ibex, Runic Summon.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once looted, climb the ledge and jump across the gap onto the old tree trunk. Climb left around the tree until you reach the top.</p>
    <p className='text-white text-xl mt-10 mb-10'>From here, shoot the Soundstone located on the chainmail above to lower a grapple point – which you will need to use to cross the gap and reach Angrboda.</p>
    <p className='text-white text-xl mt-10 mb-10'>Follow her through the forest a short distance, where you’ll encounter a Hacksilver chest and hanging resource bucket up a small ledge to your right. Once looted, continue following Angrboda until a group of Level 2 Draugr attacks you. Given the tight space and the amount of Draugr you’ll face, you’ll need to stay on high alert, watching the combat indicator at the bottom of the screen to ensure you’re not caught off guard by any incoming attacks off-screen.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once dealt with, help Angrboda lift the heavy rock blocking the path forward. Then, on the other side, race Angrboda to the other side of the medallion – follow the path, jumping and grappling over gaps as you go. This is a scripted race, and Angrboda will always win.</p>

    <p className='text-white text-xl mt-10 mb-10'>Continue following Angrboda until you encounter a large group of Level 2 Tatzelwurms. These creatures are notorious for their melee attack, which sees them swiping their large tails to inflict them. In addition, they’ll also rear up on their hind legs before spewing poison in your direction – this particular attack has a large range, so you’ll want to avoid this at all costs by dodging out of the way. Throughout the battle, don’t forget to utilize Angrboda’s spirit falcon attack for assistance.</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'>Hold Square to summon Angrboda’s spirit falcon, unleashing powerful giant magic!</p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>With the area clear, look to the fork in the road and destroy the resource bucket above the ledge that leads right. Once collected, continue following Angrboda as she guides you to her mother’s shrines, where she depicted her visions – along the way, you’ll reach another fork in the path, where you’ll find a resource bucket dangling from a tree to your left.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Meet Angrboda at the Shrine</h2>

    <p className='text-white text-xl mt-10 mb-10'>After clearing the path with her magic, you’ll reach Angrboda’s home – while you’ll have the option to look around, you won’t find anything to pick up. Once you’re ready, head inside the large tree and interact with Atreus’ shrine, which depicts that Katros will fall to the hands of Thor and he’ll later serve Odin.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Help Angrboda with “Giant Stuff”</h2>

    <p className='text-white text-xl mt-10 mb-10'>After learning the outcome of the future, Angrboda insists that Atreus helps her with some daily chores to take his mind off the future. Follow Angrboda outside and help her carry the feed basket down by the stream, where you’ll meet Angrboda’s yak, Jalla.</p>
    <p className='text-white text-xl mt-10 mb-10'>Following the cutscene, guide Jalla through the stream until you spot a Greenbulb fruit high up on a ledge – climb up and collect it with Angrboda’s help. Then, jump down onto Jalla and continue your journey forward, where you’ll find another ledge not too far away. Again, climb up and collect the Greenbulb with Jalla’s help.</p>
    <p className='text-white text-xl mt-10 mb-10'>After jumping down onto Jalla, take the path right, behind the rock, where you’ll find some resources to collect from the water. A short distance ahead, jump up to the ledge when prompted. Follow Angrboda and pick up any Greenbulb fruit you encounter on the ground.</p>
    <p className='text-white text-xl mt-10 mb-10'>On the other side, clear the wooden boards and other junk from beneath the fallen tree to your right so that Jalla can make it through.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once cleared, jump down onto Jalla and follow the stream back to Angrboda’s tree house. After arriving, place the Greenbulbs into the basket and then proceed a few meters ahead and open Angrboda’s tool chest, which will contain Jotnar’s Champion Garb and the Jotnar Bow. If you collected Ydalir Timber along the way, you will have the opportunity to upgrade the Jotnar Bow straight away.</p>
    <p className='text-white text-xl mt-10 mb-10'>Having upgraded your weapons and armor, continue toward the nearby shrines and statues to compliment Angrboda on each of her depictions – there are eight optional conversations to be had. Ready to continue, head to the other side of the shrine and jump up onto Jalla.</p>
    <p className='text-white text-xl mt-10 mb-10'>Follow the path forward until you’re prompted to collect some Vist root – which is found at the base of the large trees nearby. Once you’ve collected the roots, jump up onto Jalla and follow the path forward, where you’ll enter a short cutscene after being attacked by a group of Draugr. When prompted by Angrboda, press L3 and R3 to enter Atreus’ wolf form – this acts much the same as Kratos’ rage.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon defeating the Draugr, follow Angrboda to the base of a nearby tree, where you’ll find another root to harvest. After harvesting the root, the pair will be interrupted by another ambush of Draugr – this time including a heavy Draugr.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once defeated, continue through the gap in the wall created by the Draugr and follow Angrboda along the path until you reach Jalla. Jump on and continue forward until you return home, where you’ll need to place the roots collected into the bucket by the deer pen.</p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, follow Angrboda and Jalla down by the stream you accessed earlier. Jump onto Jalla and follow the path down the stream a short distance, and then into the tunnel to your right. Clearing the trail, head through the tunnel – you can press circle to dismount and search the Hacksilver chest along the way.</p>
    <p className='text-white text-xl mt-10 mb-10'>While dismounted, head to the water's edge and shoot the clam in the distance to have it spew resources (Beast Scraps and beast bones) into the water – these can be collected after climbing back onto Jalla.</p>
    <p className='text-white text-xl mt-10 mb-10'>After looting the resources, continue a short distance ahead and climb up onto the ledge, where you’ll find a pile of stones. Interact with them, and press R2 to skip the rocks along the water. Before Atreus can throw his final stone, Draugrs will begin to emerge from the water. With Angrboda’s help, you’ll need to fend them off to continue.</p>
    <p className='text-white text-xl mt-10 mb-10'>Much like earlier encounters, you’ll face a mixture of standard Draugr, heavy Draugr, and now a range Draugr, who will toss fireballs in your direction from the rock ledges above. This encounter can be challenging, as you’ll be attacked from all directions.</p>
    <p className='text-white text-xl mt-10 mb-10'>For this reason, we recommend focusing your attention on the Draugrs tossing fireballs, as their attacks are relatively quick and can be hard to dodge when trying to fend off the melee Draugrs.</p>
    <p className='text-white text-xl mt-10 mb-10'>Also, remember you have access to use Atreus’ rage ability and Angrboda’s spirit falcon for assistance. These can be activated by pressing L3 + R3 and holding Square, respectively.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, return to the pile of stones, where you can attempt to perfect your throw. When releasing at the right moment, Atreus will skip the rock all the way to the clam in the distance, which will shoot out more resources for you to collect – this will contain Rawhide and Beast Scraps.</p>
    <p className='text-white text-xl mt-10 mb-10'>Climb up onto Jalla and continue forward until you find a ledge you can climb to your left, just after the clam you hit with your stone.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once on top of the platform, grapple to the other side, where you’ll find a Legendary Chest containing Runestone Refinement, an accessory for Atreus. Note that this Legendary Chest is untracked and is not required for 100% completion.</p>
    <p className='text-white text-xl mt-10 mb-10'>After looting the chest, jump back down onto Jalla and continue following the stream. As you near a large rock, take the path left, where you’ll find a Greenbulb fruit on the ground. With the fruit collected, continue forward until you reach the lift – take it to the top.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Follow Angrboda Through the Canyon</h2>

    <p className='text-white text-xl mt-10 mb-10'>Exiting the lift, follow Angrboda and defeat the group of Legions that you’ll soon encounter. These creatures are very swift and will charge toward you before performing a damaging slam attack. Once defeated, continue forward and help Angrboda lift the large rock blocking the path.</p>
    <p className='text-white text-xl mt-10 mb-10'>On the other side, you’ll encounter a large group of enemies, including Draugr, Heavy Draugr, Exploding Nightmares, and Legions – take them down.</p>
    <p className='text-white text-xl mt-10 mb-10'>You’ll find some Healthstones around the center rock pillar if you need health.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, squeeze through the gap in the wall, where you will reach the Valley of the Fallen. Follow Angrboda through the field, and climb the ledge when prompted.</p>
    <p className='text-white text-xl mt-10 mb-10'>Here, you’ll enter a cutscene that sees Angrboda fulfilling her side of the prophecy as she gives Atreus his gift.</p>


    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Head Back to Jalla</h2>

    <p className='text-white text-xl mt-10 mb-10'>After the cutscene, follow Angrboda as she leads you back to Jalla. Upon lifting the rock, Angrboda will make it to the other side before a level 3 Wulver attacks Atreus. This creature is fast-moving and features several damaging attacks.</p>
    <p className='text-white text-xl mt-10 mb-10'>The Wulver's most deadly attack comes in the form of an unblockable charge attack, which will see the creature barrelling into you should you fail to move in time.</p>
    <p className='text-white text-xl mt-10 mb-10'>The next major attack sees the creature standing on its hind legs as it swipes its long arms toward you. Thankfully, this attack is blockable but features block breaks, so you’ll need to be quick to parry the attacks if you want to remain damage free.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once depleting the health halfway, it’ll become enraged and unleash a lengthy swiping attack. While these are blockable, the creature's speed can make blocking the attack a little challenging, so we recommend keeping your distance and firing charged arrow shots when it’s safe.</p>
    <p className='text-white text-xl mt-10 mb-10'>After the creature is defeated, climb up the nearby ledge after Angrboda destroys the latch. Follow Angrboda a short distance, where you’ll soon find a Greenbulb fruit to your left, before continuing across the rock bridge. Finally, drop down the ledge and continue back to the lift.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Investigate the Hidden Passage</h2>

    <p className='text-white text-xl mt-10 mb-10'>Reaching the bottom, follow Angrboda as she leads you through the secret passage toward the sinkholes. You’ll reach a fork in the road along the way – continue up the ledge to find a Greenbulb fruit and a Hacksilver bucket hanging on the other side.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Clear the Wretches from the Sinkhole</h2>

    <p className='text-white text-xl mt-10 mb-10'>Agreeing to help Angrboda gather more paint supplies from the sinkhole, climb down the rope until you reach the bottom. Before slipping through the gap to head further into the cave system, destroy the resource bucket hanging from the roof to receive some Shattered Runes.</p>
    <p className='text-white text-xl mt-10 mb-10'>After slipping through the gap, you’ll encounter your first of four Wretch nests. Then, just like the one we encounter in Svartalfheim, take down the nest while clearing the area of any remaining Wretches.</p>
    <p className='text-white text-xl mt-10 mb-10'>Just beyond the first Wretch nest, have Angrboda ignite the nearby torch to light the area. Then, head left, collect the Hacksilver pouch off the ground, and light the torch on the nearby wall.</p>
    <p className='text-white text-xl mt-10 mb-10'>Continue heading left, where you’ll find a torch to your right and a Hacksilver chest to your left. Once you’ve taken care of those, continue straight and take the path to your left – here, you’ll begin to encounter Wretches and Draugr.</p>
    <p className='text-white text-xl mt-10 mb-10'>We recommend fighting through the monsters until you reach the Wretch Nest. The nests should always be your priority; otherwise, Wretches will continue spawning.</p>
    <p className='text-white text-xl mt-10 mb-10'>So, once you reach the crossroads ahead, light the nearby torch on your left and continue straight. Then take the path to the right, where you’ll find a Red Coffin containing Forged Iron, Ydalir Tood, and some Hacksilver. Just past the coffin, you'll find the Wretch Nest high up on the wall – you’ll need to use your bow to destroy it.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, return to the main room next to where you destroyed the first Wretch Nest.</p>
    <p className='text-white text-xl mt-10 mb-10'>From here, climb up the small ledge and take the path left. Jump over the gap and light the nearby torch. Once lit, head left and defeat the two Draugr. You’ll find the Paints Lore Scroll on the ground by the ledge.</p>
    <p className='text-white text-xl mt-10 mb-10'>With the scroll collected, return to the fork in the road and head right, where you’ll need to take out the Draugr that’ll animate. Once defeated, continue forward and light the torch on the wall.</p>
    <p className='text-white text-xl mt-10 mb-10'>Climb the ledge to your right and light the torch on the rock pillar. When crossing the nearby wooden bridge, look to the roof to find a Hacksilver bucket hanging directly above. Continue following the path to find another torch just a few meters away from a Red Coffin. Surprise! It contains a group of Wretches that you’ll now need to defeat.</p>
    <p className='text-white text-xl mt-10 mb-10'>With the Wretches defeated, return to the fork in the road and take the path right. Light the torch along the left wall, where a group of Wretches will now ambush you. Suspecting a nest is nearby, follow the path left and climb up the set of ledges by the Hacksilver chest. At the top, you’ll find another nest you’ll need to destroy.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, loot the Hacksilver chest and have Atreus destroy the Soundstone barrier nearby to create a shortcut back down to the main room.</p>
    <p className='text-white text-xl mt-10 mb-10'>Instead of jumping down, take the path across the bridge and collect the Hacksilver pouch. Following the path to the end, you’ll find another torch and a Stonestone barrier to your left that you can destroy to create another shortcut.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once dealt with, continue following the path right, where you’ll find another torch on the wall to your left. Here, you’ll begin to encounter several Wretches as you learn there’s another nest nearby.</p>
    <p className='text-white text-xl mt-10 mb-10'>After taking out the Wretches, head left and jump down the ledge to find a Legendary Chest.</p>
    <p className='text-white text-xl mt-10 mb-10'>Climb back up the ledge and defeat the Heavy Draugr that’ll appear. Once defeated, continue following the path straight until you find a small hole in the wall. When looking through the hole, shoot the Soundstone barrier to clear a way into the room.</p>
    <p className='text-white text-xl mt-10 mb-10'>Return to the other side, and destroy the final Wretch nest found toward the back of the room. With all the nests destroyed, follow Angrboda as you return to the rope.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Bergsra</h2>

    <p className='text-white text-xl mt-10 mb-10'>Upon slipping through the gap in the wall, you’ll encounter a Bergsra. Now, you should be reasonably familiar with the Bergsra, as you’ll have faced this creature in the mines when rescuing Tyr and during the side quest “In Service of Asgard” in Svartalfheim.</p>
    <p className='text-white text-xl mt-10 mb-10'>Thankfully, the area where you now face Bergsra is much larger than previous encounters, so you’ll have plenty of room to move about and dodge any incoming attacks.</p>
    <p className='text-white text-xl mt-10 mb-10'>During this battle, we recommend that you utilize Angrboda’s Spirit Falcon attack and Atreus’ rage ability, as both attacks will help you take a rather hefty chunk of health off of the boss.</p>
    <p className='text-white text-xl mt-10 mb-10'>If you need a little refresher, here’s what you can expect from Bergsra’s attacks:</p>
    <p className='text-white text-xl mt-10 mb-10'>Bergsra will perform an attack that sees her lowering to the ground on all fours and spawning several Wretches. While spawning the Wretches, Bergsra will be vulnerable to all incoming attacks, so we highly recommend you bypass the Wretches and unleash your most powerful melee attacks upon her to deal some quick and easy damage. If you’re looking to keep your distance, a charged bow shot can temporarily stun her and halt the attack, reducing the number of Wretches she’s able to spawn.</p>
    <p className='text-white text-xl mt-10 mb-10'>Bergsra will also perform another unblockable attack in the form of a charge that sees her barreling toward you before unleashing a powerful punch to finish the attack – you’ll want to avoid this at all costs by dodging to the side or by simply backing up out of range.</p>
    <p className='text-white text-xl mt-10 mb-10'>When getting in close to deal melee damage, be wary of her unblockable slam attack, which will create a small AoE shockwave. This attack is relatively easy to avoid if you’re backing up as soon as you see the large red rings appear.</p>
    <p className='text-white text-xl mt-10 mb-10'>Lastly, Bergsra will also unload poisonous spitballs in your direction, much like the Cursed Grims. Unlike Kratos, Atreus will not be able to block this attack.</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'>Running low on health? Defeat Wretches for the chance at receiving Healthstones.</p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Upon defeating Bersega, you’ll receive a Healthstone, Ydalir Tood, and the Sharpshooter Stare Bow Ability. Once you’re ready to continue, climb up the rope.</p>


    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Head Home Through the Marshes</h2>

    <p className='text-white text-xl mt-10 mb-10'>When reaching the top, continue around the sinkhole and climb onto Jalla and follow the stream until you reach a ledge – climb up, and you’ll enter a short cutscene. Once the cutscene has finished, stand up and follow Angrboda over the fallen log and down the path.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before climbing onto Jalla, shoot the nearby clam to receive Rawhide and Beast Scraps you can skim from the water. Upon collecting the resources, continue up the dirt hill, where you’ll enter a lengthy cutscene that sees a mysterious voice coming from the forest before taking one of Angrboda’s wolves.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Free the wolf from Gryla’s Clutches</h2>

    <p className='text-white text-xl mt-10 mb-10'>With Gryla planning to take the soul of a helpless wolf, Atreus insists on stopping her. Before jumping down the ledge, pick up the Greenbulb fruit by Jalla. Ready to continue, jump down the set of ledges and follow the path forward until you reach a large hollow tree trunk –defeating several groups of Legion along the way.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon reaching the tree trunk, climb the ledge just right of the entrance and shoot the Soundstone to create a path through the tree trunk. After crawling through the gap, climb the set of ledges and shoot the Soundstone through the next hole in the tree trunk to clear a path through the large door.</p>
    <p className='text-white text-xl mt-10 mb-10'>Heading through the newly opened gate, you’ll encounter another Level 3 Wulver. Like before, the area in which you’ll face the creature is circular, with a large tree found in the middle. Use this to your advantage to continuously keep the Wulver at bay. Throughout the encounter, two Ormrs will also appear; however, they’ll mainly target Angrboda if you’re moving around, so a few clean melee attacks as you pass by them will have them dealt with rather quickly.</p>
    <p className='text-white text-xl mt-10 mb-10'>Defeating the Wulver will reward you with a Healthstone and some Ydalir Tood. Ready to continue, grapple up the ledge by Angrboda and follow the path straight, where you’ll find a Red Coffin on a ledge to your right – the coffin will contain Rawhide, Ydalir Timber, and some Hacksilver. Following Angrboda, pick up the Healthstone off the ground and climb the nearby ledge.</p>
    <p className='text-white text-xl mt-10 mb-10'>Reaching Gryla’s home, continue following Angrboda until she points out a ledge above. Unable to reach it from the ground, look for a small crate you can climb, marked by a mustard blanket to your right, and jump across the gaps.</p>
    <p className='text-white text-xl mt-10 mb-10'>At the end, use the grapple point above to cross to the other side. From here, look for a small hole in the crate just above the grapple point, where you’ll find some Soundstone – destroy it to create a way for Angrboda to reach the ledge that leads into Gryla’s house.</p>
    <p className='text-white text-xl mt-10 mb-10'>Finding a way for Atreus to enter Gryla’s house, grapple across, and head inside the doorway. Follow Angrboda inside as she leads you toward Gryla’s basement – before heading inside, be sure to pick up the Hacksilver pouch behind some sacks of fruit, not too far from the basement door.</p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, turn the key and head down the stairs. Upon reaching the bottom, destroy the Soundstone Barrel to your right to gain access to a grapple point – grapple across the gap to discover a Hacksilver pouch.</p>
    <p className='text-white text-xl mt-10 mb-10'>At the base of the stairs, follow Angrboda as she heads left. Take the first path that leads right and collect the Hacksilver pouch you’ll find at the end. Before returning to Angrboda, look through the hole in the fence and shoot the latch on the Soundstone barrel to clear the path forward.</p>
    <p className='text-white text-xl mt-10 mb-10'>Following Angrboda through the newly opened path – be sure to shoot the bucket down from the roof to find some resources and the Soundstone barrel nearby to find another Hacksilver pouch behind it. Once you’re ready, continue toward the back of the basement, where you’ll enter a cutscene.</p>
    <p className='text-white text-xl mt-10 mb-10'>Following the cutscene, return up the stairs and enter through the door. Follow Angrboda up the nearby ledge and push the cup – which Atreus knocked over earlier – back into place.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Set the Wolf Free</h2>

    <p className='text-white text-xl mt-10 mb-10'>While Angrboda is distracting Gryla, sneak over to the wolf and set it free – only to be caught in the process. Follow Angrboda as she leads you back to the kitchen.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon reaching the kitchen, jump down the ledge and grapple toward the cauldron. Once on the other side, proceed to mash circle to destroy the cauldron – only to be stopped by Gryla.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Gryla</h2>

    <p className='text-white text-xl mt-10 mb-10'>Featuring ten sectioned health bars, Gryla is one of the strongest enemies you’ll have faced thus far. Thankfully, wanting to avoid causing harm to Angrboda’s grandma, your main aim of this boss encounter will be to target the bright purple rune stones that line the outer face of her cauldron – as this will be the only way you can damage her.</p>
    <p className='text-white text-xl mt-10 mb-10'>It’s worth noting that each successful strike to the runes will deplete half a health bar on standard difficulty.</p>
    <p className='text-white text-xl mt-10 mb-10'>Starting, Gryla will perform two standard attacks – a stomp attack and a cauldron attack, in which she tosses a spell from the cauldron she’s holding toward your location. Both of these attacks have a small AoE, so as long as you’re constantly moving around the outskirts of the kitchen, these attacks shouldn’t be too much of an issue.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’ve depleted two health bars, Gryla will introduce an unblockable attack. This attack will see her reaching into her cauldron before tossing a line of damaging powder toward you – you’ll want to avoid this at all costs, as you will not be able to block any damage it causes.</p>
    <p className='text-white text-xl mt-10 mb-10'>After depleting another half of a health bar, Gryla will fall to her knees, leaving the cauldron vulnerable to damage – rush it and unleash as many melee attacks as you can before she returns to her feet.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon reaching her feet, Gryla will launch a ground attack, in which you’ll need to climb up onto the ledges nearby to avoid damage – you don’t have much time, so try to be as quick as possible.</p>
    <p className='text-white text-xl mt-10 mb-10'>Move toward the two candles – one can be found on either side of the kitchen – and have Angrboda light them with her magic by pressing Square when prompted. Upon igniting them, Gryla will temporarily be stunned, leaving her cauldron vulnerable to damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>For this attack to be effective, you’ll need to ensure Gryla is close to the candle; otherwise, the stun effect won’t work. Repeat this until after Gryla drops to her knees again.</p>
    <p className='text-white text-xl mt-10 mb-10'>With two and a half health bars remaining, Gryla will introduce a new attack into her arsenal – a spell in which she’ll send out three large purple balls from the cauldron that will target you.</p>
    <p className='text-white text-xl mt-10 mb-10'>You’ll need to destroy these balls before they reach you; otherwise, you’ll be dealt large amounts of damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>Finally, as you deplete Gryla’s health bar enough, she’ll drop to her knees, and Atreus will be prompted to press R3 to finish the fight, where you’ll need to mash Circle to destroy the cauldron for good.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return to Angrboda’s Home</h2>

    <p className='text-white text-xl mt-10 mb-10'>After the cutscene with Gryla, follow Angrboda through the nearby passage and race her back to the treehouse.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Explore the Treehouse</h2>

    <p className='text-white text-xl mt-10 mb-10'>Once you arrive back at Angrboda’s house, you’ll find two optional conversations when interacting with the buckets outside the deer pen and the wolf pen. Additionally, if you’ve collected the Greenbulbs along the way, you’ll also be able to fill up one of the buckets with food for Angrboda’s animals.</p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue with the main story, return to Atreus’ shrine inside the treehouse, where you’ll enter a lengthy cutscene with Angrboda as you say your goodbyes. Unfortunately, when returning home, Atreus will find himself back at his house, rather than at Sindri’s. With the place overrun with Hel-Walkers, defeat them while avoiding their damaging melee attacks.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return Home to Sindri’s</h2>

    <p className='text-white text-xl mt-10 mb-10'>Once defeated, enter the Mystic Gateway, where Kratos will stop Atreus. Following a short cutscene, the pair will be interrupted by another group of Hel-Reavers – defeat them.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Valkyrie Vanadis</h2>

    <p className='text-white text-xl mt-10 mb-10'>Upon defeating the Hel-Reavers, Kratos is attacked by a powerful Valkyrie known as Vanadis, who will have seven sectioned health bars you’ll need to deplete. Defeating Vanadis will be no easy feat, and she will be among one of the most challenging enemies you’ve faced thus far.</p>
    <p className='text-white text-xl mt-10 mb-10'>While it’s a given, we recommend you continually move about the area. The more you move, the less likely Vanadis’ attacks will land. Also, given the size of the areas you’ll fight in, you must use the environment, such as the trees and rocks, to your advantage to block incoming attacks.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before we delve any deeper into the fight, keep in mind that this fight does have a checkpoint approximately halfway through, and you’ll likely only encounter one Healthstone during each battle phase. So, remember to protect yourself with well-timed blocks at all costs.</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'>Although it's recommended to keep at a distance whenever possible, this strategy can feel like a bit of a drag. So, if you’re looking to deal some risky yet hefty damage during the encounter, we found that keeping Vanadis up against the outskirts of the area would often prevent her from fleeing backward and, instead, staying within close melee distance.</p>
    <p className='text-white text-xl mt-2 mb-2'>When combining this with the fact that many of her attacks can be interrupted with well-timed counter-attacks, you’ll find that, more often than not, you’re canceling out her attacks, leaving her stunned for a short moment and vulnerable to incoming attacks.</p>
    <p className='text-white text-xl mt-2 mb-2'>That said, you won’t always be able to cancel her attacks, and many will still land upon you, dealing significant damage. So if you’re struggling and not too afraid to die, this may be a possible way for you to cheese enough damage to deplete three of her health bars, allowing you to reach a checkpoint in the fight.</p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Out the gate, Vanadis will have several possible attacks in her arsenal. The first attack you’ll likely encounter is Vanadis’ ranged attack, in which her hand will glow white and will shoot purple glowing arrows in your direction.</p>
    <p className='text-white text-xl mt-10 mb-10'>While the attack can be blocked, it can also be parried; however, we advise against parrying these arrows as Vandis will counter the parry and toss a powerful attack back in your direction that is somewhat hard to block.</p>
    <p className='text-white text-xl mt-10 mb-10'>Although this attack will start with just two arrows, it’ll eventually develop into a stronger attack that will see five arrows being shot your way at once. While this attack can be tricky to block in time, we found dodging at the right moment, just before they hit, will see you avoid any potential damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>In addition, Vanadis will also gain falcon wings, which will allow her to back up quickly, out of melee range, when she becomes overwhelmed. When performing this, a follow-up attack will soon occur that sees her charging you before unleashing a powerful melee strike, which you can parry.</p>
    <p className='text-white text-xl mt-10 mb-10'>On successful parries, Vanadis will be temporarily stunned for a few moments, making her vulnerable to attacks – now is a great time to unleash some quick flurries before backing up.</p>
    <p className='text-white text-xl mt-10 mb-10'>Vanadis will perform three slightly different variations of the melee charge, each of which can be blocked and parried when timed correctly -- remember to use your shield strikes!</p>
    <p className='text-white text-xl mt-10 mb-10'>You’ll want to avoid staying within melee distance for too long, as Vanadis will perform an unlockable slam attack that sees her driving her sword into the ground, causing a small AoE shockwave. If you’re within the AoE, you’ll be dealt damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>It’s crucial to note that Vanadis is very quick and will perform many of her attacks in quick succession, almost like a combo. So, after each attack, be ready for her to throw another right back at you.</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'>As the fight progresses, don’t forget to utilize Atreus’ spirit animal attack by pressing and holding Square.</p>
    </div>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Vanadis (Phase Two)</h2>

    <p className='text-white text-xl mt-10 mb-10'>After depleting three health bars, a short cutscene will occur that sees Vanadis carrying Kratos through the air to the other side of his house – this will now act as a checkpoint.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon landing, Kratos will now have the ability to replace his rage fury with Valor, which will heal rather than harm. Valor is especially useful during this phase of the fight, as your access to Healthstones will be greatly limited.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now, during the second phase, all of the same tactics from phase one still apply; however, you will need to account for a new attack, which sees Vanadis tossing five unblockable pools of poison onto the ground. You’ll want to avoid these pools at all costs; otherwise, you’ll be dealt damage for as long as you’re standing in them.</p>
    <p className='text-white text-xl mt-10 mb-10'>With that said, apart from introducing the new attack, the battle will remain mostly the same until you deplete Vanadis to one health bar. You'll then enter a lengthy cutscene, revealing Vanadis’ true identity, concluding the quest.</p>

</div>
    
    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Groa's Secret</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>The Reckoning</p>

    </button>

    </div>

    </div>

  )
}

export default Gowr5