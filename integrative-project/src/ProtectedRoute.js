import React, { useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth, AuthProvider } from './AuthProvider'; // Adjust the path accordingly

const ProtectedRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = useAuth();

  // Redirect to login if the user is not authenticated
  useEffect(() => {
    if (!isLoggedIn) {
 
      return <Navigate to="/login" />;
    }
  }, [isLoggedIn, rest]);

  // Render the protected content if the user is authenticated
  return isLoggedIn ? <Route {...rest} element={element} /> : null;
};

export default ProtectedRoute;