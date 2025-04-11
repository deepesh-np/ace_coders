import Register from './components/Register/Register.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard/Dashboard.jsx';
import './App.css';
import Logout from './components/Logout/Logout.jsx';
import Login from './components/Login/login.jsx';

import ProtectedRoute from './components/ProtectedRoute.jsx';
// import HomePage from '../src/components/Home/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {/* <Dashboard /> */}
              <Logout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;