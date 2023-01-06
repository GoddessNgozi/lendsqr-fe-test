import Login from "./pages/Login";
import { Routes, Route } from 'react-router-dom';
//import UserDetails from "./pages/UserDetails";
//import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
