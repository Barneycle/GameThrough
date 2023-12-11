import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Gowr2 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/gowr1');
    
    };

    const handleNext = () => {

        navigate('/gowr3');
    
    };

  return (

    <div className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>The Quest for Tyr</h1>
        
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
    <h3 className='text-white font-mono text-2xl'>This walkthrough will include story spoilers for the second quest, The Quest for Tyr, so proceed with caution.</h3>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Journey to Nidavellir</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Having arrived in Svartalfheim but far from Nidavellir, you’ll need to journey through the Aurvangar Wetlands by boat.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now, before boarding the boat, take the path to the left to discover a Healthstone by a small campsite and your first Odin’s Raven on top of nearby rock formation.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Aurvangar Wetlands - Odin’s Raven 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>From the Mystic Gateway, look North to spot a rock formation to the left of the boat dock (not the ferry dock!). The Raven will be standing on top of it.</p>

    </div>
   
    <p className='text-white text-xl mt-10 mb-10'>After collecting the Healthstone and Odin’s Raven, make your way towards the boat, which is located by the edge of the river – Atreus will come under attack by a group of Wretch while trying to free the boat from its stand.</p>
    <p className='text-white text-xl mt-10 mb-10'>Thankfully, Wretches aren’t too dangerous on their own and can typically be taken out with a single light or heavy attack.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Just be warned, Wretches are rarely seen without companions, and when in a pack, can quickly overwhelm even the strongest of enemies.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, move the boat into the water and follow the river – along the way, you’ll discover glowing resource spots that contain Rawhide and other crafting components.</p>
    <p className='text-white text-xl mt-10 mb-10'>When reaching a break in the river, take the path that leads right to find a barrel containing Hacksilver floating in the water – simply run it over with your boat to collect it. Nearby, you’ll also spot a small beach in which Kratos can stop by to find a chest filled with Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you continue to the next section of the river, you’ll also find two more Hacksilver barrels and a resource spot to loot. Upon reaching the broken wheel, dock the boat on the shoreline and proceed to use your Axe to freeze the Greyser blocking your path. Here, you’ll have the opportunity to complete your first Nornir Chest and pick up an Tap to Reveal. Nornir Chests are incredibly helpful to uncover along your journey, as they contain Idunn Apples that allow you to increase your maximum health.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Aurvangar Wetlands - Nornir Chest 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>After jumping over the geyser, you’ll find the Nornir Chest to your right, across the gap.</p>
    <p className='text-white text-xl mt-2 mb-2'>The B and F Runes are close to the chest. The F Rune is on a ledge to the left of the chest, while the B Rune is sitting on an island you can spot behind the chest across the water.</p>
    <p className='text-white text-xl mt-2 mb-2'>The R Rune is trickier. Jump back across the watery gap and look left to spot a tall geyser. Throw your Leviathan Axe at its base to freeze it, then leap up to the top of the ledge. The R Rune is here, on your left at the base of a tree.</p>

    </div>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Things Left Behind 1 - Hreidmar’s Brassard</h3>
    <p className='text-white text-xl mt-2 mb-2'>After jumping over the geyser, look right to spot a taller geyser you can also freeze.</p>
    <p className='text-white text-xl mt-2 mb-2'>Once frozen, leap up to the top of the ledge, and look right to find Hreidmar’s Brassard.</p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, climb up the large wooden structure left of the geyser and use the zipline to cross the gap. Upon reaching the other side, you’ll encounter a group of Grim.</p>
    <p className='text-white text-xl mt-10 mb-10'>These monsters are considered the teenagers of the species and are among the most mobile denizens of the nine realms. Be careful, though, as they will strike with powerful melee attacks. Remember, when attacking enemies with blockable attacks, tap L1 at the last second to parry an incoming attack and apply a temporary stun effect – this will leave the enemy vulnerable to a flurry of quick attacks.</p>
    <p className='text-white text-xl mt-10 mb-10'>Having taken down the Grim, pick up any loot that they may have dropped (such as crafting materials, Healthstones, etc.) and head to the nearby dock and climb the wooden structure to loot the Red Coffin, which is located on the ledge above, to receive +2 Forged Iron and some Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>Return to the zipline and jump down the nearby ledge. From here, proceed to climb up the chain that’s dangling from the wooden structure to reach the broken wheel – before interacting with the wheel, be sure to loot the Hacksilver chest that’s found not too far from Atreus.</p>
    <p className='text-white text-xl mt-10 mb-10'>Having turned the broken wheel to create an opening to pass through, return to the boat and continue making your way along the river, passing beneath the bridge – remember to loot the Slay deposit and Hacksilver barrel before leaving this section of the river.</p>
    <p className='text-white text-xl mt-10 mb-10'>Making it to the other side of the bridge, you’ll have several options to explore before following the main path towards the next gate. Firstly, you can explore the open river, where you’ll find Yggdrasil’s Dew and some Hacksilver, and you can dock at the nearby beach to your left to discover hidden chests and more.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Aurvangar Wetlands - Yggdrasil’s Dew 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>After passing through the giant wooden wheel you turned, slip beneath the nearby bridge and follow the left-hand wall to find the Yggdrasil’s Dew, which increases your core Runic stat by 2.</p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Upon docking at the beach, you’ll be swarmed by several Wretches and Grims – take them out. Once clear, use your Axe to drop the bucket of Hacksilver hanging from the tree, followed by burning the Bramble covering a Hacksilver chest along the back of the area.</p>
    <p className='text-white text-xl mt-10 mb-10'>Next, climb up the ledge to your right and burn the Bramble blocking the path, where you’ll then find a Hacksilver pouch by the ledge, and a Healthstone and Hacksilver chest along the bridge.</p>
    <p className='text-white text-xl mt-10 mb-10'>With those collected, return to Atreus and burn the Bramble above, along the edges of the rock formation. Climb up to the top of the formation, where you’ll find a Red Coffin with +2 Rawhide and some Hacksilver. You can also find a Hacksilver pouch hidden beneath some Bramble, next to a fallen Grim.</p>
    <p className='text-white text-xl mt-10 mb-10'>Furthermore, drop down the nearby ledge and destroy the hanging bucket to receive +1 Rawhide. With that collected, return to your boat and continue slightly further up the river, where you’ll discover another docking location – once docked, another group of Wretches and Grims’ll attack you, so take them out to continue.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, head over towards Atreus and interact with the contraption that’s stopping a geyser from spouting. With the geysers free, take the path to your right and climb up the ledge – you’ll need to take out two more Grims when reaching the top.</p>
    <p className='text-white text-xl mt-10 mb-10'>From here, look over at the wheel and throw your Axe into the second geyser located on the rock formation. Successfully lowing the gate, return to the boat, and continue following the river – collecting any Hacksilver barrels along the way.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Optional Side Area</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Before you continue with the main quest, you’ll find an optional side area that houses a Legendary Chest containing a weapon upgrade, a Lore Marker, and a Nornir Chest that will increase your maximum rage.</p>
    <p className='text-white text-xl mt-10 mb-10'>If you’re not looking to clear this optional area, click here to skip ahead to the rest of the main quest.</p>
    <p className='text-white text-xl mt-10 mb-10'>To reach the optional area, keep left as you follow the river. Along the way, you will spot a small break in the bank that will allow you to slip your boat beneath. You’ll discover a new enemy type in this area – a Cursed Grim. These enhanced Grims are much more deadly, as they’ll toss poisonous, projectile saliva at you from every possible angle.</p>
    <p className='text-white text-xl mt-10 mb-10'>In addition, they’ll climb high up onto the rock formations, where you’ll only be able to attack them by throwing your Axe to drop them to the ground – thankfully, when they fall, they’ll be temporarily stunned, creating an opportunity to unleash heavy damage. It’s imperative to your success that you continually move about the area when fighting these creatures.</p>
    <p className='text-white text-xl mt-10 mb-10'>Not only will they toss damage-inducing projectiles toward your direction, but they’ll also leave poisonous pools on the ground that will slowly deplete your health when standing on them. If you’re quick enough, you’ll be able to parry this attack and send the projectiles hurling back into them if you’re using the Dauntless Shield.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now that we’ve covered the monsters you’ll encounter, here’s everything you can find in the area.</p>
    

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Aurvangar Wetlands - Legendary Chest 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>Chest Contains:</p>
    <p className='text-white text-xl mt-2 mb-2'>After docking your boat along the shoreline, jump up the wooden ledge on your left.</p>
    <p className='text-white text-xl mt-2 mb-2'>From here, head left to the far edge to find the Legendary Chest.</p>

    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Aurvangar Wetlands - Lore 1 - Unsafe Roads</h3>
    <p className='text-white text-xl mt-2 mb-2'>After docking your boat along the shoreline, look for the nearby wooden ledge you can leap up to.</p>
    <p className='text-white text-xl mt-2 mb-2'>From here, go right and drop down the wooden ledge, and you’ll see the tall stone Lore Marker on your left, near a tent.</p>
   
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Aurvangar Wetlands - Nornir Chest 2</h3>
    <p className='text-white text-xl mt-2 mb-2'>After docking the boat in the optional area, you’ll find the Nornir Chest on your right, among some machinery. This Nornir Chest uses spinners, so you’ll need to find them and turn them to match the “D-B-N” Runes on the Nornir Chest.</p>
    <p className='text-white text-xl mt-2 mb-2'>First, look to the right of the Nornir Chest to find a spinner obscured by a geyser. You can throw the Axe at the geyser to reveal the rune on the spinner: hit it once on the left paddle (or twice on the right paddle) to spin it to the D Rune.</p>
    <p className='text-white text-xl mt-2 mb-2'>From there, head left to the wooden platform to find another spinner on your left: hit it once on the right-hand paddle to spin it to the B Rune.</p>
    <p className='text-white text-xl mt-2 mb-2'>Return to the boat and this time leap up the wooden ledge nearby. Look up on your right to find the spinner: hit it once on the right-hand huddle to spin it to the N Rune.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once you’ve cleared the area of all the collectibles and chests, Atreus will inform Kratos that there’s nothing more to find here.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Journey to Nidavellir (Continued)</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, make your way further up the river until you reach yet another large gate blocking your path – dock your boat by following the path right of the gate.</p>
    <p className='text-white text-xl mt-10 mb-10'>Arriving at the beach, you’ll discover an Ormr by the campsite. Unable to kill the creature due to its quick speed, Atreus will suggest flanking it. To do so, jump over the gap to the nearby wooden structure and wait for the Ormr to rise from its hole. Once it appears, throw your Leviathan Axe at it – it should only take one shot to kill the creature.</p>
    <p className='text-white text-xl mt-10 mb-10'>With the Ormr defeated, head toward Atreus and use your Axe to break the latch connected to the chain holding the large metal weight. Once the weight is dropped, proceed across it and interact with the chain found on the dock to lower the first part of the gate.</p>
    <p className='text-white text-xl mt-10 mb-10'>Continue across the gap to the other side of the dock, and proceed to freeze the geyser and jump over it. After recalling your Axe, follow the path left and defeat the two Cursed Gims that’ll attack you. Once defeated, uncover the nearby geyser and then freeze the first geyser again.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once frozen, quickly recall your Axe and look for the gap in the side of the wooden structure to break the latch that’s holding the weight – you’ll need to react quickly to succeed in hitting the latch, so it may take a few tries before you’re successful.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon breaking the latch, climb onto the weight that’s now floating above the geyser. Once on top, freeze the uncovered geyser beneath the wheel, boosting the weight to the ledge above.</p>
    <p className='text-white text-xl mt-10 mb-10'>Here, you will find one of Kvasir’s Poems, which is part of an Artifact set you’ll find scattered about the different realms, as well as a large red chest that contains +2 Forged Iron and some Hacksilver. After looting the area, pull the chain to open the large metal gate fully.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Kvasir’s Poems 1 - The Sunrise of Nothingness</h3>
    <p className='text-white text-xl mt-2 mb-2'>Poem Reference:</p>
    <p className='text-white text-xl mt-2 mb-2'>Upon using the large metal weight to reach the top of the wooden structure to access the second chain, you’ll spot a purple glow on top of a small table, along the left railing. This will be the first of 14 Kvasir Poems available to find across the different realms.</p>
   
    </div>

    <p className='text-white text-xl mt-10 mb-10'>With the gate now open, return to the boat and continue following the river – being sure to loot any resource spots and barrels along the way – until you reach the city of Nidavellir.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Explore Nidavellir</h2>
   
    <p className='text-white text-xl mt-10 mb-10'>Having docked the boat, it’s clear the dwarves are not very welcoming. So, to find Durlin, we’ll need to track down someone who will speak to us. Figuring that the Tavern Sindri mentioned will be our best bet, follow Atreus up the ramp and before heading towards the large statue of Odin, look to your left, and you’ll spot a ledge by a water wheel.</p>
    <p className='text-white text-xl mt-10 mb-10'>Climb this ledge, and you’ll discover a chest filled with Hacksilver at the end of the rooftop. You will also find one of Odin’s Ravens nearby, perched atop a roof.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Nidavellir - Odin’s Raven 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>Located in the marketplace with the giant statue of Odin, where you first encounter Sindri in Svartalfheim. On the North-East side of the marketplace will be a building with a water wheel placed between two rooftops: the Raven will be on top of the right-hand rooftop with the blue awning underneath it.</p>
   
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Before speaking to Sindri in the market square, you’ll find an Artifact on the ground at the base of the large Odin statue in the market square, just opposite Sindri’s stall, next to a stall with a blue awning. And last but not least, a large blue coffin can be found at his stall that will contain several supplies such as Forged Iron, Shattered Runes, Rawhide, Beast Scraps, and Slag Deposits.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Nidavellir - Lore 1 - Shopping List</h3>
    <p className='text-white text-xl mt-2 mb-2'>This Artifact can be found on the ground at the base of the large Odin statue that’s located in the market square, just opposite Sindri’s stall, next to a stall with a blue awning.</p>
   
    </div>
   
    <p className='text-white text-xl mt-10 mb-10'>While you won’t be able to get to the chest just yet – Atreus will require Sonic Arrows, which Sindri will provide – you’ll find the chest just to the left of his stall. To reach the chest, command Atreus to blast away at the Soundstones inside the wooden cart.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’re ready to continue, speak with Sindri, who will upgrade Atreus’ bow with the ability to fire Sonic Arrows. To test out the new upgrade, command Atreus to fire at the gate in the distance by pressing L2, followed by Square when the shot is lined up. Destroying the gate, a group of Wretches and Grims will come rushing out – take them out.</p>
    <p className='text-white text-xl mt-10 mb-10'>Speak to Sindri once more after clearing the area, where he’ll suggest visiting the other side of the city, which can be accessed through the gate Atreus opened just before.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before continuing, collect the remaining two collectibles in the area and remember to make any necessary purchases and upgrades at Sindri’s workshop. You may also want to spend some of the XP you’ve earned thus far on unlocking new skills via the Skills menu.</p>
    <p className='text-white text-xl mt-10 mb-10'>It’s worth noting that Huldra Brother’ Shop will now allow Kratos to purchase Resurrection Stones from the Special Items table. These are one use stones that can revive Kratos from death as long as he is not alone. Costing 1,500 Hacksilver each, you’ll only be able to carry one stone at a time – so use them wisely!</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Kvasir’s Poems 2 - Large Society Ground Orb, The Performance</h3>
    <p className='text-white text-xl mt-2 mb-2'>This Artifact can be spotted at the Nidavellir docks as soon as you arrive on the boat, on a larger dock close to where Kratos can dock the boat. The dock is blocked by a green wall, which can be imploded with Sonic Arrows. If you don’t have Sonic Arrows yet, talk to Sindri at the marketplace where the Odin statue is.</p>
    <p className='text-white text-xl mt-2 mb-2'><p className='text-white text-xl mt-10 mb-10'>This Artifact can be spotted at the Nidavellir docks as soon as you arrive on the boat, on a larger dock close to where Kratos can dock the boat. The dock is blocked by a green wall, which can be imploded with Sonic Arrows. If you don’t have Sonic Arrows yet, talk to Sindri at the marketplace where the Odin statue is.</p></p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, climb into the tunnel that links to the city's northern half. Once you exit the sewer passage, you’ll spot a Hacksilver chest to your right. Unfortunately, with the bridge blocked, it seems impossible to pass – at least for now! You’ll have to return to this chest later in the game, after obtaining the required equipment needed to pass the bridge.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Things Left Behind 2 - Griep’s Firebomb</h3>
    <p className='text-white text-xl mt-2 mb-2'>This Artifact can be found in the second, Northern half of Nidavellir, which you get to by crawling through a sewer passage next to Sindri’s shop in the market square.</p>
    <p className='text-white text-xl mt-2 mb-2'>Once you emerge, look left to spot a blue awning above a doorway into a fire-lit hallway, blocked by some wooden objects. Smash them, head through the hallway, then head down the ramp at the end to find the Artifact directly ahead in the alleyway.</p>
    <p className='text-white text-xl mt-2 mb-2'>Just before picking up the Artifact, you’ll also spot a Hacksilver chest hidden behind a gate to your right. This gate can be exploded with Atreus’ Sonic Arrows.</p>

    </div>
    
    <p className='text-white text-xl mt-10 mb-10'>Opposite the blocked bridge, you’ll discover a cart filled with Soundstone – have Atreus use his Sonic Arrows on the cart to clear the path. Once cleared, continue down the path a short distance and when reaching yet another cart, interact with it to move it out of the way.</p>
    <p className='text-white text-xl mt-10 mb-10'>Continue forward towards the large door at the end of the path – interact with the door to enter the tavern. Once inside, speak with the dwarf playing the Hurdy Gurdy, who will reveal Durlin’s location.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Before leaving, speak with Raeb once to unlock the side quest, In Service of Asgard, which will allow you to a powerful early-game armor set.</p>

    </div>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Boat to Durlin’s Office</h2>

    <p className='text-white text-xl mt-10 mb-10'>To find Durlin, travel to his office, which is said to be just a short boat ride away. To make your way back to your boat, head out the back door, where you’ll be greeted by Sindri, who will provide Kratos with a Dwarven Compass – you’ll be back to track objectives when viewing the map.</p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, follow the path until you reach the river – along the way, if you take the small bridge to your left, you’ll find three Hacksilver pouches hidden inside a crawl space. Reaching the boat, jump in and follow the river until you reach an intersection – remember to destroy any Hacksilver barrels that you find along the way.</p>
    <p className='text-white text-xl mt-10 mb-10'>When reaching the intersection, you’ll have the opportunity to explore the Bay of Bounty; however, this is completely optional. For the sake of the main questline, we won’t be exploring this area, but be sure to check out our Svartalfheim Region Guide to learn more about what this area has to offer.</p>
    <p className='text-white text-xl mt-10 mb-10'>That said, here are some quick and relatively easy collectibles we recommend picking up in the Bay of Bounty, before heading to Durlin’s office.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Bay of Bounty - Yggdrasil’s Dew 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>Boosts: +2 Cooldown</p>
    <p className='text-white text-xl mt-2 mb-2'>In the South part of the Bay of Bounty’s Southern half. It’ll be directly ahead if you’ve sailed North from Nidavellir and through the tunnel.</p>
    
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Bay of Bounty - Yggdrasil’s Dew 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>Boosts: +2 Defense</p>
    <p className='text-white text-xl mt-2 mb-2'>Located in the Northern half of the Bay of Bounty. You can find it at the South-Eastern most point; it’ll be obscured by a large rock sticking out of the water.</p>
    
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Bay of Bounty Yggdrasil’s Dew 3</h3>

    <p className='text-white text-xl mt-2 mb-2'>Boosts: +2 Strength</p>
    <p className='text-white text-xl mt-2 mb-2'>This Yggdrasil’s Dew is found in the waters near Durlin’s house, West of Nidavellir. It’ll be fairly easy to spot along the right-hand edge of the water as you sail West past Durlin’s house.</p>
    <p className='text-white text-xl mt-2 mb-2'>On the beach, just south of this tree, you’ll discover a Red Coffin that contains +2 Forged Iron and some Hacksilver.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>With those collected, follow the main questline objective marked on your compass until you reach the dock by Durlin’s office building. Once docked, enter the safety office, where you’ll enter a cutscene that sees Atreus and Kratos meeting with Durlin, who refuses to provide information on Tyr.</p>
    <p className='text-white text-xl mt-10 mb-10'>Following the cutscene, leave Durlin’s office, where you’ll soon learn that the so-called fine is actually a map to Tyr’s location.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Reach the Mine Beyond the Mountain</h2>
   
    <p className='text-white text-xl mt-10 mb-10'>With this information, you’ll need to navigate the mine to reach the mountain shown on Durlin’s map. First things first, you’ll need to take out the Grims and Cursed Grims loitering the mining site. If you didn’t tackle the Optional Side Area earlier in our walkthrough, here’s a quick recap on Cursed Grims.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Enhanced Grims are much more dangerous than standard Grims, as they’ll toss poisonous, projectile saliva at you from every possible angle.</p>
    <p className='text-white text-xl mt-2 mb-2'>In addition, they’ll climb high up onto structures and rock formations, where you’ll only be able to attack them by throwing your Axe to drop them to the ground – thankfully, when they fall, they’ll be temporarily stunned, creating an opportunity to unleash heavy damage. It’s imperative to your success that you continually move about the area when fighting these creatures.</p>
    <p className='text-white text-xl mt-2 mb-2'>Not only will they toss damage-inducing projectiles toward your direction, but they’ll also leave poisonous pools on the ground that will slowly deplete your health when standing on them. If you’re quick enough, you’ll be able to parry this attack and send the projectiles hurling back into them when using the Dauntless Shield.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Throughout this encounter with the Grims, we highly recommend utilizing the environment to your advantage, as you’ll be able to block incoming projectiles by positioning yourself behind structures.</p>
    <p className='text-white text-xl mt-10 mb-10'>Furthermore, you’ll discover large red-colored vases around the area that will explode when destroyed – we recommend using your Axe from afar to avoid taking unnecessary damage. If you’re able to lure Grims nearby to these vases, you’ll deal significant damage to them.</p>
    <p className='text-white text-xl mt-10 mb-10'>You can also prevent the Cursed Grims from climbing up high by having Atreus destroy the mining cranes that are scattered around the area.</p>
    <p className='text-white text-xl mt-10 mb-10'>Lastly, we also recommend that you work with Atreus throughout this encounter, constantly commanding him to fire upon enemies you’re targeting, as it’ll temporarily stun them, leaving small windows of opportunity to unleash close-range attacks with little risk of receiving damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is cleared of Grims, be sure to loot any Healthstones and Beast Scraps that may have dropped, before continuing. You will also find a Red Coffin just left of the large gate that leads towards the mountain, which will contain +2 Rawhide and some Hacksilver inside, along with a dedicated Hacksilver chest that’s located in the northwest corner of the area – Atreus will need to clear the Soundstones blocking access to the area before you can jump over.</p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, open the large gate and continue following the path until you come by a train that can take you up the mountain. Before going up the mountain, head directly west to find a Red Coffin behind a geyser hole and some barrels – this will contain +2 Forged Iron and some Hacksilver. Next, head north, and where you will discover a Hacksilver pouch beside a dead Grim. Unfortunately, you’ll spot a Mystic Gateway on a nearby ledge, however, you won’t be able to access this until you have unlocked the required equipment.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is looted, interact with the train to take it up to the top of the mountain.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Reach the Front of the Broken Train</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>When reaching the end of the track, there looks to be another train that lies ahead, broken. Follow Atreus as you attempt to find a path around the wreckage.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>The Forge - Odin’s Raven 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>The Odin’s Raven in The Forge can be found right at the beginning, where you first exit the train car. Stand on the edge of the balcony and look North towards the mountain; you should see it fly above the wooden walkway below.</p>
    
    </div>
   
    <p className='text-white text-xl mt-10 mb-10'>After a short distance, you’ll come across a train cart blocking your path forward. Instead, take the path right, where you’ll have the opportunity to collect a nearby Artifact, and a Nornir Chest; however, you won’t be able to complete the Nornir Chest until you have unlocked some special equipment that’s obtained further into the story.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Things Left Behind 3 - Bari’s Grenade</h3>

    <p className='text-white text-xl mt-2 mb-2'>This Artifact is located in the opening area of The Forge. From the train stop, head down the wooden walkway and then divert right into a rocky area with ledges.</p>
    <p className='text-white text-xl mt-2 mb-2'>Climb up the left-hand ledge, then turn right to spot some wooden objects over the Artifact. Smash them and collect it!</p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once collected, follow Atreus north through a small hole that’s found in the rock wall, where you’ll discover a fallen Dreki.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Dreki</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>While inspecting the Dreki, a larger Dreki will appear and charge toward both Atreus and Kratos. The large crocodile-like creature will consist of five sectioned health bars, so you’ll need to deal quite a bit of damage to defeat the monster.</p>
    <p className='text-white text-xl mt-10 mb-10'>Straight out of the gate, the Dreki will spit a ball of saliva toward you – you’ll be dealt damage if you do not move in time. And while it’s arguably easier to just dodge this attack, it’s also possible to block it with your shield, or even parry it back into the creature if you’re using the Dauntless Shield, dealing damage and temporarily stunning it.</p>
    <p className='text-white text-xl mt-10 mb-10'>Keep in mind, though, to parry the attack, you will need to be very precise with your timing, as it’ll only work if you block the attack just before it hits you. Once the Dreki is stunned, we recommend rushing the creature and unleashing as much heavy damage as possible before the stun effect runs out. This includes using your Runic Attack. Using the Runic Attack early in a fight is generally recommended so you can get the cooldown timer going as soon as possible.</p>
    <p className='text-white text-xl mt-10 mb-10'>Fortunately, the Dreki does not have any unblockable attacks until it reaches half health, so technically speaking, every attack the Dreki throws your way can be blocked; however, this isn’t necessarily very efficient as it makes it quite a bit more challenging to deal damage.</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Need some health? Try looking beside the crates that are found along the outskirts of the area.</p>
   
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Along with spitting saliva, the Dreki will also perform two major melee attacks that deal significant damage should you not block them. The first melee attack will see the Dreki jumping toward you, and landing several meters in front of you. The Dreki will then quickly turn and swipe its large tail in your direction - you can either block this attack with your shield or simply dodge out of the way.</p>
    <p className='text-white text-xl mt-10 mb-10'>The next melee attack is nearly identical to start with, as the creature will leap toward you; however, this time, landing much closer, before performing a yellow (block break) attack in the form of a chomp. If you fail to dodge the attack, the Dreki will grab ahold of you, before slamming you to the ground.</p>
    <p className='text-white text-xl mt-10 mb-10'>While it didn’t occur every time, we found that more often than not, blocking the Dreki’s chomp attack would trigger a yellow (block break) combination attack that would see the Dreki getting knocked back for a brief moment, only to quickly spit a ball of salvia toward you – you’ll need to act fast to avoid being dealt damage from this attack. Successfully countering the attack with a parry from the Dauntless Shield will see you tossing the ball of salvia back.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you start to deplete the Dreki’s health (approximately two bars), it’ll introduce a slightly new attack into its arsenal that sees the creature leaping from afar, straight into a chomp attack. This attack is indicated by a yellow circle that will appear before it launches the attack.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Don’t be afraid to use your Resurrection Stone if you have one. There’s no checkpoint throughout this fight, so if you happen to die again before the fight is over, you’ll respawn with your stone.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once the Dreki reaches half health, it’ll introduce another new attack to the battle, where it’ll launch an unlockable (red) attack that sees it rearing up into the air, as it begins to charge an electrical AoE attack. If you’re within the electrical circle after it finishes charging, you’ll be dealt damage and temporarily stunned, unable to move or block incoming attacks.</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Higher Difficulty Tip:</h3>
    <p className='text-white text-xl mt-2 mb-2'>While the Dreki is charging up its electric attack, use that brief moment as a chance to charge either the Leviathan Axe or the Blades of Chaos to do extra, more impactful damage.</p>
    
    </div>
    
    <p className='text-white text-xl mt-10 mb-10'>If you happen to escape the attack, just be sure you stay clear of the electrified spots on the ground; otherwise, you’ll also succumb to being electrified – you’ll need to mash circle to escape the hold of the electricity.</p>
    <p className='text-white text-xl mt-10 mb-10'>In turn, the Dreki’s saliva attack will be upgraded into an unblockable attack as it’ll now become electrified, leaving a nasty trail of electricity in its wake.</p>
    <p className='text-white text-xl mt-10 mb-10'>Due to these unblockable attacks, we found it was best to keep a distance during the second phase of the fight, as it was much easier to get caught off guard by the electricity attacks. Instead, we only approached within melee distance while the Dreki was temporarily stunned or knocked back, and only unleashing a few heavy melee attacks before retreating to a safe distance.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you have managed to deplete the Dreki’s health bar, press R3 when prompted to finally defeat the creature with the help of Atreus. Defeating the Dreki will reward you with a Chaos Flame, +4 Dragon Tooths, and a Light Runic Attack (Flames of Anguish).</p>
    <p className='text-white text-xl mt-10 mb-10'>After collecting all the loot in the area, continue west and squeeze through the gap in the wall. Before continuing to the main objective to the south, let’s take a quick detour and follow the path northwest, where you’ll find some collectibles, Hacksilver, and resources.</p>
    <p className='text-white text-xl mt-10 mb-10'>To start, continue northwest until you reach a small abandoned campsite. To the left, you’ll find a Hacksilver pouch on the ground, beside a dead Cursed Grim.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once collected, climb the large ledge nearby, where you’ll find a Rune Read collectible just to the right of the large wooden gate that leads up to the mountain peak.</p>
    <p className='text-white text-xl mt-10 mb-10'>From here, head slightly southeast toward the bridge, where you’ll find a Hacksilver pouch beside another fallen Cursed Grim. Once collected, take the path southwest to the small campsite. Follow the path, and you’ll find another Hacksilver pouch next to a broken bridge and a dead Grim. Turn east and pick up the Healthstone and Lore Scroll by the old abandoned building.</p>
    <p className='text-white text-xl mt-10 mb-10'>After collecting those, jump across the stream, and you’ll find a Hacksilver chest directly northeast. With those all collected, return to the main path, where you first overlooked mining camp in the distance. Jump down this ledge, and you’ll find a small Hacksilver pouch beside a dead Grim. Continue following the path, jumping over the gaps as prompted until you reach the ledge above.</p>
    <p className='text-white text-xl mt-10 mb-10'>From here, move to the ledge that’s to your west, and you’ll spot a Red Coffin – jump down the ledge and proceed to jump across to the coffin, which contains +3 Forged Iron and some Hacksilver. Return to the main path and continue forward.</p>
    <p className='text-white text-xl mt-10 mb-10'>After climbing the nearby ledge, you’ll encounter a pack of Wretches feeding on a Troll. You’ll need to destroy the poisonous-looking nest that’s located at the end of the path for them to stop spawning in the area. Once the nest is destroyed, clear the area of any remaining Wretches, and then proceed up the nearby ledge and fix the broken train – when prompted, move the right analog stick to place the train back on the track.</p>
    <p className='text-white text-xl mt-10 mb-10'>With the train now working, a cutscene will begin but before too long, the train will be overcome by Grims – follow the button prompts to defeat them. Unable to stop the train, it’ll come off the rails and by some miracle, the fall will be broken by a troll that goes by the name of Daudi Vordr.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Search the Mines for Tyr</h2>

    <p className='text-white text-xl mt-10 mb-10'>Having reached the mines mentioned on Durlin’s map, it’s time to make your way inside the mines, where they’re most likely keeping Tyr. Before the search can begin, you’ll need to defeat the group of Grims and Cursed Grims that will attack.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is cleared, look west and have Atreus break through the Sound Stones with his Sonic Arrows to reveal a Hacksilver pouch. After picking up the pouch, follow the railroad east, and break the wooden boards at the end of the path to find yet another Hacksilver pouch.</p>
    <p className='text-white text-xl mt-10 mb-10'>From here, head south and jump down the edge, where you’ll find yet another pile of Sound Stones – destroy them to find a Healthstone. Continue west, where you’ll encounter even more Grim and Cursed Grim – take them down. Once dealt with, destroy the Sound Stones found next to the large wheel to discover a Hacksilver pouch. Not too far west, you’ll also find a Hacksilver chest sitting by the ledge.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Odin’s Raven and & Artifact</h3>
    <p className='text-white text-xl mt-2 mb-2'>From where you first arrived on the crashed minecart, you’ll find the Raven flying over the lake in the middle of the mine: look for a gold chain you can slide down on the North side of the lake. There’ll also be an Artifact here too!</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>After collecting everything, make your way back up the ledge that’s next to the Hacksilver chest you looted earlier. Here, you will find a cart filled with Soundstone – destroy it and take out the two Grim that will appear from the rubble.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once defeated, continue forward, grappling across the large gap, and proceed to destroy the large red explosive vase that’s sitting atop some ore – remember to keep your distance, as the explosive will deal damage if you’re too close. Upon destroying the ore, three Wretches will come charging toward you, so be prepared to take them out.</p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, collect the Healthstone that’s along the southwest ledge and then proceed through the small doorway. Inside, collect the Hacksilver pouch that’s along the right side, and continue following Atreus to the exit. Once outside, you’ll enter a new area, the Jarnsmida Pitmines. When exiting the tunnel, you’ll find a Hacksilver pouch on the ground, beside Atreus.</p>
    <p className='text-white text-xl mt-10 mb-10'>After collecting the Hacksilver pouch, jump down the nearby ledge and pick up the Healthstone that’s next to the dead dwarf. Continue down the next ledge and destroy the Sound Stones to your left to receive another pouch of Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now, to pass through the gate blocking the path, you’ll want to throw your Axe at the end of the trough, spilling water onto the wheel below in order to freeze it. Once frozen, the gate will open and you’ll have the chance to grapple across the gap to continue along the path. When reaching the other side, you’ll find a Nornir Chest – you’ll need to use your Blades of Chaos to lit the letter torches.</p>
    <p className='text-white text-xl mt-10 mb-10'>See our guide below on how to find all the letters needed to open this chest – which contains an Idunn Apple.</p>
    <p className='text-white text-xl mt-10 mb-10'>Do note that when dropping down the ledge to your left, you’ll find a large Red Coffin that contains +3 Rawhide and some Hacksilver.</p>
 
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Jarnsmida Pitmines - Nornir Chest 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>The R Rune is found just left of the Nornir Chest.</p>
    <p className='text-white text-xl mt-2 mb-2'>To find the C Rune, drop down the ledge to the left of the Nornir Chest and head around the corner: the torch will be on top of a rock formation, near a Coffin. However, to get to the N Rune you’ll have to unfreeze the water trough, which will douse the C Rune’s torch. So if you haven’t gotten the N Rune yet, then on your way back you’ll have to refreeze the trough, then relight the C Rune’s torch.</p>
    <p className='text-white text-xl mt-2 mb-2'>For the N Rune, look left of the C Rune’s location to see a gap you can grapple across. If it’s blocked by a large wooden container, recall the Leviathan Axe to raise it, allowing you to cross. The N Rune will be in front of you after you get across. Before jumping back across, be sure to see the collectible box below to find the Scroll that’s nearby.</p>

    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Jarnsmida Pitmines Lore 1 - The Pit-Mine</h3>
    <p className='text-white text-xl mt-2 mb-2'>From the Nornir Chest, drop down the ledge on the left, then head around the corner and look left to see a gap you can get across with a grapple point. If it’s blocked by a large wooden container, recall the Leviathan Axe to raise it up out of the way.</p>
    <p className='text-white text-xl mt-2 mb-2'>Once you’ve jumped across, look left to see the runes carved into the dirt wall.</p>
   
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Having picked up and completed all the collectibles, continue your journey by following Atreus as he heads southwest through the mining site – just west of where Atreus stops, you’ll find a Hacksilver pouch in front of a large wooden door.</p>
    <p className='text-white text-xl mt-10 mb-10'>Unable to pass to the other side, look for the ledges marked with white glyphs and proceed to boost Atreus up, who will offer to climb over to the other side in hopes of finding something that can help Kratos cross the gap. Once Atreus reaches the other side, press square when prompted to have him lower the gate.</p>
    <p className='text-white text-xl mt-10 mb-10'>As the gate begins to close, wait for it to even out and then proceed to use your Axe to freeze the yellow and blue cog in place. Once it clicks into place, jump across the next two gaps and stop once you reach the second large stone that’s hanging from the crane.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Do note before crossing the gap, you’ll find a Red Coffin to your left. We’ll double back to this soon, so don’t worry; we won’t be missing it.</p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Unable to pass once again, use your Blades of Chaos to turn the water trough to the other wheel – doing so will allow the large stone to rise up into the air, allowing Kratos to jump over the gap.</p>
    <p className='text-white text-xl mt-10 mb-10'>Making it to the end of the path, you’ll find that there is nowhere to go – or at least you thought. Instead, turn around and use your Axe to freeze the trough of water that we just moved. As the rock lowers to the ground, Kratos will be able to use his Blades of Chaos to latch onto the side, pulling him up to it. When standing on top of the rock, recall your Axe and proceed to jump across the gap once the rock rises slightly higher.</p>
    <p className='text-white text-xl mt-10 mb-10'>Making it safely across the gap, help Atreus lift the door by pressing circle when prompted. Once you’re on the other side, let’s double back for a second and pick up some resources and Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>To collect these items, jump across the gap to your right and then down the next ledge. Here, you’ll find a Hacksilver pouch directly down on the ledge below, followed by the Red Coffin that promised to revisit earlier – it’ll contain +2 Forged Iron and some Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>With the items collected, return to the door and continue heading southeast, crossing a small gap, and then proceeding to move the cart that’s blocking the path. After moving the cart, you’ll meet with Sindri, who will provide you with a light source, which will supposedly help us deal with the untold horrors that lurk within the dark.</p>
    <p className='text-white text-xl mt-10 mb-10'>Just as you’re about to head into the mine, you’ll be ambushed by a group of monsters including, Wretches, Grims, Cursed Grims, and a new enemy, Draugs. Much like the previous game, Draugs will perform standard melee combat and are relatively easy to take down with both light and heavy attacks with your Axe.</p>
    <p className='text-white text-xl mt-10 mb-10'>In terms of the environmental features, this battle will be like most that you have encountered thus far; however, much like the yard outside of Durlin’s Office, you’ll find two large cranes (one along the eastern side and one to the southwest) that Atreus can explode with his Sonic Arrows when aiming for the green ore at the base of the poles.</p>
    <p className='text-white text-xl mt-10 mb-10'>While not essential, destroying these posts will prevent the Cursed Grims from getting a height advantage, where they’ll throw poisonous saliva in your direction.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, let’s clean up the two final collectibles that can be found in this area.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Jarnsmida Pitmines - Legendary Chest & Kvasir’s Tool and Bang Poem</h3>
    <p className='text-white text-xl mt-2 mb-2'>1. Chest Contains:</p>
    <p className='text-white text-xl mt-2 mb-2'>2. Poem Reference:</p>
    <p className='text-white text-xl mt-2 mb-2'>To start, stand where the cart is and face forwards into the cave: here, make a wide U-turn to your right – you’ll discover a Hacksilver chest to your left when taking this path.</p>
    <p className='text-white text-xl mt-2 mb-2'>Here you should spot a pillar holding up the water trough with gold segments: use the Blades of Chaos to turn the end of the trough, which will cause a giant crate holding a stone block to move towards you. While it’s doing this, use the explosive pot to your left to destroy the gold rocks, letting you leap up to the crane’s stone block one it’s in position.</p>
    <p className='text-white text-xl mt-2 mb-2'>Once you’re on top of the stone block, throw the Leviathan Axe into the end of the trough: this blocks the water flow, making the crane move you to its original starting position.</p>
    <p className='text-white text-xl mt-2 mb-2'>When the stone block has finally stopped moving, you can have Kratos hang off the side of the stone black and then leap over to a new area.</p>
    <p className='text-white text-xl mt-2 mb-2'>From there, follow the mine cart tracks uphill: the Legendary Chest will be at the top on your right, not too far from the purple glowing artifact nearby.</p>
    <p className='text-white text-xl mt-2 mb-2'>The chest contains the Pommels of the Undying Spark, which has +6 Strength, +3 Runic, and has Scorching Burn, which increases the damage the Burn status inflicts.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, return to the mine entrance, and follow Atreus as he starts to lead you inside. Not too far in, look to the roof to find a Hacksilver bucket you can drop down with your Axe.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you continue further, you’ll find a Lore Plaque to your fight; however, you’re still missing the required equipment to pick up this collectible.</p>
    <p className='text-white text-xl mt-10 mb-10'>A few meters further down the minecart track, you’ll spot another Hacksilver bucket hanging from the roof – before reaching the bucket, you’ll encounter two Wretches that you’ll need to defeat. Upon clearing them, you’ll learn that the mine entrance has collapsed, so collect the Hacksilver pouch by the fallen dwarf and take the path left through the small cave.</p>
    <p className='text-white text-xl mt-10 mb-10'>After jumping down the ledge, you’ll be swarmed by yet another group of Wretches – take them down and proceed to have Atreus use his Sonic Arrows to blast through the Soundstone. Remember to pick up the nearby Healthstone, before continuing through the small crawl space.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Bergsra</h2>

    <p className='text-white text-xl mt-10 mb-10'>Upon exiting the crawl space, you’ll soon discover the cause for all the Wretches – Bergsra, a large Grim-like creature that’s spawning her little Wretches like there’s no tomorrow.</p>
    <p className='text-white text-xl mt-10 mb-10'>Remember that your shield is currently broken, so you’ll need to ensure you’re dodging all incoming attacks, as they can no longer be parried.</p>
    <p className='text-white text-xl mt-10 mb-10'>While Atreus takes out the attacking Wretches, you’ll have a moment to start depleting her four-sectioned health bar by unleashing several Axe throws at her from a distance. You should be able to clear at least half of her initial health bar section before she starts moving toward your location. While it’s not much, any extra damage will always be a huge help, especially when playing on harder difficulty levels.</p>


    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Throughout this fight, Wretches will continue to spawn in the area. We recommend focusing most of your attention on the boss, as Atreus will slowly kill off the Wretches. However, if you find you are getting overwhelmed, they can be taken out in a single light attack with your Axe.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>As Bergsra reaches you, she’ll begin to unload a blockable poisonous spitball in your direction, much like the Cursed Grims.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now, we’re using the Dauntless Shield, which provides high risk and high-reward parries. So if you parry the attack right before getting hit, you’ll deal Stun damage to Bergsra, while also empowering your next Shield Bash, which will provide some hefty damage to the boss.</p>
    <p className='text-white text-xl mt-10 mb-10'>Do keep in mind, as you’re getting in close to deal melee damage, just be wary of her unblockable slam attack, which will create a small AoE shockwave. This attack is fairly easy to avoid, as long as you’re backing up as soon as you see the large red rings appear.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Running low on health? Defeat Wretches for the chance at receiving Healthstones, as well as looting them from around the area. In addition, Atreus can destroy the two Soundstone patches found on either side of the area, where you’ll find a rage boost and some Hacksilver.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>In addition, Bergsra will also perform another unblockable attack in the form of a charge that sees her barreling toward you, before unleashing a powerful punch to finish the attack – you’ll want to avoid this at all costs by dodging to the side or by simply backing up out of range.</p>
    <p className='text-white text-xl mt-10 mb-10'>A potential strategy that we found that made defeating Bergsra a little easier, was to utilize the ledges in the area, as you’ll find that Bergsra will take a short moment to catch her breath after climbing up a ledge or jumping down ledges. This short break will give you a rather risk-free chance to unleash heavy attacks upon the boss without the worry of taking damage – just be ready to back up quickly in case she performs her melee slam.</p>
    <p className='text-white text-xl mt-10 mb-10'>Lastly, Bergsra will perform an attack that sees her lowering to the ground on all fours and spawning several Wretches. While spawning the Wretches, Bergsra will be vulnerable to all incoming attacks, so we highly recommend you bypass the Wretches and unleash your most powerful melee attacks upon her to deal some quick and easy damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>If you’re looking to keep your distance, a well-timed Axe throw can temporarily stun her and halt the attack, reducing the number of Wretches she’s able to spawn. Once you’ve dealt enough damage, you’ll be prompted to press R3 to finish off the kill – you’ll also need to clear the area of any remaining Wretches before you can continue through the mine.</p>
     
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Search the Mines for Tyr (Continued)</h2>

    <p className='text-white text-xl mt-10 mb-10'>Having cleared the area, take the nearby boat through the mine until you reach Sindri’s workshop. Before continuing, be sure to check out the new blueprints Sindri’s store has to offer.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’re ready to continue, follow Atreus up the path until you reach a gap that you’ll need to cross. Before crossing, be sure to pick up the Rune Read collectible that’s behind the door to your right.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>The Applecore - Lore 1 - The Vault</h3>
    <p className='text-white text-xl mt-2 mb-2'>This Lore is found at the start of the Applecore, where you stop on the boat ride just in front of Sindri’s workshop. From here, head left up the curved path to the end.</p>
    <p className='text-white text-xl mt-2 mb-2'>You’ll see a wooden wall here with a Soundstone plate on it: have Atreus shoot it down with a Sonic Arrow, and you’ll see the Rune Read in the dark on the other side.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>With the Rune Read collected, have Atreus shoot the Soundstone that’s blocking the water trough. Once destroyed, use your Axe to freeze the water trough just before the netting to send any overflowing water into the trough below. This will then power the wheel and raise the claw up from the water below, creating a grapple point you can use to cross the gap.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once on the other side, open the wooden door, where you’ll find a Healthstone on the small platform to the left, and a large Red Coffin straight ahead that contains +3 Forged Iron and some Hacksilver. With these collected, have Atreus shoot the Soundstone that’s blocking the way forward and proceed to squeeze through the gap in the wall. Following Atreus, grapple across the water trough and defeat the two Draugr that’ll attack you.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>The Applecore - Lore 2 - Cooperation</h3>
    <p className='text-white text-xl mt-2 mb-2'>This Lore Marker can be found after which Atreus spots a second wooden door. After jumping over the water trough, go right and smash a wooden wall.</p>
    <p className='text-white text-xl mt-2 mb-2'>In the lower area on the other side will be the Lore Marker.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Having collected the Lore Marker, continue following Atreus up the winding path to your left. Before following Atreus across the bridge you’ll soon encounter, continue following the path as it splits right, where you’ll discover a Hacksilver chest. With the Hacksilver chest looted, return to Atreus and follow him across the bridge.</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Things Left Behind 5 - Althjof’s Statues</h3>
    <p className='text-white text-xl mt-2 mb-2'>After climbing the curved path, turn left and head down the bridge. From here, the path will split: left to a water trough puzzle, and right to some gold rocks.</p>
    <p className='text-white text-xl mt-2 mb-2'>The path is right to the gold rocks, but to destroy them, you’ll have to walk down the left-hand path for a bit – this will give you the angle to throw the Leviathan Axe at a red pot behind the gold rocks, which will destroy them and clear the way.</p>
    <p className='text-white text-xl mt-2 mb-2'>Head down the right-hand path now that it’s open. Charge the Leviathan Axe then crawl under the wall, and you’ll have to fight some Grims, Wretches, and a Bergsra Monster. In the process of killing them all, you’ll have to grapple across a blue-lit gap on the left and then leap up a wall to the upper area.</p>
    <p className='text-white text-xl mt-2 mb-2'>When you have a second, be sure to destroy the hanging vase here to get 4 Shattered Runes. You can cut the rope from the higher platform. Once the battle is over, at the upper area, check the left-hand side for a large door you can go through. On the other side, you’ll find a Red Coffin containing Rawhide and Hacksilver.</p>
    <p className='text-white text-xl mt-2 mb-2'>Then, look to your left to see a small ledge you can climb up – at the end you’ll find the Artifact! Return to the wooden bridge to move forward.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Following Atreus down to the ledge below, you’ll need to complete a water trough puzzle in order to continue.</p>
    <p className='text-white text-xl mt-10 mb-10'>To complete the puzzle, jump down the ledge to your right, where you’ll find a Hacksilver pouch and a Red Coffin – this will contain Forged Iron and some Hacksilver. From here, climb the chain dangling from the ledge above, and make your way to the top of the platform, where you’ll have the ability to use your Blades of Chaos to stop the water flowing from the trough.</p>
    <p className='text-white text-xl mt-10 mb-10'>With the elevator powered up, return to the ledge at the start of the puzzle, and freeze the trough on your left, just before the end – this will allow any overflow to drop onto the wheel below, rising the metal clamp.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now that the puzzle is complete, grapple across to the other side, where you’ll then want to freeze the trough to your right, to lower the elevator. Once inside the elevator, recall your Axe. When the elevator stops, head towards the large wooden door – there’s a Hacksilver chest just to the left – and proceed to open it.</p>
    <p className='text-white text-xl mt-10 mb-10'>After opening the door, shoot the two buckets of Hacksilver hanging from the roof and then jump down the ledge, where a group of Wretches will greet you – take them down.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once defeated, pick up any Hacksilver pouches and Healthstones you’ll find in the area. With the area clear, interact with the dead dwarf trapped in the crack found in the wall. Pulling a pouch from his hand, you’ll find the Relic, Talisman of Meign. Relics provide a special ability that can be activated with L1 + Circle. You can equip the Relic in the Weapons menu.</p>
    <p className='text-white text-xl mt-10 mb-10'>After equipping the Relic, you’ll be greeted by a group of Grims and Cursed Grims – defeat them to continue. Once the area is clear, continue through the now-cleared crack in the wall.Finding another empty vault, Atreus will find hope in yet another door that’s across the other side of the room. Before following Atreus up the path, you’ll discover a Healthstone beneath some Soundstone to your left.</p>
    <p className='text-white text-xl mt-10 mb-10'>With the Healthstone collected, continue up the path – loot the Hacksilver pouch beside the dead dwarf before the ledge – and have Atreus destroy the Soundstone that’s inside the large dangling basket. After destroying the basket, grapple across to the other side. To your left, break the latch to create a shortcut to the trough puzzle we completed earlier.</p>
      
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Things Left Behind 6 - Durinn’s Stone Statue</h3>
    <p className='text-white text-xl mt-2 mb-2'>Near the end of the curved path, grapple across the gap on the left turn in the path and proceed to drop down the nearby ledge, where you’ll find an Artifact sitting on a wooden barrel behind some Soundstone rocks.</p>
    <p className='text-white text-xl mt-2 mb-2'>Destroy them with a Sonic arrow and obtain the Durin's Stone Statue.</p>
   
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>The Applecore - Draugr Hole 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>From the Artifact above, go through the door on your right, and you’ll find the Draugr Hole! Defeat The Hateful here, and your rewards will drop in the middle of the hole. Get tips and strategies for defeating The Hateful in The Applecore with this guide.</p>
    
    </div>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>The Applecore - Legendary Chest 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>1. Contains:</p>
    <p className='text-white text-xl mt-2 mb-2'>Inside The Hateful’s boss room, you’ll find a Legendary Chest that can only be opened upon defeating the boss.</p>
    <p className='text-white text-xl mt-2 mb-2'>Inside this chest, you’ll discover the Fortified Frost Knob, which has 4 Strength and 5 Cooldown – making it a good replacement for The Furious Maul. It also has the Frost Resolve Perk, boosting Defense and Stagger Resistance when you use Frost Awaken.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>After following the curved path to the end, you’ll reach a broken zipline – have Atreus destroy the Soundstone that’s holding the rope down.</p>
    <p className='text-white text-xl mt-10 mb-10'>After clearing the Soundstone, pull the chain to tighten the rope and zipline down to the platform below.</p>
    <p className='text-white text-xl mt-10 mb-10'>From here, jump across the gap to your left and boost Atreus up the ledge in hopes of finding a way across. You’ll then want to freeze the water trough just after the water wheel, which will see water overflowing onto the wheel, moving a large stone platform. When prompted, command Atreus to pull the lever he discovered, sending clumps of Soundstone down the water trough, but instead of breaking through the ice, they’ll become frozen.</p>
    <p className='text-white text-xl mt-10 mb-10'>With the Soundstone frozen into place, recall your Axe and freeze the water trough to your right to send water tumbling down onto the wheel below. This will raise a large metal clamp, creating a grappling point you can use to cross over to the platform we recently moved into place.</p>
    <p className='text-white text-xl mt-10 mb-10'>From here, you’ll need to complete another water trough puzzle. To start, freeze the water trough located to your right. Once you’ve grappled across, have Atreus destroy the Soundstone blocking the water trough to move the platform closer to the large wooden door.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon jumping across the gap, collect Odin’s Raven and the Hacksilver chest that’s found upon shimming across the ledge to your left. Walk forward and open the door ahead to create a path back to the rest of the mine. When you’re ready, shimmy back and proceed through the large wooden door.</p>
 
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>The Applecore - Odin’s Raven 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>The sole Raven in The Applecore is found towards the end, where you have to use your Axe to freeze a water trough to jam some Soundstone rocks dropped in by Atreus. There are two ways to find it depending on whether or not you opened up the shortcut that bypasses the puzzle.</p>
    <p className='text-white text-xl mt-2 mb-2'>If you haven’t completed the puzzle yet, then once you’ve got the two giant claws into position by blocking the two water troughs, grapple across to the stone block, then jump left onto solid ground. The Raven will be here on your left, perched in a wooden scaffolding nook close to a lantern.</p>
    <p className='text-white text-xl mt-2 mb-2'>If you have opened up the puzzle bypass route, then an earthquake will have knocked down some debris that prevents you from doing the puzzle again.</p>
    <p className='text-white text-xl mt-2 mb-2'>In this case, take the bypass route that has you shimmy along the side of a wall. Once you’re on the other side, turn around to see the Raven perched in a wooden scaffolding nook close to a lantern.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Upon opening the door, look to your right to find a large Red Coffin containing +2 Slag Deposits and some Hacksilver. Once collected, head through the crawl space on the opposite side of the room.</p>
    <p className='text-white text-xl mt-10 mb-10'>After exiting the crawl space, have Atreus destroy the four Soundstone spots on the pillars that keep the large wooden door secure. Once the destroyed, proceed to open the door – at least attempt to, as you’ll be stopped by some Einherjar’s.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Einherjar’s can inflict Bifrost on your health bar. While Bifrost does heal over time, follow-up hits can detonate it for extra damage.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Defeating the group of Einherjar’s won’t be easy, as although they attack primary with melee, their powerful strikes can deal significant damage upon impact.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now, it’s important to note that while you can block the initial damage dealt by Bifrost attacks – which is indicated by a purple glow – you’ll still be affected by the attack. For this reason, we recommend dodging all incoming attacks charged with Bifrost. Once the Einherjar’s are defeated, have Kratos pull open the large wooden door – you’ll need to mash circle when prompted.</p>
    <p className='text-white text-xl mt-10 mb-10'>Entering a lengthy cutscene, Kratos will free Tyr from his prison; however, he’ll soon flee, afraid that Kratos – a god-killer – has come to kill him too. As Tyr flees, Kratos will be stopped by another group of Einherjar and will be separated from Atreus – who will chase after Tyr.</p>
    <p className='text-white text-xl mt-10 mb-10'>Following the cutscene, defeat the Einherjar and continue through the cave, where you’ll encounter two more Einherjar. Once they are defeated, use your Blades of Chaos to break through the rock wall above, where you’ll encounter three more Einherjar – take them out.</p>
    <p className='text-white text-xl mt-10 mb-10'>After dealing with the Einherjar, squeeze through the gap that leads southwest and pick up the Healthstone before grappling across to the other side of the path. After grappling across, follow the path southwest and down a ledge, where you’ll find Atreus trying to console Tyr.</p>
  
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Exit the Mines with Tyr</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Finally convincing Tyr to trust both Atreus and Kratos, it’s time to exit the mines and head home to Broke and Sindri to plan our next move.</p>
    <p className='text-white text-xl mt-10 mb-10'>After the cutscene, continue a short distance ahead and loot the Hacksilver chest to your left, and then proceed to follow Atreus and Tyr through the mine – along the way, you’ll find a Hacksilver pouch when climbing a small ledge to your left. When reaching the elevator, interact with the wheel to start traveling back up to the surface. Upon reaching the surface, loot the Hacksilver chest to your right and continue following Atreus as he leads you out of the wetlands.</p>
    <p className='text-white text-xl mt-10 mb-10'>A short distance away, you’ll encounter a small group of Grim that emerge from the water – you’ll find two large blocks marked with glyphs that you can use to help clear some of the Grims that attack. Once the area is cleared, follow Atreus and interact with the nearby barge, following the button prompts that will occur after the cutscene.</p>
  
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Escape Through the Mystic Gateway</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Making it to the other side, defeat the final Einherjar that will attempt to prevent you from reaching the nearby Mystic Gateway. Once defeated, interact with the Mystic Gateway to return home. Completing the quest, follow the path through Yggdrasil until another gateway appears.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Confer Privately with Mimir</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>On the other side, head inside Sindri’s house and proceed into the room that’s by the fireplace, where you’ll confer with Mimir privately. After gaining control of Atreus, follow Sindri to the Mystic Gateway, where the two will seek to find Freya in Midgard – this will conclude the quest.</p>

    </div>
    
    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Surviving Fimbulwinter</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>Old Friends</p>

    </button>

    </div>

    </div>

  )
}

export default Gowr2