import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Gowr14 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/gowr13');
    
    };

    const handleNext = () => {

        navigate('/gowr15');
    
    };

  return (

    <div className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>Unlocking the Mask</h1>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
    <h3 className='text-white font-mono text-2xl'>This walkthrough will include story spoilers for the first quest, Surviving Fimbulwinter, so proceed with caution.</h3>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Seek out Huginn in Midgard</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Ready to return to Asgard and help Odin complete the Mask, it’s time to head to Midgard, where you must seek out Huginn, who will help you return to Asgard. Using the Mystic Gateway, travel to Midgard, but before doing so, Sindri will stop Atreus and provide him with a special gift that he can use when in danger.</p>
    <p className='text-white text-xl mt-10 mb-10'>Arriving in Midgard, enter your cabin, where you’ll be stopped by two special guests, Fenrir and Angraboda. Following a cutscene, Atreus will bit the two farewell before meeting with Huginn inside.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Speak with the All-Father</h2>

    <p className='text-white text-xl mt-10 mb-10'>Arriving inside Atreus’ room in Asgard, exit through the door and make your way toward the All-Father’s Study – before heading to the study, be sure to listen to Sif and Thrud’s conversation in Thor’s bedroom.</p>
    <p className='text-white text-xl mt-10 mb-10'>Entering Odin’s Study, he’ll question Atreus about Heimdall’s death. Placing the blame elsewhere, Odin will drop the subject after Atreus reveals that he had initially misread the mask, where it’ll be revealed that the true location is actually found in Niflheim.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find Thor</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>With Odin instructing him that Thor must travel to Niflheim with you, you’ll need to track him down. Before heading upstairs, though, we highly recommend returning to Atreus’ room and using the Wardrobe to purchase any equipment upgrades.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>When entering Sif’s room, you’ll have the opportunity to converse in a short conversation, where Atreus will encourage her to accept that Thrud will one day be a Valkyrie. Atreus will reference this conversation when speaking with Thrud during your search for Thor.</p>
   
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once ready, continue upstairs and speak with Thrud by the large dining table. Following a short conversation, follow Thrud outside as she leads you to where she believes Thor may be.</p>
    <p className='text-white text-xl mt-10 mb-10'>When entering the tavern, deposit your weapons with the guard by the door and follow Thrud through the crowded pub of Einherjar.</p>
    <p className='text-white text-xl mt-10 mb-10'>Eventually, you’ll find Thor toward the back of the room. Then, following a lengthy cutscene, you’ll need to fight through the drunken Einherjar, who will attack Atreus following a misunderstanding.</p>
    <p className='text-white text-xl mt-10 mb-10'>With Thrud and Ingrid’s help, defeat the attacking Einherjar. Rated for Atreus’ skills, these enemies aren’t overly challenging, so as long as you’re blocking and parrying incoming attacks while also using a combination of heavy and light attacks, you should be able to take down the Einherjar with relative ease.</p>
    <p className='text-white text-xl mt-10 mb-10'>After defeating the first wave of Einherjar, you’ll encounter Thor, who is far too drunk to comprehend the extent of the bar fight.</p>
    <p className='text-white text-xl mt-10 mb-10'>Fighting your way through even more Einherjar, follow the R1 and R2 prompts as you enter a brief cutscene that sees Atreus fist-fighting one of the Einherjar against a broken table.</p>
    <p className='text-white text-xl mt-10 mb-10'>After being sent up to the floor above, help Thrud by firing upon the Einherjar below with your bow. Upon defeating the enemies, you’ll enter another cutscene with Atreus becoming captured by an Einherjar Captain. Mashing Circle to escape his hold, the Captain will eventually be killed by Thor.</p>
    <p className='text-white text-xl mt-10 mb-10'>Triggering a cutscene, help Thrud carry Thor outside the tavern as she attempts to talk some sense into him, following his actions inside the bar. The cutscene will end with Huginn teleporting Thor and Atreus to Niflheim as they seek the final piece of the Mask.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Actually Find the Final Mask Fragment</h2>
   
    <p className='text-white text-xl mt-10 mb-10'>Arriving in Niflheim, let’s take a quick detour to pick up some handy loot. So to get started, climb up onto the nearby ledge and follow it around the corner, where you’ll find a Hacksilver Chest. After looting the chest, follow the nearby path and shoot down the Hacksilver bucket hanging from the roof. At the end of this path, you’ll find a Red Coffin containing Asgardian Ingot, Dwarven Steel, Beast Scraps, and some Hacksilver.</p>
    <p className='text-white text-xl mt-10 mb-10'>Returning to the main path, you’ll spot another small ledge to your right that features a Hacksilver pouch beside some skeletons. Ready to continue, follow the main path ahead and defeat the Hel-Walkers that’ll appear.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’ve dealt with the Hel-Walkers, climb the ledge to your left to discover a Hacksilver chest. Continuing ahead, where you’ll face even more Hel-Walkers. But, with Thor and Ingrid’s help, taking down these Hel-Walkers will be a breeze.</p>
    <p className='text-white text-xl mt-10 mb-10'>After defeating the Hel-Walkers, loot the Hacksilver pouch beside the skeleton on the ledge to your left, and then equip Mask, where it’ll be revealed that the path ahead is blocked by rubble – Thor will help clear this after a quick vomit break.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once Thor breaks through the rubble, continue ahead – being sure to loot the Hacksilver pouch beside the skeleton – until you reach the Frozen Caverns. As you move toward the ledge, a Hel-Walker will break through the ice, and two Ice Nightmares will appear – take them down.</p>
    <p className='text-white text-xl mt-10 mb-10'>Upon clearing the area, climb up the ledge and loot the Hacksilver Pouch beside the fallen enemy.</p>
    <p className='text-white text-xl mt-10 mb-10'>When jumping down the end of the ledge, you’ll encounter two more Hel-Walkers you’ll need to defeat.</p>
    <p className='text-white text-xl mt-10 mb-10'>After clearing the area, you’ll find a Hacksilver chest at the end of the path that leads left. Using the Mask, have Thor break through the rubble by the ledge you had just jumped down.</p>
    <p className='text-white text-xl mt-10 mb-10'>Following Thor through the newly cleared tunnel entrance, take down the group of Legion and Hel-Walkers that will charge toward you – remember to loot any Hacksilver and Healthstones they may drop.</p>
    <p className='text-white text-xl mt-10 mb-10'>Continuing forward, climb the ledge and then drop down the other side. A short distance ahead, defeat the Hel-Walker and Exploding Nightmares that will appear. Down this path, you’ll also discover a Legendary Chest containing the Bitter Squirrel Runic Summon.</p>
    <p className='text-white text-xl mt-10 mb-10'>This item summons Ratatoskr’s Bitter spectral form to dig up a Healthstone. Upgrades will have Bitter dig up multiple Healthstones! Notably, Bitter has a sassy personality, especially if you don’t actually use any of the items he digs up.</p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, return to the main area, grapple across the gap, and follow the path – you’ll find two Hacksilver pouches along the way. After jumping across the next gap, you’ll face a group of Ice Nightmares and Hel-Walkers – defeat them.</p>
    <p className='text-white text-xl mt-10 mb-10'>A short distance ahead, you’ll encounter yet another group of Hel-Walkers and Exploding Nightmares.</p>
    <p className='text-white text-xl mt-10 mb-10'>Having cleared the second group of enemies, continue a short distance ahead, where you’ll find a path that leads off to the left – here, you’ll find a Hacksilver pouch. When reaching Pale Meadow, jump down the cliff, and you’ll begin an encounter with a Frost Ancient.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat the Frost Ancient</h2>

    <p className='text-white text-xl mt-10 mb-10'>Coming face-to-face with the Frost Ancient, your main priority throughout this battle is targeting the creature's chest when it is open and glowing white – any other damage will not be inflicted.</p>
    <p className='text-white text-xl mt-10 mb-10'>Spawning alongside the Frost Ancient, you'll also encounter several Hel-Walker Warriors and Archers. However, these Hel-Walkers will prove little danger if you're utilizing Ingrid and moving consistently around the area, as they'll mainly target Thor.</p>
    <p className='text-white text-xl mt-10 mb-10'>So unless absolutely necessary, avoid them and focus on unleashing as many arrows as possible into the Frost Ancients' chest when it's vulnerable to damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>Thankfully, given Atreus' lack of strength, Thor and Ingrid will handle most of this battle, as depending on difficulty, you'll only need to down the Frost Ancient two, maybe three, times before Thor will send a devastating blow through its chest with his hammer.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white font-mono text-2xl'>How to Defeat the Frost Ancient - Tips and Strategies</p>
    <p className='text-white text-xl mt-2 mb-2'>Featuring three powerful attacks, here's what you can expect from the Frost Ancients' primary attacks.</p>
    <p className='text-white font-mono text-2xl'>Ice Ball Attack</p>
    <p className='text-white text-xl mt-2 mb-2'>Raising its arms across its chest, the Frost Ancient will then open its chest and toss a barrage of ice balls in your direction. While the balls can be blocked, Atreus’ lack of a shield means he cannot parry them back into the creature's chest like Kratos could with the Forest Ancient.</p>
    <p className='text-white text-xl mt-2 mb-2'>Now, before and after the Frost Ancient performs this attack, it will pause for a brief moment, leaving its chest wide open, vulnerable to an onslaught of arrows.</p>

    <p className='text-white font-mono text-2xl'>Ice Beam Attack</p>
    <p className='text-white text-xl mt-2 mb-2'>Stopping and pulling its arms straight down, the Frost Ancient will quickly open its chest, unleashing a sweeping beam of frost. This attack is relatively damaging, so we recommend blocking this attack with Atreus' magic, as dodging can be too risky.</p>
   
    <p className='text-white font-mono text-2xl'>Frost Shockwave</p>
    <p className='text-white text-xl mt-2 mb-2'>Once you’ve managed to deal enough stagger damage, the Frost Ancient will drop to its knees, providing an opportunity to press R3 to land a devastating kick attack to its chest. Stunning the creature further, you'll have time to unleash several heavy melee attacks before it begins to rise to its feet.</p>
    <p className='text-white text-xl mt-2 mb-2'>Just be warned, after the Frost Ancient rises, it'll quickly unleash a small yet powerful, unblockable AoE shockwave. So ensure you're backing up to avoid taking any unnecessary damage from this blast.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Once you've destroyed the Frost Ancient, you'll be rewarded with a Healthstone, Bonded Leather, Hacksilver, Shattered Runes, and Ydalir Timber.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Actually Find the Final Mask Fragment (Continued)</h2>

    <p className='text-white text-xl mt-10 mb-10'>Before equipping the Mask, loot the area of any Hacksilver and Healthstones and proceed toward the large pile of rubble covered in ice.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now, there are two paths you can take here: an optional side path to the left for some additional loot, or the main path to the right to continue the story.</p>
    <p className='text-white text-xl mt-10 mb-10'>First, have Thor destroy the right side of the rubble; it'll open up an optional passage. When taking this passage, you'll find a Hacksilver Chest on a ledge to your left, followed by a Red Coffin containing Asgardian Ingot, Dwarven Steel, Beast Scraps, and some Hacksilver after dropping down the ledge at the end of the path.</p>
    <p className='text-white text-xl mt-10 mb-10'>Just be wary; when nearing the end, you'll need to defeat a Hel-Walker that'll appear.</p>
    <p className='text-white text-xl mt-10 mb-10'>In addition, when dropping down the ledge, you'll also find two Hacksilver pouches – one on a ledge to your immediate left, followed by another just a short distance ahead when climbing the ledge to your right after jumping over the gap.</p>
    <p className='text-white text-xl mt-10 mb-10'>Returning to the main path, have Thor break through the rubble left of the optional passage. Climb the ledge and follow Thor through the tunnel – be sure to loot the Hacksilver pouch and the Resource bucket hanging from the tunnel's roof along the way.</p>
    <p className='text-white text-xl mt-10 mb-10'>Reaching the top of the cliff, continue following the path forward as you enter the Mist Fields. Soon, you'll encounter two Nightmare and a Hel-Walker.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once defeated, look to your right and climb up the small ledge; here, you'll find a Hacksilver pouch.</p>
    <p className='text-white text-xl mt-10 mb-10'>Rounding the next bend, follow the path up – looting the Hacksilver chest and taking out any Hel-Walkers that'll appear along the way.</p>
    <p className='text-white text-xl mt-10 mb-10'>Reaching the end of the path, equip the Mask and head toward the cliff's edge, where you'll need to mash Circle to prevent the Mask from being pulled away.</p>
    <p className='text-white text-xl mt-10 mb-10'>Entering a cutscene, Odin arrives and congratulates Atreus on completing the Mask. However, their conversation is interrupted as Sif arrives with the Valkyries, demanding that Atreus be punished for Kratos killing Heimdall.</p>
    <p className='text-white text-xl mt-10 mb-10'>Despite denying the accusations, Sif will convince Thor to take matters into his own hands as he seeks to kill Atreus for the death of his sons.</p>
    <p className='text-white text-xl mt-10 mb-10'>Escaping from Niflheim just in time, Atreus is met by Kratos and Mimir, who were awaiting his return from Asgard.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Consider Tyr's Plan</h2>

    <p className='text-white text-xl mt-10 mb-10'>With so much to consider, interact with the Mask and watch as the chapter ends with a rather devastating revelation, taking everybody by surprise.</p>
    <p className='text-white text-xl mt-10 mb-10'>Following the cutscene, leave Sindri's House via the Mystic Gateway and return home to Midgard.</p>
    
    </div>
    
    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Creatures of Prophecy</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>Hunting for Solace</p>

    </button>

    </div>

    </div>

  )
}

export default Gowr14