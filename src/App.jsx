import Register from './components/Register/Register.js';
import Logout from './components/Logout/Logout.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import HomePage from '../src/components/Home/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
              <Logout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}