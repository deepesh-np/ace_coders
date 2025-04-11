// Profile.js
import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <h2>{user.name}'s Profile</h2>
      <div className="profile-info">
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Skills:</strong> {user.skills.join(', ')}</p>
        <p><strong>Interests:</strong> {user.interests}</p>
        <p><strong>Past Projects:</strong></p>
        <ul>
          {user.pastProjects.map((project, idx) => (
            <li key={idx}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
