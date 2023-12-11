import React, { useEffect } from 'react';
import {  Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider'; // Adjust the path accordingly

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
 
      return <Navigate to="/login" />;
    }
  }, [isLoggedIn]);

  // Render the protected content if the user is authenticated
  return isLoggedIn ? children : null;
};

export default ProtectedRoute;