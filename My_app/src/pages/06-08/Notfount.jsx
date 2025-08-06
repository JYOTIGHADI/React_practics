import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.message}>Page Not Found</h2>
      <p style={styles.text}>You will be redirected to the homepage <strong>{count}</strong> seconds...</p>
    </div>
  );
};

const styles = {
  container: {
    height: '400px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  code: {
    fontSize: '6rem',
    margin: 0,
    color: '#dc3545',
  },
  message: {
    fontSize: '2rem',
    margin: '10px 0',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  note: {
    fontSize: '1rem',
  },

};

export default NotFound;

