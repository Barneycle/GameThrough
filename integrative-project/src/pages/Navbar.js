import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider'; 

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleHome = () => {
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSign = () => {
    navigate('/registration');
  };

  const handleAbout = () => {
    navigate('/about');
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    logout();
    navigate('/');
  };

  return (

    <div className='flex justify-between items-center h-24 mx-auto px-8 text-white bg-gray-800 '>

      <Link to='/' className='w-full text-3xl font-mono text-[#00df9a]'> GameThrough </Link>

      <ul className='hidden md:flex w-full justify-end'>

        <Link to='/' className='px-5 hover:bg-gray-700 hover:p-5 rounded-lg flex items-center'> Home </Link>

        {!isLoggedIn && (<>
          
          <Link to='/login' className='px-5 hover:bg-gray-700 hover:p-5 rounded-lg flex items-center'> Log In </Link>
          <Link to='/registration' className='px-5 hover:bg-gray-700 hover:p-5 rounded-lg flex items-center'> Sign Up </Link>
          
          </>

        )}

        <Link to='/about' className='px-5 hover:bg-gray-700 hover:p-5 rounded-lg flex items-center'> About Us </Link>
        
        {isLoggedIn && (
          
          <Link onClick={handleLogout} className='px-5 hover:bg-gray-700 hover:p-5 rounded-lg flex items-center'> Logout </Link>
        
        )}

      </ul>

      <div onClick={handleNav} className='block md:hidden'>

        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-800 ease-in-out duration-500' : 'fixed left-[-100%]'}>

        <Link to='/' className='w-full text-3xl font-mono text-[#00df9a]'> GameThrough </Link>

        <ul className='uppercase p-4'>

          <li onClick={handleHome} className='nav-item cursor-pointer p-4 border-b border-gray-600 hover:bg-gray-700'> Home </li>

          {!isLoggedIn && (

            <>

              <li onClick={handleLogin} className='nav-item cursor-pointer p-4 border-b border-gray-600 hover:bg-gray-700'> Log In </li>
              <li onClick={handleSign} className='nav-item cursor-pointer p-4 border-b border-gray-600 hover:bg-gray-700'> Sign Up </li>
            
            </>

          )}

          <li onClick={handleAbout} className={`nav-item cursor-pointer p-4 ${isLoggedIn ? 'border-b border-gray-600' : 'hidden:border-b'} hover:bg-gray-700`}> About Us </li>
          
          {isLoggedIn && (

            <li onClick={handleLogout} className='nav-item cursor-pointer p-4 hover:bg-gray-700'> Logout </li>

          )}

        </ul>

      </div>

    </div>

  );

};

export default Navbar;