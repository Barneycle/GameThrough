import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider'; // Adjust the path accordingly

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      // Redirect to the login page
      navigate('/login', { replace: true }); // Use replace to replace the current entry in the navigation history
    }
  }, [isLoggedIn, navigate]);

  // Render the protected content if the user is authenticated
  return isLoggedIn ? children : null;
};

export default ProtectedRoute;