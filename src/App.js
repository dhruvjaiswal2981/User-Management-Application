import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './styles.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [error, setError] = useState('');

  // Fetch users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users.');
      }
    };
    fetchUsers();
  }, []);

  // Add or Update User
  const handleSaveUser = async (user) => {
    if (user.id) {
      // Edit User
      try {
        await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
        setUsers((prev) =>
          prev.map((u) => (u.id === user.id ? { ...u, ...user } : u))
        );
        setSelectedUser(null);
      } catch (err) {
        setError('Failed to update user.');
      }
    } else {
      // Add User
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
        setUsers((prev) => [...prev, { ...user, id: response.data.id }]);
      } catch (err) {
        setError('Failed to add user.');
      }
    }
    setFormVisible(false);
  };

  // Delete User
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      setError('Failed to delete user.');
    }
  };

  return (
    <div className="app-container">
      <h1>User Management App</h1>
      {error && <div className="error-message">{error}</div>}
      <button onClick={() => setFormVisible(true)}>Add User</button>
      {isFormVisible && (
        <UserForm
          user={selectedUser}
          onSave={handleSaveUser}
          onCancel={() => setFormVisible(false)}
        />
      )}
      <UserList
        users={users}
        onEdit={(user) => {
          setSelectedUser(user);
          setFormVisible(true);
        }}
        onDelete={handleDeleteUser}
      />
      
    </div>
  );
};

export default App;
