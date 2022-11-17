import React from 'react'
import './ImageCard.scss'
import mission from '../../Assets/About Us/mission.svg'
import vision from '../../Assets/About Us/vision.svg'
import goal from '../../Assets/About Us/goal.svg'
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';



const ImageCard = () => {
    return (
        <div className='Image-card-container'>
            <div className="cards">
              <Roll left>
                <div className="img-card">
                    <div className="imgs">
                        <img src={mission} alt="Error" />
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
                        <img src={vision} alt="Error" />
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
                        <img src={goal} alt="Error" />
                    </div>
                    <div className="bio">
                        <h5>Our Goals</h5>
                        <span> As Muslims, our goal should be to spread Allah's final word worldwide.</span>
                    </div>
                </div>
                </Roll>
            </div>


        </div>
    )
}

export default ImageCard
