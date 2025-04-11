// Mentorship.js
import React from 'react';

const Mentorship = ({ mentors, onRequestMentorship }) => {
  return (
    <div className="mentorship-container">
      <h2>Find a Mentor</h2>
      <div className="mentor-list">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="mentor-item">
            <h3>{mentor.name}</h3>
            <p>{mentor.skills.join(', ')}</p>
            <button onClick={() => onRequestMentorship(mentor)}>Request Mentorship</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentorship;
