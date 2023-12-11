import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Sidebar3() {

    const navigate = useNavigate();
    const location = useLocation();

    const handleGuideClick = (route) => {

        navigate(route);

      };

    const guides = [

        { route: '/botw1', label: 'Great Plateau' },
        { route: '/botw2', label: 'Dueling Peaks' },
        { route: '/botw3', label: 'Hateno Village' },
        { route: '/botw4', label: 'Zora’s Domain' },
        { route: '/botw5', label: 'Vah Ruta Dungeon' },
        { route: '/botw6', label: 'Goron City' },
        { route: '/botw7', label: 'Vah Rudania Dungeon' },
        { route: '/botw8', label: 'Gerudo Town' },
        { route: '/botw9', label: 'Vah Naboris Dungeon' },
        { route: '/botw10', label: 'Rito Village' },
        { route: '/botw11', label: 'Vah Medoh Dungeon' },
        { route: '/botw12', label: 'Captured Memories' },
        { route: '/botw13', label: 'The Master Sword' },
        { route: '/botw14', label: 'Hyrule Castle' },
        { route: '/', label: 'Home' },
        
    ];

  return (

    <div className='hidden md:block top-0 left-0 fixed bg-gray-800 w-[12vw] h-screen p-10 md:text-2xl sm:text-lg'>

        <h2 className='text-2xl text-white font-mono font-bold pb-10'>The Legend of Zelda: Breath of the Wild</h2>

        <ul className='text-white'>

        {guides.map((guide, index) => (
          <li
            key={index}
            onClick={() => handleGuideClick(guide.route)}
            className={`text-xl py-7 hover:bg-gray-700 rounded-lg font-mono nav-item cursor-pointer ${
              location.pathname === guide.route ? 'bg-gray-700' : ''
            }`}
          >
            {guide.label}
          </li>
        ))}

        </ul>

    </div>

  )

}