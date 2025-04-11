import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Welcome to Your Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Your Projects</h3>
          <p>View and manage the projects you’ve created or joined.</p>
          <a href="/projects" className="dashboard-link">Go to Projects</a>
        </div>
        <div className="dashboard-card">
          <h3>Mentorship</h3>
          <p>Explore available mentors and mentees based on your interests.</p>
          <a href="/mentorship" className="dashboard-link">Find Mentors</a>
        </div>
        <div className="dashboard-card">
          <h3>Your Profile</h3>
          <p>Edit your skills, bio, and experiences to attract collaborators.</p>
          <a href="/profile" className="dashboard-link">Update Profile</a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;