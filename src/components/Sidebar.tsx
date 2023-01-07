import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBriefcase,
    faChevronDown,
    faHouseChimney,
    faUserGroup,
    faUsers,
    faSackDollar,
    faHandshake,
    faPiggyBank,
    faHandHoldingUsd,
    faUserCheck,
    faUserXmark,
    faBuildingColumns,
    faCoins,
    faTaxi,
    faMobileScreen,
    faUserGear,
    faScroll,
    faChartColumn,
    faSliders,
    faCertificate,
    faClipboardList,
} from "@fortawesome/free-solid-svg-icons"

const SideBar = () => {
  return (
    <aside className='sidebar'>
        <div className='sidebar-top'>
           <FontAwesomeIcon icon={faBriefcase} />
            <span>Switch Organization</span>
            <FontAwesomeIcon icon={faChevronDown} />
        </div>

        <div className='sidebar-top'>
        <FontAwesomeIcon icon={faHouseChimney} />
            <span>Dashboard</span>
        </div>

        <ul className='side-menu'>
                <h6>CUSTOMERS</h6>
                <li>
                <FontAwesomeIcon icon={faUserGroup} />
                    <span>Users</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faUsers} />
                    <span>Guarantors</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faSackDollar} />
                    <span>Loans</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faHandshake} />
                    <span>Decision Models</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faPiggyBank} />
                    <span>Savings</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faHandHoldingUsd} />
                    <span>Loan Requests</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faUserCheck} />
                    <span>Whitelist</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faUserXmark} />
                    <span>Karma</span>
                </li>
            </ul>

            <ul>
                <h6>BUSINESSES</h6>
                <li>
                <FontAwesomeIcon icon={faBriefcase} />
                    <span>Organization</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faHandHoldingUsd} />
                    <span>Loan Products</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faBuildingColumns} />
                    <span>Savings Products</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faCoins} />
                    <span>Fees and Charges</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faMobileScreen} />
                    <span>Transactions</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faTaxi} />
                    <span>Services</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faUserGear} />
                    <span>Service Account</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faScroll} />
                    <span>Settlements</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faChartColumn} />
                    <span>Reports</span>
                </li>
            </ul>

            <ul>
                <h6>SETTINGS</h6>
                <li>
                <FontAwesomeIcon icon={faSliders} />
                    <span>Preferences</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faCertificate} />
                    <span>Fees and Pricing</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faClipboardList} />
                    <span>Audit Logs</span>
                </li>
            </ul>

    </aside>
  );
};

export default SideBar;
