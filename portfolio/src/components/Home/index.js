//import LogoTitle from '../../assets/images/initalslogo.png';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                Jack McWilliams 
                <br />
                Software Engineer
                </h1>
                <Link to="/contact" className='flat-button' >CONTACT ME</Link>
                
            </div>
        </div>
    );
}

export default Home