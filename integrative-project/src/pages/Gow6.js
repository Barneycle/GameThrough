import React , { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const GOW6 = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  
  }, []);

    const navigate = useNavigate();

    const handlePrevious = () => {

        navigate('/gow5');
    
    };

    const handleNext = () => {

        navigate('/gow7');
    
    };
  
    return (
  
      <div className='mx-auto h-screen max-w-[1240px]'>
  
      <h1 className='text-5xl text-white font-mono p-10 text-center'>A New Destination</h1>
  
      <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center p-2 md:p-4 bg-red-700 rounded-lg'>
  
      <h3 className='text-white font-mono text-2xl'>SPOILER WARNING:</h3>
      <h3 className='text-white font-mono text-2xl'> This guide will refrain from story spoilers whenever possible, but may indicate possible spoilers in boss fights or other encounters - proceed at your own risk. </h3>
  
      </div>
  
      <div className='p-20 items-center justify-between'>
  
      <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Take Mimir’s Head to the Witch</h2>

      <p className='text-white text-xl mt-10 mb-10'>Now that you have learned the summit of Midgard is not your actual destination, you’ll need to find a way to your true goal, and the Witch of the Woods may be able to help. Hopefully.  </p>

      <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
      
      <h3 className='text-white font-mono text-2xl'>Favor - The Realm of Fire:</h3>
      <p className='text-white text-xl mt-2 mb-2'> Look to your left as you pass the summit and head back down to find another of the Cipher Chests. This contains another piece of the Muspelheim Cipher needed to enter that realm.           </p>
      
      </div>

    <p className='text-white text-xl mt-10 mb-10'>As you head down the path, look off down the mountain and you can spot the witch’s woods - and even the circle of trees around your home!  </p>
    <p className='text-white text-xl mt-10 mb-10'> Check to the left of the vista to find a Hacksilver Chest, then move right back down to a Mystic Gateway - the quickest (and only) way to get down the mountain to Brok’s Shop at Tyr’s Temple. </p>
    <p className='text-white text-xl mt-10 mb-10'>Now that you have the ability to use both Shock Arrows and Light Arrows, there’s new areas to explore and treasure to find that wasn’t available earlier. If you want to catch up on everything you missed, you can backtrack up the Foothills and Mountain to acquire some previously inaccessible items.  </p>
    <p className='text-white text-xl mt-10 mb-10'>In addition, the World Serpent has moved itself and has now perched its head over the entrance to Fafnir’s Storeroom - should you choose to engage in that side quest. The waters of the Lake of Nine also hold many barrels and floating bodies that can give you Hacksilver or Aegir’s Gold if you get close to them.  </p>
    <p className='text-white text-xl mt-10 mb-10'> Otherwise, steer your boat under the statue of Thor to return to the Witch’s Cave, seeing as how the water level has changed, the trip back will have been altered. When you find the new dock to the Witch’s Cave, you’ll find a wall of World Tree Sap waiting for you. Hit the Shatter crystal to carve a path forward, and don’t forget to activate the Mystic Gateway too. </p>
    <p className='text-white text-xl mt-10 mb-10'> Take the lift up, and you’ll find yourself back in the chamber below the Witch’s House. Now is a good time to get a few items that were out of reach last time you were here: </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Favor - The Realm of Fire:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Break apart the Red Sap Wall near the lift to spawn a few Reavers and a Revenant, then look to the right down the passage to find a Cipher Chest you can open to get the final Muspelheim Cipher - allowing you to finally access the Realm of Fire should you so choose.        </p>
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Horn of Blood Mead Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Head down the path towards where you pushed the pallet into the water to find new blue crystals below that create a path to a Nornir Chest.      </p>
    <p className='text-white text-xl mt-2 mb-2'>  The runes are quite spread out here. The “N” looking rune is opposite the Nornir Chest next to a coffin encased in red sap on a ledge. </p>
    <p className='text-white text-xl mt-2 mb-2'> Look to the right of the Nornir Chest to find a blue crystal you can shoot to make a path to a Shatter Crystal, and throw it at the wall to the left of the chest to find the “R” looking rune to the left of the Hidden Chamber. </p>
    <p className='text-white text-xl mt-2 mb-2'> Finally, the “C” looking rune is in the large well past the red sap wall next to the lift. Hitting all these runes will unlock the chest to reveal a Horn of Blood Mead. </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Make sure you also take the time to use the Shatter Crystal and create a bridge to the Coffin to break the sap and collect Solid Svartalfheim Steel and a Symbol of Perseverance You can also look to the left of the climbable wall leading to the Hidden Chamber to find a dead body with Hacksilver.  </p>
    <p className='text-white text-xl mt-10 mb-10'>The room with the Hidden Chamber also contains a chest Hacksilver Chest, a bucket of Hacksilver at the top, and a Coffin with Soft Svartalfheim Steel.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Treasure Map Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>There’s a new item to find in the Hidden Chamber door room - look for a small scroll near the coffin and have Atreus read it to find a Treasure Map! If you can solve the riddle and locate the buried treasure, you’ll be rewarded with a good haul of items - and the reference to a turtle should point to a location nearby.        </p>
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>The blue roots in the area next to the Hidden Chamber appears to mean that you can't do anything more - but you can. Look up to the left of the bramble to spy breakable wood that you can boost Atreus up to.      </p>
    <p className='text-white text-xl mt-2 mb-2'> He'll appear out on a ledge, and you can move a pallet of giant stones over to him to send him across to the other side where a sand bowl is. After inspecting it, look up at the ceiling to spy runes behind wooden boards you can break with your axe. </p>
    <p className='text-white text-xl mt-2 mb-2'>As Atreus solves the riddle, the platform he is on will lower, and you can jump across to find a Legendary Chest in an alcove that holds Murder of Crows - a Runic Summon for Atreus.  </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>Return back to the entrance to the Witch’s House only to find the door hasn’t lowered - meaning you need to find an alternate way out. Luckily, the giant well past the red sap wall leads all the way back to the top.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>As you make the climb up the well, have Atreus read the runes to uncover a Rune Reading: Keep Out.         </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>As you come out on land, you’ll be overlooking the giant turtle and the Witch’s House just below you.  </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Next to the overlook is a Lore Marker missing its text. Look for a blue crystal stashed behind the well and bring it over to reveal the text of the marker: Prayer to Frigg.       </p>
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Artifact Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>As you head down the path to the house, look to the right to find the body of a dead soldier holding one of the Faces of Magic Artifacts, the Hole Mask.         </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'> Move to the front of the turtle, and you’ll be ambushed by a horde of Draugr. The Shield Draugr in particular will dash back and forth to hit you, while keeping their guard up to parry and stagger you if you attack at the wrong time. Bait them into attacking to counter them or break their defense with your shield and capitalize on their unbalance, and make use of Runic Attacks when more Draugr enter the fray. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>After killing the Draugr, be sure to look around for two sets of Rune Reads: A Seidr Curse is below the cliff you came down from, while Down With Odin can be found next to a chain up the side of a wall.          </p>
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Treasure Map Solution:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Referencing The Turtle’s Tribute treasure map you found earlier, it mentions red leaves and green moss, and the sketch shows the turtle along with his front left foot. Head over to the front of his foot and look for a small path going by some large stones, and keep an eye out for a small mossy stone next to it where the treasure is buried        </p>
    </div>

    <p className='text-white text-xl mt-10 mb-10'>There’s a bit more to explore before heading inside the Witch’s House.  </p>
    <p className='text-white text-xl mt-10 mb-10'> To the left side of the turtle there’s crumbling rocks that have fallen over a Legendary Chest you can’t get to - but there is a Sand Bowl with a riddle to solve - and runes can be seen carved in the rocks in the background - but you can’t see them from here. </p>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Artifact Location: </h3>
    <p className='text-white text-xl mt-2 mb-2'>A final artifact can be found climbing the chain next to the Rune Reads by the turtle. It leads to a short path with an inactive Nornir Chest, and if you look to the side you can spot one more dead body holding the last of the Faces of Magic Artifact set!          </p>
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Lore Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Inside the tower, turn to the left and break some wooden blockades to reach a Jotnar Shrine depicting Jormungandr, and have Atreus read about the World Serpent that covers all the waters of Midgard.          </p>
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Odin’s Raven Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Look up to the right from the dead body holding the last mask artifact and you can spot a spectral green raven perched on a large rock.         </p>
    </div>

    <div className='max-w-[600px] mx-auto grid md:grid-cols-1 gap-2 items-center mb-10 mt-10 p-2 md:p-4 bg-cyan-900 rounded-lg'>
    <h3 className='text-white font-mono text-2xl'>Legendary Chest Location:</h3>
    <p className='text-white text-xl mt-2 mb-2'>Head to the end of the path past the raven to an overlook of the Witch’s House that can let you plainly see all the runes upon the rocks that solve the riddle.  </p>
    <p className='text-white text-xl mt-2 mb-2'>This will rearranged the crumbling rocks to reveal the path to the Legendary Chest beneath them, and you’ll gain Storm of the Elks - a Runic Summon.  </p>
    </div>


    <p className='text-white text-xl mt-10 mb-10'> Now that you’ve done everything around the Witch’s House (her roots still block the passage back to the rest of the River Pass), it’s time to actually head in... with your head. As the scene plays out you’ll learn a bit more about your allies, and Mimir’s head will come back to life. After some terse dialogue, you’ll be back in the cave below the house. </p>

    <h2 className='border-b border-gray-500 max-w-full text-4xl text-white'>Go to the Serpent’s Horn</h2>

    <p className='text-white text-xl mt-10 mb-10'>Head back down the lift to the boat and take it all the way back to Tyr’s Temple. Your objective this time is the strange horn that lies in the middle of the bridge up a small lift. Head along the bridge to the lift mechanism to raise it up, and then have Mimir blow the horn to speak to the World Serpent.  </p>
    <p className='text-white text-xl mt-10 mb-10'> After a short discussion that you don’t get to be a part of, the World Serpent will agree to help, and push the bridge towards the Helheim Tower - and more importantly, a path to the two things you need to travel to Jotunheim: The Travel Rune, and a magic chisel to carve said rune into the travel gate back at the summit of the mountain. </p>
    <p className='text-white text-xl mt-10 mb-10'>To continue following our complete God of War walkthrough, be sure to click the link below to jump to our next walkthrough guide.  </p>

      </div>
      
      <div className='mx-auto grid md:grid-cols-2 gap-2'>
  
      <button onClick={handlePrevious} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>
  
      <div className='flex items-center justify-center mx-auto mt-2 mb-2 text-white text-2xl'> <IoIosArrowBack/> Previous </div>
      <p className='items-center mt-2 text-xl text-white'>Inside the Mountain</p>
  
      </button>
  
      <button onClick={handleNext} className='h-15 w-[10vw] mx-auto flex flex-col items-center justify-center border border-gray-500 rounded-lg hover:bg-gray-400'>
  
      <div className='flex items-center mx-auto mt-2  text-white text-2xl'> Next <IoIosArrowForward/> </div>
      <p className='items-center mt-2 mb-2 text-xl text-white'>The Magic Chisel</p>
  
      </button>
  
      </div>
  
      </div>
  
    )
  }
  
  export default GOW6