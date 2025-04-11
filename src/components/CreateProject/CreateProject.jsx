import React, { useState } from 'react';
import './ProjectForm.css';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form
    console.log('Submitted project:', formData);
    alert('Project submitted!');
    setFormData({ title: '', description: '', technologies: '' });
  };

  return (
    <div className="project-form-container">
      <h2 className="project-form-title">Submit Your Project</h2>
      <form className="project-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          rows={5}
          required
        />
        <input
          type="text"
          name="technologies"
          placeholder="Technologies (comma-separated)"
          value={formData.technologies}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;
