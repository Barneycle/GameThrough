body, html {
    margin: 0;
    padding: 0;
    overflow: auto;
  }
  
  .App {
  
    text-align: center;
  
  }
  
  .App-logo {
  
    height: 100vh;
    width: auto;
    pointer-events: none;
  
  }
  
  @media (prefers-reduced-motion: no-preference) {
  
    .App-logo {
  
      animation: App-logo-spin infinite 20s linear;
  
    }
  
  }
  
  .App-header {
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    flex-grow: 1;
  }
  
  .App-link {
  
    color: #61dafb;
  
  }
  
  @keyframes App-logo-spin {
  
    from {
  
      transform: rotate(0deg);
  
    }
  
    to {
  
      transform: rotate(360deg);
  
    }
  
  }
  
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"/></svg>

  import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  return (
    <nav className='bg-gradient-to-r from-gray-700 to-gray-900 h-20 flex items-center justify-center text-white text-lg sticky top-0 z-50'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link to="/" className='text-2xl flex items-center' onClick={closeMobileMenu}>
          GameThrough <FontAwesomeIcon icon={faGamepad} />
        </Link>

        <div className='menu-icon md:hidden' onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>

        <ul className={`${
          click ? 'flex flex-col items-center space-y-2 md:hidden' : 'hidden md:flex md:flex-row md:space-x-4 md:items-center'
        }`}>
          <li>
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
              Log In
            </Link>
          </li>
          <li>
            <Link to='/registration' className='nav-links' onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
        </ul>

        {button && (
          <Button buttonStyle='btn--outline'>Sign Up</Button>
        )}
      </div>
    </nav>
  );
}


//asdas
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const navigation = [

  { name: 'Home', href: '/', current: false },
  { name: 'Login', href: '/login', current: false },
  { name: 'Sign Up', href: '/registration', current: false },
  { name: 'About Us', href: '/about', current: false },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {

  return (

    <Disclosure as="nav" className="bg-gray-800">

      {({ open }) => (

        <>
          <div className="mx-auto max-w-8xl px-7 sm:px-5 lg:px-5">

            <div className="relative flex h-20 items-center justify-between">

              <div className="flex items-left">

                <Link to="/" className="text-3xl flex items-center">
                 
                  <FontAwesomeIcon icon={faGamepad} className=" mr-2 text-black text-3xl" />

                  <span className="sm:hidden md:inline text-[#00df9a] font-mono">GameThrough </span>

                </Link>

              </div>

              <div className="flex items-center ml-2">

                <div className="hidden sm:ml-6 sm:block">

                  <div className="flex space-x-4">

                    {navigation.map((item) => (

                      <Link key={item.name} to={item.href} className={classNames(item.current? 'bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-cyan-300','rounded-md px-3 py-2 text-lg font-medium font-mono', 'text-white' )}aria-current={item.current ? 'page' : undefined}>
                        
                        {item.name}
                        
                      </Link>

                    ))}

                  </div>

                </div>

                <div className="sm:hidden"> {/* Mobile menu button */}

                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    
                    <span className="absolute -inset-0.5" />

                    <span className="sr-only">Open main menu</span>

                    {open ? (

                      <XMarkIcon className="block h-8 w-8" aria-hidden="true" />

                    ) : (

                      <Bars3Icon className="block h-8 w-8" aria-hidden="true" />

                    )}

                  </Disclosure.Button>

                </div>

              </div>

            </div>

          </div>

          <Disclosure.Panel className="sm:hidden">

            <div className="space-y-1 px-4 pb-3 pt-2">

              {navigation.map((item) => (

                <Link key={item.name} to={item.href} className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-4 py-2 text-base font-medium' )} aria-current={item.current ? 'page' : undefined}>
                  
                  {item.name}

                </Link>

              ))}

            </div>

          </Disclosure.Panel>

        </>

      )}

    </Disclosure>

  );

}
<div className="text-9xl"></div>

import React, { useEffect }  from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Welcome(){

  useEffect(() => {

    AOS.init({duration : 2000, once: true});

}, []);

  const navigate = useNavigate();

  const handleLogin = () => {

    navigate('/login');

};

  return(

  <div className="min-h-screen bg-ebony w-full h-full flex flex-col justify-center">

      <div className="text-center font-mono">

      <div className='animation' data-aos="fade-in"><div className="text-9xl">Welcome to GameThrough</div></div>

        <div className = 'animation' data-aos="fade-up">This website is all about video game walkthroughs</div>

        <div className = 'animation' data-aos="fade-down">lorem ipsum</div>

        <div className = 'animation' data-aos="fade-right">lorem ipsum</div>

        <div className = 'animation' data-aos="fade-left">lorem ipsum</div>

        <div className = 'animation' data-aos="fade-up">lorem ipsum</div>

        <div className = 'animation' data-aos="fade-down">lorem ipsum</div>

        <div className = 'animation' data-aos="fade-right">lorem ipsum</div>

        <div className = 'animation' data-aos="fade-left">lorem ipsum</div>

        <div className = 'animation' data-aos="fade-up">lorem ipsum</div>

      </div>

    <div style={{ display: 'flex', flexDirection: 'column' }}>

      <div className="text-center text-5xl">

        <button onClick={handleLogin} className="bg-blue-600 text-white sm:p-5 rounded-lg" >Login</button>

      </div>

    </div>

  </div>


  )

}

import React, { useEffect }  from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Welcome(){

  useEffect(() => {

    AOS.init({duration : 2000, once: true});

}, []);

  const navigate = useNavigate();

  const handleLogin = () => {

    navigate('/login');

};

  return(

  <div className="min-h-screen bg-ebony w-full h-full flex flex-col justify-center">

      <div className="text-center font-mono">

      <div className='animation' data-aos="fade-in"><div className="text-9xl">Welcome to GameThrough</div></div>

        <div className = 'animation' data-aos="fade-up">This website is all about video game walkthroughs</div>

        <div className = 'animation' data-aos="fade-down">lorem ipsum</div>

        <div className = 'animation' data-aos="fade-right">lorem ipsum</div>

        <div className = 'animation' data-aos="fade-left">lorem ipsum</div>

        <div className = 'animation' data-aos="fade-up">lorem ipsum</div>

        <div className = 'animation' data-aos="fade-down">lorem ipsum</div>

        <div className = 'animation' data-aos="fade-right">lorem ipsum</div>

        <div className = 'animation' data-aos="fade-left">lorem ipsum</div>

        <div className = 'animation' data-aos="fade-up">lorem ipsum</div>

      </div>

    <div style={{ display: 'flex', flexDirection: 'column' }}>

      <div className="text-center text-5xl">

        <button onClick={handleLogin} className="bg-blue-600 text-white sm:p-5 rounded-lg" >Login</button>

      </div>

    </div>

  </div>


  )

}