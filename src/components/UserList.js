import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => (
  <div className="user-list">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name || 'N/A'}</td> {/* Use user.name for full name */}
            <td>{user.email || 'N/A'}</td>
            <td>{user.department || 'N/A'}</td> {/* Handle department dynamically */}
            <td>
              <button onClick={() => onEdit(user)}>Edit</button>
              <button onClick={() => onDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UserList;
