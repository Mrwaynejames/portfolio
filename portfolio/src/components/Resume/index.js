import './index.css';
import resume from '../../assets/images/cvPic.png'
const Resume = () => {
    return (
            <div className='resume-page'>
                <h1>
                        Resume
                    </h1>
                <img src={resume} alt='cv' /> 
            </div>
    
    )
}

export default Resume