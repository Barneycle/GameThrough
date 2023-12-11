import React , { useState, useEffect, useContext, createContext } from 'react';
import { Routes, Route , useNavigate } from 'react-router-dom';
import RegistrationForm from './pages/RegistrationForm';
import Logout from './pages/Logout';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Cards from './pages/Cards';
import Footer from './pages/Footer';
import About from './pages/About';
import Sidebar1 from './pages/Sidebar1';
import Botw1 from './pages/Botw1'
import Sidebar3 from './pages/Sidebar3';
import Botw4 from './pages/Botw4';
import Botw2 from './pages/Botw2';
import Botw3 from './pages/Botw3';
import Botw5 from './pages/Botw5';
import Botw6 from './pages/Botw6';
import Botw7 from './pages/Botw7';
import Botw8 from './pages/Botw8';
import Botw9 from './pages/Botw9';
import Botw10 from './pages/Botw10';
import Botw11 from './pages/Botw11';
import Botw12 from './pages/Botw12';
import Botw13 from './pages/Botw13';
import Botw14 from './pages/Botw14';
import Gow1 from './pages/Gow1';
import Gow2 from './pages/Gow2';
import Gow3 from './pages/Gow3';
import Gow4 from './pages/Gow4';
import Gow5 from './pages/Gow5';
import Gow6 from './pages/Gow6';
import Gow7 from './pages/Gow7';
import Gow8 from './pages/Gow8';
import Gow9 from './pages/Gow9';
import Gow10 from './pages/Gow10';
import Gow11 from './pages/Gow11';
import Gow12 from './pages/Gow12';
import Gow13 from './pages/Gow13';
import Gow14 from './pages/Gow14';
import Gow15 from './pages/Gow15';
import Gow16 from './pages/Gow16';
import Gowr1 from './pages/Gowr1';
import Gowr2 from './pages/Gowr2';
import GOWR3 from './pages/Gowr3';
import GOWR4 from './pages/Gowr4';
import Gowr5 from './pages/Gowr5';
import Gowr6 from './pages/Gowr6';
import GOWR7 from './pages/Gowr7';
import GOWR8 from './pages/Gowr8';
import GOWR9 from './pages/Gowr9';
import GOWR10 from './pages/Gowr10';
import Gowr11 from './pages/Gowr11';
import Gowr12 from './pages/Gowr12';
import Gowr13 from './pages/Gowr13';
import Gowr14 from './pages/Gowr14';
import Gowr15 from './pages/Gowr15';
import Gowr16 from './pages/Gowr16';
import Gowr17 from './pages/Gowr17';
import Sidebar2 from './pages/Sidebar2';
import ProtectedRoute from './ProtectedRoute';

