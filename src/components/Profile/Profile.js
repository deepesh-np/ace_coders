// import { useEffect, useState } from 'react';
// import api from '../api/api';

// const Profile = () => {
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     api.get('profiles/')
//       .then(res => setProfile(res.data[0]))  // Assume current user has one profile
//       .catch(err => console.error(err));
//   }, []);

//   return profile ? (
//     <div>
//       <h2>{profile.user.username}</h2>
//       <p>{profile.bio}</p>
//       <p><strong>Skills:</strong> {profile.skills.map(s => s.name).join(', ')}</p>
//     </div>
//   ) : <p>Loading...</p>;
// };

// export default Profile;