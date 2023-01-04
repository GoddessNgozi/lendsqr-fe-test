import {useState, useEffect} from 'react'
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import {UserType} from "../../types/User.types";

  const Dashboard = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
      fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
      .then(response => response.json())
      .then(res => setUsers(res))
    }, []);

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
          <th>ORGANIZATION</th>
          <th>USERNAME</th>
          <th>EMAIL</th>
          <th>PHONE NUMBER</th>
          <th>DATE JOINED</th>
          <th>STATUS</th>
        </tr>
        </thead>
        <tbody>
        {users.map((user: UserType) => 
                <tr>
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