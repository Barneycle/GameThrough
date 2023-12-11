import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthProvider';

export default function Login() {

  const { login } = useAuth();

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = async (e) => {

    e.preventDefault();

    setUsernameError('');
    setPasswordError('');
  
    if (username.trim() === '') {

      setUsernameError('Username is required');

    } else if (password.trim() === '') {

      setPasswordError('Password is required');

    } else {

      try {

        const response = await axios.post('http://localhost:3000/api/login', {
          username,
          password,
        });
  
        const token = response.data.token;
  
        navigate('/');

      } catch (error) {

        if (error.response) {

          if (error.response.status === 401) {

            setUsernameError('Invalid username');
            setPasswordError('Invalid password');

          } else {

            console.error('Server Error:', error.response.data.message);

          }
        } else if (error.request) {


          console.error('No response received from the server');

        } else {

          console.error('Error during request setup:', error.message);

        }

      }

    }

  };
  
  


  return (

    <div className="min-h-screen w-full h-full flex flex-col justify-center">

      <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg shadow-lg shadow-gray-900" onSubmit={handleLogin}>

        <h2 className="text-4xl dark:text-white font-mono text-center">Sign In</h2>

        <div className="flex flex-col text-gray-400 py-2">

          <label>Username</label>

          <input className="inputClass" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>

          {usernameError && <p className="text-red-500">{usernameError}</p>}

        </div>

        <div className="flex flex-col text-gray-400 py-2">

          <label>Password</label>
          <input
            className="inputClass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>

        <div className="flex justify-between text-gray-400 py-2">
          <p className="flex items-center">
            <input className="mr-2" type="checkbox" />Remember Me
          </p>
        </div>

        <button
          type="submit"
          onClick={handleLogin}
          className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/10 hover:shadow-teal-500/40 text-white font-mono rounded-lg"
        >
          Sign In
        </button>

        <p className="text-white font-mono">
          Don't have an account?{' '}
          <Link to="/registration" className="underline text-white font-mono">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
