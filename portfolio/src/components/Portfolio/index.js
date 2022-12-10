import React from "react";
import './index.css';
import trademark from '../../assets/images/tmb.png'
import schedule from '../../assets/images/schedule.png'
import pw from '../../assets/images/password.png'
import network from '../../assets/images/network.png'
const Portfolio =() => {
    return (
        <div classNaame="container portfolio-page">
            <h1>Portfolio</h1>
            <div className="work left">
                <h2 className="title"><a href="https://shoptrademarkbeauty.com/">Trademark.com</a></h2>
                <img className ='workpic' src={trademark} alt ="logo" /> 
                <h2 className="title"><a href="https://mrwaynejames.github.io/schedule/">Work Scheduler</a></h2>
                <a href="https://github.com/Mrwaynejames/schedule"><img className ='workpic' src={schedule} alt ="logo"/></a>
            </div>
            <div className="work right">
                <h2 className="title"><a href="https://github.com/Mrwaynejames/Network_API">Social Network API</a></h2>
                <a href="https://github.com/Mrwaynejames/Network_API"><img className ='workpic' src={network} alt ="logo" /></a>
                <h2 className="title"><a href="https://mrwaynejames.github.io/password-generator/">Password Generator</a></h2>
                <a href="https://github.com/Mrwaynejames/password-generator"><img className ='workpic' src={pw} alt ="logo" /></a>
            </div>  
        </div>
        
    )
}

export default Portfolio;
