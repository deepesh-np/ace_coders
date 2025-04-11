import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Dashboard from './pages/Dashboard';
import Home from './components/Home/home'; // Capitalize 'Home' for consistency with React component naming

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home is the default route */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/login" element={<Login />} /> Add a login route for completeness */}
      </Routes>
    </Router>
  );
}

export default App;
