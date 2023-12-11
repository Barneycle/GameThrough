import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Gowr6 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/gowr5');
    
    };

    const handleNext = () => {

        navigate('/gowr7');
    
    };

  return (

    <div className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>The Reckoning</h1>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
    <h3 className='text-white font-mono text-2xl'>This walkthrough will include story spoilers for the second quest, The Quest for Tyr, so proceed with caution.</h3>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Meet Brok at the Mystic Gateway</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Seeking the spell that’s binding Freya to Midgard, it’s time to head to Vanaheim. Follow Brok to the Mystic Gateway, where he’ll unlock access to the realm.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Locate the Source of Freya’s Curse, and Destroy It</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>After traveling through the gateway, you’ll arrive in Vanaheim – follow Freya through the forest.</p>
    <p className='text-white text-xl mt-10 mb-10'>Do note, when returning to the large tree and taking the path to the right, you’ll discover a Red Coffin covered in Red Fungi Bramble – you’ll need to backtrack to this area once you have unlocked the necessary magic to clear the vines.</p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, follow the path northwest and squeeze through the passage, where you’ll learn that Freya’s spell is weakening. Worried she’ll be torn from the realm, she’ll transform into her falcon form.</p>
    <p className='text-white text-xl mt-10 mb-10'>Continue following Brok and Freya through the forest until you reach a large door – open it and continue into the old market. As you enter the market, turn right, and you’ll find a Hacksilver chest – remember to destroy the nearby plant before getting too close.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you continue through the market, destroy the plant on the stone pillar and then look to the wall to your left, next to the large tree roots, where you’ll find a small gap in the wall.</p>
    <p className='text-white text-xl mt-10 mb-10'>After looting the Legendary Chest, return to the market area, where you’ll soon encounter a group of Legion – take them out. Then, with the Legion dealt with, continue following the path through the market.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before doing so, though, you may want to loot the resource pouch found in the northeastern building, as well as the resource bucket hanging from a tree near Freya (you’ll loot this as you exit the market), and the Hacksilver chest in the ruined building beneath where she is perched.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon reaching a large tree, take a quick detour to your left to find a resource bucket hanging from a tree and one of Odin’s Raven flying in the distance. As you near the Raven, you’ll find it flying over a river, as well as a small Hacksilver pouch just to the left of the water’s edge.</p>
    <p className='text-white text-xl mt-10 mb-10'>After traveling through the market, you’ll come by a ledge you can climb – here, you’ll also find a Hacksilver pouch beside a fallen enemy on the ground.</p>
    <p className='text-white text-xl mt-10 mb-10'>Climb the set of ledges and continue forward until you reach a fork – take the path right to find a Red Coffin containing Forged Iron, Stonewood, and some Hacksilver, or continue left to follow the main path.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Kvasir’s Poems 9 - Upon Pursuing a Place Not Marked On Maps</h3>
    <p className='text-white text-xl mt-2 mb-2'>1. Poem Reference:</p>
    <p className='text-white text-xl mt-2 mb-2'>After crossing the two wooden bridges and jumping across the gap, you’ll find a latch you can kick down to your left to create a shortcut. With the shortcut created, smash into the ground below to find another of Kvasir’s Poems.</p>
   
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Continue following Brok and Freya – be sure to loot the Hacksilver pouch and the nearby resource bucket hanging from the maple tree. Upon reaching the end of the path, climb over the stone pillar, where a group of Gulons will attack you. You’ll want to be wary of their powerful melee attack, which, when caught, you’ll need to mash Circle to escape their grasp.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once defeated, you’ll find a small hole in the wall, just left of the stone pillar you climbed over, that leads to a nearby Red Coffin that contains Forged Iron, dwarfen steel, and some Hacksilver. Follow the path northwest and climb beneath the large roots.</p>
    <p className='text-white text-xl mt-10 mb-10'>Continue forward, taking out the poison-spitting plant along the way. After exiting the tunnel, destroy the plant ahead – you’ll find a Hacksilver pouch beneath it. You’ll soon encounter a Nornir Chest as you continue along the path.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>The Southern Wilds - Nornir Chest 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>To solve the Nornir Chest, you’ll need to hit several switches found nearby.</p>
    <p className='text-white text-xl mt-2 mb-2'>The C Rune’s switch will be up the wall to the left of the Nornir Chest. Hit it once on the right paddle to turn it to the C.</p>
    <p className='text-white text-xl mt-2 mb-2'>The N Rune switch is to the right of the Nornir Chest, but is covered in Hel’s Bramble. Equip the Blades of Chaos, use L2 to aim, then press R2 to use the Blazing Surge skill, setting it alight. Now you can hit the switch once on the left paddle to spin it to the N.</p>
    <p className='text-white text-xl mt-2 mb-2'>The R Rune’s switch is back to the South-East and up the wall. It too is covered in Hel’s Bramble, but it’s too far away to ignite. Luckily, the Bramble has extended down the left-hand bank, which you can then light to clear it away. Hit the left-hand paddle once to spin it to the R!</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>When jumping down the ledge, just northwest of the Nornir Chest, you’ll find some Bramble to your left that can be destroyed to access a Red Coffin containing Rawhide, honed metal, and some Hacksilver. Continuing forward, follow Brok across the river. On the other side, climb the small path on the right to find a Hacksilver pouch.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you continue along the path, you’ll encounter two Wulvers – take them down. Don’t forget, much like Atreus, Brok can also draw aggro with his attacks when commanded with Square. Once dealt with, lift the large rock, and proceed to shoot the latch when prompted by Brok. Boost Brok up the ledge and then grapple to the top.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before too long, Brok will be dragged away through a small gap beneath the large tree. Crawl through the opening, and you’ll enter a lengthy cutscene where Kratos encounters a campsite.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Speak with Freyr</h2>
   
    <p className='text-white text-xl mt-10 mb-10'>With Freya convincing the group to allow Kratos to pass through the camp, you’ll now have the opportunity to speak with Freyr by the large stone table. But, before doing so, you may want to do a little exploring, as there are two collectibles you can find.</p>
    <p className='text-white text-xl mt-10 mb-10'>Do note if you speak with Freyr before exploring, you won’t be able to collect the Rune Read in the area.</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Freyr’s Camp - Lore 1 - Freyr’s Lament</h3>
    <p className='text-white text-xl mt-2 mb-2'>This Scroll is found in the South-West part of Freyr’s Camp. Look for the climb markings to the right of Brok’s shop that marks where you entered this area The Southern Wilds.</p>
    <p className='text-white text-xl mt-2 mb-2'>To the right is a shelter with a campfire in it: the Scroll will be there close to the fire.</p>

    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Freyr’s Camp - Lore 2 - Vanaheim Lullaby</h3>
    <p className='text-white text-xl mt-2 mb-2'>The Rune Read of Freyr’s Camp can be found on its West side. Look for a large tree here with a path on the left that leads into the surrounding forest. On the other side of this tree will be the Rune Read, between two boats with leaves on them.</p>
   
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once you’ve found the two collectibles, return to Freyr and speak to him by the large stone table. Following your conversation, Mimir will volunteer to stay behind. Before continuing through the wooden gate nearby, speak with Brok by the workshop to upgrade your weapons and armor and purchase resources such as Forged Iron, Rawhide, and Slag Deposits.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Continue to Seek the Source of Freya’s Binding Curse</h2>
   
    <p className='text-white text-xl mt-10 mb-10'>Once you’re ready to continue, head through the gate marked by the waypoint and follow Freya as she leads you further along the path through a tunnel.</p>
    <p className='text-white text-xl mt-10 mb-10'>When exiting, take the path left to find Odin’s Raven sitting atop a tree, just in front of the large blue structure over the lake. From the ledge, head south to find a Red Coffin containing some honed metal and Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>With those collected, return to the fork in the road and head right, jumping down a nearby ledge and toward a grapple point – be careful of the exploding plants along the way.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before grappling across, detour down the ledge to your right to find a Red Coffin containing Dwarven Steel and some Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>On the other side of the grapple point, continue following the path a short distance, climb over the logs, and then through the gap between the tree roots.</p>
 
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat the Forest Ancient</h2>
   
    <p className='text-white text-xl mt-10 mb-10'>You’ll encounter a Forest Ancient roaming the abandoned village as you exit the crawl space. Featuring one large health bar, the Forest Ancient has a tough outer bark that will prevent you from damaging the creature. Instead, the only way to deal damage is to target its brightly glowing chest when exposed.</p>
    <p className='text-white text-xl mt-10 mb-10'>There’s a catch, though, as its chest will only be exposed when it is firing attacks, making it crucial that you time each of your attacks accordingly to ensure you don’t expose yourself to unnecessary damage. However, if you’re quick, you’ll find that before it launches its red orb and laser-like attacks, it’ll leave its chest vulnerable to damage, making it the perfect time to launch a charged Axe throw.</p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Avoid standing too close to the Forest Ancient, as it’ll launch a powerful stomp attack that will send you flying back into the air.</p>

    </div>
   
    <p className='text-white text-xl mt-10 mb-10'>With each successful hit, the Forest Ancient will spew a small volatile orb from its chest – while the orb can be picked up straight away, it’s wise that you wait until it has finished launching its current attack; otherwise, you’ll be open to taking damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once it's safe to pick up the icy orb, toss it at the creature – ideally when its chest is exposed – to stun it temporarily.</p>
    <p className='text-white text-xl mt-10 mb-10'>Alternatively, if you’re using the Dauntless Shield, you’ll be able to parry its red orb attack back into the creature's chest. Unfortunately, the Forest Ancient’s laser-like beam can not be blocked, so you’ll need to roll out of the way or use the environment to block this dangerous beam.</p>
    <p className='text-white text-xl mt-10 mb-10'>After dealing enough damage to stun the creature, launch several light Axe throws into its chest and watch as the creature drops to its knees. Here you’ll be prompted to press R3, followed by R1 or R2, to launch powerful melee attacks at its core, depleting significant chunks of health.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon depleting its health below half, it’ll spawn a group of Legions. While not ideal, we recommend taking out these creatures before finishing off the Forest Ancient, as their quick speed and unblockable melee attacks will quickly be your undoing.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once the Legions are taken care of, continue repeating the steps above until you defeat the Forest Ancient, where you'll receive a Healthstone, a Ragestone, some Hacksilver and Shattered Runes, Bonded Leather, and a Chaos Flame upgrade for your Blades of Chaos.</p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, climb beneath the gap in the nearby structure and burn the Bramble blocking the other side of the dock. Then, grapple up the ledge and pick up the Healthstone before dropping down to the ground below, where you’ll encounter another group of Gulons. During this encounter, you’ll find a large log and a tree stump that you can use to your advantage, dealing large amounts of AoE damage to enemies when tossed.</p>
    <p className='text-white text-xl mt-10 mb-10'>With several creatures focusing their attention on you at once, we found the Blades of Chaos to be a great weapon of choice for this encounter, as their range and ability to hit multiple targets at once helped keep the Gulon's incoming attacks at bay.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once the area is clear, loot the Hacksilver chest in the northwest corner and continue through the gap that leads northeast. Follow the path until you reach an intersection; you’ll find a Hacksilver pouch beside a fallen enemy to your right. With the Hacksilver collected, continue up the ledge to your left and follow Freya as she leads you further along the path – be sure to grab the resource bucket hanging the tree, not too far from the poison-spitting plant.</p>
    <p className='text-white text-xl mt-10 mb-10'>When reaching another gap in the path, squeeze through, where you'll encounter a group of Einherjar. This time, the Einherjar will bring backup in the form of Einherjar Archers, which will stand on the nearby ledges, firing shots down upon you. Again, you’ll want to block and parry these attacks or dodge out of the way to avoid taking damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>While the archers may be a hindrance, we recommend dealing with the melee Einherjar first, as their attacks are much quicker and more damaging when caught off-guard.</p>
 

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Much like the previous encounter, you’ll find another stump in the area that you can use to freeze and temporarily stun any Einherjar caught within the attack's AoE.</p>

    </div>

    <p className='text-white text-xl mt-2 mb-2'>Another small thing to note is that you’ll want to keep a close eye on any reinforcements making their way into the area. If you’re within any red rings that appear on the ground, be sure to move out of the way as quickly as possible to avoid taking damage from their arrival.</p>
   
   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat the Flame Gradungr</h2>
     
   <p className='text-white text-xl mt-10 mb-10'>When taking down the final Einherjar Archer, you’ll encounter a powerful level 3 creature, the Flame Gradungr. While not a mini-boss, this creature is stronger than a Wulver, so you’ll need to be on your toes to avoid unnecessary damage. Additionally, the Flame Gradungr has three powerful attacks you’ll need to be aware of.</p>
   <p className='text-white text-xl mt-10 mb-10'>The first comes in the form of a semi-blockable leap attack that sees the creature attempting to melee you on three consecutive occasions. If you’re planning to block this attack, consider the block breaks you’ll encounter during each leap.</p>
   <p className='text-white text-xl mt-10 mb-10'>The creature igniting its horns and fur on fire indicates the next attack. Unfortunately, this attack is not blockable, and you can not use the maple tree as cover, as the flame will shoot straight through the large tree.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once you have broken through the Flame Gradungr’s spiritual shield (the orange bar), it’ll introduce a new attack that sees it stopping and then shaking piles of fire onto the ground.</p>
   <p className='text-white text-xl mt-10 mb-10'>Featuring the antlers of a stag, the Flame Gradungr’s horns will also repel any Axe throws, so when targeting the creature, you’ll want to ensure you’re aiming away from these; otherwise, your attacks will be ineffective.</p>
   <p className='text-white text-xl mt-10 mb-10'>It’s also worth noting that the Flame Gradungr will have a brief moment where it is vulnerable to damage after each attack. Hence, we recommend hitting the creature with heavy melee attacks and abilities during this time.</p>
  
   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Cross the Valley to Reach the Watchtower</h2>
   
   <p className='text-white text-xl mt-10 mb-10'>Having defeated the Flame Gradungr, pick up any loot and Hacksilver pouches in the area and proceed to climb the ledge by Freya, until you reach the ground below.</p>
   <p className='text-white text-xl mt-10 mb-10'>Continue through the cave -- picking up the Hacksilver pouch from the fallen Draugr, and looting the Hacksilver chest along the way. Not too far from the Hacksilver chest, you’ll encounter two Draugr Butchers being controlled by a Cursed Nokken.</p>
   <p className='text-white text-xl mt-10 mb-10'>While chanting their song, the enemies under their control will be invulnerable, so you’ll want to focus on taking them out first. Dealing with these Draugrs also won’t be easy, as their attacks are much faster than standard Draugr. However, with some well-timed parries, you’ll swiftly break their combo. Once dealt with, loot the area of any Healthstones and proceed across the bridge.</p>
   <p className='text-white text-xl mt-10 mb-10'>When reaching an uncrossable gap, look to your left and hit the left-most paddle beneath the crane to move the grapple point closer, then grapple across to the next hut.</p>
   <p className='text-white text-xl mt-10 mb-10'>Before continuing with the main objective, you can take a slight detour to find some collectibles, unlock some powerful new weapon upgrades and attachments, and find some very generous resources. Here’s everything you can collect:</p>

   <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

   <h3 className='text-white font-mono text-2xl'>The Abandoned Village - Lore 1 - Chores</h3>
   <p className='text-white text-xl mt-2 mb-2'>After grappling across to dry land, face East towards The Great Hall. In front of you will be a hut on your left. To the right of it will be some pots and baskets, with the Scroll among them.</p>
   
   </div>

   <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

   <h3 className='text-white font-mono text-2xl'>The Abandoned Village - Draugr Hole 1</h3>
   <p className='text-white text-xl mt-2 mb-2'>1. Rewards:</p>
   <p className='text-white text-xl mt-2 mb-2'>Look out the left-hand doorway from the second hut and hit the crane again so you can grapple over to dry land. Head west across the bridge, and you’ll find the Draugr Hole in the cave. Get strategy tips for beating this recurring foe in our The Hateful Mini-Boss guide.</p>

   </div>

   <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

   <h3 className='text-white font-mono text-2xl'>The Abandoned Village - Legendary Chest 1</h3>
   <p className='text-white text-xl mt-2 mb-2'>1. Chest Contains:</p>
   <p className='text-white text-xl mt-2 mb-2'>After defeating The Hateful, look for the low gap in the wall behind the Hole and slip under it. Then, on the other side, climb up the ledge, jump the gap into the hut, and the Legendary Chest will be ahead on the right!</p>
   <p className='text-white text-xl mt-2 mb-2'>The chest contains the Rond of Restoration, which, whenever you take damage, gives a chance to gain defense and for your next Shield Strike hit to restore some health. This chance increases the lower your health is.</p>

   </div>

   <p className='text-white text-xl mt-10 mb-10'>Ready to continue, from the second hut, head northeast toward the Rune Read you spot just inside the entrance to The Grand Hall – there’s a Hacksilver pouch found next to the stone pillar by the door.</p>
   <p className='text-white text-xl mt-10 mb-10'>With the Rune Read collected, head toward the gap in the wall found left along the wall beneath Freya. Before slipping through the opening, you’ll find a Hacksilver chest when taking the path further left.</p>
   <p className='text-white text-xl mt-10 mb-10'>When climbing through the gap, you’ll find that the area is crawling with a large group of Einherjar – you’ll need to take them out to continue. Where you’ll fight has plenty of space to move about, so when things get overwhelming, don’t be afraid to flee to another spot in the area.</p>
   <p className='text-white text-xl mt-10 mb-10'>One strategy we found particularly helpful during this encounter was to utilize the upper ledges and grappling points, as you’ll be able to lure Einherjar up onto the ledges and then use the grapple point to perform slam attacks, leaving them temporarily stunned.</p>
   <p className='text-white text-xl mt-10 mb-10'>Throughout the area, you’ll also find several large stone blocks that you can toss toward the Einherjar, dealing large amounts of damage upon impact.</p>
   <p className='text-white text-xl mt-10 mb-10'>When the area is clear, use the chain along the eastern wall to raise the gate. Once the gate is open, follow the path left to continue the main journey, or you can ignite the Bramble covering the ledge to your right, where you’ll find a Red Coffin containing Dwarven Steel and some Hacksilver.</p>
   <p className='text-white text-xl mt-10 mb-10'>Back on the main path, you’ll encounter a plant that emits a poisonous gas, much like the Scorn Poles you encountered in Midgard during the original game. To bypass these plants, you’ll need to freeze them with your Axe to stop the poisonous gas they're emitting.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once the plant is frozen, continue through the archway – just right of the plant you froze, you’ll find a Hacksilver chest at the end of the path. To continue, destroy the two explosive plants on either side of the rock wall and then burn the Bramble to drop the chain down the ledge.</p>
   <p className='text-white text-xl mt-10 mb-10'>Climb to the top and continue along the wooden bridge, where you’ll find a gap in the railing to your right. Here, you’ll find another Scorn Plant, throw your Axe into it to stop the gas, and then drop down to loot the Legendary Chest below, which contains the Shattered Star Shield.</p>
   <p className='text-white text-xl mt-10 mb-10'>This shield replaces the Shield Strike with the Shield Punch that blows enemies backward. In addition, holding L1 will charge up the move, increasing its power. Notably, the charge will hold even when you retract the shield, allowing you to charge up the Shield Strike in advance, which is particularly helpful for boss encounters.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once you’re ready to continue, climb the ledge and pull the chain to tighten the slack in the zipline. Once tightened, zipline across the river and grapple up the ledge. Continue grappling across the river before climbing to the top of the cliff when prompted.</p>
 
   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find a Way to Cross the Broken Bridge</h2>
   
   <p className='text-white text-xl mt-10 mb-10'>Upon reaching the top, continue toward the nearby structure. Here, you’ll have the option to head straight as you continue following Freya, or you can slightly deviate south to find a Hacksilver chest before continuing.</p>
   <p className='text-white text-xl mt-10 mb-10'>When reaching Freya, you’ll encounter another crane puzzle. To solve this, burn the Bramble holding the bucket in place.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once the bucket is free, hit the left-most paddle twice to move the grapple point between the gap to your left.</p>
   <p className='text-white text-xl mt-10 mb-10'>Grapple across to the small ledge – picking up the shattered rune pouch by the fallen enemy – and throw your Axe at the left-most paddle twice. Then, with the bucket between you and the Bramble blocking the wooden bridge, push the flaming bucket into the Bramble to burn it away.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once burnt away, rotate the left-most paddle once more and grapple back across to the other ledge. Now, head toward the broken bridge and hit the right-most paddle to move the grapple point between you and the gap – you’ll now be able to cross to the other side.</p>
   <p className='text-white text-xl mt-10 mb-10'>On the other side, you’ll now be able to complete the Nornir Chest located beneath the bridge – you can access the chest by making a U-Turn right and following the path that leads down to the water’s edge.</p>
  
   <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

   <h3 className='text-white font-mono text-2xl'>The Abandoned Village - Nornir Chest 1</h3>
   <p className='text-white text-xl mt-2 mb-2'>The N Rune’s torch is directly across from the Nornir Chest, and is reachable with the Blades of Chaos. The other two, however, are not and must be hit with the crane’s fire bucket.</p>
   <p className='text-white text-xl mt-2 mb-2'>Return to the bridge and look East to the other side: to the right of the bridge, you can see the R Rune on the rock wall to the right. Grapple across, then turn the crane once clockwise so the fire bucket is close to you. Next, yank it left with the Blades of Chaos to light the torch!</p>
   <p className='text-white text-xl mt-2 mb-2'>Look west across the bridge from here: you can see the C Rune’s torch among the tree roots to the left. Turn the crane back anti-clockwise once, setting the fire bucket into place and allowing you to grapple back across. Yank the fire bucket right with the Blades, and the Nornir Chest will unlock!</p>

   </div>

   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Press Onward in Search of the Binding Curse</h2>
   
   <p className='text-white text-xl mt-10 mb-10'>Ready to continue, follow the path southwest up a set of small ledges and squeeze through a small gap when prompted. Here, you’ll encounter Fiske, a powerful Einherjar and one of Odin’s Captains.</p>
   
   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Fiske</h2>
   
   <p className='text-white text-xl mt-10 mb-10'>Before starting the fight with Fiske, if you looted the Legendary Chest earlier and obtained the Shatter Star Shield, you’ll want to press and hold L1 to charge it up – this will allow you to Shield Punch right out of the gate.</p>
   <p className='text-white text-xl mt-10 mb-10'>It’s worth noting, though, that due to Fiske’s sheer strength, you won’t be able to knock him back; instead, just deal small amounts of damage, so we still favored The Dauntless Shield during this encounter.</p>
   <p className='text-white text-xl mt-10 mb-10'>As the battle begins, you’ll learn that Fiske has a four-sectioned health bar. Now, don’t let that number fool you. Fiske is exceptionally tanky and incredibly powerful, so you’ll need to time your attacks accordingly to ensure you’re avoiding as much damage as possible.</p>
   <p className='text-white text-xl mt-10 mb-10'>For this reason, we recommend leaving the starting hut as soon as possible, as its limited space can quickly be your downfall.</p>
  
   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Quick Tips and Tricks for Defeating Fiske</h2>
   
   <p className='text-white text-xl mt-10 mb-10'>Here are some quick tips and tricks you may find helpful during your encounter with Fiske. For a more detailed breakdown of each of Fiske’s attacks, be sure to continue reading below.</p>
  
   <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

   <p className='text-white text-xl mt-2 mb-2'>1. Don’t let Fiske’s slow movement fool you. While he may initially walk slowly, his attack speed is incredibly quick, so don’t be surprised if he quickly shoots across the area, unleashing a devastating scythe attack.</p>
   <p className='text-white text-xl mt-2 mb-2'>2. Fiske will primarily perform combo attacks, so always expect each of his unique attacks to contain at least three to five moves – whether combined with standard scythe swipes, block breaks, or even unblockable attacks.</p>
   <p className='text-white text-xl mt-2 mb-2'>3. After each of Fiske’s attacks, you’ll have a brief moment to unleash several heavy attacks upon him. However, don’t be surprised if his first attack that follows is unblockable, so whenever moving in close, be sure to play it safe and don't be greedy. Backing up after a few quick attacks will likely save your life.</p>
   <p className='text-white text-xl mt-2 mb-2'>4. When performing his powerful stab attack, the one that sees him transforming his scythe into a spear, we found that if you’re too close, even while dodge rolling, you’re still very likely to be damaged. So, when you see this attack occur, try to stay well out of range by backing up first and then proceeding to roll sideways rather than backward.</p>
   <p className='text-white text-xl mt-2 mb-2'>5. As the battle progresses, you’ll find that Fiske will begin delivering double-blue ring attacks. While these attacks can’t be blocked, they can be interrupted by double-tapping L1 to perform a shield strike. This strike will temporarily push Fiske back, giving you a moment to unleash heavy damage upon him. Interrupting these attacks is vital to your success throughout this battle, as the brief moment of stun will allow you a risk-free moment to deal significant damage.</p>
   <p className='text-white text-xl mt-2 mb-2'>6. While we touched on it briefly before, we ultimately saw the most success during this fight when using The Dauntless Shield. While it may offer less defense, we found it provided much more opportunity to land damaging blows after successfully parrying an attack, which is quite the feat against a fast-attacking boss like Fiske.</p>

   </div>

   <p className='text-white text-xl mt-10 mb-10'>Fiske has many powerful melee attacks, many of which begin as a simple scythe swipe before incorporating either a block break which can be parried, or an unblockable attack that will see his scythe glowing purple, inflicting BiFrost damage if his attack catches you.</p>
   <p className='text-white text-xl mt-10 mb-10'>In addition, Fiske will also perform a charge attack in which his scythe will glow purple and transform into a spear, where he’ll then attempt to stab you on three different occasions. While this attack can be parried and blocked, his speed and steer strength will make it risky. So, instead, we recommend backing up as quickly as possible and dodging out of the way.</p>
   
   <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

   <p className='text-white text-xl mt-2 mb-2'>If you happen to be running low on health throughout the battle, you’ll find a Healthstone in the back corner of the area. Just be warned, this area is quite narrow, so keep that in mind when dodging Fiske’s wide scythe attacks.</p>
   
   </div>

   <p className='text-white text-xl mt-10 mb-10'>Now, one of Fiske’s major attacks sees him grabbing his scythe, slamming into the ground, and unleashing a Bifrost shockwave. Unfortunately, this particular attack is unblockable, so you’ll need to be well out of the way to avoid taking damage from the attack's large AoE.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once you have depleted Fiske’s health bar, press R3 when prompted to perform the finishing blow, which sees Kratos sending Fiske’s own scythe into his throat. Defeating Fiske will reward you with a Healthstone, a Ragestone, Bonded Leather, and the powerful Relic, Glaive of Dodher, which will throw a Bifrost chakram that swerves into enemies.</p>

   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Press Onward in Search of the Binding Curse (Continued)</h2>
   
   <p className='text-white text-xl mt-10 mb-10'>With Fiske defeated, open the nearby gate with your Blades of Chaos. Before following the main path right, you’ll have the chance to squeeze through the small gap in the collapsed hut to your left, where you’ll find a Red Coffin containing Stonewood and some Hacksilver inside a hut.</p>
   <p className='text-white text-xl mt-10 mb-10'>Following the main path right, collect the Hacksilver pouch from the fallen enemy to your right when traveling through the old ruins. Take out the poison-spitting plant when you reach it, and proceed up the stairs until you reach another crane puzzle.</p>
   <p className='text-white text-xl mt-10 mb-10'>Now, completing this crane puzzle is optional, as it only serves as a way to reach the Legendary Chest found in the area. If you’re looking to skip this chest and simply continue the main story, head to the northwest corner of the area and climb the wall until you reach the other side.</p>
   <p className='text-white text-xl mt-10 mb-10'>So, to clear the stone columns, jump down off the ledge. But, before climbing through the brightly lit gap in the wall southwest, you’ll find a Red Coffin containing honed metal and some Hacksilver down the path to your left.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once you climb through the gap in the wall, loot the Hacksilver chest and follow the path left. At the end, you’ll have the option to use your Blades of Chaos to break the stone column. Then, return to the ledge and hit the right-most paddle on the crane to move the grapple between the gap – grapple across to the other side.</p>
   <p className='text-white text-xl mt-10 mb-10'>Continue along the path, taking out the poison-spitting plant, until you reach a ledge. Hit the left-most paddle to move the grapple point between you and the Legendary Chest. Once in place, grapple across and open the chest.</p>
   <p className='text-white text-xl mt-10 mb-10'>Ready to continue, climb up the wall in the northwest corner until you reach the other side – once here, open the door covered by the bright red vines and follow Freya into her old home, where you’ll enter a cutscene.</p>
  
   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>How to Defeat Nidhogg</h2>
   
   <p className='text-white text-xl mt-10 mb-10'>Upon helping Freya remove the roots placed by Odin, you’ll be attacked by a Nidhogg, an ancient creature that protects Yggdrasil’s roots. Now, don’t be too intimidated by the Nidhogg, as despite its ten-sectioned health bar, the battle is mostly straightforward, and any damage you deal will be quite significant. So, depleting its health bar shouldn’t be too challenging.</p>
   <p className='text-white text-xl mt-10 mb-10'>Better yet, there are two checkpoints: one after depleting one and a half health bars and another after depleting four health bars.</p>
   <p className='text-white text-xl mt-10 mb-10'>Overall, the battle will mainly consist of dodging and parrying incoming attacks and then launching your own heavy melee attacks – ideally after you have stunned the creature or during the brief moments in which it'll lower its head to the ground after it has performed an attack. That said, here are some quick and general tips that you may find helpful when defeating the Nidhogg.</p>
   
   <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

   <h3 className='text-white font-mono text-2xl'>Quick Tips and Tricks for Defeating Nidhogg</h3>
   <p className='text-white text-xl mt-2 mb-2'>1. Don’t be afraid to get in close. As Freya suggests, throughout the battle, you’ll want to ensure you’re dodging or parrying attacks and then moving in close to unleash heavy damage to the creature's head once it has finished its attacks or has been stunned/interrupted.</p>
   <p className='text-white text-xl mt-2 mb-2'>2. While melee attacks are the preferred method to defeating Nidhogg, ranged attacks with your Axe are still viable; however, they won’t deal much damage.</p>
   <p className='text-white text-xl mt-2 mb-2'>3. Despite the rather generous checkpoints, you’ll also find that the area is riddled with Healthstones and Ragestones that you can loot throughout the battle. So, if you’re running low on health, have a quick look around the area; more likely than not, you’ll find some lying around.</p>
   <p className='text-white text-xl mt-2 mb-2'>4. Due to the sheer size of the Nidhogg and its general attack types, you'll find that most of its attacks have large AoE’s. For this reason, we recommend that you’re constantly moving about the area, as remaining in the same place for too long will make it much more challenging to avoid the creature’s attacks, especially when compared to other boss encounters you’ve faced thus far.</p>
   <p className='text-white text-xl mt-2 mb-2'>5. During the second phase of the battle, the Nidhogg will perform a tail-charge attack that sees the creature slamming its tail into the ground before emitting double blue rings. These rings will pulse four times before the tail will explode. It’s crucial to your success throughout this fight to prioritize interrupting the attack by quickly double-tapping L1. This will leave the creature stunned, creating a short moment where you're relatively safe to unleash close-range melee damage. This attack is one of the main ways to deplete Nidhogg’s health bar quickly.</p>
   
   </div>

   <p className='text-white text-xl mt-10 mb-10'>If you’re looking for even more details on the fight, here’s what you can expect from the Nidhogg during each phase.</p>
   
   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Nidhogg Phase One</h2>
   
   <p className='text-white text-xl mt-10 mb-10'>During the first phase of the battle, your main focus will be getting close to the Nidhogg to draw attention away from Freya as she attempts to remove the last of Odin’s vines and the curse.</p>
   <p className='text-white text-xl mt-10 mb-10'>Throughout this phase, you’ll need to be wary of its unblockable slam attack that sees the creature slamming its hand down on the ground, where it'll then toss a wave of magic in your direction. You’ll need to dodge to the side to escape this attack. Generally, this attack will occur four times before it lowers its head to the ground, making it vulnerable to melee attacks.</p>
   <p className='text-white text-xl mt-10 mb-10'>The Nidhogg will also perform two blockable melee attacks in which it’ll attempt to slam its hand down onto you and another that sees it rearing into the air before crashing its head down into the ground below. Thankfully, both of these attacks can be parried when timed correctly, creating the ability to stun the creature temporarily.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once you’ve dealt enough damage, Freya will instruct you to drag the creature out of the realm tear by pressing R3 when prompted.</p>
   
   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Nidhogg Phase Two</h2>
   
   <p className='text-white text-xl mt-10 mb-10'>Having dragged the Nidhogg out of the realm tear, it’ll now have access to performing three new attacks. However, keep in mind that it will still perform the same attacks as earlier.</p>
   <p className='text-white text-xl mt-10 mb-10'>First up is its tail-charge attack, which will see the creature slamming its tail into the ground, where it'll pulse with blue rings four times before exploding. This attack is arguably the most crucial of the entire fight, as it’ll allow you the chance to deal significant damage to the creature when successfully managing to interrupt the attack by double-tapping L1. Once the attack is interrupted, the creature will be stunned and drop its head to the ground, making it vulnerable to damage.</p>
   <p className='text-white text-xl mt-10 mb-10'>In addition, the creature will perform another similar attack, attempting to stab you with its tail by sending it through realm tears, making it somewhat difficult to judge where the tail will land. This attack is usually performed three times. Unfortunately, this attack is not blockable, so you’ll need to dodge out of the way to avoid them.</p>
   <p className='text-white text-xl mt-10 mb-10'>Lastly, when spending too much time up close, the Nidhogg will slam its hands into the ground, leaving a large pile of Bifrost directly in front of it – you’ll need to stay clear of this to avoid being affected.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once you’ve depleted four health bars, you’ll enter another cutscene that sees Freya returning to her human form, where she'll proceed to help Kratos take down the Nidhogg.</p>
  
   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Nidhogg Phase Three</h2>
   
   <p className='text-white text-xl mt-10 mb-10'>Performing all the same attacks as before, the Nidhogg will now utilize the whole battleground as it'll climb up the large stone pillars, making it unreachable to melee attacks.</p>
   <p className='text-white text-xl mt-10 mb-10'>While the creature will perform all the previous attacks, it'll now introduce three more attacks. The first of the new attacks will be seen straight away, in which it'll climb up onto the stone pillar before unleashing a laser-beam-like attack across the area. To avoid this attack, you'll want to roll out of the way before it reaches you.</p>
   <p className='text-white text-xl mt-10 mb-10'>This attack has two parts: while the first laser beam is unblockable, the second beam can be blocked and parried when timed correctly.</p>
   <p className='text-white text-xl mt-10 mb-10'>The creature's next new attack comes in the form of a vortex, in which it'll open up a realm beneath its stomach, sucking in all types of debris and rocks before proceeding to spew them out in an unblockable force toward your location. This attack can be brutal, so keep moving and dodge as best as possible when it fires the debris toward you.</p>
   <p className='text-white text-xl mt-10 mb-10'>Lastly, when coiling up the stone pillar again, the creature will use its tail to shoot our balls of Bifrost. Thankfully, these balls can be parried back to the Nidhogg, creating a stun effect on impact.</p>
   <p className='text-white text-xl mt-10 mb-10'>Upon depleting five health bars, Freya will fire Sigils beneath the creature onto some Bramble. You'll want to use your Blades of Chaos to ignite the Bramble, dealing more significant damage than your standard attacks.</p>
   <p className='text-white text-xl mt-10 mb-10'>As you progress through the phase, Freya will fire more Sigils, requiring you to use Axe to hit the weak spots.</p>
   <p className='text-white text-xl mt-10 mb-10'>Upon depleting the Nidhogg's health to one bar, you'll be prompted to press R3 to deal the finishing blow -- or so you thought.</p>
   <p className='text-white text-xl mt-10 mb-10'>Failing to kill the creature, Kratos and Freya will need to fight the creature once more. Fortunately, the Nidhogg is weak, so after dodging a few attacks, Freya will fire a Sigil into its stomach, which you'll need to toss your Axe at it to finish the fight.</p>
  
   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return to Freyr’s Camp</h2>
   
   <p className='text-white text-xl mt-10 mb-10'>Following the cutscene that unfolds, pick up the pouch of the ground to receive an Amulet, a unique item with expandable slots for Enchantments. You’ll find a Frozen Flame upgrade a few meters ahead on the floor, so be sure to pick that up too.</p>
   <p className='text-white text-xl mt-10 mb-10'>Ready to continue, follow Freya through the door and up to the Red Fungi Bramble. Aim at the vines with L2, and press Square to command Freya to Hex the Bramble with a Sigil Arrow. Once Hex’d, switch to your Blades of Chaos and ignite the Bramble.</p>
   <p className='text-white text-xl mt-10 mb-10'>Follow the path forward until you reach a small ledge that you’ll need to climb – just right of this ledge, you can clear even more red fungi vines from a Red Coffin to receive some Stonewood and Hacksilver.</p>
   <p className='text-white text-xl mt-10 mb-10'>When climbing the ledge, you’ll soon encounter more Einherjar. With Freya’s help, you’ll now have access to Sigil Arrows, which, when pressing Square, will trigger an elemental explosion when shot at burning or frosted enemies.</p>
   <p className='text-white text-xl mt-10 mb-10'>Using the newly obtained Sigil Arrows and the numerous stone blocks scattered about the area, defeat the Einherjar and continue through the gap in the wall when the area is cleared.</p>
   <p className='text-white text-xl mt-10 mb-10'>Heading through the gap, follow the path until you reach a fork in the road. Before following Freya left, head right and loot the Red Coffin that contains Dwarven Steel and some Hacksilver. A short distance ahead, you’ll encounter more Scorn Plants; however, this time, they’re much closer together.</p>
   <p className='text-white text-xl mt-10 mb-10'>To make it through the area, have Freya Hex the Scorn Plants, and then use your Axe to freeze them. Hexing the plants will make your Axe’s freeze effect last longer, even without its presence.</p>
   <p className='text-white text-xl mt-10 mb-10'>After making it through to the other side of the poisonous gas, head left to find a Red Coffin containing Stonewood and some Hacksilver – when rounding the corner toward the Red Fungi Bramble, you’ll find a Hacksilver bucket hanging from a tree above.</p>
   <p className='text-white text-xl mt-10 mb-10'>Ready to continue, return to the fork in the path and climb up the ledge to your right, where you’ll encounter three Wisps – you’ll need to Hex these creatures in order to deal damage.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once dealt with, continue following the path until you enter a cutscene that sees night turning to day.</p>
   <p className='text-white text-xl mt-10 mb-10'>Following the cutscene, head southwest toward the newly cleared roots and inspect the nearby Lore Marker.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once you’ve inspected the Lore Marker, follow Freya along the root-covered bridge and down the ledge.</p>
   <p className='text-white text-xl mt-10 mb-10'>As you near the Red Coffin in the distance, you’ll be attacked by another plant, which will shoot poisonous at you – you’ll need to block these attacks with your shield to avoid damage, as the only way to defeat the smaller plants is to first take out the mother.</p>
   <p className='text-white text-xl mt-10 mb-10'>You’ll find the mother plant, just left of the Red Coffin, attached to the roots of a large tree. To destroy the mother, burn it with your Blades of Chaos. After killing the mother plant, loot the Red Coffin to receive Stonewood and some Hacksilver.</p>
   <p className='text-white text-xl mt-10 mb-10'>Ready to continue, head forward and lift the large rock blocking the path, where you’ll instantly encounter another group of Einherjar and eventually Legions. With Freya’s Sigil Arrows, Hex the incoming enemies to disable their shields.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once you’ve cleared the area, look for the small gap you can crawl through beneath the grapple point.</p>
   <p className='text-white text-xl mt-10 mb-10'>Then, on the other side, continue down the path until you reach a broken dock blocked by some Bramble.</p>
   <p className='text-white text-xl mt-10 mb-10'>To get across, you’ll need to chain Sigils together to reach the Bramble. So, in order to do so, place two Sigils on the large red structure next to the Bramble, followed by one on the Bramble itself. Using your Blades of Chaos, ignite the Sigil and watch as it chains together and burns the Bramble away.</p>
   <p className='text-white text-xl mt-10 mb-10'>Before grappling to the other side of the dock, be sure to loot the Shattered Runes pouch found by the water’s edge in the area to your right.</p>
   <p className='text-white text-xl mt-10 mb-10'>After following the path a short distance, you’ll encounter yet another group of Einherjar and Wisps – take them down. Upon clearing the area, climb up the ledge and shimmy behind the waterfall to find a hidden path.</p>
   <p className='text-white text-xl mt-10 mb-10'>On the other side, pick up the Healthstone and continue along the root-covered bridge until you come across a gap in the roots to your left. Here you’ll spot a Red Coffin blocked by a poison-spitting plant.</p>
   <p className='text-white text-xl mt-10 mb-10'>Continue a short distance ahead, and you’ll find another gap in the roots, revealing the mother plant. Create a chain of Sigils from the top tree branch until it reaches the mother – once destroyed, you’ll be able to return to the Red Coffin and loot it to receive honed metal and some Hacksilver.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once looted, continue following the bridge until you reach the end. Then, drop down the ledge and follow Freya as she leads you back to Freyr’s camp – entering the gate will trigger a cutscene that sees Freyr and Freya reuniting.</p>
   
   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Retrieve Mimir</h2>
   
   <p className='text-white text-xl mt-10 mb-10'>Following the lengthy cutscene, collect Mimir from Brok’s workshop table.</p>
  
   <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

   <p className='text-white text-xl mt-2 mb-2'>If you missed getting the Rune Read Lore between the two boats earlier, you can read it now that you have Mimir back!</p>
   
   </div>

   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Depart Freyr’s Camp When Ready</h2>
   
   <p className='text-white text-xl mt-10 mb-10'>Before leaving Freyr's Camp, loot the nearby blue chest for any resources you may have missed along your journey. You can then speak with Lunda to unlock The Mysterious Orb Favor, and lastly, speak with Brok to purchase any upgrades or resources you may need.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once you're ready to leave, climb back up through the gap that Brok was dragged through. On the other side, follow Freya as she leads you back to the Mystic Gateway.</p>
   <p className='text-white text-xl mt-10 mb-10'>As you drop down the ledge, you’ll complete the quest. Alongside the XP Kratos will be rewarded; Freya will also join your list of companions, unlocking her own combat equipment and unique skill tree. In addition, you’ll be able to use her Sonic and Sigil arrows to open new options in combat and puzzles.</p>
   
   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return to Sindri’s When Ready</h2>
   
   <p className='text-white text-xl mt-10 mb-10'>If you want to continue the main path, lift the large stone pillar blocking the way forward. Then, on the other side, approach the symbol on the wall, where Freya will enchant Kratos’ chisel, allowing him to carve a Rune into the hidden chamber door. Doing so will unlock The Elven Sanctum Favor.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once the hidden path has been revealed, retrace your steps backward slightly and head southeast, where you’ll find a Red Coffin covered in Red Fungi Bramble that will contain Rawhide, Dwarven Steel, and some Hacksilver.</p>
   <p className='text-white text-xl mt-10 mb-10'>With the Red Coffin looted, head through the hidden path and destroy the Bramble blocking the boat from traveling down the river – you’ll need to chain sme Sigils along wooden wall to your right.</p>
   <p className='text-white text-xl mt-10 mb-10'>Once clear, press the Up Arrow to switch to Sonic Arrows, which Freya can then use to destroy the Soundstone on the log ahead. Upon clearing the Soundstone, interact with the boat and head down the river until you reach the Mystic Gateway.</p>
   <p className='text-white text-xl mt-10 mb-10'>When arriving at the beach, you’ll find a glowing purple Artifact, Skirnir’s Crest, right of the gateway.</p>
   <p className='text-white text-xl mt-10 mb-10'>Before using the Mystic Gateway to return to Sindri’s, loot the Red Coffin to receive some Dwarven Steel and Hacksilver.</p>
  
   <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Check on Atreus</h2>
  
   <p className='text-white text-xl mt-10 mb-10'>Upon returning to Sindri’s, head inside and speak with Atreus, who can be found inside his room. Here, you'll enter a cutscene that sees Kratos confronting Atreus on his whereabouts when he disappeared for two days. This will conclude The Reckoning story mission.</p>
   

    </div>
    
    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>The Lost Sanctuary</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>The Runaway</p>

    </button>

    </div>

    </div>

  )
}

export default Gowr6