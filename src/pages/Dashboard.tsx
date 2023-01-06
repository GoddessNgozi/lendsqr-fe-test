import {useState, useEffect} from 'react'
import Header from "../components/Header";
import SideBar from '../components/Sidebar';
import {UserType} from "../types/User.types";
import filterIcon from '../assets/icons/filter.svg';

  const Dashboard = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
      fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
      .then(response => response.json())
      .then(res => setUsers(res))
    }, []);

    const userDeets = users;
    localStorage.setItem('userDeets', JSON.stringify(userDeets));

    return (
      <div>
        <Header />
        <SideBar />

        <main>
        <div>
          <img src="" alt="" />
          <p>USERS</p>
          <p>{users.length}</p>
        </div>

        <div>
          <img src="" alt="" />
          <p>ACTIVE USERS</p>
          <p>{users.length}</p>
        </div>

        <div>
          <img src="" alt="" />
          <p>USERS WITH LOANS</p>
          <p>{users.length}</p>
        </div>

        <div>
          <img src="" alt="" />
          <p>USERS WITH SAVINGS</p>
          <p>{users.length}</p>
        </div>

        <table>
        <thead>
        <tr>
          <th><span>ORGANIZATION</span><button><img src={filterIcon} alt="" /></button></th>
          <th><span>USERNAME</span><button><img src={filterIcon} alt="" /></button></th>
          <th><span>EMAIL</span><button><img src={filterIcon} alt="" /></button></th>
          <th><span>PHONE NUMBER</span><button><img src={filterIcon} alt="" /></button></th>
          <th><span>DATE JOINED</span><button><img src={filterIcon} alt="" /></button></th>
          <th><span>STATUS</span><button><img src={filterIcon} alt="" /></button></th>
        </tr>
        </thead>
        <tbody>
        {users.map((user: UserType) => 
                <tr key={user.id}>
                <td>{user.orgName}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.createdAt}</td>
                <td>status</td>
                </tr>)}
                </tbody>
        </table>
    
        </main>
      </div>
    );
  };

  export default Dashboard;