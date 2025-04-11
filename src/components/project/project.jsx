// Project.js
import React, { useState } from 'react';

const Project = ({ onCreateProject }) => {
  const [projectName, setProjectName] = useState('');
  const [skillsRequired, setSkillsRequired] = useState('');
  const [goal, setGoal] = useState('');
  
  const handleCreateProject = () => {
    onCreateProject({ projectName, skillsRequired, goal });
    setProjectName('');
    setSkillsRequired('');
    setGoal('');
  };

  return (
    <div className="project-container">
      <h2>Create a New Project</h2>
      <input 
        type="text" 
        placeholder="Project Name" 
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Skills Required (comma separated)" 
        value={skillsRequired}
        onChange={(e) => setSkillsRequired(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Project Goal" 
        value={goal}
        onChange={(e) => setGoal(e.target.value)} 
      />
      <button onClick={handleCreateProject}>Create Project</button>
    </div>
  );
};

export default Project;
