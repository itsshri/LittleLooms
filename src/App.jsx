import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import Podcast from './pages/Podcast';
import Login from './pages/Login';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  const handleMenuClick = () => {
    console.log('Menu clicked');
  };

  return (
    <Router>
      <Navbar
        onMenuClick={handleMenuClick}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/visa-services" element={<div>Services</div>} />
      </Routes>
    </Router>
  );
};

export default App;
