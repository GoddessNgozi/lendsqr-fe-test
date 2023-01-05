// import Login from "./pages/Login/Login";
import { Routes, Route } from 'react-router-dom';
import UserDetails from "./pages/UserDetails/UserDetails";
import User from './pages/User/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
