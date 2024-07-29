import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import {
  homeOutline,
  peopleOutline,
  chatbubbleOutline,
  helpOutline,
  settingsOutline,
  lockClosedOutline,
  logOutOutline
} from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import '../admin/Admindash.css';

function Admindash() {
  const [users, setUsers] = useState([]);
  const [metrics, setMetrics] = useState({
    dailyViews: 0,
    sales: 0,
    comments: 0,
    earnings: 0
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigate = useNavigate();

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

  function handleSignOut() {
    navigate('/login');
  }

  return (
    <div className="container">
      {/* Navigation */}
      <div className="navigation">
        <ul>
          <li><a href="#"><span className="icon"><IonIcon icon={homeOutline} /></span></a></li>
          <li><a href="#"><span className="icon"><IonIcon icon={peopleOutline} /></span><span className="title">Manage Users</span></a></li>
          {/* <li><a href="#"><span className="icon"><IonIcon icon={chatbubbleOutline} /></span><span className="title">Messages</span></a></li> */}
          {/* <li><a href="#"><span className="icon"><IonIcon icon={helpOutline} /></span><span className="title">Help</span></a></li> */}
          {/* <li><a href="#"><span className="icon"><IonIcon icon={settingsOutline} /></span><span className="title">Settings</span></a></li> */}
          {/* <li><a href="#"><span className="icon"><IonIcon icon={lockClosedOutline} /></span><span className="title">Password</span></a></li> */}
          <li><a href="#" onClick={handleSignOut}><span className="icon"><IonIcon icon={logOutOutline} /></span><span className="title">Sign Out</span></a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        {/* Topbar */}
        <div className="topbar">
          <div className="toggle">
            {/* <IonIcon icon={menuOutline} /> */}
          </div>
          <div className="search">
            <label>
              <input type="text" placeholder="Search here" value={searchQuery} onChange={handleSearchChange} />
            </label>
          </div>
          <div className="user">
            <img src="https://cdn-icons-png.flaticon.com/256/3585/3585442.png" alt="User" />
          </div>
        </div>

        {/* Card Box */}
        <div className="cardBox">
          {/* Your card components */}
        </div>

        {/* Details */}
        <div className="details">
          {/* Recent Orders */}
          <div className="recentOrders">
            <div className="cardHeader">
              <h2>Recent Orders</h2>
              <a href="#" className="btn">View All</a>
            </div>
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user, index) => (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.price}</td>
                      <td>{user.payment}</td>
                      <td>
                        <span className={`status ${user.status.toLowerCase().replace(' ', '')}`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No orders available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Recent Customers */}
          <div className="recentCustomers">
            <div className="cardHeader">
              <h2>Recent Customers</h2>
            </div>
            <table>
              <tbody>
                {users.length > 0 ? (
                  users.slice(0, 2).map((user, index) => (
                    <tr key={index}>
                      <td width="60px">
                        <div className="imgBx"><img src="src/assets/img/1000028198_ac627fcd241cb9174bc94.jpg" alt="Customer" /></div>
                      </td>
                      <td>
                        <h4>{user.name} <br /><span>Location</span></h4>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2">No recent customers</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* User Management Section */}
        <div className="userManagement">
          <div className="cardHeader">
            <h2>Manage Users</h2>
          </div>
          <div className="form">
            <input type="text" id="userName" placeholder="User Name" />
            <input type="email" id="userEmail" placeholder="User Email" />
            <button className="addUserButton" onClick={addUser}>Add User</button>
          </div>
          <div className="userList">
            {filteredUsers.map((user, index) => (
              <div key={index} className="userCard">
                <h4>{user.name}</h4>
                <p>{user.email}</p>
                <button onClick={() => handleUserAction(index, 'remove')}>Remove</button>
              </div>
            ))}
          </div>

          {/* Existing Users Section */}
          <div className="existingUsers">
            <div className="cardHeader">
              <h2>Existing Users</h2>
            </div>
            <div className="userTable">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user, index) => (
                      <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          <button onClick={() => handleUserAction(index, 'remove')}>Remove</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">No users available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admindash;
