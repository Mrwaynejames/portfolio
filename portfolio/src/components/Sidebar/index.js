import './index.css'
import { Link, NavLink } from 'react-router-dom'
import Ilogo from '../../assets/images/initalslogo.png'
import nameLogo from '../../assets/images/name.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className ='initials' src={Ilogo} alt ="logo" />
            <img className ='n-logo' src={nameLogo} alt ="name" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" className="homeLink" to="/">
               <FontAwesomeIcon className ='icon' icon={faHome} color="#4d4d43" /> 
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="aboutLink"to="/about">
               <FontAwesomeIcon className ='icon' icon={faUser} color="#4d4d43" /> 
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contactLink" to="/contact">
               <FontAwesomeIcon className ='icon' icon={faEnvelope} color="#4d4d43" /> 
            </NavLink>
        </nav>
    </div>
)

export default Sidebar