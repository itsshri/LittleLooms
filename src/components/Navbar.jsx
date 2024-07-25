import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/css/Navbar.css'; // Ensure this path is correct
import { Menu, LogOut, ScanEye, Bird, LibraryBig, HopOff, Podcast, House, BookOpen, BadgePercent, Sun, MoonStar, Sparkle, ScanFace } from 'lucide-react';
import Loader from './Loader'; // Import the Loader component

const Navbar = ({ onMenuClick, theme, toggleTheme }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePodcastClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/podcast');
    }, 2000); // Adjust the delay as needed
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/Home');
    }, 2000); // Adjust the delay as needed
  };

  const handleScanEyeClick = () => {
    navigate('/login'); 
  };

  return (
    <header className="navbar">
      {loading && <Loader />}
      <LibraryBig />
      <HopOff />
      <div className="navbar-logo">
        LittleLooms <Sparkle />
      </div>
      <nav className="navbar-navigation">
        <Link to="/home"><House /> </Link>
        {/* <a href="/home" onClick={handleHomeClick}><Home/></a> */}
        <a href="/podcast" onClick={handlePodcastClick}><Podcast /></a>
        <Link to="/visa-services"><BookOpen /> </Link>
        <Link to="/enquiry"><BadgePercent /> </Link>
        <Link to="/login"><ScanFace /> </Link>
      </nav>
      <button className="navbar-theme-toggle-button" onClick={toggleTheme}>
        {theme === 'light' ? <MoonStar /> : <Sun />}
      </button>
      <LogOut />
    </header>
  );
};

export default Navbar;
