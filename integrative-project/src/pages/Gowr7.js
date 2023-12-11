import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const GOWR7 = () => {

    useEffect(() => {

        window.scrollTo(0, 0);
      
      }, []);

    const navigate = useNavigate();
  
      const handlePrevious = () => {
  
          navigate('/gowr6');
      
      };
  
      const handleNext = () => {
  
          navigate('/gowr8');
      
      };
  
    return (
  
        <div className='mx-auto h-screen max-w-[1240px]'>
  
        <h1 className='text-5xl text-white font-mono p-10 text-center'>The Runaway</h1>
  
        <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>
    
        <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
        <h3 className='text-white font-mono text-2xl'> This walkthrough will include story spoilers for the third quest, Old Friends, so proceed with caution.  </h3>
    
        </div>

        <div className='p-20 items-center justify-between'>

        <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find Shelter</h2>

        <p className='text-white text-xl mt-10 mb-10'>Following Atreus’ escape from Sindri’s house, he’ll find himself unexpectedly back in Midgard. Gaining control of Atreus, defeat the group of Hel-Reavers you’ll encounter. Following the path down the hill, push the log down the gap and jump across to the other side.  </p>
        <p className='text-white text-xl mt-10 mb-10'>Here, you’ll encounter a Wight – a furious, sentient magic with one singular purpose: the destruction of life. More importantly, a Wight is created when three wisps converge into one, but thankfully, this process can be disrupted, so keep that in mind when you encounter Wisps in the future.  </p>
        <p className='text-white text-xl mt-10 mb-10'> With that said, Wights are incredibly powerful and can deflect Runic Arrows, so to defeat them, you’ll need to use basic arrows (R1) to damage them. </p>
        <p className='text-white text-xl mt-10 mb-10'> While Wights have multiple attacks, you’ll want to ensure you're always targeting their blue-ringed charge attack, which you can interrupt, stunning them in the process. </p>
        <p className='text-white text-xl mt-10 mb-10'>Another one of their attacks will see them tossing electrical orbs toward you; you’ll want to parry these when possible to shoot the damage back their way. You will also need to be wary of their electrical strike attack, which will see them shooting electricity into the air before it crashes down in your last known location, so it’s important that you’re moving around the area to avoid this damage.  </p>
        <p className='text-white text-xl mt-10 mb-10'> Thankfully, the vast majority of the Wights attacks can be blocked and parried when timed correctly. Once you’ve defeated the Wight, it’ll spawn three Wisps orbs– stun them with a Sigil or Sonic arrow to defeat them. </p>
        <p className='text-white text-xl mt-10 mb-10'> With the Wight dealt with, collect any Healthstones scattered about the area, and continue following the waypoint by pushing another log off a nearby ledge. When moving the log, you will unexpectedly tumble down the gap, where you’ll need to defeat several more Wisps and Hel-Reavers roaming the area. </p>
        <p className='text-white text-xl mt-10 mb-10'>Once dealt with, continue forward, where you’ll encounter a heavy Hel-Reaver equipped with a large cleaver – we recommend keeping your distance, as some of its heavier attacks are difficult to block due to Atreus’ lack of a shield.  </p>
        <p className='text-white text-xl mt-10 mb-10'> After dealing with the heavy Hel-Reaver, shimmy across the ledge as you seek shelter from the harsh winter weather. From here, follow the path forward until you reach another log you’ll need to climb over. </p>
        <p className='text-white text-xl mt-10 mb-10'> </p>

        <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Investigate Freya’s Abandoned House</h2>

        <p className='text-white text-xl mt-10 mb-10'>After climbing over the log, continue toward Freya’s abandoned house, where you’ll soon enter a cutscene that sees Atreus convincing Chaurli to stand up to seek shelter inside Freya’s house. Once inside, close the window by the fireplace.  </p>

        <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Light a Fire for Chaurli</h2>

        <p className='text-white text-xl mt-10 mb-10'> Before lighting the fire for Chaurli, you’ll find three items that Atreus can inspect around Freya’s home – one is a pink flower from Vanaheim, another is a piece of Valkyrie Armor, and the last is an item belonging to Baldur. Once you’ve inspected everything, interact with the book on the bed by the fireplace. </p>
        <p className='text-white text-xl mt-10 mb-10'> After lighting the fire, you’ll enter a lengthy cutscene that sees Atreus being taken to Asgard by Odin’s Ravens. </p>

        <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Follow Odin’s Raven</h2>

        <p className='text-white text-xl mt-10 mb-10'>Having decided to accept Odin’s invitation, you'll want to follow Odin’s Raven as it leads you through Asgard toward the giant wall.  </p>
        <p className='text-white text-xl mt-10 mb-10'>Upon rounding the corner of the mountain, you’ll encounter a group of Grim and Cursed Grims – take them out to continue.  </p>
        <p className='text-white text-xl mt-10 mb-10'> Once the area is clear, you’ll find a Hacksilver chest when taking the path left of the ledge you initially jumped down. Once collected, head to the far right corner of the area and climb the ledge, where you’ll find a small entrance to another area ahead. </p>
        <p className='text-white text-xl mt-10 mb-10'> Jump down the ledge and head left, where you’ll encounter another group of Grims. Once taken care of, continue to follow the path until you come across a Hacksilver chest. Once looted, continue right through the cave, where you’ll find a Hacksilver bucket hanging from the roof, and a Hacksilver pouch beside a fallen enemy to your right. </p>
        <p className='text-white text-xl mt-10 mb-10'> When exiting the cave, you’ll encounter some Wisps, who you’ll learn are vulnerable to Sigil and Sonic Arrows. You can swap between the arrows by pressing the Up arrow on the D-Pad. </p>
        <p className='text-white text-xl mt-10 mb-10'>To defeat the Wisps, you’ll first need to destroy the glowing purple obelisk from which they are spawning – it’ll only take a single melee attack to destroy it.  </p>
        <p className='text-white text-xl mt-10 mb-10'>Once dealt with, defeat the two incoming Grim that will also attack. When the area is clear, loot any Healthstones you’ll find scattered about the area before continuing left down the path and through the small gap when prompted.  </p>
        <p className='text-white text-xl mt-10 mb-10'> On the other side, you’ll encounter a group of Gulons and a Cursed Gulon that will toss poison at you before exploding on death, so be wary of that upon defeating the creature. Once the area is clear, climb the ledge on the opposite side of the gap you exited – be sure to loot any Healthstones before leaving. </p>
        <p className='text-white text-xl mt-10 mb-10'> Upon reaching the top, follow the path forward, past the Legendary Chest, and grapple up the ledge. Here, you’ll find some Bramble blocking the way ahead. </p>
        <p className='text-white text-xl mt-10 mb-10'>To clear the Bramble, you’ll need to use your Sigil Arrows to chain the flame of the nearby campfire to the Bramble. You can use your Sigil Arrows (L2+R2) to flare existing flames and transfer them via the Hex bubbles that Kratos learned in the previous quest, The Reckoning.  </p>
        <p className='text-white text-xl mt-10 mb-10'>While you can use multiple Hex bubbles to chain the flame from the campfire, we found that using just one charged Sigil Arrow was large enough to encompass both the campfire and the Bramble when placed correctly.  </p>

        <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Plains of Ida - Legendary Chest 1</h3>
    <p className='text-white text-xl mt-2 mb-2'>Before continuing up the path, return to the Legendary Chest below and shoot one Hex bubble near the chest and then one charged shot just above the halfway point up the rock face – this should now be touching the campfire above.  </p>
    <p className='text-white text-xl mt-2 mb-2'>  Once in place, quickly grapple back up the ledge and shoot the campfire with a Sigil Arrow to flare the flame, transferring it to the Bramble </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Ready to continue, climb the ledge and continue forward, where you’ll encounter a short cutscene that sees Atreus finding a small village filled with refugees from Midgard. Speaking to a young man named Skjoldr, Atreus introduces himself as Loki, an apprentice of Odin. Intrigued by the revelation, follow Skjoldr as he leads you to the base of the wall, where he’ll watch you climb to the top. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Climb the Wall</h2>

    <p className='text-white text-xl mt-10 mb-10'> When reaching the base of the wall, loot the Hacksilver chest by the campsite, and then climb the ledge to your right. </p>
    <p className='text-white text-xl mt-10 mb-10'> Continue climbing up the wall from here until you reach the platform above. Then, grapple up to Huginn, and proceed to climb up the wall, following the button prompts as necessary. </p>
    <p className='text-white text-xl mt-10 mb-10'> Once the Wight and its Wisps are defeated, look up and use your Sonic Arrows to destroy the Soundstone clasp holding the chain up. Loot any Healthstones on the platform, and then continue up the chain, where you’ll want to proceed up the wall. Reaching another small ledge, loot the Hacksilver pouch and crawl through the gap in the wall. </p>
    <p className='text-white text-xl mt-10 mb-10'>Here, you’ll find even more Wisps and some Legions you’ll need to defeat. Like earlier, though, the Wisps can not be completely defeated until you destroy the two obelisks spawning them – you’ll find these glowing pink as you continue along the path.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Once the area is clear, return to where you first entered the cave to find a Hacksilver pouch on the ledge to your right and a Hacksilver chest not too far ahead, next to the first obelisk you’ll destroy. </p>
    <p className='text-white text-xl mt-10 mb-10'>After exiting through the small gap at the end of the cave, collect the Healthstone to your left and climb up the set of ledges until you reach some crates.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Next, drop down the ledge to your left, pick up the Hacksilver pouch and proceed across the gap, and climb to the top of the ledge, where you’ll find a Soundstone clasp holding the crate into the place – destroy it.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once destroyed, return to the first crate and climb on top of it, shooting the next Soundstone clasp on the wall holding the other box into place.  </p>
    <p className='text-white text-xl mt-10 mb-10'> With both clasps destroyed, interact with the rope to be shot up to the ledge above. Here, you’ll encounter even more Wisps – defeat them and then climb up the ledge. Next, loot the Red Coffin you pass by; you'll receive Ydalir Timber, Dwarven Steel, and some Hacksilver. Once looted, continue climbing up to the top of the wall. </p>
    <p className='text-white text-xl mt-10 mb-10'>When reaching the top, you’ll encounter an Aesir stranger who will be skeptical about letting Atreus pass before reluctantly agreeing to take him to Odin.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Follow Heimdall and Meet Odin</h2>

    <p className='text-white text-xl mt-10 mb-10'>Learning that the stranger is named Heimdall, follow him toward the large wooden lift – being sure to pick up the Hacksilver pouch along the cliff's edge.  </p>
    <p className='text-white text-xl mt-10 mb-10'> After taking the lift down to Gladsheim, climb onto Heimdall's creature, where he’ll lead you through the village to The Great Lodge. </p>
    <p className='text-white text-xl mt-10 mb-10'>Ultimately leading Atreus into a trap, you’ll need to defeat the Einherjar tasked with killing you.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’ve defeated the Einherjar, Heimdall will enter the fight; however, you won’t be able to deal any damage to him. So, keep attacking him until you enter a cutscene, where he'll proceed to degrade Atreus for his weakness, ultimately being stopped by Thor and Odin, who will instruct him to leave Atreus alone.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Follow Odin on His Work Day</h2>

    <p className='text-white text-xl mt-10 mb-10'>Following the cutscene with Odin, he’ll invite Atreus to follow him through the village as he is given a tour of his work day.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Check the Wardrobe Before Heading to Odin’s Study</h2>

    <p className='text-white text-xl mt-10 mb-10'>Having followed Odin throughout his day, you’ll return to your room in The Great Lodge. Before leaving your room and heading to Odin’s study, check the wardrobe for a change of clothes, where you’ll receive the Aesir Armor, the Aesir Bow, and the Runic Recharge arrows. Before leaving the wardrobe, you can press Triangle to upgrade and craft new equipment and accessories.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Ready to continue, leave your room, where Thrud, Modi’s sister, will confront you.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Following the cutscene, leave the room and follow Thrud as she leads you to Odin’s study.  </p>
    <p className='text-white text-xl mt-10 mb-10'> If you’re in no rush, you can follow Thrud upstairs to participate in an optional conversation with her mother, along with eavesdropping on Heimdall. </p>
    <p className='text-white text-xl mt-10 mb-10'>If you wish to proceed with the main story, simply continue down the stairs and into Odin’s study.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Join the All-Father in His Study</h2>

    <p className='text-white text-xl mt-10 mb-10'> Upon entering Odin’s study, you’ll enter a cutscene. During this cutscene, Atreus will pick up a Lore Scroll. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Walk With Odin</h2>

    <p className='text-white text-xl mt-10 mb-10'> After your conversation with Odin, follow him down into The Rift, where you’ll soon enter another cutscene that will close out the mission. </p>

    </div>

<div className='mx-auto grid md:grid-cols-2 gap-2'>

<button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

<div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
<p className='items-center mt-2 text-xl text-white'>The Reckoning</p>

</button>

<button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

<div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
<p className='items-center mt-2 mb-2 text-xl text-white'>Into the Fire</p>

</button>

</div>

</div>
)
}


export default GOWR7