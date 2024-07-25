import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Adjust the import path as needed

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
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<div>Courses</div>} />
        <Route path="/visa-services" element={<div>Services</div>} />
        <Route path="/enquiry" element={<div>Enquiry</div>} />
      </Routes>
    </Router>
  );
};

export default App;
