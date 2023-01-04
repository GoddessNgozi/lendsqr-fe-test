import {useState, useEffect} from 'react'
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import {UserType} from "../../types/User.types";
import filterIcon from '../../assets/icons/filter.svg';
import dotsIcon from '../../assets/icons/3dots.svg';
import viewIcon from '../../assets/icons/view.svg';
import blacklistIcon from '../../assets/icons/blacklist.svg';
import activateIcon from '../../assets/icons/activate.svg';
import './user.css';

  const User = () => {
    const [users, setUsers] = useState([]);
    

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
          <th className="dropdown"><span>ORGANIZATION</span><button className="dropbtn"><img src={filterIcon} alt="" /></button>
          <div className="dropdown-content">
          <form>
  Organization
    <select>
      <option value="options">options</option>
      <option value="options">options</option>
      <option value="options">options</option>
    </select>
    <label htmlFor="">Username</label>
    <input type="text" />
    <label htmlFor="Email"></label>
    <input type="email" name="" id="" placeholder='Email' />
    <label htmlFor="Date"></label>
    <input type="date" name="" id="" placeholder='Date' />
    <input type="number" name="" id="" />
    <label htmlFor="">Status</label>
    <select>
      <option value="options">options</option>
      <option value="options">options</option>
      <option value="options">options</option>
    </select>
    <div>
        <button type="reset">Reset</button>
        <button type="submit">Filter</button>
    </div>
</form>
  </div>
  </th>
          <th><span>USERNAME</span><button><img src={filterIcon} alt="" /></button></th>
          <th><span>EMAIL</span><button><img src={filterIcon} alt="" /></button></th>
          <th><span>PHONE NUMBER</span><button><img src={filterIcon} alt="" /></button></th>
          <th><span>DATE JOINED</span><button><img src={filterIcon} alt="" /></button></th>
          <th><span>STATUS</span><button><img src={filterIcon} alt="" /></button></th>
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
                <td className='dropdown-two'><span>status</span>
                <button className="dropbtn"><img src={dotsIcon} alt="" /></button>
                <div className="dropdown-content-two">
                    <div>
                        <img src={viewIcon} alt="" />
                        <button>View Details</button>
                    </div>
                    <div>
                        <img src={blacklistIcon} alt="" />
                        <button>Blacklist User</button>
                    </div>
                    <div>
                        <img src={activateIcon} alt="" />
                        <button>Activate User</button>
                    </div>
                </div>
                </td>
                </tr>)}
                </tbody>
        </table>
    
        </main>
      </div>
    );
  };

  export default User;