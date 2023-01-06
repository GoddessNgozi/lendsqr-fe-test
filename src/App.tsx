import Login from "./pages/Login";
import { Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import "./styles/css/App.css";
//import UserDetails from "./pages/UserDetails";
//import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
