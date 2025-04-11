import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About SkillHub</h1>
        <p className="mission">
          SkillHub is a collaborative skill-based EdTech platform where learners, mentors, and professionals come together to grow through hands-on learning and meaningful collaboration.
        </p>

        <div className="core-values">
          <h2>Our Core Values</h2>
          <ul>
            <li><strong>Collaboration:</strong> We believe growth happens best in communities, not isolation.</li>
            <li><strong>Skill-First Learning:</strong> Education should be practical, project-driven, and personalized.</li>
            <li><strong>Mentorship:</strong> Great learning happens when experience is shared openly and generously.</li>
          </ul>
        </div>

        <div className="vision-section">
          <h2>Our Vision</h2>
          <p>
            We aim to empower individuals to build real-world skills, connect with like-minded peers, and thrive in an ecosystem where learning, building, and teaching are seamlessly interconnected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;