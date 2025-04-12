// import { useEffect, useState } from 'react';
// import api from '../api/api';


// const ProjectList = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     api.get('projects/')
//       .then(res => setProjects(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h2>Projects</h2>
//       <ul>
//         {projects.map(p => (
//           <li key={p.id}>
//             <strong>{p.title}</strong> by {p.created_by.username}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProjectList;