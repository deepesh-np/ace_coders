import React from 'react';
import './Dashboard.css';

import Profile from '../Profile/Profile';
import ProjectList from '../ProjectList/ProjectList';
import CreateProject from '../components/CreateProject';
import Mentorships from '../components/Mentorships';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <Profile />
      <ProjectList />
      <CreateProject />
      <Mentorships />
    </div>
  );
};

export default Dashboard;
