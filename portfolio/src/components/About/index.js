import './index.css'
import profile from '../../assets/images/about-me.png'
// import { Link } from 'react-router-dom';
import resume from '../../assets/images/resume.pdf'
const About = () => {
    return (
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        About Me
                    </h1>
                    <p className="p1">Hi my name is Jack McWilliams. A little bit about me is I grew up having no idea that this is the path I would be on. I grew up as an athlete and was fortunate enough to continnue to play in college. While at college I studied marketing with hopes to graduate and start coaching college basketball. Well, that is exactly what happened until a year ago where after almost four years of coaching I decided to leave.
                    </p>
                    <p className="p2">I told you the above anecdote because I wanted it to be clear that I am not pursuing this career because it was the easiest for me. This is something I have a passion for and think my experiences and education will only set me apart. I am currently leaning new technologies, libraries, and frameworks every week in order to become a software engineer.  I have a desire to work on the front end of a project because I believe that is where I can best utilize all of my education.
                    </p>
                    <p className="p3">Looking into the future I am excited to use the same work ethic that I had for my sport and apply it to this career. I am an eager learner who loves getting feedback to see what areas I can improve on. Whatever skills you see that I am missing I will take on to learn quickly and thouroughly.
                    </p>
                    <a href={resume}className='flat-button'>resume</a>
                     {/* <Link to="//resume" className='flat-button'>Resume</Link>  */}
                </div>
                <div className='profilePic'>
                    <img className='mePic' src={profile} alt='me' /> 
                </div>
            </div>
    )
}

export default About