import Login from "./pages/Login/Login";
import { Routes, Route } from 'react-router-dom';
import UserDetails from "./pages/UserDetails/UserDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/details/:name" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
