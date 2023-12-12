import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Logout from './Logout';

export default function Sidebar1() {

  const navigate = useNavigate();
  const location = useLocation();

  const handleGuideClick = async (route) => {

    console.log('Before Logout - User Token:', localStorage.getItem('token'));

    if (route === '/logout') {

      try {
        console.log('Attempting logout...');
        await Logout();
        console.log('Logout successful!');
        navigate('/');

      } catch (error) {

        console.error('Error during logout:', error.message);

      }
    } else {

      navigate(route);

    }

  };
  

    const guides = [

        { route: '/gow1', label: 'The Marked Trees' },
        { route: '/gow2', label: 'Path to the Mountain' },
        { route: '/gow3', label: 'A Realm Beyond' },
        { route: '/gow4', label: 'The Light of Alfheim' },
        { route: '/gow5', label: 'Inside the Mountain' },
        { route: '/gow6', label: 'A New Destination' },
        { route: '/gow7', label: 'The Magic Chisel' },
        { route: '/gow8', label: 'Behind the Lick' },
        { route: '/gow9', label: 'The Sikcness' },
        { route: '/gow10', label: 'The Black Rune' },
        { route: '/gow11', label: 'Return to the Summit' },
        { route: '/gow12', label: 'Escape from Helheim' },
        { route: '/gow13', label: 'A Path to Jotunheim' },
        { route: '/gow14', label: 'Between the Realms' },
        { route: '/gow15', label: 'Jotunheim in Reach' },
        { route: '/gow16', label: "Mother's Ashes" },
        { route: '/', label: 'Home' },
        { route: '/logout', label: 'Log Out' },
        
    ];

  return (

    <div className='hidden md:block top-0 left-0 fixed bg-gray-800 w-[12vw] h-screen p-10 md:text-2xl sm:text-lg'>

        <h2 className='text-2xl text-white font-mono font-bold pb-10'>God of War (2018) Guide</h2>

        <ul className='text-white'>

        {guides.map((guide, index) => (
          <li
            key={index}
            onClick={() => (guide.route === '/logout' ? handleGuideClick(guide.route) : handleGuideClick(guide.route))}
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
