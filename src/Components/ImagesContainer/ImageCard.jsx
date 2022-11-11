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
                        <span> Lorem Ipsum is simply dummy <br /> text of the printing.</span>
                    </div>
                </div>
                <div className="img-card">
                    <div className="imgs">
                        <img src={vision} alt="Error" />
                    </div>
                    <div className="bio">
                        <h5>Our Vision</h5>
                        <span> Lorem Ipsum is simply dummy <br /> text of the printing.</span>
                    </div>
                </div>
                <div className="img-card">
                    <div className="imgs">
                        <img src={goal} alt="Error" />
                    </div>
                    <div className="bio">
                        <h5>Our Goals</h5>
                        <span> Lorem Ipsum is simply dummy <br /> text of the printing.</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ImageCard
