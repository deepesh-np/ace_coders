import React, { useEffect, useState } from 'react';
import './ProjectList.css';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Using dummy data while backend isn't connected
    const dummyProjects = [
      {
        id: 1,
        title: 'AI Tutor Bot',
        description: 'An AI-powered tutor bot that helps students learn programming.',
        technologies: ['React', 'Python', 'Django'],
        creator: 'Alice',
      },
      {
        id: 2,
        title: 'Study Sync',
        description: 'A collaborative study planning tool with real-time sync.',
        technologies: ['Node.js', 'MongoDB', 'Socket.io'],
        creator: 'Bob',
      },
    ];

    setProjects(dummyProjects);
  }, []);

  return (
    <div className="project-list-container">
      <h2 className="project-list-title">Explore Projects</h2>
      <div className="project-cards">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p className="creator">Created by: {project.creator}</p>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.technologies.map((tech, idx) => (
                <span className="tag" key={idx}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
