import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session or perform any other necessary cleanup
    // For example, if using local storage for authentication token
    localStorage.removeItem('authToken');
  
    // Optionally, you can redirect the user to the login page
    navigate('/login');
  
    // Notify the parent component (Navbar) that the user has logged out
    onLogout();
  };
  
  return (
    <li onClick={handleLogout} className='nav-item cursor-pointer p-4'>
      Log Out
    </li>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this line to declare the state
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

  const handleLogout = () => {
    // Implement your logout logic, e.g., clear session, update state, etc.
    setIsLoggedIn(false);
  };

  return (
    <div className='flex justify-between items-center h-24 mx-auto px-4 text-white bg-gray-800'>
      <Link to='/' className='w-full text-3xl font-mono text-[#00df9a]'>
        GameThrough
      </Link>

      <ul className='hidden md:flex'>
        <Link to='/' className='p-4'>
          Home
        </Link>
        <Link to='/login' className='p-4'>
          Log In
        </Link>
        <Link to='/registration' className='p-4'>
          Sign Up
        </Link>
        <Link to='/about' className='p-4'>
          About Us
        </Link>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-800 ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <Link className='w-full text-3xl font-mono text-[#00df9a]'>GameThrough</Link>

        <ul className='uppercase p-4'>
          <li
            onClick={handleHome}
            className='nav-item cursor-pointer p-4 border-b border-gray-600'
          >
            Home
          </li>
          <li
            onClick={handleLogin}
            className='nav-item cursor-pointer p-4 border-b border-gray-600'
          >
            Log In
          </li>
          <li
            onClick={handleSign}
            className='nav-item cursor-pointer p-4 border-b border-gray-600'
          >
            Sign Up
          </li>
          <li
            onClick={handleAbout}
            className='nav-item cursor-pointer p-4'
          >
            About Us
          </li>
        </ul>
      </div>

      {isLoggedIn ? (
        <div className='relative'>
          <li
            onClick={() => setNav(!nav)}
            className='p-4 cursor-pointer'
          >
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </li>
          <li className='p-4 cursor-pointer'>
            <span>{/* Display the username here */}</span>
            <ul
              className={`absolute left-0 mt-2 bg-gray-800 border border-gray-700 rounded-md ${
                nav ? 'block' : 'hidden'
              }`}
            >
              <Logout onLogout={handleLogout} />
            </ul>
          </li>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
