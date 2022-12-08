import React from 'react'
import './ImageCard.scss'
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import {ReactComponent as Mission} from '../../Assets/About Us/mission.svg';
import {ReactComponent as Vision} from '../../Assets/About Us/vision.svg';
import {ReactComponent as Goal} from '../../Assets/About Us/goal.svg';




const ImageCard = () => {
    return (
        <div className='Image-card-container'>
            <div className="cards">
              <Roll left>
                <div className="img-card">
                    <div className="imgs">
                        <Mission className='icon'/>

                    </div>
                    <div className="bio">
                        <h5>Our Mission</h5>
                        <span> Our mission is to incorporate the whole Islamic community
                            worldwide and gather them to learn the Quran.</span>
                    </div>
                </div>
                </Roll>
                <Fade bottom>
                <div className="img-card">
                    <div className="imgs">
                    <Vision className='icon'/>
                    </div>
                    <div className="bio">
                        <h5>Our Vision</h5>
                        <span> The vision of Madrasa.io is to make Quran Learning easily
                            accessible throughout the world.</span>
                    </div>
                </div>
                </Fade>
                <Roll right>
                <div className="img-card">
                    <div className="imgs">
                    <Goal className='icon'/>
                    </div>
                    <div className="bio">
                        <h5>Our Goals</h5>
                        <span> As Muslims, our goal should be to spread Allah's final word worldwide.</span>
                    </div>
                </div>
                </Roll>
            </div>
           <div id='services'></div>
        </div>
    )
}

export default ImageCard
