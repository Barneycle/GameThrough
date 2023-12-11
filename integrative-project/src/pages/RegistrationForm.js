import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function RegistrationForm() {

  const history = useNavigate();

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({

    idno: '',
    firstName: '',
    middleName: '',
    lastName: '',
    birthday: '',
    age: '',
    address: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',

  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({

      ...prev,
      [name]: value,

    }));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {

      setErrMsg('Password and Confirm Password do not match');

      return;

    }

    try {

      const response = await axios.post('http://localhost:3000/api/register', formData);
  
      if (response.data.message === 'Registration successful') {

        history('/');

      } else {

        setErrMsg(response.data.message);

      }

    } catch (error) {
  
      if (error.response) {

        setErrMsg(error.response.data.message || 'Registration failed. Please try again.');

      } else if (error.request) {

        setErrMsg('No response received. Please try again.');

      } else {

        setErrMsg('Request setup error. Please try again.');

      }

    }

  };
  
  return (
    
    <div className="min-h-screen w-full h-full flex flex-col justify-center">

      <section>

        <form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg shadow-lg shadow-gray-900">

        {errMsg && <div style={{ color: 'red' }}>{errMsg}</div>}

        <h2 className='text-4xl dark:text-white font-mono text-center ' >Sign Up</h2>

        <div className='flex flex-col text-gray-400 py-2 ' >

          <label htmlFor="idno">ID Number:</label>
          <input type="text" id="idno" name="idno" value={formData.idno} onChange={handleChange} className={`inputClass ${errMsg && errMsg.includes('idno') ? 'border-red-500' : ''}`} required />

        </div>

        <div className='flex flex-col text-gray-400 py-2 ' >

          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="inputClass" required />

        </div>

        <div className='flex flex-col text-gray-400 py-2 ' >

          <label htmlFor="middleName">Middle Name or Initial (Optional):</label>
          <input type="text" id="middleName" name="middleName" value={formData.middleName} onChange={handleChange} className="inputClass" />

        </div>

        <div className='flex flex-col text-gray-400 py-2 ' >

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="inputClass" required />

        </div>

        <div className='flex flex-col text-gray-400 py-2 ' >

          <label htmlFor="birthday">Birthday:</label>
          <input type="date" id="birthday" name="birthday" value={formData.birthday} onChange={handleChange} className="inputClass" required />

        </div>

        <div className='flex flex-col text-gray-400 py-2 ' >

          <label htmlFor="age">Age:</label>
          <input type="text" id="age" name="age" value={formData.age} onChange={handleChange} className="inputClass" required />

        </div>

        <div className='flex flex-col text-gray-400 py-2 ' >

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="inputClass" required />

        </div>

        <div className='flex flex-col text-gray-400 py-2 ' >

          <label htmlFor="username">User Name:</label>
          <input type="text" autoComplete='off' id="username" name="username" value={formData.username} onChange={handleChange} className={`inputClass ${errMsg && errMsg.includes('username') ? 'border-red-500' : ''}`} required />

        </div>

        <div className='flex flex-col text-gray-400 py-2 ' >

          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`inputClass ${errMsg && errMsg.includes('email') ? 'border-red-500' : ''}`} required />

        </div>
        
        <div className='flex flex-col text-gray-400 py-2 '>

          <label htmlFor="password">Password:</label>
          <input type="password"  id="password" name="password" value={formData.password} onChange={handleChange} className="inputClass" required />

        </div>

        <div className='flex flex-col text-gray-400 py-2 '>

          <label htmlFor="confirm">Confirm Password:</label>
          <input type="password" id="confirm" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="inputClass" required />

        </div>

        <div className="parent-container flex justify-center">

          <button className="buttonClass" type="submit"> Submit </button>

        </div>
      
      </form>

      </section>
      

    </div>

  );

}