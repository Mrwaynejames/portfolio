import './index.css';
import Logos from'../../../assets/images/initalslogo.png'



const Logo =() => {
    return (
        <div className="logo-container">
        <img className="solid-logo" src={Logos} alt='JM' />
        </div>
    )
}

export default Logo