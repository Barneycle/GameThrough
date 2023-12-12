import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Gowr1 = () => {

    useEffect(() => {

        window.scrollTo(0, 0);
      
      }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/');
    
    };

    const handleNext = () => {

        navigate('/gowr2');
    
    };

  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>Surviving Fimbulwinter</h1>
        
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
    <h3 className='text-white font-mono text-2xl'>This walkthrough will include story spoilers for the first quest, Surviving Fimbulwinter, so proceed with caution.</h3>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Surviving Fimbulwinter Walkthrough</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>When starting the game, you are prompted to select your difficulty setting – this can be changed at any time throughout the game, unless you want to experience Give Me God of War. Once you've chosen your difficulty, you’ll immediately begin a cutscene that sees Kratos reflecting by a fire as he crafts arrows for Atreus.</p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to move out before the snowstorm worsens, Atreus will help prepare the sled for their journey home. Then, extinguishing the fire, Kratos will load Atreus’ recently hunted deer onto the sled, and your journey home will begin.</p>
    <p className='text-white text-xl mt-10 mb-10'>Gaining control of Kratos, steer the sled through the stave. Not too long into the journey, you’ll hear a falcon screech from ahead.</p>
    <p className='text-white text-xl mt-10 mb-10'>With the wolves stopping in their tracks and concern laced in their voices, Atreus spots a shadowed figure in the distance, who turns out to be Freya, as she seeks revenge for the needless death of her son, Baldur, that occurred in the previous game.</p>
    <p className='text-white text-xl mt-10 mb-10'>Urging the wolves to continue, despite the danger ahead, Freya transforms into a falcon before soon returning to her human form as she launches an attack on Kratos. Fending off her attack by pressing the button prompt (L1), the father and son will continue their escape.</p>
    <p className='text-white text-xl mt-10 mb-10'>Having regained control of Kratos, steer the sled and avoid all obstacles that block your track – don’t fear if you do happen to run into any, as the wolves will jump over the rubble, and your sled will break through. After dodging your first two obstacles, Freya will launch another attack on Kratos, and you’ll be prompted to button mash circle to fend her off.</p>
    <p className='text-white text-xl mt-10 mb-10'>After successfully fending her off for a second time, Freya will continue her pursuit, causing plenty of damage in her path as she pulls out all stops in an attempt to stop Kratos and Atreus from escaping.</p>
    <p className='text-white text-xl mt-10 mb-10'>Coming around for a third attempt, Freya will knock Atreus out of the sled and will grab ahold of Kratos. To fend off her attacks, you’ll need to press L1, R1, L1, and L1 to succeed in fending her off. Then, after helping Atreus back into the sled, Freya will attempt one final attack as she launches herself at Kratos, driving a sword into his shoulder – you’ll need to mash circle to survive.</p>
    <p className='text-white text-xl mt-10 mb-10'>Having stopped her pursuit, a short cutscene will begin that sees the pair surviving the trek through the stave. Ready to head home, take control of the sled and follow the path home.</p>
    <p className='text-white text-xl mt-10 mb-10'>After arriving, take the path left and follow the lit lanterns as you make your way toward Kratos’ home.</p>
    <p className='text-white text-xl mt-10 mb-10'>When nearing the house, a cutscene will begin that sees Atreus comforting his dying wolf, Fenrir, before he passes. Following Fenrir’s death, Kratos insists on training – despite the circumstances. But, as you would suspect, Atreus doesn’t take well to the comment and will refuse, instead heading off into the woods to bury his friend.</p>
    <p className='text-white text-xl mt-10 mb-10'>Respecting Atreus’ request for a moment alone, Kratos will head inside, briefly conversing with Mimir, before drifting off to sleep.</p>
    <p className='text-white text-xl mt-10 mb-10'>Awaking in a dream, follow Faye as she leads you through the woods on a hunt for the sick wolf that’s killing deer. Having failed to approach the predator, help Faye move the fallen trees blocking the nearby ledge.</p>
    <p className='text-white text-xl mt-10 mb-10'>After climbing the ledge, follow the path a short distance as you look for Faye. Then, stopped by the sick wolf again, attempt to approach it once more, to no luck.</p>
    <p className='text-white text-xl mt-10 mb-10'>Finally, with the wolf running off, Kratos calls out to Faye, only to be startled by her sudden approach, warning him that there is still much to do and prepare for. Startled awake, this will end the dream sequence.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Track Atreus</h2>

    <p className='text-white text-xl mt-10 mb-10'>Awakening from the dream, Mimir will inform Kratos that Atreus has yet to return from burying the wolf. Then, with his worry growing, leave the house and begin tracking Atreus' footprints, which lead down the lantern-lit path we recently used to reach the house – Mimir assumes Atreus will likely have done the burying by the frozen river.</p>
    <p className='text-white text-xl mt-10 mb-10'>When reaching the fork in the path, head left and continue past Speki and Svanna’s den as you head towards a small opening in the rock wall, beside some glyphs. To break through the ice blocking the path forward, perform a heavy attack (R2) with Kratos’ Leviathan Axe.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once inside, continue through the small cave, vaulting over the nearby obstacle. Upon reaching the woods outside the cave, continue following Atreus’ footprints until you reach a small clearing, which will see a small cutscene as Kratos investigates the sudden disappearance of the tracks.</p>
    <p className='text-white text-xl mt-10 mb-10'>After the short investigation, Kratos is ambushed by a group of seven Raiders as they charge toward him. To disperse the enemies, you’ll want to use a combination of both light and heavy attacks (R1 and R2, respectively), all while incorporating long-distance attacks with the help of Kratos’ Leviathan Axe, which can stun enemies temporarily.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Right off the bat, Kratos’ Leviathan Axe will have access to several skill abilities to use, which include:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Technique Skills:

      1. Frost Awaken I - Hold Triangle to imbue the Leviathan Axe with ice and power up the next Melee or Ranged Attack with high frost.
      2. Frozen Breach - Press R1 during Frost Awaken to do a wide swing and apply Frost to nearby enemies.
      3. Frozen Spike - Aim and Press R1 during Frost Awaken to quickly throw the Leviathan Axe and create a Frost explosion on impact.

      Ranged Skills:

      1. Axe Throw - Aim and Press R1 to quickly throw the Leviathan Axe forward. Can cause a more severe reaction when striking an enemy in the head or legs.
      2. Freezing Throw I -Aim and Press R2 to throw the Leviathan Axe forward with force. Can freeze weaker enemies for a short duration.

      Melee Skills:

      1. Frost Rush - While sprinting, Press R1 to perform a leaping slash.
      2. Leviathan’s Fury - While sprinting, Press R2 to perform a massive leaping attack applying Frost.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>While attacking the enemies, remember to dodge their incoming attacks – hitting an enemy with your Leviathan Axe while an enemy is launching an attack will cancel their attack and temporarily stun them.</p>
    <p className='text-white text-xl mt-10 mb-10'>Furthermore, enemy attacks are indicated by the color of the small triangle shape that appears at the bottom of the screen when engaged in combat.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>

      * White indicates an enemy is targeting you.
      * Yellow indicates an incoming attack.
      * Red indicates an incoming, unblockable attack.
      
    </p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once the Raiders have been dealt with, it’s time to check on the stave by passing under the fallen tree (marked with glyphs) blocking the path to your left. Before continuing forward, be sure to pick up the glowing green Healthstone to restore Kratos’ health.</p>
    <p className='text-white text-xl mt-10 mb-10'>Learning that the stave has broken, allowing enemies to trespass into the area, continue a few meters forward and inspect the fallen bear. With signs pointing to the bear being a victim of a larger bear’s attack, continue following the tracks left in the snow forward as you head deeper into the woods.</p>
    <p className='text-white text-xl mt-10 mb-10'>Needing to find a way around the blocked path, continue a short distance to the right of the blockage to discover a fallen tree. Then, clear the path by throwing your Leviathan Axe at the partially broken tree trunk to jump across the gap (circle).</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’re back on the trail, continue following the bloodied path until you reach some ledges you’ll need to climb. To your right, you’ll find a frozen enemy that you can loot for some Hacksilver (a currency used to purchase weapons, armor, and upgrades).</p>
    <p className='text-white text-xl mt-10 mb-10'>Having collected the Hacksilver, continue up the two ledges and proceed to make your way through the small tunnel in the snow until you reach the other side, where you’ll encounter more Raiders – there are five in total to take out.</p>
    <p className='text-white text-xl mt-10 mb-10'>Frost up your Axe by holding Triangle and take down the Raiders in the area.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Follow the path right of the tunnel, and you’ll find some Hacksilver on the ground next to a frozen enemy.</p>
    <p className='text-white text-xl mt-2 mb-2'>Just be warned, as one of the five Raiders can be found in this area.</p>
    <p className='text-white text-xl mt-2 mb-2'>In addition, following the path left of the tunnel, you’ll find some Hacksilver on the ground, just before the path leading up a frozen stream. Like the other side, you’ll also encounter two Raiders in this area.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>After clearing the area of enemies, follow the trail of blood as it leads up a frozen stream. Before you can reach the wall needed to climb up to the path above, you’ll encounter two more Raiders and a Raider Scout.</p>
    <p className='text-white text-xl mt-10 mb-10'>Favoring ranged attacks, Raider Scouts are known to be deadly accurate with their slings, so you’ll need to always be cautious and ready to dodge their incoming attacks with a second's notice.</p>
    <p className='text-white text-xl mt-10 mb-10'>Having defeated the Raiders, continue forward and climb the cracked wall marked with glyphs. At the top of the ledge, you’ll discover a coffin filled with Hacksilver and 1 Forged Iron (a component used for crafting).</p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, make your way across the nearby bridge, and you’ll find another small pouch of Hacksilver beside a fallen enemy. Then, a little further ahead, just before the entrance to the cave, you’ll find another chest that contains some Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>After looting all the Hacksilver, make your way through the crack in the rock wall, where you’ll encounter a makeshift camp of Raiders – there are three to defeat.</p>
    <p className='text-white text-xl mt-10 mb-10'>To get the battle started, sprint off the nearby ledge and press R1 while in the air to unleash a ‘Death From Above’ attack – while you won’t kill the enemy in one fell swoop, it’ll take off a large chunk of their health.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before traveling further into the cavern, search the camp for small pouches of Hacksilver, which are mostly found around the firepits. You’ll also find a Healthstone when following the left of where you entered.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Destroy environment items such as crates and pots to find small amounts of Hacksilver. While not much, it’ll quickly begin to add up over time.</p>

    </div>
    
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, follow the trail of blood as it heads deeper into the cavern – along the way, you’ll find more Hacksilver by the fires, so keep your eyes peeled.</p>
    <p className='text-white text-xl mt-10 mb-10'>After rounding the corner, you’ll encounter two more Raiders and a Raider Scout perched atop a large ledge.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>When entering the open area, you’ll find a small Hacksilver chest just to your right and a Healthstone at the top of the stairs.</p>

    </div>
   
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, head up the set of stairs, take the path left and climb up the nearby ledge marked with a glyph. When you reach the top, you’ll encounter three more Raiders, including a Raider Scout. After defeating the Raiders, continue up the next ledge, where you’ll find a Healthstone by the firepit.</p>
    <p className='text-white text-xl mt-10 mb-10'>Continue following the path as it leads outside, where you’ll enter a short cutscene that sees Katros continuing his search for Atreus, only to be caught off guard by a giant bear.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Bjorn</h2>
   
    <p className='text-white text-xl mt-10 mb-10'>As the bear sends you tumbling down to the ground below, you’ll need to mash circle to break free from its gripe. Now, Bjorn is by far the toughest enemy you’ll have faced thus far, and with a health bar broken down into five sections, you’ll need to unleash a lot of damage to take it down.</p>
    <p className='text-white text-xl mt-10 mb-10'>Bjorn has two main attacks: a semi-blockable swipe attack that’s often combined with a charged entry and an unblockable ground slam that will deal damage through the guard. Now, it’s worth mentioning that when Bjorn performs his swipe attack, it’ll appear with yellow rings, indicating that the attack is blockable but has block breaks that can leave Kratos vulnerable to damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>To avoid this damage, you’ll need to ensure you’re parrying each of the three swipes; otherwise, you’ll be vulnerable to damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>Bjorn’s ground slam will appear with red rings, indicating that the attack cannot be blocked, and will deal damage through the guard, so it’s essential to your survival to dodge and avoid this attack at all costs. Keep in mind that this attack has a small AoE (area of effect) radius, so you’ll need to be well clear to avoid damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>Due to its tough hide, throwing your Axe at Bjorn will have little effect, depleting only small amounts of health on each hit. For this reason, we recommend charging your Axe with Frost and then waiting for the bear to perform a slam – which can occur as part of its main slam attack if you’re standing within melee range after it performs a flurry of swipes, or after it charges at you.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once Bjorn returns to the ground, sprint over and unleash a flurry of heavy and light attacks, as there’s a small window of opportunity where the risk of being hit is very low, as the bear will attempt to regain its footing before launching another attack.</p>
    <p className='text-white text-xl mt-10 mb-10'>After you’ve performed a handful of attacks, back up quickly to avoid taking damage from potential swipes, which have a relatively large radius. However, if you stay close for too long, the bear will bite into you and toss you backward after mashing Circle to escape.</p>
    <p className='text-white text-xl mt-10 mb-10'>It is also worth noting that, like other enemies, Bjorn’s attacks can be canceled with a well-timed Axe throw or melee attack. Furthermore, if you’re starting to run low on health, have Kratos break through the small trees that litter the area in hopes of receiving some Healthstones.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’ve managed to deal enough damage to remove one and a half of Bjorn’s health sections, you’ll trigger Kratos’ Spartan Rage, which can be enabled by pressing L3 and R3 simultaneously.</p>
    <p className='text-white text-xl mt-10 mb-10'>When entering this stage of Rage, use the R1, R2, and L1 and L2 buttons to unleash powerful attacks, with each attack healing a small amount. During this stage of the battle, Bjorn will essentially be helpless against Kratos’ Rage, so as long as you’re unleashing consistent attacks, you should be able to deplete the health bar to just below half.</p>
    <p className='text-white text-xl mt-10 mb-10'>With Bjorn’s health nearly below half, continue fighting strategically with well-timed attacks and dodges. Once you’ve depleted almost all of the bear’s health, finish the monster by pressing R3 when prompted.</p>
    <p className='text-white text-xl mt-10 mb-10'>Just before Kratos can finish off the bear, it’ll begin to transform. Surprise! As it turns out, Atreus let his emotions overcome him while burying Fenrir, and when running into the bear that we encountered earlier, he let his abilities get the better of him, morphing into an animal.</p>
    <p className='text-white text-xl mt-10 mb-10'>With no control over his newly learned Therianthropy ability, Kratos stresses the need to continue training. Without learning how to master his emotions with discipline, there’s no way for the pair to truly grasp the extent of Atreus’ powers.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return Home with Atreus</h2>

    <p className='text-white text-xl mt-10 mb-10'>Following the rather intense cutscene, interact with the nearby log blocking the path forward, and use your Axe to break through the log. Then, follow Atreus down the path until you encounter another three Raiders, which you’ll need to defeat before continuing.</p>
    <p className='text-white text-xl mt-10 mb-10'>Bjorn has two main attacks: a semi-blockable swipe attack that’s often combined with a charged entry and an unblockable ground slam that will deal damage through the guard. Now, it’s worth mentioning that when Bjorn performs his swipe attack, it’ll appear with yellow rings, indicating that the attack is blockable but has block breaks that can leave Kratos vulnerable to damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>Having defeated the Raiders, continue through the cave and use the chain to reach the ground below. As you continue through the cave, you’ll find a large coffin not too far from the chain that contains Hacksilver and Forged Iron. Before leaving the cave, you’ll have one final chest of Hacksilver to open.</p>
    <p className='text-white text-xl mt-10 mb-10'>Shortly after leaving the cave, Atreus will stop and inspect the blood-drenched ground. Learning that the blood is his, or potentially the prey he was dragging, continue along the path as he inspects the ground for a moment longer.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you continue along the path, vault over the fallen tree, and you’ll enter another cutscene where Kratos has Atreus repair the gap in the stave. Soon after repairing the stave, the pair will learn that the bear Atreus killed had two cubs that are now draught over the loss of their mother. With the damage already done, it’s now up to nature to take its course.</p>
    <p className='text-white text-xl mt-10 mb-10'>Following the cutscene, continue to retrace your steps as you return to the house before the incoming storm arrives. However, along the way back, Kratos and Atreus will be ambushed again by both Raiders and Raider Scouts – take them out quickly with well-timed ranged attacks and with the help of Atreus’ companion support.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once dealt with, continue back toward the house. If you’re in the mood for a small feel-good scene, Atreus will stop by the two remaining wolves and have a short conversation with them.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon entering the house, interact with the bed and watch as a cutscene begins. Before Kratos and Atreus can fully rest, the pair will be startled by yet another unannounced visitor – Thor. Inviting himself inside, Kratos will briefly converse with Thor before Odin arrives.</p>
    <p className='text-white text-xl mt-10 mb-10'>Discussing the fates of his sons, Odin shares his disappointment in Baldur’s death, as despite his mind, he held potential and was Odin’s best tracker. While accepting Baldur’s fate, Odin wants to ensure peace, but to do so, Atreus must stop his search for Tyr.</p>
    <p className='text-white text-xl mt-10 mb-10'>Despite the sweetened deal, Odin’s offer is refused and he, in turn, asks Thor to deal with the issue – preferably not taking all day.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Thor</h2>

    <p className='text-white text-xl mt-10 mb-10'>Launching an attack on Kratos, Thor will send the pair flying across Midgard, eventually crashing into one of the temples at Shores of Nine. It is here that Kratos will need to defeat Thor.</p>
    <p className='text-white text-xl mt-10 mb-10'>With six sections of the health bar to deplete, putting Thor down won’t be an easy task, especially without the help of Kratos’ Leviathan Axe – at least to begin with. However, with consistent and strategic attacks, and well-timed dodges, you’ll be able to slowly but effectively pick away at Thor’s health.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now, despite Thor’s size, he’s especially quick and, unsurprisingly, very powerful, so much so that he’ll barrel through all the stone pillars in the area with ease, essentially leaving no area safe from his relentless attacks.</p>
    <p className='text-white text-xl mt-10 mb-10'>In case you need a reminder, here’s a breakdown of what each of the different colored attacks mean:</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>1. Yellow rings indicate that the attack is blockable but has block breaks that can leave Kratos vulnerable to damage. To avoid taking damage, you’ll need to ensure you’re quickly parrying each of the incoming attacks, otherwise, you’ll be vulnerable to damage. Parrying these attacks won’t be easy, so it’s important to remain focused throughout the battle with Thor.</p>
    <p className='text-white text-xl mt-2 mb-2'>2. Red rings indicate that the attack cannot be blocked, and will deal damage through the guard, so it’s essential to your survival that you dodge and avoid these attacks at all costs.</p>

    </div>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Thor Phase 1</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Starting the fight, Thor will begin charging toward you, so to combat this, enable Spartan Rage from the get-go. With successful hits, this unleashed fury should automatically take Thor down almost a complete bar of health.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 border bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-10 mb-10'>Higher Difficulty Tip: Try to save Spartan Rage for when you’re low on health, especially if you’re having trouble getting down the attack patterns. Doing so will allow you to do what damage you can while taking hits, then recover some of that health back while dealing even more damage to Thor.</p>
    <p className='text-white text-xl mt-10 mb-10'>If you die, there’s a good chance you’ll come back with your Spartan Rage meter closer to being full (at least on your first death). Try to make the most of this opportunity.</p>

    </div>
   
    <p className='text-white text-xl mt-10 mb-10'>Once the Rage has ended, it’s time to calm down and take things slowly as you carefully dodge and parry as many of Thor’s incoming attacks as possible.</p>
    <p className='text-white text-xl mt-10 mb-10'>If you find yourself defeated a few times in a row, use those fights as a learning moment on how to better parry or dodge attacks. The more parries the better, though.</p>
    <p className='text-white text-xl mt-10 mb-10'>One of Thor’s most dangerous attacks comes in the form of an unblockable charge, which, when caught, will see Thor picking up Kratos and slamming him into the ground. With no way to parry this attack, your best option will be to look out for the red circles that indicate the incoming attack and prepare to dodge it.</p>
    <p className='text-white text-xl mt-10 mb-10'>Another one of Thor’s attacks will see him quickly raising his hands to his stomach and then unleashing a burst of energy in your direction. While it can be blocked with Kratos’ shield, the attack is relatively quick and easily missed if you don’t raise your shield fast enough. If you’re far enough away, you can look out for Thor’s windup and dodge the move.</p>
    <p className='text-white text-xl mt-10 mb-10'>Thor will also launch a three-punch combination, followed by a spartan kick, which, when caught, will send Kratos flying backward. Thankfully, these attacks can be blocked, but like Bjorn, they will feature block breaks, leaving Kratos vulnerable to damage, so timing your parries carefully on this attack will be crucial to your success.</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>If you’re starting to run low on health, have Kratos break through the stone pillars in the area in hopes of receiving some Healthstones. Thor can cause pretty significant damage, so you’ll want to remain as high health as possible if you’re looking to make it out of the fight.</p>
    <p className='text-white text-xl mt-2 mb-2'>If Thor is nearby when you pick up the health, the force of adding new life force will lightly stagger Thor.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once you’ve knocked off two blocks of Thor’s health, you’ll be prompted to press R3 to deliver a significant blow. Following a short cutscene, Kratos can recall his Leviathan Axe by pressing Triangle and then will send it crashing into Thor’s chest.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Thor Phase 2</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Now that we’ve got ourselves a fight, Thor will proceed to showcase a new attack that sees him raising his hands above his head and then slamming them into the ground, creating an AoE shockwave. To avoid this damage, you’ll want to ensure you’re always standing at a distance when this attack is performed.</p>
    <p className='text-white text-xl mt-10 mb-10'>Furthermore, if timed just right, you’ll be able to cancel out Thor’s incoming attacks by simply launching a light or heavy attack upon him before he can start his attack.</p>
    <p className='text-white text-xl mt-10 mb-10'>While there are several ways to approach this fight, our best success came when launching attacks upon Thor as he walked toward Kratos. If timed just right, you’ll have the chance to charge at him, canceling out his incoming combination attack, which will briefly stun him for a quick moment.</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Higher Difficulty Tip:</h3>
    <p className='text-white text-xl mt-2 mb-2'>If you’re playing more cautiously, be sure to take every opportunity to charge up the frost power of the Leviathan Axe by holding triangle. You can do this most frequently in every phase of this fight while Thor is raising his fist for the shockwave.</p>
    
    </div>
    
    <p className='text-white text-xl mt-10 mb-10'>To finish off the battle, continue to unleash smart and effective attacks at Thor, and upon depleting his health bar, you’ll be prompted to press R3 to deliver the final blow – or so you thought. After a short cutscene, Thor will move the battle outside to the frozen lake.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Thor Phase 3</h2>

    <p className='text-white text-xl mt-10 mb-10'>Having replenished his health bar, you’ll need to deplete all six sections of Thor’s health once again. However, offering much of the same in terms of Thor’s attacks and movement, he does happen to introduce a few new attacks to his arsenal.</p>
    <p className='text-white text-xl mt-10 mb-10'>These include a hammer toss, which he will throw quickly in your direction and is unblockable (you’ll need to dodge this attack instead); a three-punch combination with his hammer, which can be blocked and parried if timed correctly; and lastly, an electrified shockwave that will see him swiping his hammer along the ground, sending a shockwave traveling in your direction.</p>
    <p className='text-white text-xl mt-10 mb-10'>While our recommended attack strategy above still applies here, you’ll also find a few pillars around the area that can be picked up, and tossed at Thor to deplete at least half of his current health bar section.</p>
    <p className='text-white text-xl mt-10 mb-10'>After dealing enough damage, a short cutscene will begin, and Thor will grab ahold of Kratos. Here you’ll need to mash circle on two different occasions in order to save Kratos from succumbing to Thor’s power.</p>
    <p className='text-white text-xl mt-10 mb-10'>Unfortunately, the second time around, Kratos will fall Thor’s power; however, not done with him yet, Thor will proceed to shock him back to life, refusing to end the battle until Thor has seen the real Kratos. This scene is staged regardless of your proficiency in this fight.</p>
    <p className='text-white text-xl mt-10 mb-10'>Continue unleashing even more damage upon Thor until you’re prompted again to press R3. After another short cutscene, Thor and Kratos will continue to battle it out, refusing to give up. Moving to another location for the third and final time, it’s time to take Thor down for good.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Thor Phase 4</h2>

    <p className='text-white text-xl mt-10 mb-10'>With a newly replenished health bar, you’ll need to continue picking away at Thor’s health while also being careful to dodge Thor’s newly introduced attacks for the fourth phase of the battle.</p>
    <p className='text-white text-xl mt-10 mb-10'>These new attacks include a lightning attack that will occur when Thor slams his hammer into the ground, launching lightning strikes around the area. Again, you’ll need to be quick to dodge these strikes, in which the strike zones are marked as red on the ground; otherwise, you’ll be dealt damage and will need to mash Circle to escape its electrical pull.</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Higher Difficulty Tip:</h3>
    <p className='text-white text-xl mt-2 mb-2'>While Thor is throwing down lightning, get behind him and deal a heavy blow. Use this break as an opportunity to get in as much damage as possible.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>By now, you’ll likely have built up enough Rage to unleash Kratos’ Spartan Rage. You this to deplete a rather large chunk from Thor’s health. After depleting at least two and a half health bars, a cutscene will begin, and you’ll be prompted to press R1 to use your Leviathan Axe to destroy the stone pillar above Thor.</p>
    <p className='text-white text-xl mt-10 mb-10'>Unsuccessful in catching Thor off guard, continue the picking away at Thor’s health until his health bar is almost fully depleted. Once enough damage has been dealt, you’ll enter one final cutscene that sees Kratos showing his true self, the God of War. Pleased with this showing, Thor will consider Kratos’ blood debt paid and will flee the area.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return Home to Atreus</h2>

    <p className='text-white text-xl mt-10 mb-10'>Just as Thor flees, Sindri and Brok will break through the nearby ice wall, offering their assistance. Worried about Atreus’ under Odin’s watch, follow Sindri and Brok through the tunnel and up to the top of the bridge and into their workshop, as they agree to help prepare a gate for Kratos to travel through to ensure he reaches Atreus before it’s too late.</p>
    <p className='text-white text-xl mt-10 mb-10'>After traveling through the gate, Brok offers to organize housing for Kratos and Atreus while their stave is broken to help ensure Odin and Thor aren’t spying on their every move. After the short conversation, continue through the second gate to return home to Atreus.</p>
    <p className='text-white text-xl mt-10 mb-10'>Following a lengthy cutscene that sees Atreus attempting to regain Kratos’ trust after failing to mention his search for Tyr, Kratos instructs Atreus to pack his things as they prepare to head out in search of a way to keep the troublesome gods away.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Follow Arteus through the Forest</h2>

    <p className='text-white text-xl mt-10 mb-10'>Upon packing, you’ll need to equip a series of weapon and armor upgrades, which are guided with tutorials on how to equip and view stats through the armor and weapon tabs of the menu system.</p>
    <p className='text-white text-xl mt-10 mb-10'>Then, having equipped all the necessary armor and upgrades, continue outside the house and follow Atreus as he leads you to the old temple in the Wild Woods.</p>
    <p className='text-white text-xl mt-10 mb-10'>Along the way, you’ll encounter several fresh bodies of Raiders that have been attacked. With no clues left behind, it’s safe to assume we’re not the only ones out here.</p>
    <p className='text-white text-xl mt-10 mb-10'>Following Atreus further into the forest, you’ll soon come by some Brambles blocking the path forward. Press left on the d-pad to change to the Blades of Chaos and ignite the Brambles by pressing L2 + R2.</p>
    <p className='text-white text-xl mt-10 mb-10'>Learning that the bridge has collapsed, follow Atreus down the path just right of the bridge and use your blades to pull down the wooden board blocking the ledge above – you can latch on the wooden board by pressing circle when nearby.</p>
    <p className='text-white text-xl mt-10 mb-10'>After climbing the ledge, you’ll find Raider, now turned Hel-Raider, hanging from a tree. If you wish, you can pull down the Hel-Raider by using your Blades of Chaos – remember that to calm them down, you’ll want to attack them with fire. Then, having killed the Hel-Raider, continue following Atreus through the forest.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon jumping down off the ledge, follow the path left and jump down to the ground below, where you’ll find a small pouch of Hacksilver by a fallen enemy.</p>
    <p className='text-white text-xl mt-10 mb-10'>Just before reaching the start of the temple ruins with Atreus, you’ll catch a brief glimpse at a mysterious creature defeating a Raider.</p>
    <p className='text-white text-xl mt-10 mb-10'>When reaching the building, take a left, where you’ll find more dead Raiders and a chest filled with Hacksilver that you can open after igniting the Bramble covering it.</p>
    <p className='text-white text-xl mt-10 mb-10'>You’ll also find a small pouch of Hacksilver next to a fallen raider just before following Atreus along the path that leads right as he attempts to find a way around to the temple. Finally, as you reach the top of the path, you’ll encounter two more Hel-Raiders you’ll need to take care of before continuing.</p>
    <p className='text-white text-xl mt-10 mb-10'>Finding yet another bridge collapsed to the temple, climb the ledge to your right and continue following the path.</p>
    <p className='text-white text-xl mt-10 mb-10'>Drop down from the ledge and before climbing through the small gap in the wall, jump down the ledge furthest to your right, where you’ll find a chest filled with Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>After crouching through the hole in the wall, you’ll encounter two Raiders, with one turning into a Hel-Raider upon death – take them out. Upon taking care of them, you’ll unlock the ability to purchase Skills.</p>
    <p className='text-white text-xl mt-10 mb-10'>To use your Skill points, press the Touch Pad button to access the Skills tab. Unlock Skills with XP to gain access to new moves and abilities. Kratos and Atreus earn XP separately in combat and have their own unique skill trees.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before continuing, loot the room of all Hacksilver pouches and Healthstones.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’re ready, squeeze through the gap in the wall, latch onto the fallen pillar with your blade, and use the left analog stick to move it out of the way.</p>
    <p className='text-white text-xl mt-10 mb-10'>Jump across the gap and continue following Atreus. When reaching the end of the path, you can drop down the nearby ledge, where you’ll find a pouch of Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon collection, climb back up to the top and follow Atreus as he leads you up a nearby ledge marked with glyphs.</p>
    <p className='text-white text-xl mt-10 mb-10'>From here, look over the ledge at the large pillar by the gap you just jumped over. Use your blades to latch onto this pillar and move it left to create a platform that can help you reach the other side.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once free, pull the chain to tighten the slack in the rope. Upon tightening the rope, zipline down to the ledge on the other side. From here, drop down the ledge to the ground below, where you’ll soon be attacked by several Raiders, Raider Scouts, and Hel-Raiders.</p>
    <p className='text-white text-xl mt-10 mb-10'>Much like the battle with Thor, you’ll find two large tree trunks marked with glyphs in the area that Kratos can pick up and use to attack the incoming Raiders – this attack deals quite a bit of damage, so we highly recommend utilizing these features.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Mash the triangle button to charge up the Blades of Chaos with fire and follow up with R1 or R2 for a fiery attack. This is especially helpful for dealing with Hel-Raiders, who are immune to frost.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>With the Raiders dealt with, it’s time to continue toward the temple.</p>
    <p className='text-white text-xl mt-10 mb-10'>To do so, head over to Atreus and use your Blades of Chaos to burn away the Bramble blocking the gap in the rock wall – once burnt away, squeeze through the opening in the wall to continue.</p>
    <p className='text-white text-xl mt-10 mb-10'>Follow the path a short distance, where you’ll soon encounter two Hel-Raiders you’ll need to defeat.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, interact with the glowing blue writing on the rock wall near Atreus to learn that it reads ‘Kill Winter-man.’ This is the earliest Lore you can find in the game, however it's untracked (that is, it isn't listed on the Map Screen's checklist).</p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, climb the ice-covered wall until you reach the top, where you’ll then have the opportunity to command Atreus to shoot the hanging Hel-Raider blocking the path to the ledge above.</p>
    <p className='text-white text-xl mt-10 mb-10'>Firing upon this Hel-Raider will also prompt another Hel-Raider to appear, so you’ll need to clear them both to continue. Once clear of enemies, loot the area and continue up to the ledge above.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat The Huntress</h2>

    <p className='text-white text-xl mt-10 mb-10'>Before Kratos can reach the top, he’ll be stopped by a Stalker dubbed The Huntress, who will pull him down to the ground. While not the largest health bar you’ve encountered thus far, you’ll still need to deal enough damage to deplete all three of The Huntress’ health bar sections.</p>
    <p className='text-white text-xl mt-10 mb-10'>Remember that your shield is currently broken, so you’ll need to ensure you’re dodging all incoming attacks, as they can no longer be parried.</p>
    <p className='text-white text-xl mt-10 mb-10'>Equipped with a bow, The Huntress will mostly remain at a distance and frequently perform a combination that sees her firing four flaming arrows toward you in quick concession. So, when she starts firing, remember to continue dodging until the attack is finished.</p>
    <p className='text-white text-xl mt-10 mb-10'>In addition to this attack, she’ll launch a powerful single-shot that she’ll quickly charge up that’s equipped with two arrows. These heavy, unblockable attacks will also leave you on fire.</p>
    <p className='text-white text-xl mt-10 mb-10'>During the fight, Atreus will point out that The Huntress’ horn will occasionally glow, indicating a weakspot. You’ll want to throw your weapon (L2 + R1) at these weakpoints to deal significant damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>When successfully targeting the horns, The Huntress will drop to her knees for several moments, allowing the ability to unleash a flurry of attacks uninterrupted.</p>
    <p className='text-white text-xl mt-10 mb-10'>Be warned, standing too close to The Huntress will see her perform a stomp attack, so when she begins to rear up, start backing away before it’s too late.</p>
    <p className='text-white text-xl mt-10 mb-10'>During our encounter with The Huntress, we found one of the best ways to take her down was to consistently unleash heavy attacks with your Blades of Chaos while charged in the fiery state.</p>
    <p className='text-white text-xl mt-10 mb-10'>Not only will this combination deal significant damage, but it’ll also leave a temporary burn on The Huntress, slowly depleting her health.</p>
    <p className='text-white text-xl mt-10 mb-10'>Along with the flaming arrow combination, The Huntress will also perform an attack that sees her launching several projectiles simultaneously. These projectiles will span several meters, so you’ll want to avoid dodging side to side and, instead, dodge backward to better escape this attack.</p>
    <p className='text-white text-xl mt-10 mb-10'>Later into the battle, The Huntress will perform a new attack that sees her launching several explosive arrows around the area. You’ll want to distance yourself from these at all costs before they explode.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’ve dealt enough damage, finish The Huntress by pressing R3 when prompted. For defeating The Huntress, you’ll be rewarded with +10 Bonded Leather, a Healthstone, a Light Runic Attack Gem (Winter’s Bite), and a Frozen Flame, an impossible material that houses the Rage of fire and the temper of ice. This material is used to upgrade the Leviathan Axe.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Runic Attack Gems give Kratos access to Light or Heavy Runic Attacks. They are slotted into his weapons via the Weapons menu. When equipped, a Runic Attack slowly gathers Runic energy that can be released into a powerful attack. While blocking (L1), press R1 to use a Light Runic Attack.</p>

    </div>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Follow Atreus into the Forest (Continued)</h2>

    <p className='text-white text-xl mt-10 mb-10'>Having defeated The Huntress and collected her loot, it’s time to continue your journey towards the temple. To do so, climb up the nearby ice-covered wall until you reach the ledge above.</p>
    <p className='text-white text-xl mt-10 mb-10'>From here, follow Atreus as he attempts to find a way inside the temple – before heading into the temple, you’ll find a Healthstone beside two stone pillars.</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lower Wildwoods Lore 2 - The Ashen God</h3>
    <p className='text-white text-xl mt-2 mb-2'>This Lore is untracked and is not required for 100% completion.</p>
    <p className='text-white text-xl mt-2 mb-2'>Once you climb up the ice wall to the dark entrance inside the ruined temple, take a left and drop down onto the ruined bridge to find the scroll at the end.</p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>With the collectible in hand, face the temple, but before going back, drop down the gap in the slow on the left of the ledge that leads back to temple opening. Down here, you’ll find another chest with 82 Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>Use the Blades of Chaos to go back up the bridge and follow Atreus into the temple.</p>
    <p className='text-white text-xl mt-10 mb-10'>When heading down the short tunnel, you’ll have the option to continue following Atreus as he heads along the path to your left, or you can continue straight towards a ledge you can drop down that’s between an archway.</p>
    <p className='text-white text-xl mt-10 mb-10'>Hanging in the air above this ledge is a pot. Use your Leviathan Axe to break this pot and proceed to drop down the ledge to pick up a pouch of Shattered Runes (4) – these are a unique resource that course with Runic energy and were once capable of moving the land itself.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’ve collected the Shattered Runes, climb back up to the main path and continue following Atreus into the temple courtyard. Atreus will stop before a pillar.</p>
    <p className='text-white text-xl mt-10 mb-10'>Directly behind Atreus on the far wall is a hole Kratos can slide through. Do so to claim a Red Coffin filled with 1 Forged Iron and 122 Hacksilver. Collect these then return to Atreus. But before helping him, there’s one more spot for loot in this area! To the west of the staircase is a glowing standard chest. To reach it, walk toward it, following the dark dirty snow.</p>
    <p className='text-white text-xl mt-10 mb-10'>This should put you on the right side of the chest’s platform, toward a corner with vases you can destroy for Hacksilver. The prompt to climb up should appear already. Use it to get up to the chest and claim your Hacksilver reward. Now, return to Atreus.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before you can reach the shrine, you’ll need to clear the pillar that’s blocking the path – latch onto the pillar with your blades and move it out of the way as prompted.</p>
    <p className='text-white text-xl mt-10 mb-10'>Unable to move the pillar, use your Axe to hit the weakspot (the shining silver spot that looks like it’s had a bite taken out of it) of the log to the right of the staircase that’s preventing you from moving the pillar. With that out of the way, you can move the pillar.</p>
    <p className='text-white text-xl mt-10 mb-10'>With the path now clear, continue inside the temple, where you’ll soon enter a short cutscene that sees Atreus uncovering a secret that’s hidden behind the shrine. Traveling to a world in which only giants were intended to see, Atreus will explain the story depicted by the shrine. Having finished explaining the story behind the shrine, turn back to the temple as Atreus wishes to show you one more thing.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return Home</h2>

    <p className='text-white text-xl mt-10 mb-10'>Before leaving the shrine and following Atreus, you can follow the path back to the large courtyard, where you’ll find several chests filled with resources and Hacksilver if you missed them on arrival.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon climbing down the stairs, you’ll spot a Red Coffin behind a steel gate. To access this coffin, head left of the gate, where you’ll find a small crack in the wall. Squeeze through this crack and follow the path, where you’ll then have the chance to open the coffin to loot some Forged Iron and Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>To loot the final chest in the area, follow the path that leads right of the stairs, where you’ll discover a chest sitting on top of a ledge. To reach this, travel to the end of the path and look up at the ledge, where you’ll find a blue glyph, which you can use your Blades of Chaos to reach. This chest will contain some Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now that you’re ready to return home to make preparations for the journey to Svartalfheim in search of Tyr, return to the shrine and follow Atreus as he jumps down the nearby ledge. Before continuing, look to your right, and you’ll discover a red chest hidden behind a large gate.</p>
    <p className='text-white text-xl mt-10 mb-10'>Approach the gate and lift it up to gain access to the room. This large red chest will contain Rawhide and Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>After you’ve looted the chest, continue following the main path and climb the ledge to your left. Before taking the next ledge to the right, climb the left ledge to discover a small pouch of Hacksilver next to a fallen enemy.</p>
    <p className='text-white text-xl mt-10 mb-10'>From here, turn around and climb the large ledge that’s marked with glyphs. Follow the path and you’ll find another Red Coffin filled with Forged Iron and Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’ve looted the chest, return to the nearby fallen enemy and look to the ledge opposite it. Here, you can use your Blades of Chaos to break through the cracked ground below that Atreus had mentioned earlier.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon breaking through, follow the path a short distance, jumping over the gap, and you’ll find a Red Coffin containing Rawhide and Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>Having collected the resources, return to Atreus and proceed` to drop down the ledge, into the clearing below, despite the warning of danger. Once at the bottom, you’ll need to defeat several Raiders, Raider Scouts, and lastly the Raider Chief.</p>
    <p className='text-white text-xl mt-10 mb-10'>Much like a normal Raider, the Raider Chief uses standard melee attacks, including Axe slams and Axe swings. So, whether you use your Axe or Blades of Chaos, your best option to defeat the Raider Chief will be to keep at a distance during their attacks and only go in for close-range combat between their attacks.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, pick up the pouch of Hacksilver from the dead enemy and lift the fallen log blocking the path that leads home.</p>
    <p className='text-white text-xl mt-10 mb-10'>Following Atreus, you’ll come to a small clearing, where you’ll find a Healthstone and a Red Coffin – which will reward Forged Iron and Hacksilver. Continue following Atreus until you reach your house.</p>
    <p className='text-white text-xl mt-10 mb-10'>At the house, you’ll find Sindri, who will assist in creating the mystic gateway needed to reach the other realms.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once inside, follow Sindri and enter the gateway at the end of the path – here you’ll enter a cutscene that sees Sindri introducing the pair to his house, where he has put together a safe place they’re able to stay, without the prying eyes of Odin and Thor watching over them.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Enter the House</h2>

    <p className='text-white text-xl mt-10 mb-10'>After the cutscene, follow Sindri and Atreus inside the house, where you’ll enter another lengthy cutscene that sees Brok offering to repair and upgrade Kratos’ weapons and armor. Navigate the store and purchase any necessary upgrades as you please.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’re happy with your purchases, exit the store and check the nearby store for any items you may have left behind after rigorous battles – these items can include the likes of Forged Iron and Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before leaving to speak with Sindri, you may talk to Brok one final time to receive an optional conversation. Then, once you’re ready, talk with Sindri in his office.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Follow Sindri to the Workshop</h2>

    <p className='text-white text-xl mt-10 mb-10'>After a very short cutscene, follow Sindri into his workshop, where he’ll reveal his Bifrost machine.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Meet Brok and Sindri at the Mystic Gateway</h2>

    <p className='text-white text-xl mt-10 mb-10'>Before meeting with Brok and Sindri outside, purchase any last items or upgrades – Brok will also offer another optional conversation. Once outside, interact with the gate and watch as Brok and Sindri open the mystic gateway to Svartalfheim with Mimir’s help.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once the Mystic Gateway is open, collect Mimir from the Bifrost, and head through the door to travel to Svartalfheim as you seek out the help of Durlin, who Brok and Sindri claim that he knew Faye and may know of Tyr’s location.</p>
    <p className='text-white text-xl mt-10 mb-10'>To conclude the mission, you’ll need to use the Yggdrasil Realm Seed, which is used to unlock access to new Mystic Gateways. To head to your destination, shine the light of Yggdrasil on Svartalfheim and proceed to hover over the Wetlands mystic gateway to travel to Svartalfheim – you’ll need to follow Sindri once more to reach the final gateway.</p>
    
    
    <p className='text-white text-xl mt-10 mb-10'>Once inside, follow Sindri and enter the gateway at the end of the path – here you’ll enter a cutscene that sees Sindri introducing the pair to his house, where he has put together a safe place they’re able to stay, without the prying eyes of Odin and Thor watching over them.</p>

    </div>
    
    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Home</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>The Quest for Tyr</p>

    </button>

    </div>

    </motion.div>

  )
}

export default Gowr1