import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Botw3 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);
    
    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/botw2');
    
    };

    const handleNext = () => {

        navigate('/botw4');
    
    };

  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='mx-auto h-screen max-w-[1240px]'>
        
    <h1 className='text-5xl text-white font-mono p-10 text-center'>Hateno Village</h1>

    <div className='p-20 items-center justify-between'>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Hateno Tower</h2>

    <p className='text-white text-xl mt-10 mb-10'>After meeting with Impa, she will guide Link in the direction of the Hateno Village, which is located to the southeast. From Kakariko Village head south, crossing the Kakariko Bridge and then take the defined pathway eastward until it eventually leads to uncharted area. You will arrive at Fort Hateno, and along this pathway, you’ll encounter plenty of enemies and characters wandering around. Feel free to talk to anybody you choose, but when you’re finished being side-tracked, follow the pathway until it forks to the southwest. Cross the Fir River and head towards the Hateno Tower. (As usual when chasing towers, opening your Sheikah Scope and setting a pin on the tower will help with navigation.)</p>
    <p className='text-white text-xl mt-10 mb-10'>As you draw closer to the tower, you will find that it is covered with spikes. While they can be burned, this is not required as a path to climb is available. Climbing to the top of the tower is a bit more tedious than prior towers. If you haven’t upgraded your stamina, you will have little to spare as you climb the tower, so don’t try to jump up to fast.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Hateno Ancient Tech Lab</h2>

    <p className='text-white text-xl mt-10 mb-10'>With the map revealed, Hateno Village should be easily be spotted in the direction of your objective marker. Head there and feel free to get sidetracked and look around. Several characters in town offer sidequests (one of which will allow you to swap out previously earned heart containers for stamina vessels, or vice versa), the Myahm Agana Shrine is available south of town to unlock as a warp point, and there is an armor shop. This shop sells the Warm Doublet if you never got it on the Great Plateau, the Hylian set if you didn’t purchase it in Kakariko, and an exclusive Soldier’s set. The Soldier’s set provides the highest defense in the game so far, however it does have a slight movement speed penalty. It is best worn when damage cannot be avoided through mobility, but can be reduced through defense. The rest of the time, you will typically stick with the Hylian set.</p>
    <p className='text-white text-xl mt-10 mb-10'>After you have explored to your heart’s content, begin to make your way towards the beacon just east of the village. The location you are trying to reach is on a higher cliff, but the road is fairly straight forward and you can reach the Hateno Ancient Tech Lab without much trouble. Once you arrive head inside and talk to the two characters in order to speak with the director.</p>
    <p className='text-white text-xl mt-10 mb-10'>The director will fix your Sheikah Slate, but it comes at a cost. She will task you with an errand, asking you to bring the blue flame from the ancient furnace in town to light up the furnace just outside the building. If you explore around inside and outside the lab, you will likely find a torch that can be used for this.</p>
    <p className='text-white text-xl mt-10 mb-10'>Back outside, fly on over to the new beacon and you’ll see a massive blue furnace. It may have a torch next to it as well. A torch is recommended for this as they are made to burn and will take very little durability damage for it (if any) from being on fire, but any other wooden weapon can be ignited and used. Swipe your weapon to light it on fire. If you run around, right next to a tree you will see a small lantern post. Carry the flame over and light this lantern on fire. This will light this lantern as well. In general, there is a path of lanterns all the way to the ancient furnace. If your weapon’s flame goes out or you accidentally put it away, it can be relit at any lantern you’ve lit so far.</p>
    <p className='text-white text-xl mt-10 mb-10'>The goal here is to light these lantern posts consecutively, as you make your way back up to the Ancient Tech Lab. Travel back towards town, lighting the lantern posts as you go. Some of the posts are much further away from each other, so don’t be concerned if you feel like you missed one, you can always light it later if you want. Follow the path eastward out of the village and then take the long journey up to the Ancient Tech Lab.</p>
    <p className='text-white text-xl mt-10 mb-10'>Once you arrive back at the Tech Lab, light the furnace and this will cause a warp portal to appear. Go inside and speak with Purah.</p>
    <p className='text-white text-xl mt-10 mb-10'>As a thanks for lighting up the furnace, Purah will now repair your Sheikah Slate using the Guidance Stone. This will add the Camera Rune to your slate and Purah will immediately ask you to take a picture of her, so go ahead and do so. Show her the picture and she will then tell you that Princess Zelda once used this camera.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Locked Mementos</h2>

    <p className='text-white text-xl mt-10 mb-10'>Purah suggests taking the upgraded Slate back to Impa. If you unlocked the Ta’loh Naeg Shrine, quickly make your way back to Kakariko Village. Otherwise do the long trek around to get there, and remember to unlock shrines next time! Once you arrive, Impa suggests that if you find the locations where the pictures are taken, it will restore some of the lost memories.</p>
    <p className='text-white text-xl mt-10 mb-10'>This will trigger a new main quest titled Captured Memories. This quest however, requires you to go to all the locations where the pictures are shown. At this point in time, while we can access all of these areas, none of them are readily available unless you’ve already navigated most of the Overworld. So, we’ll take on this quest slowly as we venture through the game.</p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Find the Fairy Fountain, and Onward</h2>

    <p className='text-white text-xl mt-10 mb-10'>In addition, a new Main Quest is now available, although it will not be automatically added to your log. As always, this is optional, but recommended as the next step. Outside Impa’s house, talk to the painter Pikango (near the fire) who is looking for a picture of a Great Fairy Fountain. Agree to follow him and you will head up the hill above Kakariko.</p>
    <p className='text-white text-xl mt-10 mb-10'>He will lose courage and ask you to go on ahead, so do so. The fountain is easily located ahead on the left.</p>
    <p className='text-white text-xl mt-10 mb-10'>First, it will need to be unlocked. If this is the first Fairy Fountain you’ve unlocked, the cost is 100 rupees, and is well worth it. This also will unlock a tier of upgrades for your armor. It is strongly recommended to upgrade all your armor sets for the additional defense. Any that cannot be upgraded, look and see if the materials required are listed, and go get them. Intrepid explorers may already have many of the required ingredients on hand.</p>
    <p className='text-white text-xl mt-10 mb-10'>After you’re done with the Great Fairy, take a picture of the fountain. (The Great Fairy herself will not be in this picture, this is okay.) Return the picture to Pikango to complete the quest.</p>
    <p className='text-white text-xl mt-10 mb-10'>The reward is that Pikango will give you hints that will help you complete the Captured Memories Main Quest. Pikango can now be found in several places in the world to provide hints for the memory locations that are nearby.</p>
    <p className='text-white text-xl mt-10 mb-10'>If you complete at least one of the Captured Memories (see Chapter 12 or our Interactive Map for assistance, or use Pikango’s help) and return to Impa, she will reward you with the Champion’s Tunic. This is slightly stronger than the Hylia set chest piece, and will reveal the health of enemies. It is also upgradeable at the Great Fairy Fountain.</p>
    <p className='text-white text-xl mt-10 mb-10'>At this point, the direction to take is entirely up to you. With Kakariko Village and Hateno Village explored, a variety of sidequests and shrines are available. The next step is to tackle the Divine Beasts, but there’s 4 of them and you can go in any order you please. Note however that the first Divine Beast you finish will be set at the easiest difficulty level, and each time you finish one off, the remaining ones will be set to a slightly harder difficulty level.</p>
    <p className='text-white text-xl mt-10 mb-10'>For this walkthrough, we recommend heading to the Zora’s Domain as the next step, mostly because it is the closest and fastest to reach. If you choose otherwise, simply pick the chapter relevant to your chosen direction.</p>

    <div className='mx-auto grid md:grid-cols-2 gap-8'>

    <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
    <p className='items-center mt-2 text-xl text-white'>Dueling Peaks</p>

    </button>

    <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>

    <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
    <p className='items-center mt-2 mb-2 text-xl text-white'>Zora’s Domain</p>

    </button>

    </div>

    </div>

    </motion.div>

  )


}


export default Botw3