import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user data from localStorage
    localStorage.removeItem('user');

    // Redirect to home page
    navigate('/', { replace: true });
  }, [navigate]);

  return null;
};

export default Logout;
