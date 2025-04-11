// Search.js
import React, { useState } from 'react';

const Search = ({ users, onSelectUser }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedRole ? user.role === selectedRole : true)
  );

  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder="Search by name..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <select 
        onChange={(e) => setSelectedRole(e.target.value)} 
        value={selectedRole}
      >
        <option value="">All Roles</option>
        <option value="Mentor">Mentor</option>
        <option value="Mentee">Mentee</option>
        <option value="Collaborator">Collaborator</option>
      </select>

      <div className="user-list">
        {filteredUsers.map(user => (
          <div key={user.id} className="user-item" onClick={() => onSelectUser(user)}>
            <h3>{user.name}</h3>
            <p>{user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
