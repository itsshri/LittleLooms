import React, { useState } from 'react';
import { HopOff } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for Toastify
import '../admin/Admindash.css';
import Sidebar from './Sidebar';



const Userdash = () => {
  const [users, setUsers] = useState([]);
  const [metrics, setMetrics] = useState({
    dailyViews: 0,
    sales: 0,
    comments: 0,
    earnings: 0
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [profile, setProfile] = useState({
    name: 'Shri',
    email: 'shri@example.com'
  });

  // Function to handle search input changes
  function handleSearchChange(event) {
    const query = event.target.value;
    setSearchQuery(query);
    // Filter users based on the search query
    setFilteredUsers(users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    ));
  }

  // Function to add a new user
  function addUser() {
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;

    if (name && email) {
      const newUser = { 
        name, 
        email, 
        price: '$50', // Default price
        payment: 'Paid', // Default payment status
        status: 'New' // Default status
      };
      setUsers(prevUsers => {
        const updatedUsers = [...prevUsers, newUser];
        // Filter the updated list based on the search query
        setFilteredUsers(updatedUsers.filter(user =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase())
        ));
        return updatedUsers;
      });
      setMetrics(prevMetrics => ({
        ...prevMetrics,
        dailyViews: prevMetrics.dailyViews + 1,
        sales: prevMetrics.sales + 1,
        comments: prevMetrics.comments + 1
      }));
      document.getElementById('userName').value = '';
      document.getElementById('userEmail').value = '';
    } else {
      alert('Please fill in all fields.');
    }
  }

  // Function to handle user actions (e.g., remove user)
  function handleUserAction(index, action) {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.filter((_, i) => i !== index);
      // Filter the updated list based on the search query
      setFilteredUsers(updatedUsers.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      ));
      return updatedUsers;
    });
    setMetrics(prevMetrics => ({
      ...prevMetrics,
      comments: action === 'remove' ? prevMetrics.comments - 1 : prevMetrics.comments
    }));
  }

  function updateUserList(index, action) {
    if (action === 'edit') {
      const newName = prompt("Enter new name:", users[index].name);
      const newEmail = prompt("Enter new email:", users[index].email);
  
      if (newName && newEmail) {
        const updatedUser = { ...users[index], name: newName, email: newEmail };
        setUsers(prevUsers => {
          const updatedUsers = [...prevUsers];
          updatedUsers[index] = updatedUser;
          // Filter the updated list based on the search query
          setFilteredUsers(updatedUsers.filter(user =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase())
          ));
          return updatedUsers;
        });
      }
    } else if (action === 'remove') {
      setUsers(prevUsers => {
        const updatedUsers = prevUsers.filter((_, i) => i !== index);
        // Filter the updated list based on the search query
        setFilteredUsers(updatedUsers.filter(user =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase())
        ));
        return updatedUsers;
      });
      setMetrics(prevMetrics => ({
        ...prevMetrics,
        comments: prevMetrics.comments - 1
      }));
    }
  }

  // Function to handle profile update
  function handleProfileUpdate() {
    const name = document.getElementById('profileName').value;
    const email = document.getElementById('profileEmail').value;

    if (name && email) {
      setProfile({ name, email });
      toast.success('Profile Updated');
    } else {
      alert('Please fill in all fields.');
    }
  }

  return (
    <>
      <ToastContainer
        position="bottom-right"
        className="custom-toastify-container"
      />
      <input type="checkbox" id="nav-toggle" />
      <div className="dashboard-sidebar">
        <div className="">
          <h1>
            <span className="fab fa-asymmetrik"></span>
           {/* LittleLooms<HopOff /> */}
          </h1>
        </div>

        <div className="">
          <ul>
            <Sidebar />
          </ul>
        </div>
      </div>

      <div className="content-area">
        <header>
          <h2>
            <label htmlFor="nav-toggle">
              <span className="fas fa-bars"></span>
            </label>
            My Profile
          </h2>

          <div className="search-container">
            <span className="fas fa-search"></span>
            <input type="search" placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
          </div>

          <div className="user-info">
            <img src="https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f60a.svg" width="40" height="40" alt="profile-img" />
            <div>
              <h4>{profile.name}</h4> {/* Update profile name here */}
              <small>User</small>
            </div>
          </div>
        </header>

        <main>
          <div className="info-cards">
            <div className="info-card">
              <div>
                <h1>{metrics.dailyViews}</h1>
                <span>Daily Views</span>
              </div>
              <div>
                <span className="fas fa-eye"></span>
              </div>
            </div>
            <div className="info-card">
              <div>
                <h1>{metrics.sales}</h1>
                <span>Sales</span>
              </div>
              <div>
                <span className="fas fa-dollar-sign"></span>
              </div>
            </div>
            <div className="info-card">
              <div>
                <h1>{metrics.comments}</h1>
                <span>Comments</span>
              </div>
              <div>
                <span className="fas fa-comments"></span>
              </div>
            </div>
            <div className="info-card">
              <div>
                <h1>{metrics.earnings}</h1>
                <span>Earnings</span>
              </div>
              <div>
                <span className="fas fa-wallet"></span>
              </div>
            </div>
          </div>

          <div className="recent-activity">
            <div className="projects-section">
              <div className="card-container">
                <div className="card-header">
                  <h2>Recent Orders</h2>
                  <button>
                    See all <span className="fas fa-arrow-right"></span>
                  </button>
                </div>
                <div className="card-content">
                  <div className="table-container">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Name</td>
                          <td>Book Type</td>
                          <td>Payment Status</td>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Existing project rows */}
                        <tr>
                          <td>Heidi</td>
                          <td>$100</td>
                          <td>
                            <span className="status-indicator purple"></span>
                            Added in cart
                          </td>
                        </tr>
                        <tr>
                          <td>Tom and Jerry</td>
                          <td>$280</td>
                          <td>
                            <span className="status-indicator purple"></span>
                            Done
                          </td>
                        </tr>
                        <tr>
                          <td>Moral Science</td>
                          <td>$80</td>
                          <td>
                            <span className="status-indicator purple"></span>
                            Done
                          </td>
                        </tr>
                        <tr>
                          <td>Akbar & Birbal</td>
                          <td>$0</td>
                          <td>
                            <span className="status-indicator purple"></span>
                            Done
                          </td>
                        </tr>
                        <tr>
                          <td>Angry Birds</td>
                          <td>$150</td>
                          <td>
                            <span className="status-indicator purple"></span>
                            In Review
                          </td>
                        </tr>
                        {/* Add more project rows as needed */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="customers-section">
              <div className="card-container">
                <div className="card-header">
                  <h2>Edit Profile</h2>
                  <button>
                    See all <span className="fas fa-arrow-right"></span>
                  </button>
                </div>
                <div className="card-content">
                  <div className="form">
                    <input type="email" id="profileName" placeholder="Name" />
                    <input type="email" id="profileEmail" placeholder="Email" />
                    <input type="password" id="profilePassword" placeholder="Password" />
                    <input type="email" id="profileAddress" placeholder="Address" />
                    <input type="number" id="profileAddress" placeholder="Phone" />
                    <br></br>
                    <button onClick={handleProfileUpdate}>Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Userdash;
