import { useState, useEffect } from 'react';
import api from '../api/api';

const CreateProject = () => {
  const [form, setForm] = useState({ title: '', description: '', goals: '' });
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  useEffect(() => {
    api.get('skills/').then(res => setSkills(res.data));
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('projects/', form);
      const projectId = res.data.id;
      await api.patch(`projects/${projectId}/`, { technologies: selectedSkills });

      alert('Project created');
    } catch (err) {
      alert('Error creating project');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" onChange={handleChange} placeholder="Title" />
      <textarea name="description" onChange={handleChange} placeholder="Description" />
      <textarea name="goals" onChange={handleChange} placeholder="Goals" />
      <div>
        {skills.map(skill => (
          <label key={skill.id}>
            <input
              type="checkbox"
              value={skill.id}
              onChange={e => {
                const val = parseInt(e.target.value);
                setSelectedSkills(prev =>
                  prev.includes(val) ? prev.filter(s => s !== val) : [...prev, val]
                );
              }}
            />
            {skill.name}
          </label>
        ))}
      </div>
      <button type="submit">Create Project</button>
    </form>
  );
};

export default CreateProject;