import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const GOWR10 = () => {

    useEffect(() => {

        window.scrollTo(0, 0);
      
      }, []);

    const navigate = useNavigate();
  
      const handlePrevious = () => {
  
          navigate('/gowr9');
      
      };
  
      const handleNext = () => {
  
          navigate('/gowr11');
      
      };
  
    return (
  
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>
  
        <h1 className='text-5xl text-white font-mono p-10 text-center'>Forging Destiny</h1>
  
        <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>
    
        <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
        <h3 className='text-white font-mono text-2xl'> This walkthrough will include story spoilers for the third quest, Old Friends, so proceed with caution.  </h3>
    
        </div>

        <div className='p-20 items-center justify-between'>

        <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find a Path to the Surface</h2>

        <p className='text-white text-xl mt-10 mb-10'>Arriving in an abandoned service tunnel, Kratos and Freya must exit the tunnel before they can begin their search for the “Lady” that will supposedly help them weaponize the Draupnir.  </p>
        <p className='text-white text-xl mt-10 mb-10'> Before you proceed into the tunnel, turn north and look for a Hacksilver chest found at the back of the room. On the opposite side, you’ll also find some Twilight Stone that you can throw your Axe into to receive some hacksilver. </p>
        <p className='text-white text-xl mt-10 mb-10'>Ready to continue, head to the end of the path and look east – here, you’ll find a Soundstone barrel on the ground. Have Freya destroy the barrel to receive a hacksilver pouch. Once collected, continue west until you reach a dead end.  </p>
        <p className='text-white text-xl mt-10 mb-10'> You’ll find a Healthstone to your left and some Red Fungi Bramble to your right that you can destroy by Hexing it with Freya’s arrows and then igniting it with your Blades of Chaos. Behind the Fungi Bramble, you’ll discover three pouches of Hacksilver. </p>
        <p className='text-white text-xl mt-10 mb-10'>Once you’ve collected the Hacksilver, use your Blades of Chaos to explode the barrel by the gate. Then, clearing a path, climb beneath the gate and continue forward until you come by two Wicked Grims – be wary of their tongue, as they’re known to use it like a whip.  </p>
        <p className='text-white text-xl mt-10 mb-10'>Upon clearing the area, continue into the southern room, where you’ll find a Hacksilver pouch beside some vases. Continue along the path that leads west, where you’ll encounter two more Grims – take them down. Before continuing south, remove the Red Fungi Bramble to discover a Hacksilver chest.  </p>
        <p className='text-white text-xl mt-10 mb-10'> Once you destroy the Bramble, continue south and use your Blades of Chaos to ignite the oil seeping through the iron gate. Then, continue forward, where you’ll encounter two more Grims. </p>

        <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'>Along the tunnel's edges, you’ll find latches that can be destroyed on several vats of oil.  </p>
    <p className='text-white text-xl mt-2 mb-2'>With oil lining the path, ignite it with your Blades of Chaos to cause an explosion – this is a quick and easy way to take out Grims.  </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>With the area clear, continue forward and take down the next set of Grims you’ll encounter. Then, take the path north, where you’ll find a Hacksilver chest to your right, and then follow the path around until you reach Sindri, who will ask to take Brok’s place in speaking to the Lady.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Refusing to let Sindri help, push the nearby carts out of the way, where you’ll come to an intersection. </p>
    <p className='text-white text-xl mt-10 mb-10'>Loot the Hacksilver off the nearby barrel and then head left, where you’ll find a Healthstone by some vases, a resource bucket hanging from the roof, and a Legendary Chest hidden behind some Red Fungi Bramble.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Ready to continue, pull the chain and lower it as far as possible. Then, have Freya Hex the blue symbol above the half-lowered gate. </p>
    <p className='text-white text-xl mt-10 mb-10'>Once frozen, recall your Axe and let go of the chain. Move toward the center of the room quickly and aim your Axe at the Twilight Stone until the light turns blue – this will destroy the latch preventing the gate from lowering. With the entrance lowered, head into the next room, where you’ll encounter a Bergsra.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Unlike its mother, the Bergsra unleashes a putrid gas that it will belch toward you. Avoid the gas cloud; otherwise, you’ll take damage. In addition, these creatures will also throw an unblockable flame ball at you, so you’ll want to avoid this at all costs.  </p>
    <p className='text-white text-xl mt-10 mb-10'>The key to defeating the Bergsra is to stun the creature as much as possible. Luring the creature into explosive oil barrels will also help deal significant damage.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Once the Bergsra is defeated, you’ll need to solve a water trough puzzle in order to continue through the nearby gate. </p>
    <p className='text-white text-xl mt-10 mb-10'>To do so, look to the water above the southwest wheel – freeze the trough above it to have water spill down and power up the wheel.  </p>
    <p className='text-white text-xl mt-10 mb-10'>After raising the gate, you'll need to find a way to turn the water trough to open the next gate. So, follow Freya through the crawl space and pick up the Hacksilver pouch along the way. On the other side, you’ll discover a Nornir Chest. Here’s how you can solve it.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Myrkr Tunnel - Nornir Chest 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>The N Rune is found directly opposite the chest; it’ll be on your left, and you may even spot it as you walk by!  </p>
    <p className='text-white text-xl mt-2 mb-2'> The C Rune is close to the N Rune; look a bit further back in the tunnel for some crates to smash: the torch will be in the alcove behind them.  </p>
    <p className='text-white text-xl mt-2 mb-2'>The R Rune is located to the left of the Nornir Chest. First, throw your Axe into the barrel to the right of the torch to spill oil over the floor. Then, to light it, use a Blazing Surge on the left-hand barrel behind the fence: the explosion will ignite the oil and, thus, the torch!  </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once you’ve solved the Nornir Chest, continue following the path up the stairs. Here, you’ll encounter a Cursed Grim controlled by a Nightmare Parasite – this creature will be slightly stronger until you stun it and expose the Nightmare.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Having defeated the creatures, break the latch at the end of the eastern path to create a shortcut. Then, follow the path north, picking up any Healthstones along the way, where you’ll soon encounter more Grim – take them down.  </p>
    <p className='text-white text-xl mt-10 mb-10'>After defeating the Grim, you’ll find a Red Coffin containing Luminous Alloy, Honed Metal, and some Hacksilver on the northwest ledge, followed by a hacksilver chest on the small ledge southwest. Once the room has been looted, continue up the chain in the southeast corner. At the top, you’ll find a Hacksilver pouch to your right by a fallen dwarf.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Continue down the stairs and turn the lever at the end of the path to rotate the water trough – now, return to the water trough puzzle room.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Once you reach the room, Hex the upper trough and freeze it with your Axe to have the water spill over into the below trough. Then, quickly recall your Axe and freeze the trough just before the nearby wheel to have the water spill over the edge and onto the wheel. </p>
    <p className='text-white text-xl mt-10 mb-10'>Upon solving the puzzle, continue through the newly opened gate; you’ll need to defeat two Bergsra’s that’ll come charging toward you. Using the tunnel system to your advantage, keep at a distance and use the explosive barrels to help you take the creatures down.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Upon defeating them, you'll discover plenty to uncover around the room. Firstly, you’ll find a Hacksilver pouch beside a fallen dwarf when taking the tunnel left from the gate entrance. Next, a Yggdrasil Rift in the northernmost room will contain Dust of Realms, Stonewood, Dwarven Steel, Honed Metal, and some Hacksilver. Along with several Healthstone that you will find scattered around the tunnels.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’ve looted the area, open the door and follow the path to the end, where you’ll find a Hacksilver pouch, a Healthstone, and a Red Coffin containing Asgardian Ingot, Dwarven Steel, and some Hacksilver.  </p>
    <p className='text-white text-xl mt-10 mb-10'>When ready, climb up the wall until you reach the surface. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Head to the Forge with Brok</h2>
    <p className='text-white text-xl mt-10 mb-10'>Providing Kratos with space to think things over, Freya will leave to explore Svartalheim. Leaving Kratos with Brok, follow him as he leads you toward the Forge.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Just past the gap that we squeezed through after defeating the Dreki in The Quest for Tyr, you’ll encounter some Exploding Nightmare – take them down and destroy their nearby nest. Once defeated, continue following Brok toward the Forge, where you’ll soon come across some Gulons scratching at the Forge gate – take them down. </p>
    <p className='text-white text-xl mt-10 mb-10'>After the area is clear, open the gate with Brok's help and continue through the Dwarven camp ahead – you’ll find some Hacksilver on either side of the path while passing through, as well as a Hacksilver chest on the left side of the lift platform.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Destroy the Nightmare Haunt to Release the Lift</h2>
    <p className='text-white text-xl mt-10 mb-10'>Learning that the lift's cables are stuck due to a Nightmare nest, head right as you attempt to get a better look at the problem. Not too far ahead, you’ll encounter another Exploding Nightmare nest that you’ll need to destroy before continuing.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once destroyed, continue a short distance up the path, where you’ll need to solve another water trough puzzle. To get started, burn the Bramble blocking the lift to the east.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once clear, continue south and grapple up to the ledge. Proceed to freeze the geyser and then continue to the other side of the bridge. Here, freeze the geyser on top of the ledge to activate the lift. Now, command Brok to close the geyser cap. Return to the first geyser, freeze it, and jump down the ledge to the lift.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Standing on the lift, recall your Axe and watch as you’re taken to the platform above. You’ll now need to find a new vantage point to freeze the first geyser again, which will open the gate forward.  </p>
    <p className='text-white text-xl mt-10 mb-10'>To do so, grapple up to the ledge just right of the lift and loot the Hacksilver pouch to your left once you reach the top. Now, command Brok to open the geyser cap, which will cause the lift to rise, creating an opening for you to throw your Axe into the geyser below.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Finally, command Brok once more to close the geyser cap and watch as the gate forward opens.  </p>
    <p className='text-white text-xl mt-10 mb-10'>On the other side of the gate, you’ll find a Legendary Chest that contains the Tap to Reveal.  </p>
    <p className='text-white text-xl mt-10 mb-10'>This Heavy Runic Attack causes explosions on the ground around Kratos, ending with an explosive shockwave, sending enemies flying. The downside is that this leaves Kratos wide open to anyone outside the attack’s initial range.  </p>
    <p className='text-white text-xl mt-10 mb-10'>After looting the Legendary Chest, you’ll find a small ledge you can grapple down to your left. Here, you’ll find a Hacksilver chest behind a geyser that needs to be frozen.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Upon looting the Hacksilver chest, return to the main path and climb up the nearby ledge, where you’ll need to destroy the Nightmare Nest that's blocking the cables.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Ride the Lift Up to the Forge</h2>
    <p className='text-white text-xl mt-10 mb-10'>With the nest destroyed, it’s time to return to the lift platform; you’ll find a Healthstone and a shortcut down the mountain to your left. Reaching the lift, turn the handle and ride it to the top. When exiting, you’ll find a Healthstone to your right; however, before picking it up, you’ll need to defeat the two Grims that’ll attack.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Upon defeating the Grims, continue inside the cave and squeeze through the gap. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'> After slipping through the narrow passage and going down the tunnel, you’ll be able to spot it on the cliff directly ahead, to the left of the bell-shaped submersible in the lake. </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Make your way down the cliff, collecting the Hacksilver pouch along the way. Follow Brok across the bridge and turn the crank, which you’ll learn needs repairs.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Repair the Switch</h2>

    <p className='text-white text-xl mt-10 mb-10'>To repair the crank, Brok will need a few things, namely some ore from a rock found to the east, right of the waterfall – give the ore to Brok once you’ve collected it. Next, Brok will require some of the Bronze ore found next to the wood pile – return the material to Brok once collected.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Forge the Weapon</h2>
   
    <p className='text-white text-xl mt-10 mb-10'> After repairing the switch with the materials, turn the crank to head down to the Forge, where you’ll meet the Lady. Entering a lengthy cutscene, you’ll meet the Lady of the Forge. This mermaid-like creature will create the Draupnir Spear; however, when Brok asks her to bless the Spear, she’ll look straight past him as if he were not there, prompting Mimir to reveal that Brok is missing a soul. </p>
    <p className='text-white text-xl mt-10 mb-10'> Learning that Sindri had covered up his death, Kratos will finalize the Draupnir by asking for Brok’s blessing, having failed to receive one from the Lady. </p>
    <p className='text-white text-xl mt-10 mb-10'> When arriving at the surface, Brok will have you test the Draupnir on the nearby Grims. To equip the Draupnir Spear, press down on the D-Pad. </p>
    <p className='text-white text-xl mt-10 mb-10'>One of the unique features of the Draupnir is its ability to embed up to 5 spears at once into enemies or the environment (L2 + R1). Then, when you’re ready, press Triangle and watch as they all detonate in quick concession.  </p>
    <p className='text-white text-xl mt-10 mb-10'>It’s worth noting that the spears will explode in the order they were thrown. In addition, depending on the creature's size, the Spear will cause them to be pushed into the air upon detonation.  </p>
    <p className='text-white text-xl mt-10 mb-10'>So, technically speaking, the more spears embedded, the longer the enemy will be in the air, creating the perfect opportunity to introduce melee combinations.  </p>
    <p className='text-white text-xl mt-10 mb-10'>In addition, when enemies are close, you can press L2 + R2 to cause a small shockwave that will stagger them – when combined with other Stun and Stagger combination attacks, this is a great way to finish enemies quickly.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find a Path Down the Mountain</h2>

    <p className='text-white text-xl mt-10 mb-10'> After defeating the Grim and collecting any Ragestones and Healthstones scattered about the area, it’s time to find a path down the mountain. </p>

    <p className='text-white text-xl mt-10 mb-10'>You’ll need to aim and throw the Draupnir Spear (L2 + R1) at the weak point found glowing just left of Brok’s workshop to reveal some rock holds on the wall – use these to reach the ledge above. At the top, continue through the small tunnel through the mountain and jump down the ledge at the end.  </p>
    <p className='text-white text-xl mt-10 mb-10'> A short distance ahead, you’ll encounter Wicked Grims and three Exploding Nightmare nests – destroy the nests and take down the Grims to continue. </p>
    <p className='text-white text-xl mt-10 mb-10'>You can find the nests in the following locations: One on top of the ledge to your east (on the ledge, you'll find a Hacksilver pouch), followed by two nests along the cliff to your west.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once destroyed, head toward the end of the stream and look slightly northeast to find a weak point on the side of the large rock – use your Spear to clear a path. Upon heading through the newly cleared path, look northeast to discover a Red Coffin sitting on a ledge you can’t reach.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Not too far right of the chest, you’ll discover a weak point on the cliff face. Destroying the weak point, return to the ledge you first jumped down, where you’ll now find a path across to the Red Coffin, which contains Asgardian Ingot, Dwarven Steel, and some Hacksilver. </p>
    <p className='text-white text-xl mt-10 mb-10'>Follow Brok toward the gap in the wall, which you’ll need to squeeze through – be sure to pick up the Hacksilver pouch to your right along the way. Squeezing through the gap, you’ll encounter two Grims and some Nightmare Parasites that’ll quickly take control over the creatures – defeat them.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Once the area is clear, Brok will teach you a new technique to use with your Spear. This technique involves finding the perfect angle (preferably as close to 90 degrees as possible) and throwing your Spear (L2 + R1) into the Wind Vent on the wall. </p>
    <p className='text-white text-xl mt-10 mb-10'>This will create a new traversal point in which you can climb and swing across any gaps or ledges you otherwise wouldn’t have been able to reach.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Using the Spear to climb up to the ledge above, look across the gap to the south, where you’ll find a weak point – destroy the weak point to create a path forward.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>The Forge - Yggdrasil Rift 2</h3>
    <p className='text-white text-xl mt-2 mb-2'>Rewards: Weapon Upgrade - Gale Spark, Spear Attachment - Hind of Attuned Elements, 1 Lindwyrm, 1 Gale Spark, 2 Lindwyrm Scales, 5 Dust of Realms, and 1,000 Hacksilver. </p>
    <p className='text-white text-xl mt-2 mb-2'> After learning to make climbable beams with your new equipment, look to the northern wall to spot two Wind Vents you can use. Throw it into both vents, then use them to climb up and swing across the gap to the Yggdrasil Rift.  </p>
    <p className='text-white text-xl mt-2 mb-2'>You get two important items for your new equipment here. The first is a Gale Spark: similar to Chaos Sparks, finding six of these will allow you to upgrade the Draupnir Spear. The other is the Hind of Attuned Elements, a Spear Attachment that increases damage on Burning or Frosted enemies.  </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>After shimmying across the ledge, collect the Hacksilver pouch by the edge and continue following Brok.  </p>
    <p className='text-white text-xl mt-10 mb-10'>A short distance ahead, you’ll encounter two Fierce Ogres, along with several Grim, Cursed Grim, and Heavy Grims. While the Fierce Ogres will arguably be the most challenging enemies to take down, the Grims will be the most deadly, as their poisonous spitballs and overwhelming melee presence can quickly become your downfall.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'> Keep an eye out for the weak spot that you’ll find along the western wall. Cursed Grims will use this location to get a height advantage. So, when it’s safe, prioritize destroying this spot!</p>
    <p className='text-white text-xl mt-2 mb-2'>In addition, you’ll also find several large rocks scattered about the area, which Kratos can toss to deal significant AoE damage to any nearby enemies.  </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>So, we recommend taking down the Grims first, and the best way to do this is to utilize the two gaps you can jump over in the area. Not only will this make it easier for you to keep a distance from the Ogres (you’ll still need to be wary of their boulder throws), but it’ll also enable you to push the Grims down the pit with some well-timed attacks.  </p>
    <p className='text-white text-xl mt-10 mb-10'>During our encounter, we found that the best method to push the Grims off the edge was to wait for them to follow you over the gap. Then, upon jumping over, embed them with a few spears and then detonate them – this will leave them temporarily staggered and thrown into the air. While in the air, use your Draupnir Spear's shockwave ability by pressing L2 + R2 and watch as they fall into the pit.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once the Grims are feated, you’ll now need to focus on the Ogres. And thanks to their slow movement, you'll be able to kite them around the area, using the two gaps to slow them down even further.  </p>
    <p className='text-white text-xl mt-10 mb-10'>While we don’t necessarily recommend getting in too close due to their strong and wide-ranged melee attacks, we do, however, suggest using your Draupnir Spear and Leviathan Axe to target their heads first.  </p>
    <p className='text-white text-xl mt-10 mb-10'>With some well-timed shots, you'll be able to stagger them temporarily, making it the perfect time to perform some close-range attacks, as your chances of being dealt damage will be significantly lessened.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Thankfully, if you’ve built up enough Rage, be sure to utilize this whenever possible, as there’s a good chance you’ll stun them enough to deal a finishing blow.  </p>
    <p className='text-white text-xl mt-10 mb-10'> After defeating the Ogres, be sure to loot the rewards they dropped to receive Healthstones, Ragestones, Beast Bones, Hacksilver, a Jewel Yggdrasil, and the Light Runic Attack, Huldra Charge. </p>
    <p className='text-white text-xl mt-10 mb-10'>Before taking the shortcut down, speak with Brok by his workshop to have him improve your gear – you’ll be able to repair your Amulet of Yggdrasil.  </p>
    <p className='text-white text-xl mt-10 mb-10'>When you’re ready to continue, use the nearby rope and your Draupnir Spear to create a zipline to the lift platform below. Head down the mountain and through the dwarven camp, where you’ll soon enter a cutscene with a surprising guest.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return to Sindri’s When Ready</h2>

    <p className='text-white text-xl mt-10 mb-10'> Following the cutscene with Odin, who will taunt Kratos for losing his son, who seemly is in no rush to return to him, it’s time to head back to Sindri’s house to plan your next move. To do so, continue down the mountain and open the gate to the Forge. </p>
    <p className='text-white text-xl mt-10 mb-10'>Upon opening the gate, you’ll encounter Freya, along with several level 3 and level 4 Einherjar that you’ll need to defeat – you’ll find some stone pillars around the area that you can use to toss into the incoming enemies.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Once defeated, follow Freya as she leads you down the mountain. However, before reaching the train platform, you’ll have the opportunity to find and unlock nearby Yggdrasil Rift and Nornir Chest. Here’s what you need to know. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>The Forge - Nornir Chest 1</h3>
    <p className='text-white text-xl mt-2 mb-2'> You can find this Nornir Chest just North of the end of the train tracks in The Forge. You’ll know you’re close when you find the teal heart painted on a rock. </p>
    <p className='text-white text-xl mt-2 mb-2'>Chances are, this is your first Nornir Chest that uses Totems. These resurrect themselves after being damaged: you need to use your new equipment to mark all three simultaneously, then press Triangle to destroy them all at once.  </p>
    <p className='text-white text-xl mt-2 mb-2'>  The I Rune’s totem is on the side of a rock peak behind the Nornir Chest. Look for the three wooden posts at the cliff's edge and face east: it’ll be visible on the right. </p>
    <p className='text-white text-xl mt-2 mb-2'> The F Rune’s totem is over at the wooden walkway: it’ll be sitting on a rock close to the two train cars that Kratos cut off and discarded from the second train the first time you went through this area. </p>
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>The Forge - Yggdrasil Rift 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>  Enemies Encountered: Lvl 5 Fierce Stalker, x2 Lvl 5 Gulon</p>
    <p className='text-white text-xl mt-2 mb-2'> Rewards: 4 Honed Metal, 6 Stonewood, 8 Dwarven Steel, 15 Dust of Realms, and 1,000 Hacksilver </p>
    <p className='text-white text-xl mt-2 mb-2'> This Yggdrasil Rift is in the battle area where you fought the Drekki; however, it doesn’t appear until you begin the Forging Destiny main quest. This not only makes the rift appear, but it also allows you to get back to The Forge after you initially passed through during your first visit. </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Ready to continue, board the train and take it back down to Nidavellir, not too far from Durlin’s Office. When reaching the platform, you’ll encounter a Berserker Gravestone as you head toward the Mystic Gateway to the north. </p>
    <p className='text-white text-xl mt-10 mb-10'>This gravestone will offer an extremely challenging yet optional fight that is equivalent to the Valkyries you faced during God of War 2018. To learn more, be sure to check out our Berserker Gravestones - Boss Battle Guides.  </p>
    <p className='text-white text-xl mt-10 mb-10'>When nearing the gap to the north, use your Draupnir Spear on the Wind Vent in order to swing across the gap. Here, you’ll find Durlin, who will provide you with the "Spirit of Rebellion" Side Quest (Favors) as he’s seeking the return of his forge hammer.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’re ready to continue, use the Mystic Gateway to return to Sindri’s house.  </p>


    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Speak to Sindri</h2>
    
    <p className='text-white text-xl mt-10 mb-10'> Returning to Sindri’s house, head inside and speak with Sindri and Brok in their workshop. Following a short conversation, place Mimir on the table and head to sleep. Following a lengthy cutscene that sees Kratos reflecting on his past before falling asleep, he'll soon awaken inside yet another dream featuring Faye. </p>
    <p className='text-white text-xl mt-10 mb-10'>Follow Faye over by the dock, climb into the canoe, and follow the stream, where you’ll eventually enter another cutscene that sees Faye questioning Kratos about his fear of letting Atreus close to him – this cutscene will conclude the chapter.  </p>

        </div>

<div className='mx-auto grid md:grid-cols-2 gap-2'>

<button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

<div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
<p className='items-center mt-2 text-xl text-white'>The Word of Fate</p>

</button>

<button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

<div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
<p className='items-center mt-2 mb-2 text-xl text-white'>Unleashing Hel</p>

</button>

</div>

</motion.div>
)
}


export default GOWR10