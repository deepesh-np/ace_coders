import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Welcome to SkillHub</h1>
        <p className="description">
          Connect with learners, professionals, and mentors to collaborate, build, and grow — all in one skill-driven platform.
        </p>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Learn</h3>
            <p>Access curated resources and real-world projects based on your interests and skill level.</p>
          </div>
          <div className="feature-card">
            <h3>Build</h3>
            <p>Collaborate with others to build portfolio-worthy projects and solve meaningful problems.</p>
          </div>
          <div className="feature-card">
            <h3>Mentor</h3>
            <p>Guide others, share your experience, and grow your influence in the community.</p>
          </div>
        </div>
        <button className="get-started-btn" onClick={() => alert("Redirecting to signup...")
        }>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;