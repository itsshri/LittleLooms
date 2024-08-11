import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../admin/Sidebar.css';
import { Heart } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
      <div className="sidebar">
        <h1>My Wishlist <Heart/></h1>
      <div className="sidebar-header">
        <br></br>
      </div>
        <br></br>
      <div className="sidebar-links">
        <button onClick={() => navigate('/userdash')} className="sidebar-button">
          My Profile
        </button>
        <button onClick={() => navigate('/edit')} className="sidebar-button">
          My Wishlist
        </button>
        <button onClick={() => navigate('/login')} className="sidebar-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
