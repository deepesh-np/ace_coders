import { useEffect, useState } from 'react';
import api from '../api/api';

const Mentorships = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [selectedMentor, setSelectedMentor] = useState(null);

  useEffect(() => {
    api.get('users/').then(res => setUsers(res.data.filter(u => u.is_mentor)));
  }, []);

  const sendRequest = async () => {
    try {
      await api.post('mentorships/', {
        mentor: selectedMentor,
        message,
      });
      alert('Request sent');
    } catch {
      alert('Failed to send');
    }
  };

  return (
    <div>
      <h3>Available Mentors</h3>
      {users.map(u => (
        <div key={u.id}>
          <span>{u.username}</span>
          <button onClick={() => setSelectedMentor(u.id)}>Select</button>
        </div>
      ))}
      {selectedMentor && (
        <>
          <textarea
            onChange={e => setMessage(e.target.value)}
            placeholder="Write your message..."
          />
          <button onClick={sendRequest}>Send Mentorship Request</button>
        </>
      )}
    </div>
  );
};

export default Mentorships;