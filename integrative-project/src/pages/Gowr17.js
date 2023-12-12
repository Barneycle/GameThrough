import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Gowr17 = () => {

    useEffect(() => {

        window.scrollTo(0, 0);
      
      }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/gowr16');
    
    };

    const handleNext = () => {

        navigate('/');
    
    };

  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>

    <h1 className='text-5xl text-white font-mono p-10 text-center'>The Realms at War</h1>
    
    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>

    <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
    <h3 className='text-white font-mono text-2xl'>This walkthrough will include story spoilers for the first quest, Surviving Fimbulwinter, so proceed with caution.</h3>

    </div>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Travel to Tyr’s Temple in Midgard When Ready</h2>

    <p className='text-white text-xl mt-10 mb-10'>Upon reaching the Mystic Gateway, travel to Midgard and make your way to Tyr’s Temple – you’ll need to return to the same lift we used when finding Sindri.</p>
<p className='text-white text-xl mt-10 mb-10'>When reaching the bridge above, head toward Freya and follow her as she leads you toward your tent. Before getting some rest, you can listen to some additional dialogue as Freya and Freyr converse by the fire pit.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Get Some Rest</h2>

<p className='text-white text-xl mt-10 mb-10'>When you’re ready, interact with the tent just right of the temple door and get some rest; before entering the tent, Sigrun will stop Kratos and ask if she can spend some time with Mimir.</p>
<p className='text-white text-xl mt-10 mb-10'>Having fallen asleep, Kratos will awaken in yet another dream with Faye as she prepares the trees she wishes Kratos to use for her funeral whenever that day should come.</p>
<p className='text-white text-xl mt-10 mb-10'>Following Faye, swipe the touch right when prompted and watch as she prepares the trees. Upon reaching the final tree, you’ll end the sequence with one final cutscene as Faye shares her wishes to have her ashes spread from the highest peak in the realms.</p>

<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Sound Gjallarhorn</h2>

<p className='text-white text-xl mt-10 mb-10'>The time has come to sound Gjallarhorn. Head inside the temple and speak with Lunda, who has prepared some armor for you – while free, this armor is entirely optional, so if you're running something else, feel free to continue using your own armor. Before continuing across to the temple door, now’s your last chance to purchase any upgrades, so we highly recommend that you make any final purchases now.</p>
<p className='text-white text-xl mt-10 mb-10'>Once you’re ready, head inside Tyr’s Temple and interact with the crystal on the western side.</p>
<p className='text-white text-xl mt-10 mb-10'>Here, you’ll enter a cutscene that sees Kratos blowing the Gjallarhorn, indicating that the war has begun. Upon arriving in Asgard, the group will learn that Odin’s war machines are their greatest threat, as should they take down the Niflheim Tower, Ragnarok will not be able to reach the realm.</p>

<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Fight to Reach the War Machines</h2>

<p className='text-white text-xl mt-10 mb-10'>Needing to stop the war machines from destroying any further towers, you’ll need to fight your way toward them.</p>
<p className='text-white text-xl mt-10 mb-10'>To do so, jump down the ledge, follow Freya forward, and defeat the two Einherjar along the way.</p>
<p className='text-white text-xl mt-10 mb-10'>Once defeated, climb the nearby ledge and continue forward, where you’ll then enter a cutscene that sees the Niflheim Tower falling to the war machines. Continue up the next ledge and then drop down into the area below.</p>
<p className='text-white text-xl mt-10 mb-10'>Upon dropping down the ledge, you’ll encounter a large group of Einherjar forces that will arrive in the area – defeat them. After defeating some of the troops, more reinforcements will arrive, along with a Dodher Wyvern equipped with Bifrost abilities.</p>

<div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <p className='text-white text-xl mt-2 mb-2'>With so many Einherjar nearby, be sure to utilize the large stone pillar found in the area, as its powerful AoE will take a large amount of health off many of the enemies you’ll face.</p>
    </div>

<p className='text-white text-xl mt-10 mb-10'>After clearing the area of Einherjar, climb the nearby ledge – but be sure to defeat the Einherjar Archer that’ll toss some Bifrost from above. Reaching the top, take down the next Einherjar that’ll appear, and then drop down the ledge and quickly climb the next one to avoid taking damage from the incoming Bifrost bombs that will rain down upon you.</p>
<p className='text-white text-xl mt-10 mb-10'>Continue following the path as you drop down more ledges until you encounter the Einherjar Captain and the Fierce Ogre.</p>
<p className='text-white text-xl mt-10 mb-10'>As this area is relatively small, one thing to keep in mind is that captains can also use Bifrost to teleport themselves around the field – a tactical advantage to their otherwise slow-moving hammer-wielding variant.</p>

<div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Tips and Tricks for Defeating the Einherjar Captain and Fierce Ogre</h2>
<p className='text-white text-xl mt-2 mb-2'>Despite their slow movements, both enemies have large AoE attacks, so getting caught off guard is easy. For this reason, we highly recommend kiting the enemies around the large boulder found in the area. This will slow the enemies down further, making it easier to take them on individually.</p>
<p className='text-white text-xl mt-2 mb-2'>At the beginning of the fight, several Bifrost bombs will be tossed toward you, marked by the red and blue rings on the ground. You’ll want to take full advantage of these and lure both the Einherjar Captain and Fierce Ogre onto them, as they’ll not only be dealt explosion damage but they’ll also be inflicted by a passive burn that will deal damage over time.</p>
<p className='text-white text-xl mt-2 mb-2'>Have Freya use her Hex Arrows on the Captain and Ogre, and once inflicted, unleash your charged Runic Attacks to inflict further passive burns onto the enemies.</p>
<p className='text-white text-xl mt-2 mb-2'>One way to essentially cheese this fight is to focus your attention on taking down the Fierce Ogre, as once you’ve depleted enough health, you’ll be prompted to press R3 to unleash a flurry of finishing strikes. When riding the Ogre, you’ll want to steer it into the Einherjar Captain as you're unleashing your own melee strikes with R1 or R2. This will, in turn, unleash significant damage upon the captain below. If you had dealt damage to the captain before finishing the Fierce Ogre, there’s a good chance these strikes from above will defeat him.</p>
<p className='text-white text-xl mt-2 mb-2'>If you’re running low on health at any point through the battle, try taking down the Einherjar forces that will arrive part-way through the fight. Upon defeating them, there’s a chance they’ll drop a Healthstone.</p>
</div>


<p className='text-white text-xl mt-10 mb-10'>Upon defeating both the Einherjar Captain and Fierce Ogre, take down any remaining Einhjerhar forces and proceed to loot the area of any remaining Healthstones. </p>
<p className='text-white text-xl mt-10 mb-10'>With the area clear, use your Blades of Chaos to remove the chains holding the large stones together, to create a way up the ledge. When reaching the top, follow Freya – grabbing any Healthstones along the way – until you come across two more Einherjar. Before taking them down, dodge the incoming flame from the Dodher Wyvern above.</p>
<p className='text-white text-xl mt-10 mb-10'>Continuing forward, drop down the ledge and defeat two more Einherjar as you watch yet another realm tower fall in the distance. Once defeated, shimmy across the ledge, where you’ll soon meet back up with Atreus.</p>
<p className='text-white text-xl mt-10 mb-10'>With the group splitting up as you make for the Svartalheim Tower, continue forward and drop down the ledge, where you’ll face an Einherjar Tamer and Dodher Gradungr.</p>
<p className='text-white text-xl mt-10 mb-10'>Upon defeating the beast, the Dodher Wyvern will again appear, taking perch on a nearby pillar. Unleashing waves of fire toward you, raise your shield to block any incoming damage. Learning that there’s a weak spot on the pillar, use your Draupnir Spear to send it tumbling to the ground, where Angrboda and Fenrir will attack the Wyvern before being chased into a Realm Tear by Odin’s lead Valkyrie.</p>
<p className='text-white text-xl mt-10 mb-10'>With more pressing things to attend to, jump across the gap and follow Atreus toward the Svartalheim Tower, defeating any Einherjar along the way.</p>
<p className='text-white text-xl mt-10 mb-10'>Refusing to let any more dwarves die because of Odin, follow Sindri as he leads you toward the war machines – taking out the group of Einherjar that will attempt to stop you.</p>
<p className='text-white text-xl mt-10 mb-10'>Upon defeating them, continue up the ledge and follow the path forward, where you’ll enter a lengthy cutscene that sees Kratos refusing to seek vengeance on Odin and instead seeking justice for the lives that have been innocently lost.</p>

<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Protect the Refugees</h2>

<p className='text-white text-xl mt-10 mb-10'>With Ragnarok threatening to endanger the Midgardians, you’ll now be playing as Atreus as you seek to protect them from the effects of the war. Jumping down the nearby ledge, you’ll need to defeat several Gulons and Einherjar that'll appear.</p>
<p className='text-white text-xl mt-10 mb-10'>Once the area is clear, head toward Sindri, where you’ll enter a short cutscene that sees the pair getting tossed into the air as an explosion sends them tumbling forward into a group of Einherjar.</p>
<p className='text-white text-xl mt-10 mb-10'>Refusing to let the group hurt Sindri, press L3 + R3 to enter Atreus’ rage form – Bjorn. In this form, defeat the Einherjar reinforcements that will appear.</p>
<p className='text-white text-xl mt-10 mb-10'>With the area clear, climb up the ledge, where you’ll enter a cutscene with Thrud.</p>
<p className='text-white text-xl mt-10 mb-10'>Having convinced her of Odin’s true intentions, watch as Sindri attempts to break down the wall with his device. Once the device is lodged in the wall, mash R2 when prompted.</p>

<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find Odin</h2>

<p className='text-white text-xl mt-10 mb-10'>Breaking through the wall, follow Atreus and Thrud through the newly created gap in the wall. Then, jumping down the ledge, defeat the incoming Einherjar reinforcements.</p>
<p className='text-white text-xl mt-10 mb-10'>We highly recommend using your Blades of Chaos for this particular encounter, as they’ll help keep enemies at bay and break through any Einherjar with protected health bars.</p>
<p className='text-white text-xl mt-10 mb-10'>Once defeated, continue following Atreus and Thrud, where you’ll encounter another small group of Einherjar – defeat them. Then, with the area clear, pick up any Healthstones and Ragestones and continue forward.</p>
<p className='text-white text-xl mt-10 mb-10'>A short distance ahead, jump down the ledge and proceed to take out the Einherjar Tamer and two Dodher Wyverns that’ll encounter.</p>

<div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>
<p className='text-white text-xl mt-2 mb-2'>Watch the Wyvern for attacks that charge in the air before creating a wide-area blast – you can interrupt it with a ranged attack, and failing that, you may yet block the blast with your shield.</p>
</div>

<p className='text-white text-xl mt-10 mb-10'>Upon defeating the Wyverns and Einherjar, jump down the ledge and defeat even more Einherjar.</p>
<p className='text-white text-xl mt-10 mb-10'>After crossing the gap, continue forward and take down the next group you’ll encounter when dropping down the ledge. Then, continue up the path and climb the ledge at the end, where you’ll enter a cutscene that sees Thor grabbing Kratos before sending him flying toward the lodge.</p>

<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>How to Defeat Thor - Tips and Strategies</h2>

<p className='text-white text-xl mt-10 mb-10'>Refusing to back down, despite Kratos claiming to have not harmed Thrud, Thor will rage on, and the battle will begin. Now, this battle plays out much like your initial fight with Thor during the first quest, Surviving Fimblewinter; however, he does introduce some brand-new attacks and some slight variations.</p>
<p className='text-white text-xl mt-10 mb-10'>It is important to remember that this battle does feature many unblockable attacks and QTE events, so you'll need to be on your toes, ready to react at a second's notice, as Thor will become increasingly faster throughout the battle.</p>
<p className='text-white text-xl mt-10 mb-10'>Here are some tips and tricks you may find helpful during your encounter with Thor:</p>
<p className='text-white text-xl mt-10 mb-10'>If you’re running low on health, consider trying to parry Thor's incoming attacks, as there’s a chance you’ll receive a Healthstone.</p>
<p className='text-white text-xl mt-10 mb-10'>Thor is highly susceptible to Shield Strikes after performing attacks, especially when struck with charged attacks from The Dauntless Shield. When unleashing a Shield Strike upon him, he’ll stagger backwards and be vulnerable to all incoming attacks for a brief moment. This is the perfect opportunity to unleash your Runic Attacks, as you won’t need to worry about him dodging your attacks or even taking damage.</p>
<p className='text-white text-xl mt-10 mb-10'>The Leviathan Axe and Draupnir Spear are perfect for this encounter, as a charged Spear throw can significantly damage Thor's health, as the Axe will typically bounce off Thor when thrown from a distance.</p>
<p className='text-white text-xl mt-10 mb-10'>Thor unleashes several close-range, unblockable attacks across all three phases, which is why we highly recommend you adopt a strategy that sees you retreating to the outskirts of the battle arena upon unleashing no more than three heavy melee strikes.</p>
<p className='text-white text-xl mt-10 mb-10'>With all that said, here's a breakdown of what you can expect from Thor during the first phase.</p>

<div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Thor's Phase One Attacks</h2>
<p className='text-white text-xl mt-2 mb-2'>Here's what you can expect from Thor's attacks during phase one of the battle, as well as how to best counter and escape each incoming attack.</p>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Hammer Toss Variations - Unblockable</h2>
<p className='text-white text-xl mt-2 mb-2'>Winding up his arm, Thor will quickly toss his hammer toward you. Unable to block the attack, you’ll need to be quick to sidestep out of the way to avoid taking damage. Another variation of this attack will see Thor’s hammer glowing blue before rising in the air, throwing the hammer toward you with heavy force. You’ll want to roll back to avoid this particular variation, as the hammer will cause a shockwave of electricity spread around in a half-circle-like shape.</p>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Thunder Clap Shockwave</h2>
<p className='text-white text-xl mt-2 mb-2'>Standing close to Thor for too long will see him quickly clap his hands together to create a powerful, unblockable shockwave. Thus, you’ll need to ensure you’re standing well away from him to avoid damage.</p>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Lightning Strike Attack</h2>
<p className='text-white text-xl mt-2 mb-2'>Slamming his hammer into the ground, three red rings will begin to appear. You’ll need to move quickly to avoid these red rings, as should you be struck by the incoming lightning, you’ll be left electrocuted and unable to move for a brief moment, leaving you susceptible to all incoming attacks.</p>
<p className='text-white text-xl mt-2 mb-2'>To avoid taking even more damage, mash Circle when prompted to escape before Thor reaches you to unleash a powerful strike toward you.</p>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Charge Attack</h2>
<p className='text-white text-xl mt-2 mb-2'>Indicated by a red ring, Thor will clap his hands together before quickly charging toward you in an unblockable attack. You’ll need to dodge sideways at the very last moment to avoid taking damage; otherwise, he’ll grab ahold of you, slamming you into the ground.</p>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Punch & Slam Combo</h2>
<p className='text-white text-xl mt-2 mb-2'>Walking toward you, Thor will begin unleashing a quick flurry of punches at you. While quick, these attacks can be blocked and parried, which, if you’re successful in parrying, will leave him temporarily stunned and vulnerable to damage. Just be warned, though, if you fail to parry the attack, he’ll finish off the punch combo with an unblock AoE slam attack.</p>
<p className='text-white text-xl mt-2 mb-2'>Despite the rather small AoE, this slam can be damaging, so be sure to back up; otherwise, you’ll be sent flying through the air.</p>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Hammer Toss + Electrical Shockwave Combo</h2>
<p className='text-white text-xl mt-2 mb-2'>Tossing his hammer toward you, you’ll need to sidestep the attack to avoid taking damage. But be sure not to stop moving, as he’ll quickly recall his hammer before unleashing a powerful shockwave of electricity toward you upon swiping his hammer along the ground. Again, neither of these attacks can be blocked, so your best option is continually moving about, dodging sideways when he performs the attack.</p>
</div>

<p className='text-white text-xl mt-10 mb-10'>Upon depleting three health bars, Thor will charge at you, where you’ll then enter a cutscene. When prompted, press R1 and R2 to inflict damaging strikes upon Thor.</p>
<p className='text-white text-xl mt-10 mb-10'>Breaking free of Kratos' hold, he'll then attempt to use his Blades of Chaos on Thor. But, unfortunately, Thor will grab ahold of the chains, sending a pulse of electricity through them, electrocuting Kratos – you’ll need to mash Circle to escape.</p>

<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Thor - Phase Two</h2>

<p className='text-white text-xl mt-10 mb-10'>Severing as a checkpoint, the second phase of the battle with Thor will mostly be the same, but there are some new attacks that you'll need to be wary of, as when caught off guard, you'll be dealt significant damage.</p>
<p className='text-white text-xl mt-10 mb-10'>With that said, though, given that Thor is now enraged, his attacks and combinations will be slightly quicker, and you'll find that some attacks have slight variations, so that's important to keep in mind.</p>

<div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Thor's Phase Two Attacks</h2>
<p className='text-white text-xl mt-2 mb-2'>Here's what you can expect from Thor's attacks during phase two of the battle, as well as how to best counter and escape each incoming attack.</p>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Charged Shockwave</h2>
<p className='text-white text-xl mt-2 mb-2'>Charging up a ball of electricity, Thor briefly rises into the air before unleashing a devastating blast of electricity. While charging up the attack, you’ll have the chance to Shield Strike him to interrupt the attack. If you fail to interrupt it, you’ll be sent flying back through the air.</p>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Lightning Strike Attack</h2>
<p className='text-white text-xl mt-2 mb-2'>Performing the same Lightning Strike Attack as before, the strike zones will remain on the ground for several moments before disappearing, so you’ll need to stay clear to avoid taking damage.</p>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Teleporting Attack</h2>
<p className='text-white text-xl mt-2 mb-2'>Increasing his speed, Thor performs three teleports which see him zipping around the battleground before reappearing and sending an unblockable shockwave of electricity your way. Unfortunately, there is no way to block this attack, so you'll be forced to watch his moves very closely to ensure that you can dodge his incoming lightning attack when he reappears.</p>
</div>

<p className='text-white text-xl mt-10 mb-10'>Upon depleting three more bars of health, Thor will grab ahold of Kratos, which you'll need to mash Circle to escape his grasp.</p>
<p className='text-white text-xl mt-10 mb-10'>During the scuffle, he'll pull out his Draupnir Spear and send it into Thor's Shoulder and later his stomach, enraging him even more.</p>

<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Defeat Thor - Phase Three</h2>

<p className='text-white text-xl mt-10 mb-10'>Entering the third and final battle phase, you'll need to whittle down Thor's health again, but this time, it'll be a little more challenging, as Thor's attack speed and overall strength will reach an all-time high.</p>
<p className='text-white text-xl mt-10 mb-10'>This point of the battle will also act as another checkpoint.</p>

<div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Thor's Phase Three Attacks</h2>
<p className='text-white text-xl mt-2 mb-2'>Here's what you can expect from Thor's attacks during phase three of the battle, as well as how to best counter and escape each incoming attack.</p>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Constant Lightning Strikes</h2>
<p className='text-white text-xl mt-2 mb-2'>Performing the same lightning strike attack as the past two phases, this attack will have evolved again, as he'll constantly spawn waves of lightning strikes across the map. So, the key to dodging these is always to be on the move.</p>
<p className='text-white text-xl mt-2 mb-2'>The only catch is that after each wave of strikes, Thor will shoot up into the sky before crashing down on the large red circle that will have appeared on the ground. You'll need to stay alert while avoiding the marked zone at all costs, as standing too close will see you dealt large amounts of damage. Thor will remain crouched on the ground for several short moments when crashing down, so you'll want to ensure you're always nearby. This moment provides an excellent opportunity to unleash melee attacks undisturbed.</p>
</div>

<p className='text-white text-xl mt-10 mb-10'>Upon depleting Thor's health bar, you'll be prompted to press R3 to land the finishing blow.</p>
<p className='text-white text-xl mt-10 mb-10'>Then, entering a cutscene, you'll need to press R1 or R2 to fend off Thor's incoming attacks. After another short cutscene, Thor agrees to side with Kratos and then refuses Odin's request to kill Kratos, which has severe consequences.</p>

<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>How to Defeat Odin - Part One</h2>

<p className='text-white text-xl mt-10 mb-10'>Having killed Thor and attacked Thrud, sending her miles away, it's time to take down Odin once and for all.</p>
<p className='text-white text-xl mt-10 mb-10'>Here are some tips and tricks you may find helpful during your encounter with Odin:</p>
<p className='text-white text-xl mt-10 mb-10'>With lots of Bifrost attacks, the likes of the shield attachment, Rond of Purification, truly shine as you can capture Odin's Bifrost attacks before unleashing them upon him in a reversal. This method and strategy will drastically increase your overall damage toward him.</p>
<p className='text-white text-xl mt-10 mb-10'>Odin is quick and is relatively adept at avoiding long-range attacks. For this reason, if you're not parrying an incoming attack, you'll want to dodge at just the right moment, then attack when he's nearby.</p>
<p className='text-white text-xl mt-10 mb-10'>With all that said, here's a breakdown of what you can expect from Odin during the first phase.</p>

<div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Odin's Phase One Attacks</h2>
<p className='text-white text-xl mt-2 mb-2'>Here's what you can expect from Odin's attacks during phase one of the battle, as well as how to best counter and escape each incoming attack.</p>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Three-Combo Strike</h2>
<p className='text-white text-xl mt-2 mb-2'>Lunging toward you with his large spear, Odin will perform a strike attack upon you. This attack will consist of two regular strikes and a block break strike.</p>
<p className='text-white text-xl mt-2 mb-2'>Thankfully, Odin performs this attack relatively slowly, so your success rate at parrying the attack should be fairly high. Each successful parry will leave him temporarily vulnerable to any incoming damage.</p>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Bifrost Charge</h2>
<p className='text-white text-xl mt-2 mb-2'>Charging toward you with an unblockable attack, Odin's spear will glow blue with Bifrost before he attempts to stab you with the spear. Given the type of charge, you'll want to dodge sidewards to avoid damage.</p>
<p className='text-white text-xl mt-2 mb-2'>Should you fail to perfect the parry, you'll be sent flying backward into the rocks surrounding the lodge.</p>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Frost Beam</h2>
<p className='text-white text-xl mt-2 mb-2'>Rising into the air, Odin's spear will glow as he charges up a large light blue beam. Then, not too long after, he'll quickly lower the beam, yelling Issprengja as he creates a deadly frost beam.</p>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Bifrost Slam</h2>
<p className='text-white text-xl mt-2 mb-2'>Quickly raising his spear in the air, Odin slams it into the ground as he yells Glettings Bara, creating a large shockwave of Bifrost. Due to the overall reach of the attack, it's best if you dodge sidewards, as you're much less likely to take damage.</p>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Bifrost Spell</h2>
<p className='text-white text-xl mt-2 mb-2'>Yelling Leiptra, Odin will unleash a Bifrost spell that will loop outwards before rejoining – this almost resembles a figure eight. Your best option will be to parry this attack back at Odin, as it'll deal significant damage. However, if you cannot parry the attack, be sure to dodge sidewards to avoid damage, as blocking it will still result in you being inflicted with Bifrost. That said, with Rond of Purification, you'll be able to inflict Odin with the Bifrost instead.</p>
</div>

<p className='text-white text-xl mt-10 mb-10'>After dealing three health bars of damage, Odin will strike Kratos with an unavoidable hit, rearranging the area. This will now attack as a new checkpoint in your battle against Odin.</p>
<p className='text-white text-xl mt-10 mb-10'>Now, divided into sections, you'll need to jump in between the battleground sections, making it even more challenging to avoid some of Odin's more significant AoE attacks.</p>
<p className='text-white text-xl mt-10 mb-10'>Now, while Odin will perform most of the same attacks throughout this phase, he'll also introduce several new attacks that you'll need to be careful of, as the battleground changes make avoiding these attacks much harder.</p>
<p className='text-white text-xl mt-10 mb-10'>It's worth noting that some of Odin's attacks, such as Frost Beam, will be performed consecutively, so be prepared to dodge some attacks more than once.</p>

<div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Odin's Phase Two Attacks</h2>
<p className='text-white text-xl mt-2 mb-2'>Here's what you can expect from Odin's attacks during phase two of the battle, as well as how to best counter and escape each incoming attack.</p>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Charge Attack 2.0</h2>
<p className='text-white text-xl mt-2 mb-2'>Rising into the air, surrounded by a purple glow, Odin will quickly charge toward you. This attack is incredibly fast, so as soon as you see Odin rising in the air, ready to take off charging, you'll want to be on the move – preferably sidewards – to avoid being caught.</p>
<p className='text-white text-xl mt-2 mb-2'>After performing this attack, Odin will pause for a very brief moment, leaving him open to heavy melee strikes.</p>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>The Floor's Bifrost</h2>
<p className='text-white text-xl mt-2 mb-2'>Standing still, Odin slams his spear into the ground, where you'll slowly begin to notice that the ground surrounding you will turn into Bifrost. You'll want to book it out of there, jumping across to a different platform. Should you remain on the Bifrost, you'll be pushed backward and dealt a large chunk of damage.</p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Upon depleting Odin's health bar, you'll be prompted to press R3 to unleash the finishing strikes. Here, you'll enter a cutscene that sees Odin outsmarting both Kratos and Atreus, binding them to the ground, unable to move.</p>
    <p className='text-white text-xl mt-10 mb-10'>However, before he can finish them off, he is stopped by Freya, who grabs ahold of him using her Vanir magic.</p>
    <p className='text-white text-xl mt-10 mb-10'>Following a break in the ground, Odin tries to convince Atreus to open the rift with the mask, but he refuses to aid Odin in his quest, so you'll need to defeat him again.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>How to Defeat Odin - Part Two</h2>

    <p className='text-white text-xl mt-10 mb-10'>Acting as a checkpoint, you'll now need to defeat Odin one final time. Thankfully, you'll be assisted by both Atreus and Freya throughout this fight, so be sure to utilize their abilities, as there are many instants throughout this battle where you'll need to have them target orbs to avoid taking large amounts of damage.</p>
    <p className='text-white text-xl mt-10 mb-10'>Like before, you'll want to focus on attacking Odin only when it is safe, and should you head in close, be sure to retreat after a few strikes; otherwise, you'll be vulnerable to incoming attacks.</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Odin's Phase One Attacks</h2>
    <p className='text-white text-xl mt-2 mb-2'>Here's what you can expect from Odin's attacks during phase one of the battle, as well as how to best counter and escape each incoming attack.</p>
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Raven Orb Attack</h2>
    <p className='text-white text-xl mt-2 mb-2'>Upon creating a large red orb above his head, Odin will unleash a flock of Ravens toward you – destroying the orb will see Odin being staggered for a brief moment.</p>
    <p className='text-white text-xl mt-2 mb-2'>If you fail to prevent this attack by throwing your Axe at it to interrupt the attack, you'll then want to block this attack to avoid taking damage.</p>
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Spectral Whip Attack</h2>
    <p className='text-white text-xl mt-2 mb-2'>Often performed in conjunction with other attacks, Odin's Spectral Whip attack will see him whipping the area in front of him.</p>
    <p className='text-white text-xl mt-2 mb-2'>Each whip will create a small, unblockable shockwave of frost traveling toward you diagonally. We highly recommend moving sidewards to avoid taking any potential damage.</p>
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Raven Attack</h2>
    <p className='text-white text-xl mt-2 mb-2'>Sending a flock of Raven toward you, you'll want to parry them or avoid them altogether; failing to do either will see you need to mash Circle to break free from their hold.</p>
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Orb Attack</h2>
    <p className='text-white text-xl mt-2 mb-2'>Raising five large red orbs in the ground, use your Axe or Spear to target one, and then have Atreus and Freya finish them off as they slowly but surely move toward you. They'll explode if they get too close, causing both damage and temporary loss of long-range sight, making it extremely challenging to avoid Odin's incoming attacks.</p>
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Bifrost Quake</h2>
    <p className='text-white text-xl mt-2 mb-2'>Using his Spectral Whip, Odin will hit the ground in several directions, sending out quakes of Bifrost. You'll need to dodge sidewards to effectively dodge these quakes as they'll travel close to the length of the area.</p>
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Bifrost Explosion</h2>
    <p className='text-white text-xl mt-2 mb-2'>Twirling his whip, a large red ring will appear on the ground around him. If you're really quick, you'll have the opportunity to Shield Strike him to interrupt the attack.</p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>After dealing half health, you'll reach another checkpoint where you'll be prompted to press R3 to land a devastating blow.</p>
    <p className='text-white text-xl mt-10 mb-10'>However, still too powerful to fall to your attacks, Odin will rise with protected health bars – here's what you need to know about damaging each bar.</p>
    <p className='text-white text-xl mt-10 mb-10'>Blue can only be damaged with your Blades of Chaos.</p>
    <p className='text-white text-xl mt-10 mb-10'>Orange can only be damaged with your Leviathan Axe.</p>
    <p className='text-white text-xl mt-10 mb-10'>Along with the protected health bars, Odin will receive several new attacks to add to his arsenal. During this phase, you can also expect Odin to unleash a variety of attacks that he has used throughout the different stages of the battle, so be prepared.</p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-cyan-900 rounded-lg'>
<h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Odin's Phase Two Attacks</h2>
    <p className='text-white text-xl mt-2 mb-2'>Here's what you can expect from Odin's attacks during phase two of the battle, as well as how to best counter and escape each incoming attack.</p>
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Flame Beam</h2>
    <p className='text-white text-xl mt-2 mb-2'>Unleashing a powerful beam of fire, you'll need to block the attack with your shield to avoid taking damage.</p>
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Element Attack</h2>
    <p className='text-white text-xl mt-2 mb-2'>Rising in the air, Odin will spawn several large red circles on the ground – avoid these at all costs. After a short moment, the circles will be filled with either frost, poison, or fire. Standing in any of these pools will see you being dealt passive damage over time.</p>
    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Element Explosion</h2>
    <p className='text-white text-xl mt-2 mb-2'>When standing too close to Odin for too long, he'll create a temporary shield before creating an explosion of Bifrost, Frost, or Fire.</p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Upon dealing enough damage, press R3 when prompted, and then follow the QTE prompts to take Odin down once and for all.</p>
    <p className='text-white text-xl mt-10 mb-10'>This cutscene will see Atreus defeating Odin, taking his soul, and placing it inside one of Angrboda's marbles.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find Father</h2>

    <p className='text-white text-xl mt-10 mb-10'>Following the lengthy cutscene, Atreus will awaken to Eir. Learning that he's alive and inside the Holt, exit the room and head up the large set of stairs.</p>
    <p className='text-white text-xl mt-10 mb-10'>Along the way, you'll encounter Sif and Thrud. While optional, you can stay and listen to a short conversation.</p>
    <p className='text-white text-xl mt-10 mb-10'>Further up the stairs, you'll encounter Huginn and Skjoldr, with who you can converse.</p>
    <p className='text-white text-xl mt-10 mb-10'>Not too far ahead, you'll encounter Lunda, Byggvir, Skal, and Freya.</p>
    <p className='text-white text-xl mt-10 mb-10'>Continuing a short distance ahead, you'll also find Mimir, Hildisvini, Fenrir, and Angrboda – here, you'll enter a short cutscene.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Follow Angrboda</h2>

    <p className='text-white text-xl mt-10 mb-10'>Playing as Kratos, follow Angrboda up the mountain, where she'll reveal one final shrine.</p>
    <p className='text-white text-xl mt-10 mb-10'>Here, Atreus and Kratos learn that Faye went against her own people, encouraging the pair to make their own fate.</p>
    <p className='text-white text-xl mt-10 mb-10'>Following the cutscene, head down the mountain and watch as the credits begin to roll. Congratulations, you've completed the main storyline of God of War Ragnarok.</p>

</div>
    
    <div className='mx-auto grid md:grid-cols-2 gap-2'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>The Summoning</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>Home</p>

    </button>

    </div>

    </motion.div>
    
  )
}
export default Gowr17