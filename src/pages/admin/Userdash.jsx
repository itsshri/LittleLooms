import React, { useState } from 'react';
import { HopOff } from 'lucide-react';
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

  return (
    <>
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
            <Sidebar/>
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
            <img src="https://bit.ly/3bvT89p" width="40" height="40" alt="profile-img" />
            <div>
              <h4>Shri</h4>
              <small>Super Admin</small>
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
                          <td>Status</td>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, index) => (
                          <tr key={index}>
                            <td>{user.name}</td>
                            <td>Book</td> {/* Example placeholder */}
                            <td>
                              <span className="status-indicator purple"></span>
                              {user.status}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="customers-section">
              <div className="card-container">
                <div className="card-header">
                  <h2>New Customers</h2>
                  <button>
                    See all <span className="fas fa-arrow-right"></span>
                  </button>
                </div>
                <div className="card-content">
                  <div className="form">
                    <input type="text" id="userName" placeholder="Name" />
                    <input type="email" id="userEmail" placeholder="Email" />
                    <button onClick={addUser}>Add User</button>
                  </div>
                  <div className="table-container">
                    <table width="100%">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Price</th>
                          <th>Payment</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, index) => (
                          <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.price}</td>
                            <td>{user.payment}</td>
                            <td>{user.status}</td>
                            <td>
                              <button onClick={() => handleUserAction(index, 'remove')}>Remove</button>
                              <button onClick={() => updateUserList(index, 'edit')}>Edit</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
