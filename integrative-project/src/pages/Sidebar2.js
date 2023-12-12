import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Sidebar2() {

  const navigate = useNavigate();
  const location = useLocation();

  const handleGuideClick = async (route) => {
    if (route === '/logout') {
      // Perform logout logic here
      try {
        // Assuming you have stored a user token in localStorage
        localStorage.removeItem('userToken');
  
        // Additional logout logic (e.g., clearing user data, etc.)
  
        // Redirect to the home page after logout
        navigate('/');
      } catch (error) {
        console.error('Error during logout:', error);
        // Handle any error that might occur during logout
      }
    } else {
      // For other routes, navigate to the selected route
      navigate(route);
    }
  };

    const guides = [

        { route: '/gowr1', label: 'Surviving Fimbulwinter' },
        { route: '/gowr2', label: 'The Quest for Tyr' },
        { route: '/gowr3', label: 'Old Friends' },
        { route: '/gowr4', label: "Groa's Secret" },
        { route: '/gowr5', label: 'The Lost Sanctuary' },
        { route: '/gowr6', label: 'The Reckoning' },
        { route: '/gowr7', label: 'The Runaway' },
        { route: '/gowr8', label: 'Into the Fire' },
        { route: '/gowr9', label: 'The Word of Fate' },
        { route: '/gowr10', label: 'Forging Destiny' },
        { route: '/gowr11', label: 'Unleashing Hel' },
        { route: '/gowr12', label: 'Reunion' },
        { route: '/gowr13', label: 'Creatures of Prophecy' },
        { route: '/gowr14', label: 'Unlocking the Mask' },
        { route: '/gowr15', label: 'Hunting for Solace' },
        { route: '/gowr16', label: 'The Summoning' },
        { route: '/gowr17', label: 'The Realms at War' },
        { route: '/', label: 'Home' },
        
    ];

  return (

    <div className='hidden md:block top-0 left-0 fixed bg-gray-800 w-[12vw] h-screen p-10 md:text-2xl sm:text-lg'>

        <h2 className='text-2xl text-white font-mono font-bold pb-10'>God of War: Ragnarok</h2>

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