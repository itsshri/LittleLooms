


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../components/css/Navbar.css'; // Ensure this path is correct
// import { Menu, LogOut, ScanEye, Bird, LibraryBig, HopOff, Podcast, House, BookOpen, BadgePercent, Sun, MoonStar } from 'lucide-react';


// const Navbar = ({ onMenuClick, theme, toggleTheme }) => {
//   const navigate = useNavigate();

//   const handleScanEyeClick = () => {
//     navigate('/login'); 
//   };

//   return (
//     <header className="navbar">
//       <LibraryBig />
//       {/* <Menu onClick={onMenuClick} /> */}
//       <ScanEye onClick={handleScanEyeClick} />
//       <HopOff />
//       <div className="navbar-logo">
//         NarrativeNest <Bird />
//       </div>
//       <nav className="navbar-navigation">
//         <Link to="/home"><House /> </Link>
//         <Link to="https://podcasts.google.com/"><Podcast /> </Link>
//         <Link to="/visa-services"><BookOpen /> </Link>
//         <Link to="/enquiry"><BadgePercent /> </Link>
//       </nav>
//       <button className="navbar-theme-toggle-button" onClick={toggleTheme}>
//         {theme === 'light' ? <MoonStar /> : <Sun />}
//       </button>
//       <LogOut />
//     </header>
//   );
// };

// export default Navbar;



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/css/Navbar.css'; // Ensure this path is correct
import { Menu, LogOut, ScanEye, Bird, LibraryBig, HopOff, Podcast, House, BookOpen, BadgePercent, Sun, MoonStar } from 'lucide-react';
import { Sparkle } from 'lucide-react';

const Navbar = ({ onMenuClick, theme, toggleTheme }) => {
  const navigate = useNavigate();

  const handleScanEyeClick = () => {
    navigate('/login'); 
  };

  return (
    <header className="navbar">
      <LibraryBig />
      {/* <Menu onClick={onMenuClick} /> */}
      <ScanEye onClick={handleScanEyeClick} />
      <HopOff />
      <div className="navbar-logo">
        LittleLooms <Sparkle />
      </div>
      <nav className="navbar-navigation">
        <Link to="/home"><House /> </Link>
        <Link to="https://podcasts.google.com/"><Podcast /> </Link>
        <Link to="/visa-services"><BookOpen /> </Link>
        <Link to="/enquiry"><BadgePercent /> </Link>
      </nav>
      <button className="navbar-theme-toggle-button" onClick={toggleTheme}>
        {theme === 'light' ? <MoonStar /> : <Sun />}
      </button>
      <LogOut />
    </header>
  );
};

export default Navbar;
