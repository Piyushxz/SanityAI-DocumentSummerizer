import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar'; // Ensure the correct import path

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save the token and navigate to the home page
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, ease: "easeInOut" }}
          className="relative bg-transparent border-2 border-blue-500 rounded-lg p-8 max-w-md w-full"
          style={{
            boxShadow: '0 0 20px rgba(0, 0, 255, 0.5)',
            animation: 'neon-border 2s infinite',
          }}
        >
          <style>
            {`
              @keyframes neon-border {
                0%, 100% {
                  box-shadow: 0 0 20px rgba(0, 0, 255, 0.5), 0 0 40px rgba(0, 0, 255, 0.3), 0 0 60px rgba(0, 0, 255, 0.2);
                }
                50% {
                  box-shadow: 0 0 30px rgba(0, 0, 255, 0.7), 0 0 50px rgba(0, 0, 255, 0.5), 0 0 70px rgba(0, 0, 255, 0.3);
                }
              }
            `}
          </style>
          <h2 className="text-2xl font-bold mb-4 text-center text-white">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-blue-500 to-blue-700 text-white font-medium hover:opacity-80 transition-all duration-300 h-11 rounded-md px-8"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;