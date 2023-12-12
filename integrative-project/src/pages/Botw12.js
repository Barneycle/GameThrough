import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Botw12 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/botw11');
    
    };

    const handleNext = () => {

        navigate('/botw13');
    
    };

  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>
        
    <h1 className='text-5xl text-white font-mono p-10 text-center'>Captured Memories</h1>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Picture #1 – Subdued Ceremony</h2>

    <p className='text-white text-xl mt-10 mb-10'>We began the Captured Memories Main Quest all the way back when we first visited Impa, and then later on our journey to Hateno Village. Now that we’ve uncovered a good majority of the overworld map, it’s now time to finally complete this quest and uncover much of the games backstory.</p>
    <p className='text-white text-xl mt-10 mb-10'>The first picture is located at the Sacred Ground Ruins within Central Hyrule, directly south of Hyrule Castle. The location is easily recognizable just by glancing at the map. Run over to the glowing yellow circle to reveal the memory.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Picture #2 – Resolve and Grief</h2>

    <p className='text-white text-xl mt-10 mb-10'>The second picture is also located just west of Lake Kolomo in Central Hyrule. It is found directly north of the Oman Au Shrine on the Great Plateau. Use that as a warp portal and then leap off the Great Plateau to the north. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Picture #3 – Zelda’s Resentment</h2>

    <p className='text-white text-xl mt-10 mb-10'>The third picture is located at the Ancient Columns within the Tabantha region. It is located south of Tabantha Tower, and if you uncovered the Tena Ko’sah Shrine, the location is immediately to the west of it.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Picture #4 – Blades of Yiga</h2>

    <p className='text-white text-xl mt-10 mb-10'>The fourth picture is located at the Kara Kara Bazaar just northeast of Gerudo Town. It is located just east of the oasis.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Picture #5 – A Premonition</h2>

    <p className='text-white text-xl mt-10 mb-10'>The fifth picture is located at the Eldin Canyon, just west of the Eldin Tower, and more specifically just west of the Goronbi Lake. This is the first one where it is somewhat tough to find. The best way to reach this area is be warping to the Eldin Tower and then working your way westward. The location is surrounded by a few Lizalfos, and they are the only Lizalfos in this remote area. So once you see them, you know you are close. The actual circle is located on a higher plateau, so look for the high ground.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Picture #6 – Silent Princess</h2>

    <p className='text-white text-xl mt-10 mb-10'>The sixth picture is located at the Irch Plain, just northwest of Hyrule Castle. If you’ve uncovered the Ridgeland Tower that is the best place to warp to. The location is just northeast of the Ridgeland Tower, near a small body of water. There isn’t anything major in the main quest that is around this location, so it is quite possible that you have never ventured to this section. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Picture #7 – Shelter from the Storm</h2>

    <p className='text-white text-xl mt-10 mb-10'>The seventh picture is located in West Necluda, which is in the Dueling Peaks region. You can warp to the Great Plateau Tower and leap off the plateau to the east. If you follow the path eastward, you’ll see the Bosh Kala Shrine. The location of this picture is on the east side of this river, on the higher plateau and much further south. The area is distinguished by the two stone statues found here.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Picture #8 – Father and Daughter</h2>

    <p className='text-white text-xl mt-10 mb-10'>The eighth picture is located within Hyrule Castle itself, which makes it one of the hardest locations to reach. When looking at Hyrule Castle, you’ll see that there is a large spire, at the west side of the castle. This building is Zelda’s Study, and the location in question is on the bridge that connects that spire to the rest of the castle. There are multiple ways to approach this and a lot depends on your own character’s current ability.</p>
    <p className='text-white text-xl mt-10 mb-10'>If you are strong enough to take on the guardians along the way, this won’t be much of a problem. Alternatively, if you have a few Stamina upgrades, you can climb the spire itself, bypassing a lot of the traversing within Hyrule Castle.</p>
    <p className='text-white text-xl mt-10 mb-10'>There are a few different ways to approach the castle, but I think one of the better ways is from just northwest of the castle itself. You can Paraglider over and then swim to a low platform. From here, by either defeating or avoiding the guardians on the outskirts of the castle, you can reach the bottom of the spire. It’s not an easy trip, but I assure it can be done.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Picture #9 – Slumbering Power</h2>

    <p className='text-white text-xl mt-10 mb-10'>The ninth picture is located at the Spring of Power in the Akkala region. The main quest guide does not take you into the Akkala region, so this might be uncharted territory for you. Additionally, reaching the top of the Akkala Tower to reveal the area is one of the more challenging endeavors in the game. You can warp over to the Lanayru Tower and then take the path north, that we originally took on our way to Goron City. Along the way, the path reaches a fork in the road and the road on the right leads to the Akkala region.</p>
    <p className='text-white text-xl mt-10 mb-10'>If you are following the main road, it splits off twice while in Akkala. Both times, take the pathway on the left. You will pass by the Akkala Tower and you can try to reach the peak if you’d like. If you want to bypass having to uncover the map, you can. The location of the Spring of Power is directly east of the center of Death Mountain. You can use that as a frame of reference when looking at your map. The Spring of Power is the only water based area in this immediate section of the map, so once you see water, you are close.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Picture #10 – To Mount Lanayru</h2>

    <p className='text-white text-xl mt-10 mb-10'>The tenth picture is located at the Sanidin Park Ruins in the Ridgeland Tower region. If you have yet to uncover the Ridgeland Tower region, no problem. Make your way to Central Hyrule and go to the southwest part of this region. Here you will find the Outskirt Stable and it you take the path to the west, you’ll cross the Manhala Bridge. Follow this path and it will come to a fork in the road. Take the path northward and follow it until you come to the Sanidin Park Ruins. It is easily distinguishable by the large horse statue.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Picture #11 – Return of Calamity Ganon</h2>

    <p className='text-white text-xl mt-10 mb-10'>The eleventh picture is located at the Lanayru Road – East Gate, in the Hateno Tower region. Warp on over to the Hateno Tower and begin traveling north and east. The actual gate is located near a stretch of water that looks like a wide Letter T on your map. It is located at the east edge of the water, just on the road near the archway.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Picture #12 – Despair</h2>

    <p className='text-white text-xl mt-10 mb-10'>The twelfth picture is located in Hyrule Field within the Central Hyrule region. It can be found just northeast of the Bottomless Swamp in a forest filled area. It is almost directly in the middle of the riverside and the Wetland Stables, if you’ve been to these locations. Everything in this forest kind of looks alike, so it’s hard to actually see where the picture is. Wander around the forest long enough in the area indicated on the map and you’ll find the glowing circle.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>The Final Picture</h2>

    <p className='text-white text-xl mt-10 mb-10'>After you’ve found all 12 pictures, finally return to Impa at Kakariko Village. After giving her the news, she will reveal that there is one final picture and it is half-a-days walk from the village. The final picture is located in the middle of the Ash Swamp in the Dueling Peaks Tower Region. Specifically, it is located just northeast of the Dueling Peaks Stable.</p>
    <p className='text-white text-xl mt-10 mb-10'>This area is completely filled with inactive Guardians. If you look at your map, this area has a handful of really small pounds. The location is located right in between the two small pounds that are at the southeast of this cluster. </p>
    <p className='text-white text-xl mt-10 mb-10'>After completing the quest, Princess Zelda will call out to you saying that she is within Hyrule Castle, and that it is now time for you to defeat Ganon.</p>

    <div className='mx-auto grid md:grid-cols-2 gap-8'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Vah Medoh Dungeon</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>The Master Sword</p>

    </button>

    </div>

    </div>

    </motion.div>

  )


}

export default Botw12