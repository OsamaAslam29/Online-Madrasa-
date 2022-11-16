import React from 'react'
import './ImageCard.scss'
import mission from '../../Assets/mission.png'
import vision from '../../Assets/vision.png'
import goal from '../../Assets/goal.png'


const ImageCard = () => {
    return (
        <div className='Image-card-container'>
            <div className="cards">
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
                <div className="img-card">
                    <div className="imgs">
                        <img src={vision} alt="Error" />
                    </div>
                    <div className="bio">
                        <h5>Our Vision</h5>
                        <span> The vision of <a href="#">Madrasa.io</a> is to make Quran Learning easily
                            accessible throughout the world.</span>
                    </div>
                </div>
                <div className="img-card">
                    <div className="imgs">
                        <img src={goal} alt="Error" />
                    </div>
                    <div className="bio">
                        <h5>Our Goals</h5>
                        <span> As Muslims, our goal should be to spread Allah's final word worldwide.</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ImageCard
