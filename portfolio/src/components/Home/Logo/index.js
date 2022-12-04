import './index.css';
import Logos from'../../../assets/images/logo.png'

const Logo =() => {
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={Logos} alt="logo" />
        </div>
    )
}

export default Logo