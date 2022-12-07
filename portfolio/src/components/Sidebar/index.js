import './index.css'
import { Link, NavLink } from 'react-router-dom'
import Ilogo from '../../assets/images/initalslogo.png'
// import nameLogo from '../../assets/images/name.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faSuitcase, } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className ='initials' src={Ilogo} alt ="logo" />
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

            <NavLink exact="true" activeclassname="active" className="workLink" to="/portfolio">
               <FontAwesomeIcon className ='icon' icon={faSuitcase} color="#4d4d43" /> 
            </NavLink>

            <NavLink exact="true" className="linkedinLink" to={"//www.linkedin.com/in/jack-mcwilliams1996/"}>
               <FontAwesomeIcon className ='icon' icon={faLinkedin} color="#4d4d43" /> 
            </NavLink>

            <NavLink exact="true" className="githubLink" to={"//github.com/Mrwaynejames?tab=repositories"}>
               <FontAwesomeIcon className ='icon' icon={faGithub} color="#4d4d43" /> 
            </NavLink>

            <NavLink exact="true" className="instaLink" to={"//www.instagram.com/jackmcwillliams/"}>
               <FontAwesomeIcon className ='icon' icon={faInstagram} color="#4d4d43" /> 
            </NavLink>
        </nav>
    </div>
)

export default Sidebar