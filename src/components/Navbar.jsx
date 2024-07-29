import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/css/Navbar.css'; // Ensure this path is correct
import { Menu, LogOut, ScanEye, Bird, LibraryBig, HopOff, Podcast, House, BookOpen, BadgePercent, Sun, MoonStar, Sparkle, ScanFace, NotebookText } from 'lucide-react';
import Loader from './Loader'; // Import the Loader component

const Navbar = ({ onMenuClick, theme, toggleTheme }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/home');
    }, 2000); // Adjust the delay as needed
  };

  const handlePodcastClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/podcast');
    }, 2000); // Adjust the delay as needed
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/signup');
    }, 2000); // Adjust the delay as needed
  };

  return (
    <header className="navbar">
      {loading && <Loader />}
      <div className="navbar-logo">
        LittleLooms <HopOff />
      </div>
      <nav className="navbar-navigation">
        <a href="/home" onClick={handleHomeClick}><House /></a>
        <a href="/podcast" onClick={handlePodcastClick}><Podcast /></a>
        <Link to="/premium"><BadgePercent /></Link>
        <Link to="/login"><ScanFace /></Link>
        <a href="/signup" onClick={handleSignupClick}><NotebookText /></a> {/* Use <a> with onClick */}
        <Link to="/userdash"><LibraryBig/></Link>
      </nav>
      <button className="navbar-theme-toggle-button" onClick={toggleTheme}>
        {theme === 'light' ? <MoonStar /> : <Sun />}
      </button>
    </header>
  );
};

export default Navbar;
