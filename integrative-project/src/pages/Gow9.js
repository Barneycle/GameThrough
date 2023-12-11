import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Gow9 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

  const navigate = useNavigate();

  const handlePrevious = () => {

      navigate('/gow8');
  
  };

  const handleNext = () => {

      navigate('/gow10');
  
  };

  return (

    <div className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>The Sickness</h1>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
    <h3 className='text-white font-mono text-2xl'> This guide will refrain from story spoilers whenever possible, but may indicate possible spoilers in boss fights or other encounters - proceed at your own risk. </h3>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Ask the Witch for Help</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>With Atreus down and out for the count, you won’t be able to do anything besides get him some help. Return back outside of Tyr’s Temple and get on the boat making your way back to the Witch’s Cave.</p>
    <p className='text-white text-xl mt-10 mb-10'>The skies have turned ominous during your trip back to the cave, and upon taking the lift, you can hear the sound of that horn back at the temple.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you meet with the Witch, you’ll learn that the only thing that can help your son is the heart of the Bridge Keeper who presides over the Bridge of the Damned - in Helheim, the realm of the dead. Your axe will be of no use against the dead - and so you will need another weapon: an instrument of Kratos’ past.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Take the Boat to Return Home</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>There’s not much you can do other than to follow the path given to you. Without Atreus your skills are limited too - something to keep in mind on the road ahead. The boat will steer itself as you make your way back to the Wildwoods where your adventure began.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you arrive at the boat dock that started your journey, head up the familiar path back to your hold home.</p>
    <p className='text-white text-xl mt-10 mb-10'>A group of Hel-Reavers have taken up residence in your backyard while you’ve been gone - don’t bother taking out your axe and get to punching. Without Atreus you can’t stun them with arrows, but Mimir will still alert you to incoming strikes. Make use unarmed skills like Guardian Sweep to knock them down and Guardian’s Justice to build up a stun meter to keep them back and dazed - and take care not to take too much frost damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>Enter your home, and Kratos will retrieve the forgotten relics of his past: The Blades of Chaos. Now that you have them equipped, you’ll have a brand new Skill Tree to check out. You should have enough XP stored from your last journey to buy a few available skills like Immolation and Rushing Chaos.</p>
    <p className='text-white text-xl mt-10 mb-10'>Similarly, your weapon tab will also have a new space for your new weapons, but the icy Runic Attacks you’ve found thus far can’t be combined with the fiery blades.</p>
    <p className='text-white text-xl mt-10 mb-10'>For the most part, the Blades of Chaos perform similar functions - instead of tossing your Leviathan Axe, you can hurl the blades like a spear and send them right back on your chain. You can also perform combos, and unlock sprinting and dodging attacks just like the axe skills.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Travel to Helheim</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>After killing all who stand before you, it’s time to head back to Tyr’s Temple. Luckily, there’s a Mystic Gateway in your backyard, and since you can’t explore anything else, head on back through the World Tree.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you reappear at Brok’s Shop, you’ll gain the ability to upgrade the Blades of Chaos as well - but you’ll need a special ingredient to do so, much like the Leviathan Axe. Buy or upgrade as you need, then head into the Realm Travel room to make the jump to Helheim - the realm of the dead.</p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Reach the Bridge Keeper</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Helheim is a land of blistering cold and death, so you’ll need to use the fiery Blades of Chaos to their fullest extent to combat the chill. In fact, several icy Hel-Reavers and improved Hel-Reaver Lords wait along the Realm Travel Bridge to do battle - so make good use of those blades.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>After clearing off the first wave of Hel-Reavers, backpedal a moment and look to the right side of the bridge just after the door you exited. In the snow along the side you can find one of the Family Heirloom Artifacts - a small brooch.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>As you approach the middle of the bridge you’ll find more of that insufferable Hel’s Bramble that has turned you away before. Luckily, with the fires of the Blades of Chaos these are no longer a problem, so get to pruning!</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Look to the left of the Hel’s Bramble to find a Legendary Chest that contains Spartan Charge: your first Light Runic Attack for the Blades of Chaos!</p>

    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Odin's Raven Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Be sure to look up above where you cut down the Hel’s Bramble, as one of Odin’s glowing green ravens watches from a small perch up on the middle of the bridge.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>As you move forward through a narrow passage between the ice, new quick and deadly undead will charge forth: the Hel-Brood, leaping great distances or jumping into the air to smash down on you. Luckily, they don’t have much in the way of defense, and you can try out your Spartan Charge to smash them to pieces.</p>
    <p className='text-white text-xl mt-10 mb-10'>Be sure to look right for some Hel’s Bramble that’s blocking a Hacksilver Chest. Another Hacksilver Chest waits on a ledge above you to the left, but you’ll need to deal with more undead and Hel-Shadow Archers first.</p>
    <p className='text-white text-xl mt-10 mb-10'>Cut through the Hel-Bramble and make your way through the crowds of the dead to the giant door into Helheim. It looks like it’s locked to the living, so you’ll need to find another way.</p>
    <p className='text-white text-xl mt-10 mb-10'>Look to the left of the door to spy some Hel Bramble that can be pruned to reveal a path to the side.</p>
    <p className='text-white text-xl mt-10 mb-10'>After shimmying down a narrow path, you’ll find yourself in a small area with more Hel-Reavers, including shielded foes. Like the Draugr, you’ll either want to break through their guard with your shield attack, or bait out their attack and counter. Beware hitting when they have their guard up, as they’ll follow up with an ice shockwave - but you can block its effects if you act quickly.</p>
    <p className='text-white text-xl mt-10 mb-10'>Look to one side of the room for Hel Bramble blocking a Hacksilver Chest, and the other side to cut through more bramble to reach a climbable wall. Move up and around the pillars and down the other side into a large courtyard below.</p>
    <p className='text-white text-xl mt-10 mb-10'>Down here, quickly about-face to take out the Hel-Reaver Archers, and then look back up between the pillars to spot a Hacksilver Chest trapped by Hel Bramble.</p>
    <p className='text-white text-xl mt-10 mb-10'>Hit it with your Spear of Chaos on both sides of the pillar to free and knock it down. Also look against the back wall for more bramble up a cliff that’s trapped some Hacksilver you can grab.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Head to the pillar on the left where the Hel-Reaver Archers appeared, and look up the back of the pillar for some Hel Bramble that has trapped an artifact up at the top. Break it to get another of the Family Heirloom Artifacts brooches.</p>

    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Odin's Raven Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>As you move into the large area under the bridge, head off to the right side where a cliff looks below the main platform you were on up above.</p>
    <p className='text-white text-xl mt-2 mb-2'>Underneath this space, a glowing green raven flies in a circle below you. It may be better to swap to the Leviathan Axe to get more range as the axe arcs downward to hit the bird.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Moving further into the lower area, the ground will suddenly drop out as a Hel-Viking appears with his giant mace. Since you don’t have Atreus to distract him, try dodging around behind his swings and hitting with heavy attacks on his unguarded side, and following up with your Runic Attack for massive damage. You’ll want to finish him quickly before more Hel-Reavers show up at the opposite side of the pit, and then charge them using your spinning blades to hit all of them at once.</p>
    <p className='text-white text-xl mt-10 mb-10'>After killing everyone in the pit, destroy the bramble around you to find several ways up. The cliff to the ice tunnel is just out of reach now, so take the climb up below the tall bridge instead. Turn to the right and look for more bramble to destroy, causing a pillar to tumble down and serve as a ledge to the other climbable wall from the pit.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Odin's Raven Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Just beyond the wall of ice under the tall bridge, one of Odin’s glowing green ravens is perched on the other side in plain view, and easy to snag with your ranged Leviathan Axe.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Jump back into the pit, and climb up into an ice tunnel that heads under more bridges to a tall climbable wall at the other end.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Look up above as you go through the tunnel to spot a glimmering object stuck in some Hel Bramble under the tiny bridge. Break it to reveal one of the Family Heirloom Artifacts: a two-headed beast brooch.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>At the top of the ridge you’ll find yourself just below the main path to Helheim, but the road behind you leads to a Shatter Crystal in a wall of World Tree Sap that you can’t explode on your own. Instead, head forward and up another ledge that overlooks the Bridge of the Damned, and a great giant bird that watches over the dead on their journey.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Mattugur Helson</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>As it turns out the Bridge Keeper is another variant of Troll that holds a magical weapon that detects the truly dead. This weapon also makes him more fearsome than the other Trolls you faced, as he can use it to quickly move around the arena by vanishing and reappearing at will. </p>
    <p className='text-white text-xl mt-10 mb-10'>He’ll also charge his weapon to leave behind floating bombs that can inflict a lot of damage if you aren’t paying attention - but since they move slowly, you’ll be able to move out of their range by the time they detonate or keep your shield up. </p>
    <p className='text-white text-xl mt-10 mb-10'>This troll will often alternate three weapon lunges while vanishing between attacks, finalizing in a forward slam you can dodge behind and then start your attack. </p>
    <p className='text-white text-xl mt-10 mb-10'>When he teleports off to safety, watch for him to imbue a ranged projectile blast that you can either dodge or try parrying to send back at his face. </p>
    <p className='text-white text-xl mt-10 mb-10'>After taking off a chunk of his health, he’ll slam you back towards the door and sit at the other end, pounding his weapon into the ground that will send out small bursts of spaced shockwaves that can be hassle. Sprint between them and wait for him to stop before rushing into attack with a strong combo. Don’t worry about using unarmed stunning attacks - he can’t be stunned, so focus on using your Blades of Chaos. </p>
    <p className='text-white text-xl mt-10 mb-10'>After he retreats again, he’ll likely start summoning Hel-Broods to come and stop you, which is why you should stick to using the Blades of Chaos, as you can rush in and chain them all while still hitting the Troll in the back. Do this a few times and he’ll revert back to his normal attack pattern. </p>
    <p className='text-white text-xl mt-10 mb-10'>At low health, he’ll also move to the other side of the arena, and begin swinging his weapon around behind him in preparation for a big slam attack - waiting for the last moment to teleport and close the distance and slam his weapon down. If you spot him moving his weapon around in time, you can be ready to dodge around behind him and counter with a big attack, or use Spartan Rage to stagger him.</p>
    <p className='text-white text-xl mt-10 mb-10'>He may also charge up several bombs before his move, and his attack will send them rushing in at his location. </p>
    <p className='text-white text-xl mt-10 mb-10'>Keep up the work dodging behind his attacks or rushing in when he stops his attacks and clear out any additions he tries to bring, and you’ll finally be able to stun him long enough for the kill. Next comes the gut-wrenching task of getting his heart out, and your mission here is complete. Be sure to loot the Troll for a Chaos Flame - needed to upgrade your new weapons! </p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return to Midgard</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Look around the arena to restore your health and cut back some Hel Bramble to get a Hacksilver Chest. The door back to the Realm Travel Gate has been sealed, and apparently you need a the Winds of Hel to open it. Lucky for you, such an artifact is just to the right of the door. Approach the green orb and you’ll get an upgrade that lets you store the Winds of Hel - but only for a short duration.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now you can utilize wind traps located all across the realms to unseal certain areas, but you’ll need to be quick to find them, as the winds will return after 10 seconds.</p>
    <p className='text-white text-xl mt-10 mb-10'>Use it on the giant door to transfer the winds, and then enter the large door.</p>
    <p className='text-white text-xl mt-10 mb-10'>On the other side, grab the winds again from the large door, and turn to send them into the smaller door on the right to continue onwards. Some Ice Nightmares will appear - but you can lasso them in with your Blades for a quick and easy kill. Note that the paths to the bridges above offer little without Atreus, so head to the next room and deal with the Hel-Reavers that appear to stop you.</p>
    <p className='text-white text-xl mt-10 mb-10'>There’s another door on the opposite side of the door you came in from, but you can’t grab the Winds of Hel from this side of the door due to the ice. Instead, hop up onto the bridge above and move towards the wall of Red Sap then take a left onto an icy ledge and look back down to spot the winds you can grab from this angle.</p>
    <p className='text-white text-xl mt-10 mb-10'>Sprint back down to the lower platform and power the door to reveal a Coffin, which holds an Etched Crest of Providence.</p>
    <p className='text-white text-xl mt-10 mb-10'>To exit this area, break apart the Hel Bramble blocking a small tunnel you can use to exit to the large door you found at the end of the temple bridge.</p>
    <p className='text-white text-xl mt-10 mb-10'>It needs two Winds of Hel to charge the door - of which one is already inserted. Look up above the tunnel you came out of to spot the other one and put it in place. </p>
    <p className='text-white text-xl mt-10 mb-10'>As you leave onto the bridge and pass by all the dead - don’t get distracted and miss the Hel-Traveler sharpening his huge blade on the side of the bridge.</p>
    <p className='text-white text-xl mt-10 mb-10'>He may not have his shield, but he’s still tough to damage, and can string together unblockable overhand attacks or staggering side sweeps.</p>
    <p className='text-white text-xl mt-10 mb-10'>He may also bring his sword up in the air to charge - quickly dodge backwards as he unleashed a large shockwave around him, then continue the assault.</p>
    <p className='text-white text-xl mt-10 mb-10'>Defeat this tough foe, and you’ll get his Deadly War Handles - new pommels made to attach to your Blades of Chaos. He’ll also drop more of his armor shards and war trophies used to make the Traveler Armor.</p>
    <p className='text-white text-xl mt-10 mb-10'>You may have also noticed the small stone tomb near the door protected by a Winds of Hel receptacle. Now that the door is open, it won’t be needing the two Winds of Hel, so take one and place it in the stone door to reveal a Coffin with Solid Svartalfheim Steel.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>There’s also a small relay game you can play with another Winds of Hel receptacle up on the right side of the bridge. First, clear out the rest of the Hel-Reavers along the length of the bridge, then return to place the Winds of Hel in the first slab on the right.</p>
    <p className='text-white text-xl mt-2 mb-2'>Now grab it and run to the slab up on the left where you can stash it to replenish your time. Grab it again and sprint forward until you see a statue with a shield and a receptacle in the middle to place it in.</p>
    <p className='text-white text-xl mt-2 mb-2'>Grab it once more and jump over the hurdle to the next statue on the right, and look on its back to place the Winds. Grab it again and sprint over to the middle of the bridge where the large horn is, and look up along the inner ring to find yet another place to put the Wind.</p>
    <p className='text-white text-xl mt-2 mb-2'>Now, yank the winds back and sprint up along the left side of the bridge to a dead end - where you can spot a slab to place the wind once more.</p>
    <p className='text-white text-xl mt-2 mb-2'>Run around to the other side of the slab and grab it, and immediately sprint across the bridge to the stairs and look for a slab above on the right before you go down.</p>
    <p className='text-white text-xl mt-2 mb-2'>Finally, head down to a lower balcony, turn left and throw it as soon as possible before time runs out to open the stone seal to find a Legendary Chest, and claim your reward of Cyclone of Chaos, a Light Runic Attack for the Blades of Chaos.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>With nothing left to do in Hell, it’s time to return to the land of the living. Enter the temple to the Realm Transfer Room, and be sure to have Brok upgrade your Blades of Chaos as you head back home. Brok also has new pommels for your blade - so be sure to take a look to customize your new weapon, and purchase new skills.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return to Midgard</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Back in Midgard, Brok will inform you that he’s upgraded the Mystic Gateways to let you travel to any other Mystic Gateway that you’ve unlocked - not just back to Brok’s Shop at Tyr’s Temple. Test it out by taking the gateway straight to the Witch’s Cave.</p>
    <p className='text-white text-xl mt-10 mb-10'>Enter, and the heart of the Bridge Keeper will heals the sickness that afflicts Atreus...for now.</p>
    <p className='text-white text-xl mt-10 mb-10'>To continue following our complete God of War walkthrough, be sure to click the link below to jump to our next walkthrough guide.</p>

    </div>
    
    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Behind the Lock</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>The Black Rune</p>

    </button>

    </div>

    </div>

  )
}

export default Gow9