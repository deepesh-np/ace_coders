import Register from './components/Register/Register.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard/Dashboard.jsx';
import './App.css';
import Logout from './components/Logout/Logout.jsx';
import Login from './components/Login/login.jsx';
import Navbar from './components/navbar.jsx';
import ContactUs from './pages/contact/contact.jsx';
import mentorship from './components/mentorship/mentorship.jsx';
// import ProtectedRoute from './components/ProtectedRoute.jsx';
import HomePage from '../src/components/Home/home.jsx';
import Createproject from './components/CreateProject/CreateProject.jsx'
import About from './pages/About/About.jsx'

function App() {
  return (
    <Router>
      <Navbar /> {/* Adding Navbar component */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mentorship" element={<mentorship />} />
        <Route path="/createproject" element={<Createproject />} />
        <Route path="/about" element={<About />} />
         
        <Route
          path="/dashboard"
          
        />
      </Routes>
    </Router>
  );
}
export default App;