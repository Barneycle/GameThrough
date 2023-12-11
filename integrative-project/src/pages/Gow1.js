import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Gow1 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/');
    
    };

    const handleNext = () => {

        navigate('/gow2');
    
    };

  return (

    <div className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>The Marked Trees</h1>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>

    <p className='text-white font-mono text-2xl'>SPOILER WARNING:</p>
    <p className='text-white font-mono text-2xl'> This guide will refrain from story spoilers whenever possible, but may indicate possible spoilers in boss fights or other encounters - proceed at your own risk. </p>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Follow the River Downstream</h2>
    
    <p className='text-white text-xl mt-10 mb-10'>As soon as you choose start your game and choose the difficulty suited to your experience, you’ll immediately take control of Kratos and press the prompt to interact with a tree, before swinging your axe repeatedly to take it down. </p>
    <p className='text-white text-xl mt-10 mb-10'>Once the tree is felled, Kratos will pick it up, and you’ll be able to move down the path to the river where Atreus waits. Interact with the boat, and you’ll soon be on your way down the river. With the journey marked in your Goals journal, you can take a look to get some insight into your objective. </p>
    <p className='text-white text-xl mt-10 mb-10'>It’s a short boat trip to get to your destination - just steer along through the small tunnel until you reach the other side and interact with the far dock to get back on land and hoist up the tree again. </p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’re back in control of Kratos, just follow Atreus as you take the winding path up to their home, and Kratos will deposit the tree to begin chopping it up, as Atreus heads inside. </p>
    <p className='text-white text-xl mt-10 mb-10'>After the story event unfolds, Kratos will beckon his son to get his bow and arrows to hunt deer. Atreus will have to be the main hunter, so you’ll be following his lead. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Hunt with Atreus</h2>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Artifact 1 Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Just to the right of the path Atreus wants you to follow is a glowing silver treasure known as an Artifact. This one is part of the Lost and Found set, and if you find all four in the Wildwoods, you’ll earn additional XP, and can sell them off later for Hacksilver.  </p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Atreus will start leading you down a path to the North as he searches for deer. You can now control Kratos better, and explore the yard around the home if you want - however, you won’t be able to engage in combat just yet. </p>
    <p className='text-white text-xl mt-10 mb-10'>Following Atreus up the path as he looks for tracks into a wider area. Atreus will move to the left - but if you go right you can find a different set of tracks in the mud to point out to the boy. As you move back to the left, Atreus will head up some stone steps further into the wilds. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Artifact 2 Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Look to the left of the stone steps for another glowing icon that indicates another Artifact - the Boat is another part of the Lost and Found set.</p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Heading up from the stairs you’ll come to a gap you must jump to cross. After Atreus joins you, he’ll spot more tracks and take off running. Eventually he’ll find the deer, and it will bolt off further North and to the left. </p>
    <p className='text-white text-xl mt-10 mb-10'>As Atreus leads you to a bridge, you can spot some Hacksilver by a cliff to the right - and a chain just out of reach. Ignore it for now, and continue across the bridge until you find the other end blocked. </p>
    <p className='text-white text-xl mt-10 mb-10'>Use the prompts to hold out your axe and aim at the blockade and throw it to break the wooden barrier. After throwing it, you can return it to your hand at any time by pressing triangle - remember this well. </p>
    <p className='text-white text-xl mt-10 mb-10'>On the other side of the bridge, keep moving up until you spot the deer again. After it runs off, Look right and you’ll see Atreus get ambushed by Draugr - now it’s finally time to fight. </p>
    <p className='text-white text-xl mt-10 mb-10'>With your Leviathan Axe, you can change between light and heavy attacks as you lock on to your target - battles may seems slower and more methodical in comparison to Kratos’ past adventures, but you can still unleash a flurry of blows. A well-timed heavy attack can also launch an enemy in the air, allowing you to keep striking with light attacks before they can hit the ground. </p>
    <p className='text-white text-xl mt-10 mb-10'>As more enemies appear, you’ll find that you have an retractable shield you can use to block incoming attacks, and you can also throw your axe at enemies, and continue the fight with shield and fist. Try out combos by slicing apart enemies, throwing your axe at another target, pummeling them, and sending your axe flying back into your hand.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you’ve eliminated all the threats, you can continue on to hunt the deer.</p>
    <p className='text-white text-xl mt-10 mb-10'>Entering the ruins, grab the green Healthstone to replenish any health you lost.</p>
    <p className='text-white text-xl mt-10 mb-10'>Atreus will track the stag to the left, but you can go right to drop down to the right to find a side path. </p>
    <p className='text-white text-xl mt-10 mb-10'>If you look to the left of the waterfall you can spot that chain you saw earlier. Head back and look for a ledge to climb to the side leading to a campfire with some more Hacksilver. </p>
    <p className='text-white text-xl mt-10 mb-10'>Go right and you’ll find the base of the chain that you can climb down to the stream. Down here, two Rabid Wolves will attack you - they move fast, be ready to dodge or block and then follow up with a few swipes, and don’t get too eager to attack or let one get behind you.</p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Artifact 3 Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> After clearing out the wolves down in the ravine, look to the left to find the glowing icon where another Artifact lies. It is a Horse, part of the Lost and Found collection in this area. </p>

    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Idunn Apple Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Back at the ruins, face where Atreus stands and head right instead. Past the barricade is a small room with a golden Nornir Chest. The chest is locked, and requires you to find and break the three rune seals that match the ones on the large tomb. </p>
    <p className='text-white text-xl mt-2 mb-2'> You can find the “C” looking rune to the right of the tomb itself.</p>
    <p className='text-white text-xl mt-2 mb-2'> The “N” looking rune in a smaller coffin on the left of the tomb. </p>
    <p className='text-white text-xl mt-2 mb-2'> If you turn around, look along the left wall to spot the “R” looking rune behind some rocks and bushes next to the stairs. Breaking them all will allow you to open the chest and collect an Idunn Apple: three of these will increase Kratos' health. You may also find Horns of Blood Mead, which will increase Kratos' rage meter instead.</p>
    
    </div>
    
    <p className='text-white text-xl mt-10 mb-10'>Returning the the hunt, follow Atreus as he tracks the stag across a bridge towards a foreboding temple. Ignore the chests and loot on the ice below, you’ll get to them soon enough. </p>
    <p className='text-white text-xl mt-10 mb-10'>Once you enter through the temple gates, you’ll again spy the stag off in the distance, but you’ll need to get closer. Follow Atreus over a gap and down the stairs to the lower area of the temple. </p>
    <p className='text-white text-xl mt-10 mb-10'>Down in the open area, more Draugr will attack you near the far gate. Start the fight with a well placed axe throw and leap over to start punching before yanking your axe back. Test out your dodging and blocking skills - and remember that pulling out your shield at the last moment can stun an enemy and leave them vulnerable to follow up. </p>
    <p className='text-white text-xl mt-10 mb-10'>Once this group has been defeated, you’ll have to find a way through - but first, about that treasure you saw earlier: turn around and head through the unlocked door at the opposite end of the open room to head out onto the ice. </p>
    <p className='text-white text-xl mt-10 mb-10'>Out here you can spot the large chest and other loot, but more Rabid Wolves guard it. Be ready to dodge or block when they prepare to lunge to get an advantage over them, and keep to quick strikes so one of them doesn’t interrupt you with their bite attacks. </p>
    <p className='text-white text-xl mt-10 mb-10'>As they fall, more will appear, as will Draugr, keep fighting until no more show up, and you can help yourself to the Hacksilver on the ground, as well as a Coffin full of Hacksilver. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Artifact 4 Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Look on the right side opposite the large chest to find a glowing icon indicating the last of the set of artifacts in this area. The Viking Toy is the last of the Lost and Found set, which will net you a good reward of experience. </p>

    </div>

    <p className='text-white text-xl mt-10 mb-10'>Back inside the temple, look for a chain one one of the two posts in the middle of the room. </p>
    <p className='text-white text-xl mt-10 mb-10'>Grabbing it will raise one of the two gates in front of you, and the one to the right. Since letting go will lower the gate, you need to make it stick. Look up above the door to spot a glowing icon: throw the Axe at it to freeze the gate in place (remember, you still need to hold onto the chain so that the gate stays up!). </p>
    <p className='text-white text-xl mt-10 mb-10'>Cross under the first raised gate, and then return the Leviathan Axe to your side to lower the gate behind you and raise the outer gate. </p>
    <p className='text-white text-xl mt-10 mb-10'>Turn around, and look for an alcove near the temple gate to find a chain leading back into the temple.</p>
    <p className='text-white text-xl mt-10 mb-10'>Notice the red urn here next to some black rock. If you destroy it (preferably at a distance) it will explode with fire and detonate the nearby rock - and light you in fire if you get too close. </p>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'> Head back and up the stairs from the chain that led you back into the temple, and you’ll find a path leading up to a Hacksilver Chest on the right sidepath, and some staircases dead ahead that lead to a wooden barricade.</p>
    <p className='text-white text-xl mt-2 mb-2'> Past the barricade is a large ornate wooden Jotnar Shrine, which you can open to reveal the lore of Skoll and Hati, the wolf-giants that chase the sun and moon. </p>

    </div>

    
    <p className='text-white text-xl mt-10 mb-10'>Return to the temple exterior and follow the path upwards to a small bank overlooking the stag below. </p>
    <p className='text-white text-xl mt-10 mb-10'>Kratos will try and guide Atreus to strike the beast - hold down L2 and move the right stick to center over the stag. When the time is right, press square to loose the arrow when the reticle turns red. When the beast falls, follow Atreus over to see him finish the job. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Daudi Kaupmadr</h2>

    <p className='text-white text-xl mt-10 mb-10'>As the troll engages you, you’ll find that this enemy is tougher than the Draugr you’ve gone up against thus far. This troll has a health bar so big it’s comprised of two sets, and it will take a lot of punishment to bring him down. </p>
    <p className='text-white text-xl mt-10 mb-10'>Note that when he attacks his slab glows orange - this means his hits are so big you won’t be able to block them so don’t even try it. </p>
    <p className='text-white text-xl mt-10 mb-10'>Instead, focus on dodge-rolling to the sides and following up with a few slices before retreating. You can use Atreus to distract him by triggering him to fire arrows, and then attack when the troll’s back is turned - Atreus is nimble enough to dodge the attacks so don’t worry about him. </p>
    <p className='text-white text-xl mt-10 mb-10'>The troll’s attacks are usually a one-two punch: A low swinging thrust, followed by an overhead slam. Learn to read the movement of these two attacks and wait for the slam to start attacking with quick slices or a few heavy attacks, then back off and start tossing your axe or having Atreus shoot. If you stay close for too long the troll will knock you backwards, making it harder to dodge the upcoming attacks. </p>
    <p className='text-white text-xl mt-10 mb-10'>After taking quite a few hits, the troll will start changing up his attacks, and incorporate a wild swinging chain that thankfully doesn’t have a huge range, allowing you to backup and alternate axe throws and bow shots. At the end of his swings you’ll see him slam his weapon down and start panting - that’s your cue to sprint over (press in on the left stick) and start attacking until he regains his stamina. If you start getting low on health, lure him into breaking down stone blocks and you might find some health inside. </p>
    <p className='text-white text-xl mt-10 mb-10'>Keep fighting cautiously and don’t get too greedy with hits or too slow with your dodging. Don’t be afraid to let Atreus take some of the heat while you prepare your next string of attacks. Once the troll’s health is depleted, press in on the right stick when prompted to finish the monster off for good.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Return to the House</h2>

    <p className='text-white text-xl mt-10 mb-10'>With the hunt resolved, it’s time to head home. Look for a glowing wall to boost Atreus up and then follow him on the path. More Draugr will appear here, and you’ll be able to try out finishing moves by raising an enemy’s stun meter. </p>
    <p className='text-white text-xl mt-10 mb-10'>The stun meter raises when enemies are attacked in quick succession - but raise at a very fast rate when quickly hit with Kratos’ bare fists or Atreus’ arrows. You can also inflict a lot of stun damage by using heavy attacks to knock enemies into the environments - like into trees or walls. Once stunned, you’ll see a prompt to grab and kill them by pressing R3. In the case of stronger enemies with multiple health bar sets, you can instantly deplete one of the bars by using the finishing attack. Not all enemies will be killed by this finishing move, however many of these moves can also strikes other enemies. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>

    <p className='text-white text-xl mt-2 mb-2'> After the battle, you can spot a large door ahead, but it’s sealed with an icy blue block that Kratos can’t open yet. This is a Hidden Chamber, and the locks can only be opened by certain means that you don’t yet possess. Luckily, it will be marked on your map so that you won’t forget its location when you do gain that ability.</p>
    
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Climb up the ramp on the left to find more Draugr waiting. Make use of the stun meter to finish foes quickly by smacking them into walls. Eventually, a blue enemy will emerge, some type of Reaver. </p>
    <p className='text-white text-xl mt-10 mb-10'>This icy foe seems largely immune to the Leviathan Axe - but thankfully your fists can do the job. It can also try and freeze you, and will fly into a rage if it senses you are slowed down and frozen. Lay into the creature and don’t let up until you can pull off a finisher - and don’t forget to use Atreus to rack up the stun damage. </p>
    <p className='text-white text-xl mt-10 mb-10'>With these monsters killed, you can now break the icon blocking the descent back down to the house. Atreus will run inside, and you can join him for a scene before things start to change. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat the Stranger</h2>

    <p className='text-white text-xl mt-10 mb-10'>When this new mysterious foe appears, you’re going to want to be careful. This foe has multiple health bars and appears a bit unpredictable. </p>
    <p className='text-white text-xl mt-10 mb-10'>He’ll give you the first hit, but then immediately start dashing around to quickly lunge at you with incredible speed and power. Thankfully you can block these attacks, and blocking at just the right time will even afford you a countering blow.</p>
    <p className='text-white text-xl mt-10 mb-10'>Rely on quick dodges and blocks, and then try and get him in the air with a heavy strike before stringing a combo of lighter strikes together. You can also heavy strike him into trees to deal additional damage. </p>
    <p className='text-white text-xl mt-10 mb-10'>When he jumps back, he may try and shout to send a tremor of ice your way - but know that you can stun him before he sends it by throwing your axe at his face.</p>
    <p className='text-white text-xl mt-10 mb-10'>Attack quickly and be ready for any of his dashing strikes until you can whittle his health down to around two bars. At this point he’ll knock you onto the roof of the house, but once you get on top, start smacking him as fast as you can before he can counter. Unfortunately, as the fight draws on, it becomes apparent that this mystery foe might be beyond your ability. </p>
    <p className='text-white text-xl mt-10 mb-10'>That is, until Spartan Rage kicks in.</p>
    <p className='text-white text-xl mt-10 mb-10'>Under the effects of Spartan Rage, your attacks will be renewed with vigor - you’ll sprint towards your foe at incredible speed and you can unleash a flurry of blows with the light attack. When your opponent tries dodging to the side or back to send up and an ice tremor, use a heavy attack to leap into the air and crash down dealing damage in a wide area.</p>
    <p className='text-white text-xl mt-10 mb-10'>Keep up the offense as much as you can until the Spartan Rage finally wears off. You’ll need to deplete his health down to about one bar this time, so be ready to counter him. </p>
    <p className='text-white text-xl mt-10 mb-10'>If he starts a combo on you, be ready with the shield to block and send him flying, then race towards him to keep up the offensive, only hanging back to stun or toss you axe if he tries sending along tremors at you. </p>
    <p className='text-white text-xl mt-10 mb-10'>Once you get him down far enough Kratos will bring the pain down on this enemy, but even that won’t stop him forever. As the fight rages on, you’ll eventually be tossed down a cliff, and have to climb up the crag as the stranger taunts you. When you get up, you’ll be tossed back to the other side of the gorge for a final bout. </p>
    <p className='text-white text-xl mt-10 mb-10'>His attacks will come much the same as they did before, but he’ll dodge to the side a lot more to prepare a combo (which you can counter with a well-timed shield block), and he’ll also leap into the air and crash down where your position is. </p>
    <p className='text-white text-xl mt-10 mb-10'>Once he’s up, run to the side then turn around - and as soon as he hits the ground, sprint over and unleash on him. Keep doing this pattern, and be ready to move if he starts to cast his ice tremors. </p>
    <p className='text-white text-xl mt-10 mb-10'>When you finally deplete his health one last time, you’ll be able to end the fight. All that’s left is to make the slow trek back to the house and fetch Atreus, then the journey to the mountain may truly begin. </p>

    </div>
    
    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Home</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>Path to the Mountain</p>

    </button>

    </div>

    </div>

  )
  
}

export default Gow1