import Header from "../../components/Header/Header";
import SideBar from "../../components/Sidebar/Sidebar";


  const UserDetails = () => {
    const userDeets = JSON.parse(localStorage.getItem('userDeets') || '[]');
    return (
      <>
        <Header />
        <SideBar />
        <main>
        {
              userDeets.filter((userDeet: any) => userDeet.showDetails === true).map((userDeet: any) => (
                <div key={userDeet.id}><ul>
                      <li><img src={userDeet.avatar} alt="" />
                          <p></p>
                          <p></p>
                      </li>
                      <li>
                          <p></p>
                          <img src="" alt="" />
                      </li>
                      <li>
                          <p></p>
                          <p></p>
                      </li>
                  </ul><nav>
                          <ul>
                              <li>General Details</li>
                              <li>Documenets</li>
                              <li>Bank Details</li>
                              <li>Loans</li>
                              <li>Savings</li>
                              <li>App and System</li>
                          </ul>
                      </nav><section className='generalDetails'>
                          <ul>
                              Personal Information
                              <li>
                                  <p>FULL NAME</p>
                                  <p>{userDeet.userName}</p>
                              </li>
                              <li>
                                  <p>PHONE NUMBER</p>
                                  <p>{userDeet.phoneNumber}</p>
                              </li>
                              <li>
                                  <p>EMAIL ADDRESS</p>
                                  <p>{userDeet.email}</p>
                              </li>
                              <li>
                                  <p>BVN</p>
                                  <p></p>
                              </li>
                              <li>
                                  <p>FULL NAME</p>
                                  <p></p>
                              </li>
                              <li>
                                  <p>GENDER</p>
                                  <p></p>
                              </li>
                              <li>
                                  <p>MARITAL STATUS</p>
                                  <p></p>
                              </li>
                              <li>
                                  <p>CHILDREN</p>
                                  <p></p>
                              </li>
                              <li>
                                  <p>TYPE OF RESIDENCE</p>
                                  <p></p>
                              </li>
                          </ul>

                          <ul>
                              Education and Employment
                              <li>
                                  <p>LEVEL OF EDUCATION</p>
                                  <p>{userDeet.email}</p>
                              </li>
                              <li>
                                  <p>EMPLOYMENT STATUS</p>
                                  <p></p>
                              </li>
                              <li>
                                  <p>SECTOR OF EMPLOYMENT</p>
                                  <p></p>
                              </li>
                              <li>
                                  <p>DURATION OF EMPLOYMENT</p>
                                  <p></p>
                              </li>
                              <li>
                                  <p>OFFICE EMAIL</p>
                                  <p></p>
                              </li>
                              <li>
                                  <p>MONTHLY INCOME</p>
                                  <p></p>
                              </li>
                              <li>
                                  <p>LOAN REPAYMENT</p>
                                  <p></p>
                              </li>
                          </ul>

                          <ul>
                              Socials
                              <li>
                                  <p>TWITTER</p>
                                  <p></p>
                              </li>
                              <li>
                                  <p>FACEBOOK</p>
                                  <p></p>
                              </li>
                              <li>
                                  <p>INSTAGRAM</p>
                                  <p></p>
                              </li>
                          </ul>

                          <div>
                              <ul>
                                  Guarantor
                                  <li>
                                      <p>FULL NAME</p>
                                      <p></p>
                                  </li>
                                  <li>
                                      <p>PHONE NUMBER</p>
                                      <p></p>
                                  </li>
                                  <li>
                                      <p>EMAIL ADDRESS</p>
                                      <p></p>
                                  </li>
                                  <li>
                                      <p>RELATIONSHIP</p>
                                      <p></p>
                                  </li>
                              </ul>

                              <ul>
                                  <li>
                                      <p>FULL NAME</p>
                                      <p></p>
                                  </li>
                                  <li>
                                      <p>PHONE NUMBER</p>
                                      <p></p>
                                  </li>
                                  <li>
                                      <p>EMAIL ADDRESS</p>
                                      <p></p>
                                  </li>
                                  <li>
                                      <p>RELATIONSHIP</p>
                                      <p></p>
                                  </li>
                              </ul>
                          </div>
                      </section></div>
              ))
          }
        </main>
      </>
    );
  };

  export default UserDetails;