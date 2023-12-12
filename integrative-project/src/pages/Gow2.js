import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const GOW2 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);
  
  const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/gow1');
    
    };

    const handleNext = () => {

        navigate('/gow3');
    
    };

  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}s className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>Path to the Mountain</h1>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>

    <p className='text-white font-mono text-2xl'>SPOILER WARNING:</p>
    <p className='text-white font-mono text-2xl'> This guide will refrain from story spoilers whenever possible, but may indicate possible spoilers in boss fights or other encounters - proceed at your own risk. </p>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Journey to the Mountain</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>As you begin your journey through the newly created fissure from your fight with the Stranger, be sure to take a moment and review your skills. The experience you gain from completing journeys and killing enemies can all be used to purchase new skills - though some require your axe to be improved first. Consider getting a close combat skill for your axe, as well as upgrading Atreus’ combat skills, as he’ll be along for the entire ride - and is a lot more useful than you expect.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Head down the ravine and shimmy across the ledge until you reach a gap you can jump across. On the other side, look for markings on a rock wall that you can climb, and then cross up to the right before panning further right to leap the rest of the way to a high ledge.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Command Atreus to drop the chain allowing you to climb up, and by keeping the bridge frozen you can cross to a marked wall. Before you do that, turn the other way to run over to a ledge where you can spot a distant chest.   </p>
    <p className='text-white text-xl mt-10 mb-10'>Hop across the ledges to reach it and claim the Hacksilver Chest, then return across the bridge and get your axe back before climbing up and hopping to other ledges up and then left to a new platform. Here you can lower another chain for an easier time backtracking later.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Continue up the next wall until you reach the top, and admire the view of your old home before continuing on. As you run up the next path and sidle through a narrow pass, you’ll find yourself in the next area: The Riverpass.  </p>
    <p className='text-white text-xl mt-10 mb-10'>As you enter, grab some Hacksilver from a corpse on the side as you approach more Draugr.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Time your assault with Atreus’ arrows to build up combos on your enemies quickly or raise their stun meter. After felling a few Draugr, others will appear that fire projectiles. Make note of your threat indicator - when the purple arrow flares up, you’re about to be attacked from afar.   </p>
    <p className='text-white text-xl mt-10 mb-10'>Luckily your shield can block their blows - and you can then throw your axe at those harassing you from out of reach or have Atreus help whittle them down.   </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>

    <p className='text-white text-xl mt-2 mb-2'> Have Atreus inspect the runes by the rock wall to decipher the meaning of the Rune Reads: Giants! This is one of six lore markers in the area - so keep on the lookout for more.   </p>
    
    </div>
    
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Continue Towards the Mountain</h2>
    <p className='text-white text-xl mt-10 mb-10'> Climb the rock wall after reading the runes and grab some Hacksilver from a corpse on the left before moving onwards. Another blue icy warrior will ambush you here - avoid their frost attacks and pummel them with your fists and arrows to end the fight quickly.    </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Just down the path from where you fought the mysterious reaver, Atreus will point out a chest on the right. It contains a Runic Attack: Hel’s Touch. This rune, when inserted into your Leviathan Axe, allows you to enable a Light Runic Attack - a move than can be used every so often to stun a group of enemies. Other runes you may be find have different properties - consider equipping the ones that suit your playstyle the best, and keep an eye on its cooldown meter.    </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> You’ll soon have the opportunity to test it out - as reaching the next area will soon have you falling into ruins filled with Draugr that animate to life.     </p>
    <p className='text-white text-xl mt-10 mb-10'> Not all of them will come alive at once, so be quick to take out the ones closest and use Atreus to help crowd control - and use your Runic Attack when facing several of them close by. Several projectile-throwing Draugr will appear on a ledge above - keep your indicator in mind as you take out the closer threats before throwing your axe above to finish off the rest of the attackers.     </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Odin's Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> From where you took out the projectile-throwing Draugr, look just above along the ridge to spot a glowing green raven. This is one of Odin’s Ravens, the eyes and ears of the god himself. Throw your axe at it to destroy it, and you’ll earn some experience for the task.    </p>
    
    </div>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Escape the Ruins</h2>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Atreus will likely go to inspect a large column nearby that’s filled with runes of lore. Go and check the Rune Reads out yourself to learn more about this area: the Jotnar Marketplace, and herald the arrival of an angry Heavy Draugr.     </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> These enemies are much tougher than the regular Draugr. They sport two separate health bars that need to be whittled down, and attack with heavy axes that can overpower your shield or outright cut through it - if you see a yellow light emanate from their attack, get ready to dodge to the side, as blocking these will stagger you greatly. They will usually perform one or two of these unblockable attacks, or a smaller axe thrust that can be blocked at the right time.      </p>
    <p className='text-white text-xl mt-10 mb-10'> Remember that building up a stun meter on these foes can allow you to completely wipe out one of the health bars and seriously injure them - just don’t get surrounded. You also likely have a full bar of rage to activate your Spartan Rage: like your fight with the Stranger, this allows you to deal a lot of damage in a short amount of time, and hit enemies so hard they might just fly into walls or off the nearby cliff.       </p>
    <p className='text-white text-xl mt-10 mb-10'> Fight hard and careful, and use Atreus whenever possible to distract the enemies until all the Heavy Draugr are dead. Now you can climb a new wall where they broke through and head deeper into the ruins.      </p>
    <p className='text-white text-xl mt-10 mb-10'> As you climb up the wall, you’ll hear some really creepy chanting. Proceed with caution, and be sure to break apart some wooden planks on the right as you drop down to get some Hacksilver by a corpse. There’s another corpse with more Hacksilver up on the left behind more wooden planks. Don’t worry about the lifeless Draugr, they aren’t making the noises. As you enter the larger platform, a Revenant will appear.      </p>
    <p className='text-white text-xl mt-10 mb-10'> These witches are cunning and send poison mist your way or with swipes of their staff - but the real annoyance comes from their constant teleport dodging.       </p>
    <p className='text-white text-xl mt-10 mb-10'> They’ll evade you almost every time, unless you use Atreus and his arrows to stun them long enough for you to sprint up and start smacking them around. Watch out for a counter attack, and then wait for them to teleport again before commanding more arrow salvos.        </p>
    <p className='text-white text-xl mt-10 mb-10'> After defeating the Revenant, head through the tunnel under the bridge to a gap with a far wall you can jump to and climb.  </p> 
    <p className='text-white text-xl mt-10 mb-10'> However, if you want some treasure, climb down first. At the bottom you can enter the pit below the area you were first in.   </p> 
    <p className='text-white text-xl mt-10 mb-10'> Unfortunately, a level 3 Heavy Draugr will appear to do battle - and it’s very tough. It may use the same moves, but its attacks are outright unblockable, and even its short jab can stagger you if you try and block it. Fight carefully and use your Runic ability to stun it and have Atreus keep peppering away at the monster until you can kill it. Your reward are two buckets above the pit full of Hacksilver, and a large Coffin containing more Hacksilver, as well as Aegir’s Gold and Soft Svartalheim Steel - components you’ll need for getting better gear.   </p>
    <p className='text-white text-xl mt-10 mb-10'> Head back to the tall rock wall and climb up to the top where you can spot your destination beyond a sealed gate. Head right first to open up another large Coffin that contains a Soft Svartalheim Steel. Jump across the gap but be ready for an ambush by Draugr, with more appearing down on the path to the left.   </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lore Locations:</h3>
    <p className='text-white text-xl mt-2 mb-2'> After killing them, look along the right side of the left path to find a Lore Scroll: Svartalfheim Sealed, and have Atreus pick it up and read it.      </p>
    <p className='text-white text-xl mt-2 mb-2'> Head further left to the end to find a Jotnar Shrine and open the cabinet to have Atreus take a look at it to reveal Hrungnir.       </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Finally, climb up the short ledge in the middle of this left path area to find a body holding a stone glowing different colors. Break the stone when it is red to recover all rage, green to recover all health, or white to gain 25 XP! You can also find a chest nearby with more Hacksilver.       </p>
    <p className='text-white text-xl mt-10 mb-10'> With the left path explored, it’s time to head right.       </p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Idunn Apple Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> After clearing out the Draugr on the left, head back to the path on the right to spot another locked Nornir Chest that you need to unlock by destroying the runes. The “N” looking rune is located just behind it - throw your axe to break it.       </p>
    <p className='text-white text-xl mt-2 mb-2'> The others lie over the bridge - head back to the cliff overlooking the bridge to spot and break both weakpoints to lower the bridge. Now you can look to the left of the bridge entrance for the “R” looking run high up on a ledge behind a chest.        </p>
    <p className='text-white text-xl mt-2 mb-2'> The last “C” looking rune is behind a gate further past the bridge, but you can spy it through a hole looking left as you cross and hit it by throwing your axe, just watch out for an ambushing icy foe. Now you can return to open the chest and get another of the Idunn Apples.        </p>
    
    </div>
   
    <p className='text-white text-xl mt-10 mb-10'> Recross the bridge and look up right for a ledge leading to a Hacksilver Chest. As you continue on to where the icy blue foe attacked - get ready for another big clash in this big area, as multiple types of Draugr and a Revenant will all attack at once.       </p>
    <p className='text-white text-xl mt-10 mb-10'> Make sure you kill the Revenant first - you may even want to unleash Spartan Rage once you’re sure Atreus has stunned it, then focus on luring the Heavy Draugr away from the projectile-throwing Draugr, so you can dash back and eliminate them, leaving the heavies for last.       </p>
    <p className='text-white text-xl mt-10 mb-10'> With these enemies eliminated, hoist the bridge down a bit by using the nearby wheel until you see the chain down on the left, and hold it in place while you destroy the seal to finish knocking the bridge down.       </p>
    <p className='text-white text-xl mt-10 mb-10'> Cross, and look right to find a Coffin holding Soft Svartalfheim Steel.        </p>
    <p className='text-white text-xl mt-10 mb-10'> Note the piles of dead bodies as you draw near the next gate - it’s likely they weren’t placed here for decoration. On the other side, you’ll be ambushed by crazed humans - human Reavers.        </p>
    <p className='text-white text-xl mt-10 mb-10'> Luckily, these guys are a pushover, and a single runic blast will almost kill all of them nearby. Once you finish them off, watch for mages that show up on the balconies and take them out with axe throws.        </p>
    <p className='text-white text-xl mt-10 mb-10'> After the next scene, you’ll find what were once Reavers are now becoming the icy blue foes you fought earlier. Leave your axe behind and start pummeling - or use Spartan Rage to tip the scales in your favor. As long as you use your fists, they won’t last long.        </p>
    <p className='text-white text-xl mt-10 mb-10'> After the battle, send Atreus up the wall to lower the chain for you - but he’ll be understandably upset by recent events, so be sure to coax him along with commands until he gets to the chain to get you up. Climb up, and leave the ruins behind.      </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Continue Towards the Mountain</h2>
    <p className='text-white text-xl mt-10 mb-10'> Outside the ruins, shimmy across the ledge, and you’ll find yourself high above the marketplace that you fell into earlier. If you missed it before, one of Odin’s Ravens will be perched on a nearby ledge. Be sure to look right to find a big Coffin holding Soft Svartalfheim Steel, and then use the nearby chain to drop down to a lower level.        </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Dropping down the chain near the ruins exit, you can take the path to a ridge overlooking the Marketplace, and a ledge going back up to the entrance.        </p>
    <p className='text-white text-xl mt-2 mb-2'> Near the ledge is a dead soldier holding one of The Faces of Magic masks, part of the artifact set.         </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> By now you’ve probably heard the cries of a very irate person and the whines of a beast of burden. Continue on the main path to a large stone bridge to locate the source: a Dwarf is struggling to get his pack animal across the bridge.        </p>
    <p className='text-white text-xl mt-10 mb-10'> At the suggestion of Atreus, throw your axe at the white trees across the bridge, and things will move along to the Dwarven Shop of Brok. Here you can upgrade existing equipment like the Leviathan Axe, and craft entirely new gear like armor - if you have the coin and ingredients.         </p>
    <p className='text-white text-xl mt-10 mb-10'> Start by taking the Frozen Flame that Brok has given you to upgrade the Leviathan Axe to level 2. This will allow you to not only deal more damage, but purchase better skills using the experience you’ve gained. You can also craft some armor - pick the Reaver Armor if you’re getting hit alot or the Boar Hide if you want to deal more damage.         </p>
    <p className='text-white text-xl mt-10 mb-10'> Don’t forget to upgrade Atreus’ Talon Bow as well - not only does this give him new skills to purchase, but you can also craft special armor for him as well that can make him more useful in either ranged offense, melee offense, or support. Pick one that suits your playstyle the best, and unlock a skill or two while you’re at it. You should have enough to craft one piece of armor for Kratos and Atreus, and upgrade his bow. If you’re short on Hacksilver, remember that you can sell the Artifacts you find for a decent amount - they serve no other purpose once collected.         </p>
    <p className='text-white text-xl mt-10 mb-10'> After this, you can put your new armor and weapons to the test on a few Draugr that spawn. Watch for the projectile-throwers along the back as you dance around the Heavy Draugr. Take them out, and get ready to move out. You can return to Brok’s Shop whenever you need, but expect to find more shops as you explore.         </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Proceed Through the Gate to the Mountain</h2>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Before you move to the gate to the left of Brok’s Shop, to right instead near the trees you threw your axe at to find a small lower platform you can hop down to. There’s a dead footsoldier here holding another of The Faces of Magic artifacts, a Man Mask.        </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Return to the Dwarven Shop and move left past the gate to find a raised bridge you can strike down. This leads down to the path overlooking the locked rune chest you found earlier, and you can finally break open the nearby Hacksilver Chest. Look to left to find a chain to climb down into that tunnel with the sealed gate. Before going down the chain, turn around to find a Raven you can throw your axe at. Now proceed to go down the chain and open up the large Coffin for a Soft Svartalfheim Steel, and then open the far gate for a shortcut.         </p>
    <p className='text-white text-xl mt-10 mb-10'> Return to the main gate and bid Brok farewell as you open the gate using the chain and freeze it in place while you enter. There’s a similar chain on the other side if you ever want to go back.         </p>
    <p className='text-white text-xl mt-10 mb-10'> Crawling through the tunnel ahead, it becomes clear that this cave is probably full of dangers, what with the piles of skeletons.        </p>
    <p className='text-white text-xl mt-10 mb-10'> You’ll soon arrive at a steel spiked wall - not something Kratos can punch his way through. However, there’s a wooden board at the top right you can throw your axe at to turn the steel spikes on its hinges        </p>
    <p className='text-white text-xl mt-10 mb-10'> At the next spike door, you’ll have to throw it twice to move it to the side - but note that it blocks a passage leading to a Coffin. Throw your axe once more to keep moving the spikes aside to reach it and grab a Soft Svartalfheim Steel.         </p>
    <p className='text-white text-xl mt-10 mb-10'> Up ahead, things look really nasty: A spike pit separates you from a collapsed spiky ceiling. You can hit the raised panel on the left to spin it and raise the ceiling, but it will slowly lower back down over time - and you don’t want to get caught under that.          </p>
    <p className='text-white text-xl mt-10 mb-10'> Hit the panel a few times and then freeze the block below the panel to keep the ceiling in place - for now. As you jump across, you’ll be ambushed by Draugr. Resist the urge to call back your axe and start stomping them - if you launch them into spike walls with heavy attacks they’ll take massive damage and set themselves up for a finisher. </p>
    <p className='text-white text-xl mt-10 mb-10'> More Draugr will appear back across the pit, so leap back and grab your axe if you want or just keep punching until these new reinforcements are gone. Finally, a Heavy Draugr will appear back under the spiky ceiling - you can let him get crushed if you’re feeling devious, or run over and punch him into the spiky walls. </p>
    <p className='text-white text-xl mt-10 mb-10'> Once all the foes are dead, keep the ceiling raised and explore around. You may have broken a wooden barrier in the fight that leads to a Hacksilver Chest. You can also spot a locked chest above marked with Runes, but leave it for now. To get past this area in one piece, you need to be quick. </p>
    <p className='text-white text-xl mt-10 mb-10'> Stand next to the spike door and call for your axe. Quickly hit it a few times to open a path, then start throwing your axe on the panel to the right of the door to keep the ceiling raised, and refreeze it as soon as you can. Once across, you can finally call your axe back and let the ceiling go down. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Once on the other side of the spiked ceiling, climb up to find a dead footsoldier that holds another of The Faces of Magic, and grab this new Mask near the exit to the cave.         </p>
    
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Horn of Blood Mead Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Before leaving, turn around to hop up a small ledge. As the ceiling descends, a new platform appears that you can leap to and find locked Nornir Chest. The “N” looking rune is found behind you up in the top corner.         </p>
    <p className='text-white text-xl mt-2 mb-2'> The “C” looking rune is found through the broken spiked wall on the way to a chest full of Hacksilver. </p>
    <p className='text-white text-xl mt-2 mb-2'>As for the “R” looking rune, it’s hidden behind wooden beams to the left of the chest - you need to raise the platform slightly by throwing your axe at the panels below. As the platform descends back down, open the chest to find a Horn of Blood Mead. It will increase your maximum rage, and like the Idunn Apple, you’ll need three of them to activate the boon. </p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'> Now you can finally leave the cave and head out onto a small plateau that overlooks the mountain in the distance. The road is yet long before you’ll reach it though. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Head along the edge of the plateau to the far side where you’ll find a dead soldier, and he holds another of The Faces of Magic, and grab this next mask.          </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Head up the path towards a large and imposing portal with two giant statues. As Atreus inspects the sand bowl in the center, he’ll translate a riddle. </p>
    <p className='text-white text-xl mt-10 mb-10'>It seems to be related to the giant portal and the rings that aren’t moving. Look around to the left to find some Hacksilver next to a body and climb up a nearby ledge to find a mechanism. This will start moving the rings, head back down to inspect the puzzle. </p>
    <p className='text-white text-xl mt-10 mb-10'> It seems to be related to the giant portal and the rings that aren’t moving. Look around to the left to find some Hacksilver next to a body and climb up a nearby ledge to find a mechanism. This will start moving the rings, head back down to inspect the puzzle. </p>
    <p className='text-white text-xl mt-10 mb-10'> As it turns you can spot some exposed gears, and you can hit with your axe to stop parts of the ring, and pull the axe back when the next-closest ring matches up. Hit the outer one first, and wait for it to align to form a “D” type rune at the end. Now hit the center gear, and wait for the whole line of runes to align before pulling your axe back, with an “A” looking rune next to the “D” rune. </p>
    <p className='text-white text-xl mt-10 mb-10'> Have Atreus read out the completed word, and the way forward will be revealed. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> As you enter this new tunnel the path swerves right, but you can go left to climb up to a small pool of water where another of the Faces of Magic artifacts lies, grab the mask to add it your collection.          </p>
    
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Odin's Raver Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Continue along the main path forward to where you can spot a large opening far up an incline. At the top, a green raven sits along the edge - you'll need to aim your axe just a bit higher than the bird to compensate for the drop off.          </p>
    
    </div>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Hunt with Atreus</h2>

    <p className='text-white text-xl mt-10 mb-10'> As you exit the small cave, you’ll spot some tracks in the mud, and Atreus will begin a new hunt for this mystery beast. </p>
    <p className='text-white text-xl mt-10 mb-10'> Hang back when it does this and focus on ranged attacks, then run in and attack when the way is clear. Dodge the similar jabs and slams it does like the last Troll did, and use your runic attack to keep it off balance when it tries to charge up an attack. <p className='text-white text-xl mt-10 mb-10'> </p></p>
    <p className='text-white text-xl mt-10 mb-10'> Reaver Shadows will start appearing to harass you with poison projectiles - keep an eye on the arena and sprint over to deal with them, as they’ll usually be far enough away that you can eliminate them without worrying about the troll sneaking up on you. </p>
    <p className='text-white text-xl mt-10 mb-10'> As he gets more enraged, he’ll deal more fire attacks you need to dodge - but you can also use your Spartan Rage to keep the troll dazed and interrupted by your constant attacks. Once you can deal enough damage, you’ll be able to finish off the troll for good in brutal fashion. </p>
    <p className='text-white text-xl mt-10 mb-10'> Your reward for this boss fight is a new Heavy Runic Attack - Ivaldi’s Anvil. Activated much like the light runic attack, this will cause a massive area of effect frost damage to hit lots of targets, which can be great with overwhelmed. You’ll also get lots of Hacksilver and some Soft Svartalfheim Steel from killing the monster, so be sure to grab all the nearby loot. </p>
   
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Odin's Raver Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> After defeating the troll, look up at the giant bony ribcage of some long dead giant thing to spot a glowing green raven perched on one of the middle ribs. Launch your axe it to kill it.          </p>
    
    </div>
   
    <p className='text-white text-xl mt-10 mb-10'> Be sure to look around the boss arena for more loot. Of on the right side if a small platform you can jump up to find a chest holding Hacksilver. Further right is a stream you can head up to find a dead body at the end with more Hacksilver. </p>
      
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Idunn Apple Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Off to the left side of the arena is a cliff overlooking the distant mountain that is a Nornir Chest locked by three runic seals. The “N” looking rune is found just behind it - but it can’t be broken. When it stops ringing, the seal will reappear so you need to be quick to find the others.           </p>
    <p className='text-white text-xl mt-2 mb-2'> The “R” looking rune is found just to the left above the waterfall. </p>
    <p className='text-white text-xl mt-2 mb-2'> The “C” looking rune is located back upstream behind one of the giant ribs. Hit them all quickly and you’ll unlock the Nornir Chest to gain the third Idunn Apple and increase your health. </p>
    
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Look to the left of the Nornir Chest to find a wooden wall next to a raised chain. Hit the planks at the top and boost Atreus up so he can lower the chain. At the top, you’ll find a Lore Marker - Prayer to Odin - overlooking the arena where you fought the Troll.          </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> To continue on, look for a torch near a small cave and pass through - stopping to grab some Hacksilver from a dead soldier. On the other side of the cave you can spot the boar Atreus is hunting down below. Drop down, and move up behind Atreus as he prepares his bow. </p>
    <p className='text-white text-xl mt-10 mb-10'> Like the stag, you’ll need to gently guide Atreus to his mark, Hold in the L2 and aim until the marker becomes red and then press square. It may not go as planned, but the hunt must go on. </p>
    <p className='text-white text-xl mt-10 mb-10'> As you drop down to follow the boar, you’ll find yourself at the foot of a ruined village - something bad happened here. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Odin's Raver Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> From your vantage point above the town, look to the hut on the right to find a green glowing raven picking at the body of a man on the side of the roof, and throw your axe to kill it.           </p>
    
    </div>
    
    <p className='text-white text-xl mt-10 mb-10'> The village seems to be site of a battle between Reavers and Draugr - but it looks like you can help yourself to the loot. </p>
    <p className='text-white text-xl mt-10 mb-10'>Look on the side of the platform you jumped down from for a weak wooden wall to break, and loot the Hacksilver Chest. The nearby hut on the right also hides some Hacksilver - just break down the door to let yourself in. There’s another open house a few doors down with more Hacksilver inside.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Next to the second house with Hacksilver inside is a tiny husk of a hut you can break.           </p>
    <p className='text-white text-xl mt-2 mb-2'> Behind it you’ll find the body of a soldier holding another of The Faces of Magic, and you can add another mask to your collection. </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> As you make your way to the lone hut further down the path, look to the left for a ledge you can climb up where a Hacksilver Chest is, as well as a bucket hanging above you can knock down. </p>
    <p className='text-white text-xl mt-10 mb-10'>Beware as you approach the last hut, as one of the blue-reavers will jump out to ambush you. Clobber him into the side of the building to stun and take him out quickly, then grab some Hacksilver inside.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Atreus will track the boar under a giant pillar, and this time he’ll take the next shot all by himself. After a successful hit, he’ll chase the boar down the foggy path, leaving you to follow and find your wayward son. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find Atreus</h2>

    <p className='text-white text-xl mt-10 mb-10'> As the fog envelops you, you’ll enter a narrow maze of paths, and will have to rely on calling out for Atreus to move forward. Move right at the first fork, and then take the first left down a passage. </p>
    <p className='text-white text-xl mt-10 mb-10'>Run to the next torch and call out to hear him call from the right. Follow the path as it winds through a cave to the other side, ending in another fork in the road. Head left and keep moving up until you vault over a small obstacle and through a narrow gap into the next area.  </p>
    <p className='text-white text-xl mt-10 mb-10'>When you arrive, you’ll be prompted to use both L2 and R2 to help out in a task, before carrying your burden and moving onwards.  </p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Follow the Witch</h2>

    <p className='text-white text-xl mt-10 mb-10'> Begin your slow walk into the Sanctuary Grove. There’s no danger here - it’s a protected area much like your home was until recently. At the end of the path you’ll be invited inside a house, so keep moving. </p>
    <p className='text-white text-xl mt-10 mb-10'> Once inside, you’re next task will be to find some white-petaled flowers. Leave out the back door and into the garden. </p>
    <p className='text-white text-xl mt-10 mb-10'> The outside opens up to a large river, with a path to the left and right. You can walk right to speak to Atreus if you want, but if you’re searching for the flowers, head left towards a stone column and look around it to gather the flowers. </p>
    <p className='text-white text-xl mt-10 mb-10'> Return back to the other side of the garden and help Atreus gather his plants by giving him back his knife. Now you can return to the home with both ingredients. </p>
    <p className='text-white text-xl mt-10 mb-10'> After a few scenes, you’ll be on your way again, taking an exit through the Witch’s Cave. You’ll also gain a new item - the Witches Compass. It will track your main objective at the top of your HUD (But you can turn it off in the settings if you don’t want the intrusion)</p>
    <p className='text-white text-xl mt-10 mb-10'>Head down through the cave to a main platform only to be ambushed by Nightmares. These flying creatures are pretty fragile but dart around and shoot poison projectiles. Block them with your shield and retaliate by throwing your axe or having Atreus hit them.  </p>
    <p className='text-white text-xl mt-10 mb-10'>From the main platform, there’s mysteries abound - but not all of them can be solved just yet. A glowing red gate ahead can’t be open just yet, and a glowing door further past a waterfall lies out of reach.  </p>
    <p className='text-white text-xl mt-10 mb-10'> You can head left down a small path with a body holding Hacksilver, down to the waterfront where a Draugr and his un-animated friend are. There’s a lot down in the water, but Kratos isn’t one for swimming. You can however turn around to find a big stack of stone slabs on a lift that Kratos can pull over towards the water. </p>
    <p className='text-white text-xl mt-10 mb-10'> Pull to the side until you can’t move it any farther and let go, then look behind the stack to find a Coffin containing Soft Svartalfheim Steel. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Now push the lift the rest of the way into the water to form a floating platform. You can’t reach the two chests in the water, nor can you interact with the green orb yet, but you can cross the platform to a dead soldier who carries on of The Faces of Magic artifacts, and add it to your collection.         </p>
    
    </div>
    
    <p className='text-white text-xl mt-10 mb-10'> Since the remaining mysteries will have to wait for another day, head back up to the main platform and hop across the stone platforms toward the boat, </p>
    <p className='text-white text-xl mt-10 mb-10'> </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> As you hop across the stone platforms, make sure to loot the Legendary Chest at the end for a Talisman of Concentrated Vitality. This Common Talisman can be equipped alongside your armor and used in combat to gain a burst of health, and also gives you some permanent stat boosts.          </p>
    
    </div>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Boat Towards Daylight</h2>

    <p className='text-white text-xl mt-10 mb-10'>Now that you’ve done all you can in the cave, head down to the docks and get on the boat to see yourself out of the cave. Once in the water, keep heading through the winding tunnel (you can only dock at actual docks) until you come out to see the distant mountain.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Passing through the next tunnel, you’ll finally find yourself out onto a great lake - the Shores of Nine, named for the great Lake of Nine. Statues of Norse Gods litter this place...as does something else. </p>
    <p className='text-white text-xl mt-10 mb-10'> Atreus will point out a glowing statue near the center of the lake, so paddle on over to investigate. </p>
    <p className='text-white text-xl mt-10 mb-10'>Once the scene here ends, you’ll finally get a good look at the Lake of Nine - and this place really opens up. The changing water level has revealed lots of side areas to explore and side quests to undertake, which you can start doing now. Note that many of these locations may have certain barriers to block your advance until you have the right tools or abilities, this includes returning to the Witch’s Cave. </p>
    <p className='text-white text-xl mt-10 mb-10'>To explore a new area, look for the white flags that denote dock locations or low shores to push the boat to ground. To get more information about these hidden areas, see the list below:  </p>

    <p className='text-white text-xl mt-10 mb-10'> Lookout Tower, located on the South end of the lake next to the Witch’s Cave.</p>
    <p className='text-white text-xl mt-10 mb-10'> Muspelheim Tower, found in the South on the other side of the entrance to the Witch’s cave.</p>
    <p className='text-white text-xl mt-10 mb-10'> Niflheim Tower, located on the inner ring of the Southwest side of the Lake.</p>
    <p className='text-white text-xl mt-10 mb-10'> Iron Cove, found in the far Southwest area of the Lake past Niflheim Tower.</p>
    <p className='text-white text-xl mt-10 mb-10'>Isle of Death, a small broken island platform found in the West, just North of Iron Cove. </p>
    <p className='text-white text-xl mt-10 mb-10'> Forgotten Caverns, located in the inner ring of the Northwest side of the lake between the serpent’s body.</p>
    <p className='text-white text-xl mt-10 mb-10'> Helheim Tower, found on the North end of the Lake next to part of the serpent’s body.</p>
    <p className='text-white text-xl mt-10 mb-10'>Alfheim Tower, located on the inner ring of the Northeast part of the Lake, located by a giant sealed gate. </p>
    <p className='text-white text-xl mt-10 mb-10'> Stone Falls, found to the far East of the Lake past the Alfheim Tower. This location also has a wheel mechanism that opens the nearby golden gate to a hidden region: Veithurgard.</p>
    <p className='text-white text-xl mt-10 mb-10'> Volunder Mines, located in the far Southeast area of the Lake past the icy entrance past the Cliffs of the Raven.</p>
    <p className='text-white text-xl mt-10 mb-10'>Volunder Mines, located in the far Southeast area of the Lake past the icy entrance past the Cliffs of the Raven. </p>
    <p className='text-white text-xl mt-10 mb-10'>Vanaheim Tower, located on the South side of the lake close to the entrance to Lookout Tower. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Investigate the Temple and Bridge</h2>

    <p className='text-white text-xl mt-10 mb-10'> Docking the boat on the center island of Tyr’s Temple, you can disembark on either side under a large bridge. As you come up to the top, the beautiful sight of the mountain will be interrupted by the return of an old friend, who has apparently set up shop inside the temple itself. </p>
    <p className='text-white text-xl mt-10 mb-10'> Inside the temple, talk to Brok and he’ll give you a stone of the World Tree. Using it, you can open up portals in different regions to use as a fast travel device - but you need to find them first. </p>
    <p className='text-white text-xl mt-10 mb-10'> Brok also has a lot more for sale, including new armor, talismans, axe pommels, enhancements, and upgrades for things like Atreus’ arrow quiver. Be sure to outfit Kratos in a full suit of new gear and pommel, and upgrade if you have money to spare - and purchase a new skill or two if you are able. </p>
    <p className='text-white text-xl mt-10 mb-10'> Note that any artifacts you sell to Brok will actually end up on display, as well as selling for a good amount of Hacksilver - collect them all! </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Make Your Way to the Tower</h2>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Now that you’re leaving the temple, look down at the dock on the East side to find a dead soldier holding an Artifact of the Abandon Ship Set, and add this ship figurehead to your collection.          </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Moving along the long bridge you can find a center platform with a mechanism that rises up to a large horn - however, Kratos isn’t about to blow on giant horns without knowing what it might do.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Back down on the bridge, cross to the Vanaheim Tower where you’ll be ambushed by poisoned Reavers. They are hardly men anymore, and while they may die easy, they’ll explode upon death and require you to retreat unless you want to be killed. On the plus side, Atreus has become confident enough to use more melee attacks and his skills will have developed somewhat. </p>
    <p className='text-white text-xl mt-10 mb-10'>Outside the tower, you can loot two chests for Hacksilver, and there are some nearby inscriptions that Artreus can’t decipher just yet. When you’re ready to head in, go to the door and open it.  </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Pass Through the Tower and Caves</h2>

    <p className='text-white text-xl mt-10 mb-10'>On the inside of the tower more Reavers are fighting a Tatzelwurm, and will then turn to fight you. If their tendency to explode is annoying you, you can try freezing them with certain attacks to offset this, as they will not die when killed while already frozen.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Inside the tower, turn to the left and break some wooden blockades to reach a Jotnar Shrine depicting Jormungandr, and have Atreus read about the World Serpent that covers all the waters of Midgard.          </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Since Atreus can’t read the other markers in the main hall, turn right to find your way blocked by poison. The Scorn Pole is the source of this poison, and you can freeze it by throwing your axe at the glowing pole. </p>
    <p className='text-white text-xl mt-10 mb-10'>Grab the Hacksilver from the dead bodies revealed by the absence of poison and then move to the left past the pole to another pole you need to freeze, and follow the path to a cavern with platforms going down. Look above and knock down a bucket of Hacksilver before dropping down yourself.  </p>
    <p className='text-white text-xl mt-10 mb-10'> As you remove the next Scorn Pole from play, the Tatzelwurm that was fighting the Reavers earlier will leap out of the ground to attack. It likes to burrow around out of sight before lunging to attack, but if you time it right you can easily block or dodge out of the way and follow up with stunning attacks to deal with it before it can hit you with its poison barb. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>avor - The Realm of Fire</h3>
    <p className='text-white text-xl mt-2 mb-2'> Entering the de-poisoned area, look for a large Cipher Chest and have Atreus open it to find a Muspelheim Cipher.          </p>
    <p className='text-white text-xl mt-2 mb-2'> These can be collected to learn the language needed to enter these new realms via the towers on the Shores of Nine. Finding this cipher fragment, one of four, will unlock The Realm of Fire favor - a sidequest to open the gates of Muspelheim.  </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Since you can't interact with the nearby lore marker, climb up the wall by the Scorn Pole and hop across to the other side of the cave where a new door awaits. </p>
    <p className='text-white text-xl mt-10 mb-10'>On the other side of the door you’ll enter the region known as the Foothills, and come face to face with a new Dwarf, and with it, a new shop! Sindri will promise to enhance your stuff as best you can, so it’s worth checking out his shop as well as Brok’s from time to time.  </p>
    <p className='text-white text-xl mt-10 mb-10'> The shop now sells Resurrection Stones, items you can carry that let Atreus bring Kratos back from death during a tough fight. They are single use, and you can only carry one at at time, but it’s extremely useful when venturing into the unknown. </p>
   
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Continue Towards the Mountain</h2>

    <p className='text-white text-xl mt-10 mb-10'> Leaving Sindri behind, head up into the Foothills. </p>
    <p className='text-white text-xl mt-10 mb-10'>On the right you’ll find a coffin surrounded by poison that you can’t reach at first - but look behind the rocks and you can spy a Scorn Pole to disperse it, allowing you to loot an Arcane Waist Guard, as well as some Hacksilver by a dead body. Moving left past an odd mechanism you’ll find a bucket in the trees with Hacksilver, and past it a locked chest.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'> Horn of Blood Mead Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>This Nornir Chest is different than the others - the runes you must seek out are on strange mechanisms nearby with panels you can hit with your axe to change the look of the rune.      </p>
    <p className='text-white text-xl mt-2 mb-2'> Match the one above the chest to the “E” rune, head back down and hit the other mechanism to match the “D” rune. </p>
    <p className='text-white text-xl mt-2 mb-2'>Then head up right to where the poison chest is and look the other way to spot a Scorn Pole blocking the last mechanism, which you can freeze then hit the panel to match the backwards “B” rune. Return to find another Horn of Blood Mead.  </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Going all the way to the left you can find another Coffin surrounded by poison near Sindri’s Skymover - if you go back to his workshop you can spot the Scorn Pole a little below the cliff, allowing you to loot a Soft Svartalfheim Steel.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Further left only leads to two Coffins that can’t currently be opened with your tools, so head up the middle path to a Hacksilver Chest, and look for a rock wall you can climb to a higher platform. </p>
    <p className='text-white text-xl mt-10 mb-10'> As you take out the first of the Scorn Poles, a Revenant will appear before dashing back up the path - don’t get hasty and run through more Scorn Poles. </p>
    <p className='text-white text-xl mt-10 mb-10'>Instead, let her flee and take the left path instead past another Scorn Pole to an area with some Hacksilver on the ground and a Coffin blocked by a nearby Scorn Pole you can dissipate to get Arcane Bracers - wrist armor that increase your Cooldown.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Back on the path clear out the next Scorn Pole and get the Revenant out of hiding. Have Atreus keep stunning as you give chase, and be ready to get your axe back and clear out other Scorn Poles as the enemy backpedals into other poisonous areas.  </p>
    <p className='text-white text-xl mt-10 mb-10'> If you take the right path after killing the Revenant, you’ll enter small cave leading to another mysterious locked door - the Hidden Chamber of Odin. As with the Wildwoods, you can’t open it now, but a map marker will be added so you can return when the time comes. </p>
    <p className='text-white text-xl mt-10 mb-10'> Take the left path past the hanging Scorn Pole to a high wall you can climb up to a large platform. </p>
    <p className='text-white text-xl mt-10 mb-10'>Here, more corrupted Ravagers wait along with Poison Wolves - who will spew poison gunk on the ground in front of them. Whittle them down from afar then dodge around them when they come to attack and take them out before you get poisoned.  </p>
    <p className='text-white text-xl mt-10 mb-10'>Be mindful of this area you explore - there are explosive urns everywhere, and hitting one will detonate the area around it, but also get rid of nearby rubble. You can use this on the urn in the back left to reveal a hidden Coffin holding Arcane Shoulder Wraps and Soft Svartalfheim Steel.  </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>To the left of the coffin are two Scorn Poles and another urn you can blast across the gap - but both of poles are equally blocking the Legendary Chest here.        </p>
    <p className='text-white text-xl mt-2 mb-2'> Freeze the one closest to you to spot an urn behind the other, and blow it up to get rid of one of the poles. This allows you to freeze the remaining one and open the chest to get the Charge of the White Bear, a Light Runic Attack. </p>
    
    </div>
    
    <p className='text-white text-xl mt-10 mb-10'>Leave the rest of the urns alone as you head towards the door at the end - and you’ll be interrupted by a new enemy - the Ogre, as well as more Reavers coming up behind you.  </p>
    <p className='text-white text-xl mt-10 mb-10'> The Ogre is very intimidating, and it uses both unblockable charge attacks and powerful slams or swinging arms that will stagger you if you don’t block at the precise moment. It can (and usually will) run over to a nearby Reaver and toss the enemy right at you if you aren’t paying attention. It’s in your best interest to dash around the arena, freezing Reavers and taking them out so they don’t explode, and throwing your axe at them if you see them raise their arms to heal. </p>
    <p className='text-white text-xl mt-10 mb-10'> If you have Spartan Rage active, try building up a lot of stun on the Ogre and you’ll be able to deal a lot of damage as well as ride the monster around and use it to smash into the Reavers. </p>
    <p className='text-white text-xl mt-10 mb-10'>Once back on the ground, be wary of its spinning fists and use your Runic abilities to keep it off-balance when you can. If you left some urns alone, you can also use them to your advantage if you can lure enemies close before detonating them - just be careful it doesn’t blow up in your face.  </p>
    <p className='text-white text-xl mt-10 mb-10'> When the Ogre goes down, you can continue on your way after looting it for a Symbol of Truth Enchantment, 5 Soft Svartalfheim Steel, and a Frozen Flame (used to upgrade your axe!). </p>
    <p className='text-white text-xl mt-10 mb-10'> Entering through the giant door, you’ll find yourself at the Mountain’s Base. There’s a real neat giant face carved right into the side of the mountain you can admire as you look up at the climb ahead of you. </p>
    <p className='text-white text-xl mt-10 mb-10'> </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    
    <h3 className='text-white font-mono text-2xl'>Odin’s Raven Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>If you look to the left you can see one of Sindri’s “Skymovers” that’s overgrown with vines. Look above on the rocks and you can spot a glowing green raven hopping about looking at the thing. It may take some practice aiming above it, but you can hit it from here by throwing your axe way up into the air.        </p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Ignore the coffin blocked by the blue roots and keep moving up the mountain path to where the giant face in the rock seems to be spewing smoke. You can grab some Hacksilver to the right of the main path and spot another chest covered in those blue roots. </p>
    <p className='text-white text-xl mt-10 mb-10'>As you reach the Black Breath, you’ll find that it’s impassable - but the arrival of a friend may provide the means to circumvent this dark magic.  </p>
    <p className='text-white text-xl mt-10 mb-10'>To continue following our complete God of War walkthrough, be sure to click the link below to jump to our next walkthrough guide.  </p>
    <p className='text-white text-xl mt-10 mb-10'> </p>
    <p className='text-white text-xl mt-10 mb-10'> </p>
    <p className='text-white text-xl mt-10 mb-10'> </p>

    </div>
    
    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>The Marked Trees</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>A Realm Beyond</p>

    </button>

    </div>

    </motion.div>

  )
}

export default GOW2