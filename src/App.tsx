import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './components/Navbar';
import { Features } from 'tailwindcss';

function App() {
  return (
    <Router> {/* Wrap your app with Router */}
      <div>
        <Navbar />
   
      </div>
    </Router>
  );
}

export default App;
