import React from "react";
import Databiz from '../../Assets/client-databiz.svg'
import Audiophile from '../../Assets/client-audiophile.svg'
import Meet from '../../Assets/client-meet.svg'
import Maker from '../../Assets/client-maker.svg'
import './PresentationSection.css'



function PresentationSection(){
    return(
        <div className="Presentation">
            <div className="LeftSide">
                <div className="TextsAndButton">
                    <h1 className="Title">Make</h1>
                    <h1 className="Title">remote work</h1>
                    <p className="Paragraph">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                    <div className="LearnMoreButton">Learn more</div>
                </div>
                <div className='ClientsSection'>
                    <img className='Databiz' src = {Databiz} alt= 'Databiz-logo'/>
                    <img className='Audiophile' src = {Audiophile} alt= 'Audiophile-logo'/>
                    <img className='Meet' src = {Meet} alt= 'Meet-logo'/>
                    <img className='Maker' src = {Maker} alt= 'Maker-logo'/>
                </div>
            </div>
        </div>
    )
};

export default PresentationSection