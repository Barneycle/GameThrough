// Logout.js

const Logout = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/logout', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
          });
          
      if (!response.ok) {
        // Handle non-successful responses, e.g., log an error
        console.error('Logout failed:', response.statusText);
        throw new Error('Logout failed');
      }
  
      // Clear the token from localStorage on successful logout
      localStorage.removeItem('token');
      console.log('Logout successful!');
    } catch (error) {
      // Handle errors during the logout process
      console.error('Error during logout:', error);
      throw error;
    }
  };
  
  export default Logout;
  