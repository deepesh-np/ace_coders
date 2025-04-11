import Profile from '../Profile/Profile';
import React from 'react';
import './Dashboard.css';
import ProjectList from '../ProjectList/ProjectList';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <Profile />
      <ProjectList />
    </div>
  );
};

export default Dashboard;