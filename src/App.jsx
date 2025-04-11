// App.js
import React, { useState } from 'react';
import Profile from '../src/components/profile/profile';
import Search from '../src/components/search/search'
import Project from '../src/components/project/project';
import Mentorship from '../src/components/mentorship/mentorship';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [mentors, setMentors] = useState([]);
  const users = [
    // Sample user data
    { id: 1, name: 'John Doe', role: 'Mentor', skills: ['JavaScript', 'React'], interests: 'Web Development', pastProjects: [{ name: 'React App', link: 'https://github.com' }] },
    { id: 2, name: 'Jane Smith', role: 'Mentee', skills: ['JavaScript'], interests: 'Learning React', pastProjects: [] }
  ];

  const handleCreateProject = (project) => {
    setProjects([...projects, project]);
  };

  const handleRequestMentorship = (mentor) => {
    alert(`Mentorship requested from ${mentor.name}`);
  };

  return (
    <div className="app-container">
      <h1>Welcome to SkillSync</h1>

      <Search users={users} onSelectUser={setSelectedUser} />
      
      {selectedUser && <Profile user={selectedUser} />}

      <Project onCreateProject={handleCreateProject} />

      <Mentorship mentors={users.filter(user => user.role === 'Mentor')} onRequestMentorship={handleRequestMentorship} />
    </div>
  );
};

export default App;
