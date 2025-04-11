import React, { useEffect, useState } from 'react';
import './Mentorship.css';

const Mentorship = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    // Dummy mentor data for now
    const dummyMentors = [
      {
        id: 1,
        name: 'Dr. Lisa Kim',
        expertise: 'Machine Learning, Python',
        bio: '10+ years teaching AI and guiding student research.',
        available: true,
      },
      {
        id: 2,
        name: 'Raj Mehta',
        expertise: 'Full-Stack Development',
        bio: 'Senior dev at TechCorp, loves mentoring junior devs.',
        available: false,
      },
    ];

    setMentors(dummyMentors);
  }, []);

  return (
    <div className="mentorship-container">
      <h2 className="mentorship-title">Find a Mentor</h2>
      <div className="mentor-cards">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="mentor-card">
            <h3>{mentor.name}</h3>
            <p className="expertise">{mentor.expertise}</p>
            <p className="bio">{mentor.bio}</p>
            <span className={`status ${mentor.available ? 'available' : 'unavailable'}`}>
              {mentor.available ? 'Available' : 'Not Available'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentorship;
