import React , { useState } from 'react'
import gow from '../assets/gow.png'
import gow2 from '../assets/gow2.png'
import botw from '../assets/botw.png'
import { useNavigate } from 'react-router-dom'

const Cards = () => {

    const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGuide1 = () => {
    
    if (isLoggedIn) {
      navigate('/gow1');
    } else {
      
      navigate('/login');
    }
  };

  const handleGuide2 = () => {

    if (isLoggedIn) {

      navigate('/gowr1');

    } else {

      navigate('/login');
    }
  };

  const handleGuide3 = () => {

    if (isLoggedIn) {

      navigate('/botw1');

    } else {

      navigate('/login');
      
    }
  };
  return (

    <div className='w-full py-[10rem] px-4 bg-[#36454F]'>
        
    <div className='max-w-[2480px] mx-auto grid md:grid-cols-3 gap-8'>

        <div className='w-full shadow-xl bg-gray-900 flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>

            <img className='mx-auto mt-[-3rem] bg-transparent' src={gow} alt="/" />
            <h2 className='text-2xl font-mono text-center py-8 text-[#00df9a]'>God of War (2018)</h2>
            <p className='text-center text-xl font-mono py-3 border-b border-t border-gray-900'>God of War (2018) is an action-adventure video game that follows Kratos, a former Greek god, and his son Atreus as they embark on a journey through the realms of Norse mythology, blending intense combat with a compelling narrative and stunning visuals.</p>
            <button onClick={handleGuide1} className='bg-[#00df9a] w-[200px] rounded-md font-mono my-6 mx-auto py-3 text-black'>Guide</button>

        </div>

        <div className='w-full shadow-xl bg-gray-900 flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>

            <img className='mx-auto mt-[-3rem] bg-transparent' src={gow2} alt="/" />
            <h2 className='text-2xl font-mono text-center py-8 text-[#00df9a]'>God of War Ragnarok</h2>
            <p className='text-center text-xl font-mono py-3 border-b border-t border-gray-900'>God of War Ragnarok is the next chapter in the story of Kratos and his growing son Atreus as they prepare for the titular cataclysm that threatens to be unleashed upon not just the Norse lands of Midgard, but all of the nine realms.</p>
            <button onClick={handleGuide2} className='bg-[#00df9a] w-[200px] rounded-md font-mono my-6 mx-auto py-3 text-black'>Guide</button>

        </div>

        <div className='w-full shadow-xl bg-gray-900 flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>

            <img className='mx-auto mt-[-3rem] bg-transparent' src={botw} alt="/" />
            <h2 className='text-xl font-mono text-center py-6 text-[#00df9a]'>The Legend of Zelda: Breath of the Wild</h2>
            <p className='text-center text-xl font-mono py-2 border-b border-t border-gray-900'>The Legend of Zelda: Breath of the Wild is an action-adventure game that immerses players in an expansive open world. As Link, the protagonist, players explore the vast landscapes of Hyrule, solving puzzles, battling enemies, and uncovering the secrets of a post-apocalyptic kingdom.</p>
            <button onClick={handleGuide3} className='bg-[#00df9a] w-[200px] rounded-md font-mono my-6 mx-auto py-3 text-black'>Guide</button>

        </div>

    </div>

    </div>
  )

}

export default Cards