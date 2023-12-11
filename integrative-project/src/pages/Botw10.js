import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Botw10 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/botw9');
    
    };

    const handleNext = () => {

        navigate('/botw11');
    
    };

  return (

    <div className='mx-auto h-screen max-w-[1240px]'>
        
    <h1 className='text-5xl text-white font-mono p-10 text-center'>Rito Village</h1>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Central Hyrule</h2>

    <p className='text-white text-xl mt-10 mb-10'>The journey to Rito Village is a long one in that you have to travel through several new regions if you haven’t already done so. However, the path itself can be rather straight forward. If you have yet to uncover Central Hyrule, this is the place to start. Warp on over to the Oman Au Shine and then leap off the Plateau heading northward to reach Central Hyrule.</p>
    <p className='text-white text-xl mt-10 mb-10'>The Central Tower in this location is not far off and it is a fairly straight forward path. However, as you draw near, that’s where the trouble begins as it is surrounded by Guardians. At this stage of the game you can defeat these guys, but they are still incredibly strong. There is a patrolling guardian just south of the tower, as well as two stationary guardians right near the tower. A third stationary guardian can be found a bit to the west of the tower. I would open up the tower at your own risk, but know that it is definitely doable, even without defeating any of the guardians.</p>
    <p className='text-white text-xl mt-10 mb-10'>The path that is just west of the tower is the one we want to take. It takes you northward and eventually leads in the direction of Hyrule Castle. This area is also rather treacherous, as it has flying sentries that can be of nuisance. The path eventually merges with other paths and we want to head westward. You can just freeball your way in this direction, avoid the main road and the major enemies along the way. You’ll eventually come to the Carok Bridge which extends westward out of Central Hyrule.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Ridgeland Tower</h2>

    <p className='text-white text-xl mt-10 mb-10'>Once you cross the Carok Bridge, the path continues westward. This area is filled with Bokoblins and you can take out the camp if you’d like. Be weary, however, as there are many of them here and some of them are quite strong. You can navigate around to completely avoid them if you’d like. The path does travel westward and eventually splits, with one path going north, and another going west. If you take the path north, follow it until you get out of the valley and can see around in all directions.</p>
    <p className='text-white text-xl mt-10 mb-10'>The Ridgeland Tower is not far from your location at all, and you can quickly climb up to it. However, the area immediately around the tower is filled with numerous enemies, including several Lizalfos as well as Wizzrobes. Unless you are loaded with arrows to take out the Wizzrobes, this might be a tower worth avoiding as it took me quite a long time to finally reach it.</p>
    <p className='text-white text-xl mt-10 mb-10'>Nevertheless, if you do activate the tower, we want to head back to that fork in the road that was within the valley. The path to the west will take you to the Seres Scablands. Follow that path southwestward and it too will diverge. Take the path heading westward and it is a straight shot to reach the Tabantha Bridge Stable. Stop by to chat with many of the people here and then head west, crossing the Tabantha Great Bridge.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Tabantha Tower</h2>

    <p className='text-white text-xl mt-10 mb-10'>Once you cross the bridge, you’ll see that the tower is just to the north, not too far from your present location. The path directly ahead has sentries blocking the road. At this point, I would recommend just detouring from the main path, climbing up the hill to the north, and then head heading directly towards the tower. You can get to higher ground and just Paraglide over towards the tower.</p>
    <p className='text-white text-xl mt-10 mb-10'>As you begin to scale the hill, you’ll see that the area is filled with malice. Free climb your way up to the tower, but you’ll find that malice is blocking your path up the tower.</p>
    <p className='text-white text-xl mt-10 mb-10'>If you look around the tower, you will see that there are two large pillars extending into the air. The taller of the two is surrounded by malice, so it is impossible to scale. Link however can climb the smaller pillar. After climbing the smaller pillar, if you look in the direction of the larger pillar, you will see a glowing eye. Use an arrow to shot this eye down and it will remove the malice, along with causing the pillar to fall towards the tower, creating a ramp. Paraglide over to the large tower and from here here, climb up to the peak of Tabantha Tower.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Rito Village</h2>

    <p className='text-white text-xl mt-10 mb-10'>The path to the Rito Village is not very treacherous at all and you shouldn’t have much trouble getting there. From the Tabantha Tower, leap off the ledge to the east to get back to the main road. From there head north along the path. You will encounter a Stone Talus mini-boss, but he can just be avoided if you don’t want to battle him. There are some Lizalfos in the valley as you get closer to the village, but they are comparably easier to what we’ve already battled on this route.</p>
    <p className='text-white text-xl mt-10 mb-10'>Along the path, just before you reach Rito Village, you will come across the Rito Stable, so you can look around, talk to some of the residents here, do some cooking, and then progress onward to Rito Village. Just as you are entering the village, you will see the Divine Beast soaring up above.</p>
    <p className='text-white text-xl mt-10 mb-10'>Rito Village is a very vertical based town, with the main walkway just circulating around a large boulder. You can run around and talk to the many residents of the village if you’d like. As you climb up, you should definitely take a stop at the Akh Va’quot Shrine to at least create a warp point.</p>
    <p className='text-white text-xl mt-10 mb-10'>At the very top of the village, speak with the village elder, Kaneli. He talks about all the trouble that the Divine Beast Vah Medoh has caused. He mentions that Teba and Harth both tried to confront the beast, but Harth was injured in the process. Harth can be found here at the village, but Teba is missing. Kaneli asks you to go and find Teba.</p>
    <p className='text-white text-xl mt-10 mb-10'>Teba’s wife Saki is the pink Rito, who is located in the hut right next to Kaneli. Saki mentions to Link that Teba had gone off to the Flight Range. It is located not far from here at the Dronoc’s Pass, near the Hebra Mountains. Seeing the platform below will trigger Link to have another memory, this time of the Rito Champion, Revali.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Flight Range</h2>

    <p className='text-white text-xl mt-10 mb-10'>The best way to reach the Flight Range is to take off from a high point in Rito Village, using the Paraglider to fly northwest. Note that the temperature is very cold. You will not only need to have the Warm Doublet on hand, but you’ll also need some additional warming. You can use a whole variety of items or elixirs. Perhaps the easiest are some cooked Spicy Peppers, as you might have some handy. If not, you can also pick some up all over the Great Plateau, just west of the Temple of Time.</p>
    <p className='text-white text-xl mt-10 mb-10'>On your way to the Flight Range, be sure to stop by the Sha Warvo Shrine that is right off the path, as it makes for a quick warp point if needed. Run north to reach the Flight Range.</p>
    <p className='text-white text-xl mt-10 mb-10'>Climb the ladder and you’ll meet up with Teba, the Rito Warrior. After talk to him, he’ll ask you to prove yourself by honing your aerial archery skills. If you don’t have any, be sure to grab some arrows from the hut.</p>
    <p className='text-white text-xl mt-10 mb-10'>You have to hit 5 targets in 3 minutes. This is incredibly easy and as long as you don’t run out of arrows, you should have no problem at all. Glide around with the paraglider, moving towards a target. You can release the paraglider so that you drop down lower below. When you are close enough, pull out your bow and shoot the target. There are more targets than you actually need to hit, but after hitting 5 of them, you will complete this task.</p>
    <p className='text-white text-xl mt-10 mb-10'>As a reward for completing the task, Teba will give you a gift in the treasure chest. This is the Falcon Bow and it is specifically designed for aerial combat. It has a far superior rate of fire. Teba will also gift you with 20 rare Bomb Arrows for the battle. Talk to him and take flight to the sky.</p>
    <p className='text-white text-xl mt-10 mb-10'>The battle is perhaps the easiest of the four Divine Beasts. There is a massive barrier around the beast that cannot be penetrated at the moment. There are four cannons on each of its sides. You will need to glide on over to reach of the cannons and shoot each one with two Bomb Arrows. During this battle, Teba will fly around, and will occasionally distract the cannons. If the cannon is targeting you, either put on the paraglider or take it off to change your elevation, causing the cannon to miss.</p>
    <p className='text-white text-xl mt-10 mb-10'>You have 20 bomb arrows, so ammunition should be no problem. I would suggest trying to get as close to the cannons as possible to assure that you don’t miss. These bomb arrows are pretty valuable to have after all and we want to preserve them as best we can. After two hits to each cannon, we’ll finally be able to board Vah Medoh.</p>

    <div className='mx-auto grid md:grid-cols-2 gap-8'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Vah Naboris Dungeon</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>Vah Medoh Dungeon</p>

    </button>

    </div>

    </div>

    </div>

  )

}

export default Botw10