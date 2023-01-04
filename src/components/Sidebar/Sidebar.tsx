import loansIcon from '../../assets/icons/loans.svg';
import usersIcon from '../../assets/icons/users-icon.svg';
import handshake from '../../assets/icons/handshake-regular1.svg'
import karmaIcon from '../../assets/icons/user-times 1.svg';
import savingsIcon from '../../assets/icons/piggy-bank 1.svg';
import guarantorsIcon from '../../assets/icons/guarantors.svg';
import whitelistIcon from '../../assets/icons/user-check 1.svg';
import loanRequestsIcon from '../../assets/icons/loan-requests.svg';
import organisationsIcon from '../../assets/icons/briefcase 1.svg';
import savingsProductsIcon from '../../assets/icons/Group.svg';
import servicesIcon from '../../assets/icons/galaxy 1.svg';
import settlementsIcon from '../../assets/icons/scroll 1.svg';
import transactionsIcon from '../../assets/icons/transactions.svg';
import reportsIcon from '../../assets/icons/chart-bar 2.svg';
import preferencesIcon from '../../assets/icons/sliders-h 1.svg';
import pricingIcon from '../../assets/icons/badge-percent 1.svg';
import auditIcon from '../../assets/icons/clipboard-list 1.svg';
import dashboardIcon from '../../assets/icons/home-icon.svg';
import dropdownIcon from '../../assets/icons/dropdown-arrow.svg';

const SideBar = () => {
  return (
    <aside className='sidebar'>
        <div>
            <img className='icon' src={organisationsIcon} alt='switch organization' />
            <p>Switch Organization</p>
            <img className='icon' src={dropdownIcon} alt='dropdown' />
        </div>

        <div>
            <img className='icon' src={dashboardIcon} alt='dashboard' />
            <p>Dashboard</p>
        </div>

        <ul>
                <p>CUSTOMERS</p>
                <li>
                    <img className='icon' src={usersIcon} alt='user icon' />
                    <p>Users</p>
                </li>
                <li>
                    <img className='icon' src={guarantorsIcon} alt='guarantors icon' />
                    <p>Guarantors</p>
                </li>
                <li>
                    <img className='icon' src={loansIcon} alt='loans icon' />
                    <p>Loans</p>
                </li>
                <li>
                    <img className='icon' src={handshake} alt='handshake icon' />
                    <p>Decision Models</p>
                </li>
                <li>
                    <img className='icon' src={savingsIcon} alt='savings icon' />
                    <p>Savings</p>
                </li>
                <li>
                    <img className='icon' src={loanRequestsIcon} alt='loanRequests icon' />
                    <p>Loan Requests</p>
                </li>
                <li>
                    <img className='icon' src={whitelistIcon} alt='whitelist icon' />
                    <p>Whitelist</p>
                </li>
                <li>
                    <img className='icon' src={karmaIcon} alt='karma icon' />
                    <p>Karma</p>
                </li>
            </ul>

            <ul>
                <p>BUSINESSES</p>
                <li>
                    <img className='icon' src={organisationsIcon} alt='organisations icon' />
                    <p>Organization</p>
                </li>
                <li>
                    <img className='icon' src={guarantorsIcon} alt='guarantors icon' />
                    <p>Loan Products</p>
                </li>
                <li>
                    <img className='icon' src={savingsProductsIcon} alt='savingsProducts icon' />
                    <p>Savings Products</p>
                </li>
                <li>
                    <img className='icon' src={handshake} alt='handshake icon' />
                    <p>Fees and Charges</p>
                </li>
                <li>
                    <img className='icon' src={transactionsIcon} alt='savings icon' />
                    <p>Transactions</p>
                </li>
                <li>
                    <img className='icon' src={servicesIcon} alt='loanRequests icon' />
                    <p>Services</p>
                </li>
                <li>
                    <img className='icon' src={whitelistIcon} alt='whitelist icon' />
                    <p>Service Account</p>
                </li>
                <li>
                    <img className='icon' src={settlementsIcon} alt='karma icon' />
                    <p>Settlements</p>
                </li>
                <li>
                    <img className='icon' src={reportsIcon} alt='karma icon' />
                    <p>Reports</p>
                </li>
            </ul>

            <ul>
                <p>SETTINGS</p>
                <li>
                    <img className='icon' src={preferencesIcon} alt='organisations icon' />
                    <p>Preferences</p>
                </li>
                <li>
                    <img className='icon' src={pricingIcon} alt='guarantors icon' />
                    <p>Fees and Pricing</p>
                </li>
                <li>
                    <img className='icon' src={auditIcon} alt='savingsProducts icon' />
                    <p>Audit Logs</p>
                </li>
            </ul>

    </aside>
  );
};

export default SideBar;
