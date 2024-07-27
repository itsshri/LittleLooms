// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../components/css/Navbar.css'; // Ensure this path is correct
// import { Menu, LogOut, ScanEye, Bird, LibraryBig, HopOff, Podcast, House, BookOpen, BadgePercent, Sun, MoonStar, Sparkle, ScanFace } from 'lucide-react';
// import Loader from './Loader'; // Import the Loader component

// const Navbar = ({ onMenuClick, theme, toggleTheme }) => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleHomeClick = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       navigate('/home');
//     }, 2000); // Adjust the delay as needed
//   };

//   const handlePodcastClick = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       navigate('/podcast');
//     }, 2000); // Adjust the delay as needed
//   };

//   const handleScanEyeClick = () => {
//     navigate('/login'); 
//   };

//   return (
//     <header className="navbar">
//       {loading && <Loader />}
//       <LibraryBig />
//       <HopOff />
//       <div className="navbar-logo">
//         LittleLooms <Sparkle />
//       </div>
//       <nav className="navbar-navigation">
//         <a href="/home" onClick={handleHomeClick}><House /></a>
//         <a href="/podcast" onClick={handlePodcastClick}><Podcast /></a>
//         <Link to="/book"><BookOpen /> </Link>
//         <Link to="/enquiry"><BadgePercent /> </Link>
//         <Link to="/login"><ScanFace /> </Link>
//       </nav>
//       <button className="navbar-theme-toggle-button" onClick={toggleTheme}>
//         {theme === 'light' ? <MoonStar /> : <Sun />}
//       </button>
//       <LogOut />
//     </header>
//   );
// };

// export default Navbar;


// correct code-1

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../components/css/Navbar.css'; // Ensure this path is correct
// import { Menu, LogOut, ScanEye, Bird, LibraryBig, HopOff, Podcast, House, BookOpen, BadgePercent, Sun, MoonStar, Sparkle, ScanFace } from 'lucide-react';
// import Loader from './Loader'; // Import the Loader component
// // import { Dashboard } from './Dashboard';

// const Navbar = ({ onMenuClick, theme, toggleTheme }) => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleHomeClick = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       navigate('/home');
//     }, 2000); // Adjust the delay as needed
//   };

//   const handlePodcastClick = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       navigate('/podcast');
//     }, 2000); // Adjust the delay as needed
//   };

//   const handleScanEyeClick = () => {
//     navigate('/login'); 
//   };

//   const handleBookOpenClick = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       navigate('/book'); // Navigate to Dashboard
//     }, 2000); // Adjust the delay as needed
//   };

//   return (
//     <header className="navbar">
//       {loading && <Loader />}
//       <LibraryBig />
//       <HopOff />
//       <div className="navbar-logo">
//         LittleLooms <Sparkle />
//       </div>
//       <nav className="navbar-navigation">
//         <a href="/home" onClick={handleHomeClick}><House /></a>
//         <a href="/podcast" onClick={handlePodcastClick}><Podcast /></a>
//         <a href="/book" onClick={handleBookOpenClick}><BookOpen /></a> {/* Use <a> with onClick */}
//         <Link to="/enquiry"><BadgePercent /> </Link>
//         <Link to="/login"><ScanFace /> </Link>
//       </nav>
//         {/* <a href="/dashboard" onClick={handleBookOpenClick}><Dashboard /></a>  */}
//       <button className="navbar-theme-toggle-button" onClick={toggleTheme}>
//         {theme === 'light' ? <MoonStar /> : <Sun />}
//       </button>
//       <LogOut />
//     </header>
//   );
// };

// export default Navbar;





import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/css/Navbar.css'; // Ensure this path is correct
import { Menu, LogOut, ScanEye, Bird, LibraryBig, HopOff, Podcast, House, BookOpen, BadgePercent, Sun, MoonStar, Sparkle, ScanFace } from 'lucide-react';
import Loader from './Loader'; // Import the Loader component
import { Library } from 'lucide-react';

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

  const handleScanEyeClick = () => {
    navigate('/login'); 
  };

  const handleLibraryBigClick = () => {
    navigate('/dashboard'); // Navigate to Dashboard
  };

  return (
    <header className="navbar">
      {loading && <Loader />}
      <HopOff />
      <div className="navbar-logo">
        LittleLooms <Sparkle />
      </div>
      <nav className="navbar-navigation">
        <a href="/home" onClick={handleHomeClick}><House /></a>
        <a href="/podcast" onClick={handlePodcastClick}><Podcast /></a>
        <Link to="/book"><BookOpen /></Link>
        <Link to="/enquiry"><BadgePercent /></Link>
        <Link to="/login"><ScanFace /></Link>
      </nav>
      <button className="navbar-theme-toggle-button" onClick={toggleTheme}>
        {theme === 'light' ? <MoonStar /> : <Sun />}
      </button>
      <Link to="/book"><Library /></Link>
    </header>
      
  );
};

export default Navbar;