export default function App() {
  return (

    <>

      <Routes>

        <Route path="/" element={<div> <Navbar /> <Hero /> <Cards /> <Footer/> </div>} />

        <Route path="/registration" element={<div> <Navbar /> <RegistrationForm /> </div>} />

        <Route path="/login" element={<div> <Navbar /> <Login /> </div>} />

        <Route path="/logout" element={<Logout />} />

        <Route path="/about" element={<div> <Navbar /> <About /> </div>} />

        <Route path="/gow1" element={<ProtectedRoute><div> <Sidebar1 /> <Gow1 /> </div></ProtectedRoute>} />
        <Route path="/gow2" element={<ProtectedRoute component={<div> <Sidebar1 /> <Gow2 /> </div>} />} />
        <Route path="/gow3" element={<ProtectedRoute component={<div> <Sidebar1 /> <Gow3 /> </div>} />} />
        <Route path="/gow4" element={<ProtectedRoute component={<div> <Sidebar1 /> <Gow4 /> </div>} />} />
        <Route path="/gow5" element={<ProtectedRoute component={<div> <Sidebar1 /> <Gow5 /> </div>} />} />
        <Route path="/gow6" element={<ProtectedRoute component={<div> <Sidebar1 /> <Gow6 /> </div>} />} />
        <Route path="/gow7" element={<ProtectedRoute component={<div> <Sidebar1 /> <Gow7 /> </div>} />} />
        <Route path="/gow8" element={<ProtectedRoute component={<div> <Sidebar1 /> <Gow8 /> </div>} />} />
        <Route path="/gow9" element={<ProtectedRoute component={<div> <Sidebar1 /> <Gow9 /> </div>} />} />
        <Route path="/gow10" element={<ProtectedRoute component={<div> <Sidebar1 /> <Gow10 /> </div>} />} />
        <Route path="/gow11" element={<ProtectedRoute component={<div> <Sidebar1 /> <Gow11 /> </div>} />} />
        <Route path="/gow12" element={<ProtectedRoute component={<div> <Sidebar1 /> <Gow12 /> </div>} />} />
        <Route path="/gow13" element={<ProtectedRoute component={<div> <Sidebar1 /> <Gow13 /> </div>} />} />
        <Route path="/gow14" element={<ProtectedRoute component={<div> <Sidebar1 /> <Gow14 /> </div>} />} />
        <Route path="/gow15" element={<ProtectedRoute component={<div> <Sidebar1 /> <Gow15 /> </div>} />} />
        <Route path="/gow16" element={<ProtectedRoute component={<div> <Sidebar1 /> <Gow16 /> </div>} />} />

        <Route path="/gowr1" element={<ProtectedRoute component={<div> <Sidebar2 /> <Gowr1 /> </div>} />} />
        <Route path="/gowr2" element={<ProtectedRoute component={<div> <Sidebar2 /> <Gowr2 /> </div>} />} />
        <Route path="/gowr3" element={<ProtectedRoute component={<div> <Sidebar2 /> <GOWR3 /> </div>} />} />
        <Route path="/gowr4" element={<ProtectedRoute component={<div> <Sidebar2 /> <GOWR4 /> </div>} />} />
        <Route path="/gowr5" element={<ProtectedRoute component={<div> <Sidebar2 /> <Gowr5 /> </div>} />} />
        <Route path="/gowr6" element={<ProtectedRoute component={<div> <Sidebar2 /> <Gowr6 /> </div>} />} />
        <Route path="/gowr7" element={<ProtectedRoute component={<div> <Sidebar2 /> <GOWR7 /> </div>} />} />
        <Route path="/gowr8" element={<ProtectedRoute component={<div> <Sidebar2 /> <GOWR8 /> </div>} />} />
        <Route path="/gowr9" element={<ProtectedRoute component={<div> <Sidebar2 /> <GOWR9 /> </div>} />} />
        <Route path="/gowr10" element={<ProtectedRoute component={<div> <Sidebar2 /> <GOWR10 /> </div>} />} />
        <Route path="/gowr11" element={<ProtectedRoute component={<div> <Sidebar2 /> <Gowr11 /> </div>} />} />
        <Route path="/gowr12" element={<ProtectedRoute component={<div> <Sidebar2 /> <Gowr12 /> </div>} />} />
        <Route path="/gowr13" element={<ProtectedRoute component={<div> <Sidebar2 /> <Gowr13 /> </div>} />} />
        <Route path="/gowr14" element={<ProtectedRoute component={<div> <Sidebar2 /> <Gowr14 /> </div>} />} />
        <Route path="/gowr15" element={<ProtectedRoute component={<div> <Sidebar2 /> <Gowr15 /> </div>} />} />
        <Route path="/gowr16" element={<ProtectedRoute component={<div> <Sidebar2 /> <Gowr16 /> </div>} />} />
        <Route path="/gowr17" element={<ProtectedRoute component={<div> <Sidebar2 /> <Gowr17 /> </div>} />} />

        <Route path="/botw1" element={<ProtectedRoute component={<div> <Sidebar3 /> <Botw1 /> </div>} />} />
        <Route path="/botw2" element={<ProtectedRoute component={<div> <Sidebar3 /> <Botw2 /> </div>} />} />
        <Route path="/botw3" element={<ProtectedRoute component={<div> <Sidebar3 /> <Botw3 /> </div>} />} />
        <Route path="/botw4" element={<ProtectedRoute component={<div> <Sidebar3 /> <Botw4 /> </div>} />} />
        <Route path="/botw5" element={<ProtectedRoute component={<div> <Sidebar3 /> <Botw5 /> </div>} />} />
        <Route path="/botw6" element={<ProtectedRoute component={<div> <Sidebar3 /> <Botw6 /> </div>} />} />
        <Route path="/botw7" element={<ProtectedRoute component={<div> <Sidebar3 /> <Botw7 /> </div>} />} />
        <Route path="/botw8" element={<ProtectedRoute component={<div> <Sidebar3 /> <Botw8 /> </div>} />} />
        <Route path="/botw9" element={<ProtectedRoute component={<div> <Sidebar3 /> <Botw9 /> </div>} />} />
        <Route path="/botw10" element={<ProtectedRoute component={<div> <Sidebar3 /> <Botw10 /> </div>} />} />
        <Route path="/botw11" element={<ProtectedRoute component={<div> <Sidebar3 /> <Botw11 /> </div>} />} />
        <Route path="/botw12" element={<ProtectedRoute component={<div> <Sidebar3 /> <Botw12 /> </div>} />} />
        <Route path="/botw13" element={<ProtectedRoute component={<div> <Sidebar3 /> <Botw13 /> </div>} />} />
        <Route path="/botw14" element={<ProtectedRoute component={<div> <Sidebar3 /> <Botw14 /> </div>} />} />


        
      </Routes>

    </>

  );

}