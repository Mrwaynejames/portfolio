import React from "react";
import './index.css';
import trademark from '../../assets/images/tmb.png'
import schedule from '../../assets/images/schedule.png'
const Portfolio =() => {
    return (
        <div classNaame="container portfolio-page">
            <h1>Portfolio</h1>
            <div className="work left">
                <h2 className="title"><a href="https://shoptrademarkbeauty.com/">Trademark</a></h2>
                <img className ='workpic' src={trademark} alt ="logo" />
                <h2 className="title"><a href="https://mrwaynejames.github.io/schedule/">Work Scheduler</a></h2>
                <a href="https://github.com/Mrwaynejames/schedule"><img className ='workpic' src={schedule} alt ="logo"/></a>
            </div>
            <div className="work right">
                <h2 className="title"><a href="https://shoptrademarkbeauty.com/">Trademark</a></h2>
                <img className ='workpic' src={trademark} alt ="logo" />
                <h2 className="title"><a href="https://shoptrademarkbeauty.com/">Trademark</a></h2>
                <img className ='workpic' src={trademark} alt ="logo" />
            </div>  
        </div>
        
    )
}

export default Portfolio;
