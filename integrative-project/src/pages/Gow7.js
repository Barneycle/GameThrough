import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Gow7 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

  const navigate = useNavigate();

  const handlePrevious = () => {

      navigate('/gow6');
  
  };

  const handleNext = () => {

      navigate('/gow8');
  
  };

  return (

    <div className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>The Magic Chisel</h1>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
    <h3 className='text-white font-mono text-2xl'> This guide will refrain from story spoilers whenever possible, but may indicate possible spoilers in boss fights or other encounters - proceed at your own risk. </h3>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Follow Mimir's Instructions to the Chisel</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Now that you have a new heading towards a previously inaccessible area - Mimir can lead you to a magic chisel that can carve the travel rune to Jotunheim. </p>
    <p className='text-white text-xl mt-10 mb-10'>After the World Serpent pushes the bridge around to face Helheim, he’ll further recede the water levels as well, opening up new places to explore around the Shores of Nine. Note that you can have Atreus read out the runes of the Braziers below the realm tower here to light them up, and you’ll get additional XP for lighting all eight towers up. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> To the right of Helheim Tower, just before the lift, look for a dead soldier who holds one of the Abandon Ship artifacts and add it to your collection. </p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Head down the lift and ward off some pesky Nightmares as you arrive at the Mason’s Channel. What was once two giant statues and an impassible roadblock have now revealed themselves to be statues on boats, and the water level has gone down below the blockage. There’s a Mystic Gateway along the left by the cliff, and a boat dock in the far corner. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Treasure Map Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Look along the shoreline to spot a Treasure Map sticking out of the sand, and read it to learn about The Island of Light. </p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>You have several new places to explore if you wish: </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>1. The path leading up the wall from the shore will take you to one of Sindri’s Shops and a hidden area: The Council of Valkyries. You can also take the boat to explore the opposite shore of the Alfheim Tower to uncover a new favor: The Flight of Fafnir. </p>
    <p className='text-white text-xl mt-2 mb-2'>2. Along the shore under the Alfheim Tower, look for another Yggdrasil’s Dew of Strength hanging above the water. Off to to the Northeast, a new island has appeared below Stone Falls - Buri’s Storeroom. </p>
    <p className='text-white text-xl mt-2 mb-2'>3. The Stone Falls itself has expanded to show two giant water wheels, and there’s a Yggdrasil’s Dew of Luck located just by the giant gold doors. </p>
    <p className='text-white text-xl mt-2 mb-2'>4. The path to the Volunder Mines has changed, offering up a new area to paddle through the Volunder Chasm. Just outside it near the Vanaheim Tower is another of Yggdrasil’s Dew of Strength hanging along the shore by a new dock for the Cliffs of the Raven which has also expanded. </p>
    <p className='text-white text-xl mt-2 mb-2'>5. The Lookout Tower also has new places to explore below the Vanaheim Tower, and on the other side of the now-broken statue above Muspelheim Tower lies a new dock next to another of Yggdrasil’s Dew of Defense. </p>
    <p className='text-white text-xl mt-2 mb-2'>6. To the West of Muspelheim Tower, a new tunnel called the Landsuther Canyon has opened up leading to Landsuther Mines below The Riverpass - expect a quest from Brok to take you here soon. </p>
    <p className='text-white text-xl mt-2 mb-2'>7. Under the Nifilheim Tower beneath the large wrecked ship lies another of the Yggdrasil’s Dew of Strength you can pluck out. There’s another one near a new dock to the Iron Cove - a Yggdrasil’s Dew of Runic Power, as well as a Yggdrasil’s Dew of Vitality behind a rock on the South side of the expanded Isle of Death, as well as one on the West side. </p>
    <p className='text-white text-xl mt-2 mb-2'>8. On the West side, Asgard Tower is now climbable, across from the ravine to Fafnir’s Storeroom and near a new entrance to the Forgotten Caverns. </p>
    <p className='text-white text-xl mt-2 mb-2'>9. North of Svartalfheim Tower is a small watery tunnel leading to Yggdrasil’s Dew of Luck, and a backdoor to the Forgotten Caverns, but the river also deeper to the Northwest to Konunsgard, which is locked for the moment. </p>
    <p className='text-white text-xl mt-2 mb-2'>10. In the Northern area past the Svartalfheim Tower, a new island fort has appeared - the Light Elf Outpost. A narrow stream on the right hides a Yggdrasil’s Dew of Cooldown, and past it is another Yggdrasil’s Dew of Defense off to the left side towards a new region: The Ruins of the Ancient, and a small tunnel to the right of the dock leads into a passage called the Northri Gorge that leads to the locked Northri Stronghold, an area of interest for Sindri. </p>
    <p className='text-white text-xl mt-2 mb-2'>11. Finally, Tyr’s Temple itself has a new lower level with a Hidden Chamber and a mysterious door that needs a mysterious key. </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Besides all that, the waters are teeming with barrels of Hacksilver and gold glows that denote Aegir’s Gold to stock up on, so there’s plenty to do if you don’t want to move onto the main quest just yet. </p>
    <p className='text-white text-xl mt-10 mb-10'>If you do, head on your boat between the two giant oarsman statues and into the next region: The Mason’s Channel. The river leads to a large gate that you’ll need to open via the nearby shore. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'>Favor: The Anatomy of Hope - as you land on the shore you’ll see a corpse rise up nearby - but he’s not hostile. This ghost wants you to find the bones of his dead lover that have been scattered across the Lake of Nine. Gullveig promises a reward if you do - and the promise of speaking to the dearly departed… </p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Head over to the wheel mechanism and pull it to open the gate - but as you do, an Ogre will appear, soon backed by several Dark Elves bent on revenge. Try and use some of your newly unlocked combos and abilities in tandem with Atreus and his stunning and runic abilities to sow discord among them. Remember there are skills for dodging into attacks, counters, and sprinting attacks you can use to close the gap on the Dark Elves, and skirt around the Ogre and use stunning attacks and Atreus to get him primed for a finisher. </p>
    <p className='text-white text-xl mt-10 mb-10'>After killing the group, use the nearby healing stones if you need them and loot the Ogrel’s body for some Solid Svartalfheim Steel. </p>
    <p className='text-white text-xl mt-10 mb-10'>Now take the boat and leave The Mason’s Channel behind to find the heart of the real upcoming region: Thamur’s Corpse (and check the map if you want to see the real size of this new area!). </p>
    <p className='text-white text-xl mt-10 mb-10'>As you reach the Northern Dock, check out the nearby Mystic Doorway before taking stock of the icy area you are now in. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Odin's Raven Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>While facing the Mystic Doorway, be sure to look up to spot a small green glowing raven perched on top of some ruins above you - far enough away you can barely hear him. You’ll need to aim high for the axe to arc down into him. </p>

    </div>
   
    <p className='text-white text-xl mt-10 mb-10'>Head onwards to face a new enemy: The Wulver. These werewolf-like creatures are fast and deadly, and constantly shift around to dodge blows both in melee and ranged. They also pounce with deadly claws that can sometimes be blocked and countered - but beware when a Wulver gets low on health. </p>
    <p className='text-white text-xl mt-10 mb-10'>It will sprout new bloodier claws that deal even more damage, and it may lunge forth for a grab that you’ll have to mash circle to get out of as it tries to take a bite out of you. </p>
    <p className='text-white text-xl mt-10 mb-10'>Find an opening with stuns or shock arrows and capitalize on their momentary weakness before they can recover and take the Wulvers out. </p>
    <p className='text-white text-xl mt-10 mb-10'>There’s a sealed Hidden Chamber along the ice wall - but turn your attention to the dead giant’s ring. </p>
    <p className='text-white text-xl mt-10 mb-10'>It’s made of Shatter Crystal, and you hit it once with a Shock Arrow to loosen it up, and then turn the ring in his dead finger to have the crystal face the walls of ice, and hit it with a Shock Arrow to shatter the ice. Be sure to hit the right side to reveal a Coffin that holds Solid Svartalfheim Steel. </p>
    <p className='text-white text-xl mt-10 mb-10'>Take the left path through the ice wall and into a small pit with another sealed door. Look for a hanging bucket full of Hacksilver and then climb up the opposite side where a dead body holds more Hacksilver on a thin roof.</p>
    <p className='text-white text-xl mt-10 mb-10'>Head past the chain at the end of the ramp to find a Coffin holding Runic Wyrmskin Pauldrons and Solid Svartalfheim Steel. Now you can climb up the chain at the end to leave the hand of the dead giant behind and see the remains of the rest of the body itself. </p>
    <p className='text-white text-xl mt-10 mb-10'>There’s a long tundra between you and the rest of the body of Thamur, To the right there are some Wulvers lying in wait - take care not to get blindsided by them. </p>
    <p className='text-white text-xl mt-10 mb-10'>If they start dodging all of your attacks, you may have to bait them into attacking and counter with a well-timed shield, then press the advantage. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> To the right of where the Wulvers were at is a large ruin with a light crystal surrounded by red sap. Under it you can find Rune Reads for Atreus to translate: Njord of the Vanir. </p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Look around in the center of the tundra for a lone Coffin on a sled, and loot it to find Plated Runeweaver Bracers and Solid Svartalfheim Steel. Also near the center, on the other side of a ruined home, is a lump of ice that forms an Ice Ancient when struck. </p>
    <p className='text-white text-xl mt-10 mb-10'>Like the other Ancient you faced, you’ll need to wait for the right moment to strike. Prime your axe to throw when his chest is exposed and dodge the projectiles until you spot explosive stones fall out, then toss them back. When he falls to his knees exposing his chest again, toss your axe again to fill his stun meter and start pounding on him. This ancient will also release concentrates beams of ice that are tough to avoid, and will start summoning Nightmares at low health - so have Atreus help you ward off unwanted distractions. Killing it will get you plenty of Solid Svartalfheim Steel, Ancient’s Rubble, a Frost Sigil of Defense, and another Ancient’s Heart. (Note: if you missed the Ice Ancient and want to find him in the post-game, he's at the edge of the area near the entrance to the Hidden Chamber of Odin in Thamur's Corpse) </p>
    <p className='text-white text-xl mt-10 mb-10'>To the left of where you fought the Ice Ancient, you can spot a closed gate with three Rune Seals similar to a Nornir Chest. In order to raise the gate, you’ll need to match the symbols of the “E”, sideways “R”, and sideways “p”. </p>
    <p className='text-white text-xl mt-10 mb-10'>There’s a rune mechanism up to the left you can hit - but with only one paddle you’ll need to orient yourself to hit behind the mechanism to reach the “R” looking rune. </p>
    <p className='text-white text-xl mt-10 mb-10'>Now run back to where the Rune Reads were at the other side of the tundra and look for a paddle you can hit to raise up the rune mechanism, and quickly rotate it to the “E” rune. </p>
    <p className='text-white text-xl mt-10 mb-10'>Finally, head down the path on the right to a font of Shatter Crystal near a Hacksilver Chest, and take the crystal further towards the giant’s face and to the left to find a bunch of World Tree Sap blocking the last mechanism you can rotate once freed to the “p” Rune. </p>
    <p className='text-white text-xl mt-10 mb-10'>Grab the other Hacksilver Chest nearby as you return to the gate to find a Coffin with several Solid Svartalfheim Steel, and the Mark of the Ranger - a Legendary Enchantment! </p>
    <p className='text-white text-xl mt-10 mb-10'>Before moving towards the Giant’s Face, be sure to grab another piece of Shatter Crystal and return to where the Rune Read was and toss the crystal up at the sap covering the Light Crystal. </p>
    <p className='text-white text-xl mt-10 mb-10'>Knock the blue crystal down and take it over to a pedestal on the right to uncover a Realm Tear - thankfully this one won’t spawn any enemies, but will reward you with the Dust of Realms all the same. </p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find a Way to Break the Ice</h2>

    <p className='text-white text-xl mt-10 mb-10'>Now head on the path down towards the Head of Thamur and look below the ice to find the piece of the chisel you need. Kratos has a plan to get it, but before you can act on it, you’ll be ambushed by a ton of Draugr - including ranged, heavy, and shielded. Take out the simple ranged fighters first or use their projectiles and redirect them at other foes with Countering Blast. Then focus on your fire on the slower heavier Draugr.</p>
    <p className='text-white text-xl mt-10 mb-10'>After the first wave, more Draugr will show up, backed by not one but TWO Ogres - one higher level than the other. Things can get dicey here, especially as they start throwing Draugr your way. If you can use Spartan Rage as soon as you can and focus heavily on the higher level Ogre and use Atreus to build up damage and the stun meter as quick as you are able. Once you hop on the Ogrel, use him to easily destroy the lesser Ogre and the nearby Draugr, and he’ll be much easier to finish off by himself. </p>
    <p className='text-white text-xl mt-10 mb-10'>As the fight ends, Sindri will appear on a cliff off to the side and lower a chain for you to climb up to greet him. He’ll give your axe another minor enhancement, and you can buy or upgrade some equipment if you need to - like making sure Atreus’ bow and quiver are are at least level 4. </p>
    <p className='text-white text-xl mt-10 mb-10'>Hit each one with a Shock Arrows (You’ll need to spin the middle clasp with your axe to reveal the crystal) in order to break apart the rocks that hold the braid in place - giving you a new path. </p>
    <p className='text-white text-xl mt-10 mb-10'>Head across the new path to a large building with a Hacksilver Chest at the front, and move around the side to find a door inside. </p>
    <p className='text-white text-xl mt-10 mb-10'>Here you’ll find a very formidable Traveler enemy - a viking encased in plate mail with a heavy shield on their back and an impenetrable shield slung over their back. </p>
    <p className='text-white text-xl mt-10 mb-10'>This foe will usually begin his attack be turning his back to you with his sword behind him, and in this position he’s near invulnerable - though certain Runic Attacks can deal damage. </p>
    <p className='text-white text-xl mt-10 mb-10'>From this position he will either start an unblockable lunge, or sweep his sword in large spins that are hard - but not impossible - to block. After these attacks, when he turns to face you, that is your moment to unload as much damage as possible, but being ready for his counter. </p>
    <p className='text-white text-xl mt-10 mb-10'>He’ll also summon in Reaver Shadows both above and on the side to attack you from different angles - have Atreus quickly take them down to continue the fight. </p>
    <p className='text-white text-xl mt-10 mb-10'>Be wary if he starts to hold a grisly glowing trophy over his head - it will charge up before doing massive damage - but you can hit with your axe at a distance or have Atreus to break it and stun the foe. </p>
    <p className='text-white text-xl mt-10 mb-10'>Once you start getting his health low enough, his armor will start breaking, and you’ll finally be able to stagger him with heavy hits or countering shield attacks - though he’ll still be un-stunnable. He’ll be no less dangerous on the offensive, so play it safe and wait for your opening to finish the job. Kill him and gain the Traveler’s Grisly Trophy and Traveler’s Armor Shard as crafting components to make their armor your own. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>As you move to pull out the large stone blocking the exit, stop pulling when it reaches the large sword-shaped pendant that’s draped over the building. You can climb up on top of the stone and then throw your axe at the sides of the giant’s pendants to alter it’s facing.</p>
    <p className='text-white text-xl mt-2 mb-2'>From here you can leap to the pendant and then on to the high platform to a find a Legendary Chest holding Blessing of the Frost - a Heavy Runic Attack.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Continue out the exit after you’ve pulled the large block away and head onto a ramp leading to the side of another building. Climb down to the left to get the chest on the balcony, then climb around the side until you can get up to find one of the straps of the giant hammer before you - and a Shatter Crystal is embedded in the strap. </p>
    <p className='text-white text-xl mt-10 mb-10'>Walk up to the strap and interact to push it towards the base of ice on the far side, and have Atreus hit it when it swings close. Do this twice, and it will rupture the ice - breaking all but the last chain that holds the hammer in place. </p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Make Your Way Up to the hammer</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Now that the strap has changed position, move along to its new position and hit it the Shatter Crystal once more to break open a wall of ice leading to a Coffin, and claim some Solid Svartalfheim Steel. </p>
    <p className='text-white text-xl mt-10 mb-10'>Now return to the strap and climb it all the way up and around until you reach a hole in the hammer’s grip. </p>
    <p className='text-white text-xl mt-10 mb-10'>Move to the other side and continue up until you reach another passage, then shoot the Shatter Crystal blocking the exit. As you climb to the base of the last strap - all that’s left is to give it a shove and hold on tight! </p>
    <p className='text-white text-xl mt-10 mb-10'>The ensuing shift of the hammer will drop you onto a new platform - but you still have to direct the hammer to drop into the ice below. Grab the Hacksilver from a body outside and then enter the door to the building. </p>
    <p className='text-white text-xl mt-10 mb-10'>Once inside, loot the Coffin to the left to get a Runeweaver War Belt and Solid Svartalfheim Steel. In the next room, there’s a sand bowl on the other side of the room with the collapsed floor - since you can’t get there yourself, break some debris on the right and have Atreus crawl through to reach it. </p>
    <p className='text-white text-xl mt-10 mb-10'>As Atreus reads the riddle, several panels will appear behind him marking four different seasons. On his suggestion, hit the moving panels to read the seasons left to right: Winter (snowflake), Spring (flower) , Summer (sun), Autumn (leaf). </p>
    <p className='text-white text-xl mt-10 mb-10'>However, this is not the correct order, as Mimir points out - so try it in reverse: Autumn (leaf), Summer (sun), Spring (leaf), Winter (snowflake). This should trigger the solving of the riddle. This will activate a temporal loop that causes the platform to rise - so long as Atreus keeps carving the runes, However, in order to make it to the top, you’ll need to take out the waves of enemies that appear before time runs out. </p>
    <p className='text-white text-xl mt-10 mb-10'>The first wave will consist of Draugr from all sides, but thankfully mostly regular Draugr and a few Shield Draugr. Focus on breaking their defenses and using area-of-effect Runic attacks to clear them out as quick as possible. </p>
    <p className='text-white text-xl mt-10 mb-10'>The second wave will consist of stronger Draugr, including Speed Draugr and Heavy Draugr. At this point, you may want to start focusing on knockback heavy attacks that can send enemies flying over the sides. Skills like Leviathan’s Fury, Shoulder Barrage, and Guardian’s Justice - or even just a heavy kick can work well for knocking enemies away before they can harass you for too long.</p>
    <p className='text-white text-xl mt-10 mb-10'>The third wave will pit you against a horde of Exploding Nightmares, backed up by a high level Revenant, and more Draugr. Have Atreus pick off the Nightmares then stun the Revenant, then worry about the Draugr last.</p>
    <p className='text-white text-xl mt-10 mb-10'>If things get too tough, cue Spartan Rage and beatdown the Revenant before it can get away.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you reach the top, several ranged Draugr will appear to destroy the sand bowl - and time is running out.</p>
    <p className='text-white text-xl mt-10 mb-10'>Quickly kill them, and then target the two Shatter Crystals up on the platform above to create a path you can jump to and climb up before the dias collapses.</p>
    <p className='text-white text-xl mt-10 mb-10'>Now that you’re on the top, grab some nearby Hacksilver from a corpse and then start climbing over to where the giant hammer sits. Give it a giant push and ride it all the way down to the bottom!</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Make your Way to the Chisel</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>Now that you’re under the ice, the way to the still glowing chisel tip is in view. Start climbing your way across, and watch for a giant crashing of ice to down.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you start climbing down, head back right instead of left to find a Coffin under a small platform you can hop to and get Solid Svartalfheim Steel.</p>
    <p className='text-white text-xl mt-10 mb-10'>Head down to the platform when the path drops away, then look for another handhold going up an ice wall. Climb around until you can jump to the opposite side of the ravine, and look left for a dead body holding Hacksilver before you venture through a giant door.</p>
    <p className='text-white text-xl mt-10 mb-10'>Inside the Dining Hall, there’s a big frozen banquet for you… ok maybe not. Several shapes are embedded in the icy wall at the far end - and you’re going to have to disrupt them if you want out.</p>
    <p className='text-white text-xl mt-10 mb-10'>Look for the giant chandelier with a Shatter Crystal and have Atreus hit it to rumble things up. Keep hitting it until the crystal falls to the ground and lets you take pieces out.</p>
    <p className='text-white text-xl mt-10 mb-10'>Throw it against the far left icy wall and detonate it to summon several Wulvers out of the ice - including a Fierce Wulver.</p>
    <p className='text-white text-xl mt-10 mb-10'>These guys are tough when they surround you, so make use of big Runic Attacks and Runic Summons to stun and disorient them, and watch for their strikes to counter with your shield, and hit them full of shock arrows to immobilize them.</p>
    <p className='text-white text-xl mt-10 mb-10'>A path is created from the ice you blew out, but you can’t reach it yet. Hit the far right ice wall next and detonate it. This will release a Fierce Ogre and several Nightmares to fight. Focus on getting the Nightmares out of the way while dodging strikes and boulders from the Ogre. Then focus big stunning attacks on the Ogre as you duck under its blows until you can hop on and beat it over the head until its dead.</p>
    <p className='text-white text-xl mt-10 mb-10'>Finally, to fully create your path, turn your attention to the center ice wall, where a new fearsome Troll - the Icebeard King, will emerge. He’s an ice troll like the one in the Mountain, but a lot tougher and faster.</p>
    <p className='text-white text-xl mt-10 mb-10'>He’ll use his charged up ice foot or weapon to cause ice tremors to burst out - but remember a well placed axe or arrow in his charged up appendages or head can stun him for a moment, letting you rush in with a heavy attack. Follow up with big Runic Attacks, and listen for Atreus to call out the addition of wolves in the room so you can focus on picking them off before they distract you.</p>
    <p className='text-white text-xl mt-10 mb-10'>As the battle rages on, take great care to watch for the Icebeard King to start building momentum by moving his weapon around his back and over his head. He’ll slam it into the ground to create icicle shards in a wide area in front of him - then detonate them to great effect. Dodge around to the side and have Atreus swap to Light Arrows if you increase the stun effect, and follow up with shield slams to build stun so you can climb up the Troll and bash his head in until the finisher.</p>
    <p className='text-white text-xl mt-10 mb-10'>Dethrone the King, and you’ll gain the Boar Stampede - a Runic Summon, as well as Solid Svartalfheim Steel.</p>
    <p className='text-white text-xl mt-10 mb-10'>Before you head up the path, throw one last Shatter Crystal at a coffin encased in sap up on a ledge above you, then head up the new path you formed, leading to another of Sindir’s Shops. Now would be a good time to upgrade what you can - like getting Atreus new armor or making sure his bow and quiver are in good shape.</p>
    <p className='text-white text-xl mt-10 mb-10'>Look above the shop for a hanging bucket full of Hacksilver, then exit outdoors and swing a quick right to find the Coffin you unraveled that contains Solid Svartalfheim Steel.</p>
    <p className='text-white text-xl mt-10 mb-10'>Head out towards the chisel - but as luck would have it, a pair of troublemakers have been sent to stop you.</p>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Magni and Modi</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>You’ll be taking on two bosses at once here, one armed with a lightning sword, the other with lightning mace and shield. One will usually go after Atreus while the other focuses on you.</p>
    <p className='text-white text-xl mt-10 mb-10'>While this can sometimes be a good thing - it will also leave Atreus vulnerable to getting knocked down and unable to help you - so you’ll want to help him out whenever possible - just don’t get overwhelmed.</p>
    <p className='text-white text-xl mt-10 mb-10'>If you see an alert indicator, run over to attack whichever brother is grabbing Atreus, or you’ll have to pick him back up off his feet if he goes down.</p>
    <p className='text-white text-xl mt-10 mb-10'>Magni swill use a lot of backhanded swings in a 3-hit combo, but they can be blocked and countered, though some of his overhand swings are unblockable - but he needs a running start to do them and you have plenty of time to dodge them.</p>
    <p className='text-white text-xl mt-10 mb-10'>Modi will infuse his shield with electric power to try charging with shield out - and while you shouldn’t try and punch through it, you can block and counter the charge when it’s not marked as unblockable. If you see him start banging his shield, get back and block the incoming lightning blast that will come down to hit an area around him.</p>
    <p className='text-white text-xl mt-10 mb-10'>Despite the tag-team effort, you’re going to want to focus on one of them for the majority of your attacks - as you may notice the stun damage you inflict does not dissipate like it does on other monsters.</p>
    <p className='text-white text-xl mt-10 mb-10'>If you can build up this stun to full, they’ll be knocked to the ground and unable to fight for a long period - but also surrounded by an impervious electrical field. Use this opportunity to maximize your damage on the surviving brother.</p>
    <p className='text-white text-xl mt-10 mb-10'>If facing Magni, he may try and grab you, but you can tap square with Atreus’ help to give him a taste of his own medicine.</p>
    <p className='text-white text-xl mt-10 mb-10'>After stunning both of them fully, they’ll do a team attack to blind you and send the arena in darkness and lightning.</p>
    <p className='text-white text-xl mt-10 mb-10'>At this point, keep turning and pivoting and look for an attack indicator or them running out of the shadows to hold block and fend them off until the light returns.</p>
    <p className='text-white text-xl mt-10 mb-10'>In this second phase, Modi will start chucking electrical bombs into the arena to explode in a sizeable radius that you’ll need to watch out for.</p>
    <p className='text-white text-xl mt-10 mb-10'>Similarly, Magni will throw his sword into the ground and pull it up in a moving shockwave attack - but you can block or dodge this if you see it coming. Sometimes, Magni may even toss an electrically charged Modi into the air to create a blast on his impact.</p>
    <p className='text-white text-xl mt-10 mb-10'>If you start running low on health, be sure to look around the arena for any health stones to pick up during the fight - as it lasts awhile. After stunning the pair of them again, they’ll again turn the arena into a lightning storm. This time, they may try to fake you out - if you see them stop short, drop your shield and keep panning to catch the other brother before he strikes.</p>
    <p className='text-white text-xl mt-10 mb-10'>In the final phase, they’ll start even more team attacks to send shockwaves across the arena, including Magni charging up a blast by holding his sword aloft - which you can break if you slam into him quickly enough.</p>
    <p className='text-white text-xl mt-10 mb-10'>Modi can also hit his shield to force a lightining beam out at you - keep your shield raised and strafe to orient yourself against both attackers until the beam fades.</p>
    <p className='text-white text-xl mt-10 mb-10'>Keep the pain on one of them to stun them out of the game, and then focus all your attacks on the second brother. Once all their health it depleted, follow the prompts to complete the fight.</p>
    <p className='text-white text-xl mt-10 mb-10'>With the battle won, retrieve the rewards from the fallen that include Leiptr Alloy and another Frozen Flame for your axe. Walk up to the giant chisel and hack off a piece with your axe - with this new item, not only can you inscribe the rune you need, but you can also unlock all of the Hidden Chamber doors you’ve come across thus far!</p>
    <p className='text-white text-xl mt-10 mb-10'>To continue following our complete God of War walkthrough, be sure to click the link below to jump to our next walkthrough guide.</p>

    </div>
    
    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>A New Destination</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>Behind the Lock</p>

    </button>

    </div>

    </div>

  )
}

export default Gow7