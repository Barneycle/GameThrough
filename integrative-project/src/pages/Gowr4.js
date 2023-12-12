import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const GOWR4 = () => {

    useEffect(() => {

        window.scrollTo(0, 0);
      
      }, []);

    const navigate = useNavigate();
  
      const handlePrevious = () => {
  
          navigate('/gowr3');
      
      };
  
      const handleNext = () => {
  
          navigate('/gowr5');
      
      };
  
    return (
  
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>
  
        <h1 className='text-5xl text-white font-mono p-10 text-center'>Groa's Secret </h1>
  
        <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>
    
        <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
        <h3 className='text-white font-mono text-2xl'> This walkthrough will include story spoilers for the third quest, Old Friends, so proceed with caution.  </h3>
    
        </div>

        <div className='p-20 items-center justify-between'>

        <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Reach Groa’s Shrine Atop the Temple</h2>

        <p className='text-white text-xl mt-10 mb-10'> When arriving in The Strond through the Mystic Gateway, you’ll find a glowing blue Rune Read at the base of the nearby Dark Elf statue. </p>
        <p className='text-white text-xl mt-10 mb-10'> Once collected, follow Tyr up the set of eastern ledges until you reach the cave exit – you’ll find a Hacksilver pouch to your right, just before exiting the cave. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>The Strond - Lore 2 - The Living Desert</h3>
    <p className='text-white text-xl mt-2 mb-2'> When reaching the campsite, you’ll find a Lore Marker upon jumping down the nearby ledge and a Red Coffin located at the end of the path behind some vases. This coffin contains Slag Deposits and some Hacksilver. </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Ready to continue, return to the campsite and squeeze through the gap in the wall. On the other side, you’ll find a Hacksilver chest to your left and a Nornir Chest that contains an Idunn Apple. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>The Strond - Nornir Chest 1</h3>
    <p className='text-white text-xl mt-2 mb-2'> After slipping through the gap by the campsite, head left at the fork and drop down the ledge to find the chest. The chest will be on your right.  </p>
    <p className='text-white text-xl mt-2 mb-2'> The C Rune can be found to the left of the Nornir Shine on top of the cliff. Luckily, the Blades of Chaos are long enough to reach and light it with a Blazing Surge (L2 then R2 by default). </p>
    <p className='text-white text-xl mt-2 mb-2'> The N Rune is to the right of the Nornir Chest, just a bit below the edge of the cliff where the wooden scaffolding is. </p>
    <p className='text-white text-xl mt-2 mb-2'> The R Rune is above the spot where the N Rune is; however, it’s too high for the Blades of Chaos to reach, so you’ll need a better vantage point. To get it, return to the split that led you to the Nornir Chest, and this time take the right-hand path up the ledges. </p>
    <p className='text-white text-xl mt-2 mb-2'> At the top, look left and drop down the ledge: the R Rune will be above you. After lighting it, you can drop down again to return to the Nornir Chest’s area so you can open it! </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>From here, continue up the set of ledges that lead southwest, where you’ll spot the Light of Alfheim in the distance.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Jump down the ledge and continue a short distance ahead, where you’ll find a Hacksilver pouch by a fallen elf to the left, along with one of Odin’s Ravens sitting atop a dead tree to your left, as you follow the path toward the large circular doorway.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Having collected Odin’s Raven, jump across the gap and head inside the circular doorway, where you’ll discover the path is blocked from the other side. Thanks to Tyr’s knowledge of the Twilight Stone, you’ll learn that it can reflect an Axe throw – the reflect indicator will change color when lined up with a target. </p>
    <p className='text-white text-xl mt-10 mb-10'> With this knowledge, aim your Axe through the gap in the fence at the Twilight Stone on the other side, and ensure it lines up with the latch holding the wooden door shut. Once you’re through to the other side, defeat the small group of Wretches that will attack. These Wretches will introduce a new attack that sees them rolling toward you, then performing an AoE explosion (indicated by a red glow on the ground) that will occur on death. </p>
    <p className='text-white text-xl mt-10 mb-10'>With the Wretches defeated, you’ll discover one of Kvasir’s Poems and a Legendary Chest containing Tap to Reveal, when jumping down the western ledge.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Legendary Chest & Kvasir's Poem</h3>
    <p className='text-white text-xl mt-2 mb-2'> Legendary Chest Contains: </p>
    <p className='text-white text-xl mt-2 mb-2'> Kvasir’s Poem Reference: </p>
    <p className='text-white text-xl mt-2 mb-2'>From the wooden gate, proceed to jump down the western ledge. When jumping down, you’ll discover a Hacksilver pouch along the edge, but as you travel further left, you’ll uncover a secret room that’s blocked by debris – destroy it.  </p>
    <p className='text-white text-xl mt-2 mb-2'>Once destroyed, take out the two Wretches that’ll appear. With the room clear, you’ll find a large Legendary Chest and an Artifact sitting next to it. </p>
    <p className='text-white text-xl mt-2 mb-2'> The chest contains the Skadi’s Edge Light Runic Attack, which slows time down so you can target specific enemies, then throw the Axe to ricochet between them. </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Ready to continue, climb up the cliff face by Atreus until you reach the ledge above. From here, pick up the nearby Healthstone and continue following the path southwest, where you’ll encounter a Light Elf that’s about to kill a Dark Elf. </p>
    <p className='text-white text-xl mt-10 mb-10'> Despite Tyr’s efforts to stop the slaughter, the two Light Elvesin the area will soon turn their attacks onto you. These level-2 Light Elfs are very powerful and will deal significant damage should you fail to block their incoming attacks. </p>
    <p className='text-white text-xl mt-10 mb-10'> The Light Elves have three notable attacks – a melee attack that sees them charging toward you, unleashing a flurry of quick attacks; another melee attack in which they will charge toward you, dealing a heavy strike; and lastly, an unblockable attack in which they toss a white-colored bomb onto the ground. </p>
    <p className='text-white text-xl mt-10 mb-10'>It’s worth noting that if you’re using the Dauntless Shield, you’ll be able to parry both melee attacks to deal temporary stun damage upon them, as well as empowering your next Shield Bash – both of which allow you to deal hefty damage.  </p>
    <p className='text-white text-xl mt-10 mb-10'> As for the bomb, you’ll be able to pick it up and toss it back at the Light Elf, dealing large amounts of damage. Just be warned, the window of opportunity to grab and throw the bomb is extremely small, so you’ll have to weigh up the risks, as if you’re too late, you’ll be dealt explosion damage. </p>
    <p className='text-white text-xl mt-10 mb-10'> As for the bomb, you’ll be able to pick it up and toss it back at the Light Elf, dealing large amounts of damage. Just be warned, the window of opportunity to grab and throw the bomb is extremely small, so you’ll have to weigh up the risks, as if you’re too late, you’ll be dealt explosion damage. </p>
    <p className='text-white text-xl mt-10 mb-10'>Not too far away, you’ll encounter an artifact and a Nornir Chest to your right – do note you won’t have the necessary equipment to open the Nornir Chest just yet.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Tribute to Freyr 1 - Dream Charm</h3>
    <p className='text-white text-xl mt-2 mb-2'>After passing beneath the large rock, continue a short distance down the stairs, where you’ll soon discover an Artifact beside a Nornir Chest, just to the right of the large dead tree that’s in the middle of the path. </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>With the Artifact collected, continue following the path and jump across the gap, where you’ll find an entrance to the temple. Learning that the door has been sealed for quite some time, grab ahold of the left wheel and watch as Tyr completes the first half of the puzzle. Once that half of the puzzle has been completed, you’ll be prompted to use move the Left Analog-stick up until the dark light has filled the remainder of the symbol above.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Failing to open the door, Atreus will instruct you to move the Left Analog-stick down until the puzzle has been filled entirely with white light. Then, upon completing the puzzle, open the door, where you’ll now find yourself inside the Temple of Light.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Once inside, follow the path until you come across a door blocked by solid light. To continue, reflect your Axe off the large hanging stone and into the light stone attached to the wall above the door. </p>
    <p className='text-white text-xl mt-10 mb-10'>Breaking through the door, head down the set of stairs and proceed to grapple across the gap, where you’ll find the Lake of Souls – where you’ll learn more about how it came to be. Following the conversation, continue up the curved staircase. Here, you’ll have to complete another light puzzle to continue.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Before starting the puzzle, loot the Red Coffin found in the room's northwest corner. This coffin will contain Rawhide and some Hacksilver. </p>
    <p className='text-white text-xl mt-10 mb-10'> With the chest looted, stand a fair distance from the blocked door and reflect your Axe into the light crystal above the door. Now that the door is open continue up yet another set of stairs and open the door at the top. </p>
    <p className='text-white text-xl mt-10 mb-10'> Once entering, you’ll be attacked by a group of Light Elves (Level 2 and Level 3) – take them down to continue. </p>
    <p className='text-white text-xl mt-10 mb-10'> When clearing the area, follow Tyr as he creates a path that Kratos can grapple across to reach the bridge on the other side. </p>
    <p className='text-white text-xl mt-10 mb-10'> Before following the path right, you can detour left to find a Hacksilver bucket hanging over a ledge (remember to free the latch to the area below before jumping down) and a Hacksilver chest. </p>
    <p className='text-white text-xl mt-10 mb-10'> With the Hacksilver collected, continue following Tyr and Atreus up the curved staircase – loot the Hacksilver chest to your right along the way. </p>
    <p className='text-white text-xl mt-10 mb-10'>Not too far up the stairs from the chest, you’ll spot a small ledge to your left, which you can jump down. Now, this area is completely optional and will house the following collectibles:  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Temple of Light Lore 1 - The Bifrost Bridge</h3>
    <p className='text-white text-xl mt-2 mb-2'>After jumping down the ledge, turn right to find a fork guarded by four Wretches: head left and down the stairs to find the Artifact Scroll at the bottom, in the back-right corner.  </p>
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Temple of Light - Legendar Chest 1</h3>
    <p className='text-white text-xl mt-2 mb-2'> After jumping down the ledge, turn right to find a fork guarded by four Wretches: make a U-turn to the left to drop down another ledge. Kill the two Wretches here, then open the Legendary Chest. </p>
    <p className='text-white text-xl mt-2 mb-2'>The chest contains the Hades Retribution Light Runic Attack for the Blades of Chaos. It trades the small area of effect that Flames of Anguish has for dealing more damage to a singular target, making it good for using on a priority target.  </p>
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Temple of Light - Odin's Raven 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>After jumping down the ledge, turn right to find a fork guarded by four Wretches: head right here to find the Raven hiding behind a grate.  </p>
    <p className='text-white text-xl mt-2 mb-2'> To make the shot, you’ll have to hit the bottom of the Twilight Stone while standing at the bottom of the ramp where the dead Light Elf is (like the screenshot above). </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once ready, continue up the curved staircase until you reach another locked door.  </p>
    <p className='text-white text-xl mt-10 mb-10'> When reaching the door, pick up the Healthstone and head through the gap in the path leading southwest. Grapple up to the ledge above, and follow it left, where you’ll uncover an Artifact. </p>
    <p className='text-white text-xl mt-10 mb-10'> From this location, reflect your Axe off the nearby Twilight Stone and into the light crystal on the side of the archway, next to the door. Upon opening the door, Tyr will run ahead and confront the group of Light Mystic Elves that’ll attack. </p>
    <p className='text-white text-xl mt-10 mb-10'>These new Light Elf variants are powerful and highly skilled in magic, unleashing several ranged attacks that are known to be difficult to dodge.  </p>
    <p className='text-white text-xl mt-10 mb-10'>The first and arguably the most deadly attack comes in the form of a large, unblockable blue orb. This orb will expand in size and will slowly move toward you. While it is possible to back up and avoid this attack, we recommend that you throw your Axe at it, which will in turn, cause it to explode.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Next up, the Light Mystic Elves will also wind up and toss a bright white ball of magic toward you. This attack is very quick, so you won’t have too much time to prepare your block before it’s too late.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Once you’ve successfully taken down the initial group of Light Mystic Elves, three more will spawn in the area, which you’ll need to defeat before you can continue. Upon their defeat, loot the area of any Healthstones and Hacksilver pouches before continuing up the set of stairs. </p>
    <p className='text-white text-xl mt-10 mb-10'> Just right of the door, you’ll find a Hacksilver chest that you can loot. Once ready, open the door at the end of the path. </p>
    <p className='text-white text-xl mt-10 mb-10'>Continue up the stairs, where you’ll find yet another light door puzzle. To solve this puzzle, jump down the ledge to your right and interact with the wheel.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Using the wheel, move the left Analog stick to lower the Twilight Gem one notch down. Now lowered, hit the left paddle with your Axe (L2+R1) to reveal the Twilight Gem, and then proceed to reflect your Axe off into the light crystal found above the door.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’ve solved the puzzle, you’ll have the opportunity to uncover another Legendary Chest containing the Relic, Hilt of Gram.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Temple of Light Legendary Chest 2</h3>
    <p className='text-white text-xl mt-2 mb-2'>After solving the light door puzzle, look for the circular door nearby that lets you cross under the walkway to an entirely new puzzle: a chain on the left that controls an elevator with the Legendary Chest with a breakable target, and a Twilight Stone that turns as it’s moved.  </p>
    <p className='text-white text-xl mt-2 mb-2'> To get around this, move the Twilight Stone as high as it can go: when you throw your Axe at it, it’ll bounce behind the elevator shaft and get stuck in some white stone. Next, raise the elevator as high as it can go so that the target is level with the white stone: recall the Axe, and it’ll break the target! </p>
    <p className='text-white text-xl mt-2 mb-2'> Drop down and claim your reward, but be careful on the way back up as you’ll be swarmed by some Wretches and a Gloom Nightmare. </p>
    <p className='text-white text-xl mt-2 mb-2'>The chest contains the Hilt of Garn Relic, which gives Kratos a shot of Rage and stuns any enemies close to him.  </p>
    <p className='text-white text-xl mt-2 mb-2'> The chest contains the Hilt of Garn Relic, which gives Kratos a shot of Rage and stuns any enemies close to him.</p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, climb back up the ledge and head through the door, where you’ll be attacked by a group of both Exploding Nightmares and Gloom Nightmares. Gloom Nightmares can temporarily blind you should you be hit by one of their attacks; however, with a few well-timed attacks with your Axe, they’ll be dealt with fairly quickly. </p>
    <p className='text-white text-xl mt-10 mb-10'>Exploding Nightmares, however, are much more troublesome, as they’ll sacrifice themselves for the good of killing their enemy. To counter this explosive attack, you’ll want to ensure you’re prioritizing them in battle and taking them down before they can get too close.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, follow Tyr through the right tunnel and open the door. Before doing so, be sure to pick up the Kvasir Poem nearby.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Kvasir's Poems 7 - Spirits Within Walls</h3>
    <p className='text-white text-xl mt-2 mb-2'> Poem Reference:   </p>
    <p className='text-white text-xl mt-2 mb-2'>After defeating the group of Nightmares, stand in the doorway and face the way forward – the poem will be in the room on your left, sitting on a table.  </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Upon opening the door, you’ll encounter two more Light Elves. This time, equipped with a two-sectioned health bar, these Elf variants are the toughest you’ve faced thus far, dealing significant damage upon failing to block their attacks.  </p>
    <p className='text-white text-xl mt-10 mb-10'> The first major attack you’ll need to be wary of is a large beam of light that will be tossed your way – much like the similar attack performed by the Light Mystic Elves; you’ll need to react quickly if you have hopes of blocking the attack. </p>
    <p className='text-white text-xl mt-10 mb-10'>The next main attack will see the Elf charging toward you (with yellow attack rings), unleashing a heavy melee attack. While this attack can be blocked, you’ll need to be careful of the block breaks and ensure you’re ready to parry the attacks between the breaks quickly.  </p>
    <p className='text-white text-xl mt-10 mb-10'>In addition, the Elf will also charge up an unblockable attack, indicated by a blue ring. Should you double-tap L1 quickly enough, you’ll be able to break this shield, interrupting the incoming attack.  </p>
    <p className='text-white text-xl mt-10 mb-10'>However, if you’re too slow, the Elf will perform a powerful spinning melee attack that will deal large amounts of damage if you don’t dodge out of the way.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once defeated, you’ll find a Red Coffin nearby that you can loot. To find this chest, head through the far left archway and drop down the ledge. This chest will contain Forged Iron and some Hacksilver.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, destroy the latch on the edge, then drop down with your Blades of Chaos, and grapple across to the first plate on your left.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Here, you’ll have the choice to continue right to follow the main path or detour slightly left to unlock the nearby Legendary Chest – here’s how to reach the chest. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Temple of Light - Legendary Chest 3</h3>
    <p className='text-white text-xl mt-2 mb-2'> To reach the Legendary Chest, grapple across, hang down off the first ledge, and then grapple across to the first plate on your left. </p>
    <p className='text-white text-xl mt-2 mb-2'> Once there, the normal way is to grapple over to Tyr; instead, look left to see another plate to grapple to. From there, you can continue to solid ground.</p>
    <p className='text-white text-xl mt-2 mb-2'>Next, you’ll need to lower a Light Door to access the chest. At the safe spot, turn right to spot a Twilight Stone hanging into view. The goal is to swing the Twilight Stone with the Blades so that you can get the right angle and throw the Axe at it and break the Light Crystal.  </p>
    <p className='text-white text-xl mt-2 mb-2'> To ease the process, equip the Axe first: Kratos will switch back to it automatically after you’ve yanked with the Blades. You can also yank the Twilight Stone to the left first, giving you more time to line up your shot for when the stone swings back to the right. </p>
    <p className='text-white text-xl mt-2 mb-2'>Once the Light Crystal has been cut in half, continue left to another grapple plate, then leap across to the walkway and open the Legendary Chest!  </p>
    <p className='text-white text-xl mt-2 mb-2'>The chest contains the Rune-Engraved Release accessory for Atreus, which makes the first Runic-charged arrow (like Sonic Arrows) deal more damage if his quiver is full.  </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Ready to continue with the main story, return to the first plate and grapple across the gap to your right. Follow the path a short distance and then use the Twilight Stone to reflect your Axe into the nearby Light Mystic Elf that has yet to spot you – doing so will cause stagger damage. Upon defeating the Elf, continue forward, climb up the side of the broken elevator, and press circle when prompted. </p>
    <p className='text-white text-xl mt-10 mb-10'>When reaching the top, you’ll be greeted by a group of Elves – both standard Light Elves and Light Mystic Elves, so you’ll need to be extra careful of their incoming attacks, as it’s easy to get overwhelmed.  </p>
    <p className='text-white text-xl mt-10 mb-10'>It’s also important to mention that you’ll find several Twilight Stone statues in the middle of the room. You can use these to your advantage by having your Axe reflect off these stones and into the Elves. Do remember, the Axe will only hit its intended target if the reflected light is colored blue.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, push over the large Elf statue to create a light bridge across the gap.  </p>
    <p className='text-white text-xl mt-10 mb-10'> With the bridge created, follow Tyr across to the other side, where you’ll have the chance to complete the nearby Nornir Chest, as well as uncover a Red Coffin that you may have spotted earlier in your journey. To find the Red Coffin, follow the path to your, and proceed to jump down the ledge at the end of the path. The chest will contain Forged Iron and some Hacksilver. </p>
    <p className='text-white text-xl mt-10 mb-10'> Once you’ve looted the Red Coffin, here’s how you can complete the nearby Nornir Chest. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>This Nornir Chest is found right after Kratos and Tyr push down two giant statues to form a Light Bridge. Ahead on the right will be some stairs up to the next area; the Nornir Chest is at the base of the stairs. </p>
    <p className='text-white text-xl mt-2 mb-2'>The R Rune is visible just to the left of the chest, while the C Rune is on a tiny balcony up the wall further to the left.  </p>
    <p className='text-white text-xl mt-2 mb-2'>The real trick is the N Rune: it’s part-way down a corridor to the right of the chest, and is covered in Soundstone. Even with it removed, there isn’t enough time to run down and strike it.  </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, follow Tyr up the set of stairs, where you’ll soon encounter another group of Elves – take them down. Be sure to use the nearby Twilight Stone statues to your advantage, as reflecting your Axe into these Elves will cause a stagger effect, which can come in handy, especially if you’re trying to regain health.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Once the area is clear, continue following Tyr as he leads you through the Temple of Light. Before reaching the next door, collect Odin’s Raven to your left, as it sits atop a ledge. </p>


    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Temple of Light - Odin's Rvaen 2</h3>
    <p className='text-white text-xl mt-2 mb-2'>Once you’ve fought the Light Elves, continue through the room, where you'll soon find the Raven sitting on top of a small tower to your left.  </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'> As you continue to near the top, enter through the next door, where you’ll need to solve yet another light door puzzle. To solve this puzzle, you will need to get a better angle on the Twilight Stone, and to do this, have Atreus shoot the Soundstone plaque on the right side of the room. </p>
    <p className='text-white text-xl mt-10 mb-10'> After moving the statue, have Kratos use his Blades of Chaos on it to move it into a more favorable position to the left. </p>
    <p className='text-white text-xl mt-10 mb-10'>With the statue moved, climb up the nearby ledge that's been cleared, follow the path right, and grapple across the gap.  </p>
    <p className='text-white text-xl mt-10 mb-10'> On the other side, break the latch along the right side of the path to create a shortcut. </p>
    <p className='text-white text-xl mt-10 mb-10'>Continue following the path a few meters forward, where you’ll find some Soundstone attached to the statue – have Atreus destroy it.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Once the Soundstone has been destroyed, latch onto the statue with your Blades of Chaos and move it to the left. Next, destroy the metal wings attached to the statue's back by shooting at the light blue latches (the same things used to hold Hacksilver buckets in the air). </p>
    <p className='text-white text-xl mt-10 mb-10'> Upon destroying the right latch, aim at the Twilight Stone nearby to reflect your Axe (L2 + R2) into the latch that’s hidden behind the metal wing’s left side. Before continuing, loot the Hacksilver chest found at the end of the path. </p>
    <p className='text-white text-xl mt-10 mb-10'> Once the latch has been broken, and the statue has fallen further to the side, grapple across to the other side and stand on the small balcony, directly behind the opposite statue. </p>
    <p className='text-white text-xl mt-10 mb-10'>Here, you’ll have the perfect angle to reflect the Axe from the Twilight Stone into the light crystal.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Having opened the door, continue up the set of stairs and proceed through the next door, where you’ll now find yourself outside the Temple of Light. Turn right, climb the set of ledges, and follow the path forward until you reach the central chamber, which is blocked by yet another light door.  </p>
    <p className='text-white text-xl mt-10 mb-10'> To solve this puzzle, look to the statue south and command Atreus to shoot the Soundstone that’s holding the Twilight Stone in place. After freeing the Twilight Stone, Tyr will jump up and angle it so that you can hit the light crystal. </p>
    <p className='text-white text-xl mt-10 mb-10'>Completing the puzzle, travel up the stairs and into the central chamber, where you’ll take the elevator to the top of the temple. Before continuing, you’ll find a Rune Read and a Red Coffin nearby that you can loot.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Temple of Light Lore 2 - Limitless</h3>
    <p className='text-white text-xl mt-2 mb-2'> After completing the light door puzzle, you’ll find a second chunk of Soundstone nearby that you can shoot – it’s to the right of the stairs to the elevator, on the side of a giant statue. </p>
    <p className='text-white text-xl mt-2 mb-2'> When you shoot it, a large hanging pendant will lay slack. It has a grapple point on it, which you can use to cross a gap to a circular platform. Once you land on it, look to your right to find the Runes on the face of a rock! </p>
    <p className='text-white text-xl mt-2 mb-2'>Before returning, be sure to jump across to the platform to your left, where you can loot a Red Coffin, which contains Rawhide and some Hacksilver.  </p>
    <p className='text-white text-xl mt-2 mb-2'>Ready to continue, turn the wheel and ride the elevator to the top. Following a short cutscene, grapple across to the other side and proceed to open the door. Follow Tyr and Atreus up the next flight of stairs and open the next door.  </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Before following Tyr left, turn right and follow the stairs down the area below, where you’ll find a Hacksilver chest. Once looted, return to the door and follow the path left until you reach Sindri’s workshop. Loot the blue coffin next to Sindri, and then purchase or craft any upgrades as needed.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, interact with the nearby shrine, where you’ll enter a lengthy cutscene that depicts another prophecy that Atreus and Kratos have yet to see, ultimately learning that Groa had lied to Odin.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Descent the Light Well</h2>

    <p className='text-white text-xl mt-10 mb-10'>Following the cutscene, finish off any business you may have with Sindri, and continue to retrace your steps as you descend the Light Well.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Upon opening the door, defeat the two Light Elves you’ll encounter and proceed down the spiral staircase, where you’ll need to defeat a Light Elf Warrior. Once defeated, open the next door, where a Light Elf will greet you.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Following the encounter, grapple back across to the central chamber. </p>
    <p className='text-white text-xl mt-10 mb-10'>Failing to make it all the way across, defeat the Exploding Nightmare and Gloom Nightmare. When jumping over the gap, you’ll be stopped by another Gloom Nightmare and Light Elf Warrior – defeat them. Ready to continue, jump down the ledge by the blue rope.  </p>
    <p className='text-white text-xl mt-10 mb-10'> When reaching the platform below, take down the small group of Wretches, the Exploding Nightmare, and the Light Elf you’ll encounter. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'> In this area, you’ll find several Twilight Stone pendants lining the walls, so be sure to use these to your advantage, as any stagger damage could be helpful if you’re running low on health.</p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'> After clearing the area, follow Tyr down the southeast set of stairs and jump down the ledge, and proceed to grapple to the platform below. From here, drop down the ledge and defeat the Light Elf and group of Wretches. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'>Running low on health? Climb the northwest ledge to find a Healthstone!  </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Once you’re ready, continue following Tyr as you jump down and grapple to several more platforms – along the way, you’ll encounter another Light Elf – until you reach a platform with a Healthstone. Pick up the Healthstone and jump down to the circular arena below, where you’ll encounter Alva, a powerful Light Elf. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Alva</h2>

    <p className='text-white text-xl mt-10 mb-10'> With five sectioned-health bars, Alva is the most challenging Elf you’ll have encountered thus far. Thankfully, despite slight variations in her attacks, she’s mostly mechanically the same as the Light Elves you fought throughout the Temple of Light, just much more powerful. </p>


    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Quick Tips for Defeating Alva</h3>
    <p className='text-white text-xl mt-2 mb-2'>  Due to the nature of Alva’s attacks, you’ll want to be continuously moving about the area, as she attacks quite quickly and in rapid succession, often making it difficult to avoid some of her unblockable attacks.</p>
    <p className='text-white text-xl mt-2 mb-2'> Don’t forget to utilize Atreus throughout the battle! While his attacks won’t deal too much damage or stagger Alva, any extra help is always appreciated, especially when playing on harder difficulties.  </p>
    <p className='text-white text-xl mt-2 mb-2'>  After interrupting Alva’s attacks (particularly those indicated by blue circles) or performing a successful parry, she’ll become staggered for a very brief moment. During this time, quickly unleash a flurry of heavy attacks before backing away to safety.</p>
    <p className='text-white text-xl mt-2 mb-2'> On harder difficulties, not cancelling Alva’s blue circle attack can mean instant death or close to one. Prioritize stopping this by staying closer to her in the encounter as you’re able. </p>
    <p className='text-white text-xl mt-2 mb-2'> Unlike other boss encounters, Alva has no checkpoints, so if you die, you’ll need to restart. </p>
    <p className='text-white text-xl mt-2 mb-2'> When timed just right, toss a fully charged Axe throw Alva’s way to interrupt her attacks. </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Starting out, Alva’s most dangerous attack is indicated by blue circles, which will see her levitating in the air and charging up an attack. </p>
    <p className='text-white text-xl mt-10 mb-10'>Like similar encounters, you’ll need to quickly double tap L1 to interrupt this attack with a shield strike; however, if you’re too slow, Alva will leap towards you before sending her sword into the ground, creating a large AoE shockwave. One thing to note is that if you’re close enough while she’s building charge, time will slow temporarily, allowing you a little extra leeway to execute the shield strike.  </p>
    <p className='text-white text-xl mt-10 mb-10'>If you cannot interrupt the attack in time, it’s crucial that you back up as far as possible to avoid the incoming damage, as the area of effect is quite large. During our encounter, we found that Alva would sometimes spam this attack until she was successfully interrupted.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Alva will also perform two standard melee attacks. One has no indications and will see her quickly flying towards you before unleashing a flurry of blockable light attacks; however, you’ll need to be quick to do so.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Do note that as you begin to deplete Alva’s health over halfway, she’ll finish this combination with an unblockable, slam attack. While not as deadly as the aforementioned slam, it will deal quite a bit of damage and has a reasonably sized AoE.  </p>
    <p className='text-white text-xl mt-10 mb-10'> The other melee attack, indicated by the red circles, will see her charging toward you before unleashing a heavy spinning attack. Unfortunately, this attack can not be blocked, so you’ll need to do your best to dodge out of the way to avoid serious damage. </p>
    <p className='text-white text-xl mt-10 mb-10'>Next up, Alva can perform two range-based attacks that are similar to those of the Light Elf Warrior and Mystic.  </p>
    <p className='text-white text-xl mt-10 mb-10'>The first attack sees her tossing her blades toward you. While the attack, indicated by yellow circles, can be blocked and parried when timed just right, it does happen very quickly, so your reflexes need to be on point. Alternatively, dodging out of the way is a much safer option - just be careful to avoid any damage that may occur when she recalls her swords once they pass through you.  </p>
    <p className='text-white text-xl mt-10 mb-10'>The next range-based attack is indicated by red circles and will see her tossing an X-shaped light beam toward you – this attack can not be blocked. In addition, while Alva’s health is relatively low, she has the potential to launch this attack several times in a row, so be prepared to keep dodging when this occurs.  </p>
    <p className='text-white text-xl mt-10 mb-10'>When depleting her health bar, Alva will fall to the ground and will begin to replenish her health with the nearby light crystals. To avoid this, quickly perform a shield strike (L1+L1) to interrupt the attack. To finish her off, press R3 when prompted to defeat her for good.  </p>
    <p className='text-white text-xl mt-10 mb-10'> As a reward, you’ll receive a Healthstone, a rage stone, a new shield attachment (Rond of Expedition), and a Frozen Flame weapon upgrade. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Descend the Light Well (Continued)</h2>
   
    <p className='text-white text-xl mt-10 mb-10'> Having defeated Alva, speak with Tyr, who’s overcome with emotion after killing a Light Elf that had attacked him. After following him a short distance, you’ll enter a lengthy cutscene. Following the cutscene, follow Atreus through the temple until you reach a door – just to the right, you’ll find a Hacksilver chest. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Make Your Way To the Mystic Gateway</h2>

    <p className='text-white text-xl mt-10 mb-10'>After exiting the temple, follow the path a short distance until you reach a nearby bridge. Here, you’ll be attacked by a group of Dark Elves. Much like their Light Elf counterparts, Dark Elves will perform two types of melee attacks - one that can be blocked and one that cannot.  </p>
    <p className='text-white text-xl mt-10 mb-10'>These attacks are indicated by their respective yellow and red circles and will see them charging toward you. Both melee attacks will see the Dark Elves rushing toward you, so you’ll have enough time to prepare for their incoming attacks.  </p>
    <p className='text-white text-xl mt-10 mb-10'> You’ll also need to be wary of ranged attack, which sees them firing red beams of light onto the ground, where they’ll then explode, dealing damage if you’re within its AoE. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'>Tip: To take out the Dark Elves, we recommend working with Atreus to stagger them with his Sonic Arrows before unleashing heavy melee attacks upon them. Interrupting their charge attacks with a shield strike will also stagger them briefly, leaving them vulnerable to damage. </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Once the area is clear, loot any Healthstones and continue following Tyr, where you’ll soon encounter several Dark Elves and Light Elves fighting one another– take them out and continue across the gap, where you’ll need to defeat two more Elves. Upon defeating them, squeeze through the gap in the wall to your left. </p>
    <p className='text-white text-xl mt-10 mb-10'>Here, you’ll encounter a Dark Elf and two Dark Elf Warriors, who will attack much the same as their Light Elf counterpart.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'>Tip: As you continue forward, you’ll begin to find more and more Twilight Stone lining the rock walls. Use these to your advantage, as reflecting your Axe into the Elves will deal significant stagger damage.  </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>After clearing the area, follow Tyr up the ledge and through the small cave, where you’ll soon encounter another Light Elf – defeat it and continue up the ledge to your right. Upon climbing the ledge, defeat the next group of Elves and proceed through the gap located at the end of the path.  </p>
    <p className='text-white text-xl mt-10 mb-10'>When entering through the gap, you’ll be attacked by yet another group of Dark Elves, but this time, they’re Dark Elf Summoners, a new enemy type you have yet to encounter. Summoners possess the unique ability to call in reinforcements, a relatively effective strategy they use to overwhelm an enemy.  </p>
    <p className='text-white text-xl mt-10 mb-10'> For this reason, we recommend taking down Summoners as quickly as possible; otherwise, you may just find yourself overcome by Dark Elves. Despite being trapped on the other side, Atreus will still be available to fire upon the Elves when commanded. </p>
    <p className='text-white text-xl mt-10 mb-10'> Ready to continue, follow the path north and climb the ledge to the top. Follow Atreus and Tyr up the northern ledge, where you’ll finally reach the Mystic Gateway. Interact with it and return to Sindri’s House. </p>


    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Eat Dinner</h2>

    <p className='text-white text-xl mt-10 mb-10'>Upon heading inside, you’ll have the opportunity to speak with Brok, to perform any upgrades to your weapons or armor – you should have an Axe upgrade available.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, sit at the table and watch as a cutscene unfolds, which sees Atreus storming off after Kratos refuses to acknowledge the possible meaning behind the prophecy of Loki and the Champion.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Upon falling asleep, Atreus awakens in a mysterious dream. After hearing a voice calling for Loki, interact with the strange figure and watch as a scene plays out as Atreus relives his worst memories. </p>
    <p className='text-white text-xl mt-10 mb-10'> After falling to the ground, turn around and follow the same strange figure in the distance, where another cutscene will unfold. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Follow the Wolf</h2>

    <p className='text-white text-xl mt-10 mb-10'>Awakening in yet another strange land, which you’ll soon learn is Iron Wood, follow the pack of wolves through the forest, collecting any resources you pass by along the way. Once you reach the end of the path, climb beneath the gap, where you’ll meet a young woman, Angrboda.  </p>


  </div>

  <div className='mx-auto grid md:grid-cols-2 gap-2'>
  
  <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

  <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
  <p className='items-center mt-2 text-xl text-white'>Old Friends</p>

  </button>

  <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

  <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
  <p className='items-center mt-2 mb-2 text-xl text-white'>The Lost Sanctuary</p>

  </button>

  </div>

  </motion.div>
)
}

export default GOWR4






























































        


































      