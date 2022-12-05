import './index.css'
import resume from '../../assets/images/cvPic.png'
const Resume = () => {
    return (
            <div className='container resume-page'>
                <div className='text-zone'>
                    <h1>
                        Resume
                    </h1>
                </div>
                <div className='resume'>
                    <img src={resume} alt='cv' /> 
                </div>
            </div>
    )
}

export default Resume