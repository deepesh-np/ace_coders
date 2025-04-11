import Profile from '../Profile/Profile';
import React from 'react';
import './Dashboard.css';
import ProjectList from '../ProjectList/ProjectList';
import CreateProject from '../components/CreateProject';

<CreateProject />
import Mentorships from '../components/Mentorships';

<Mentorships />

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