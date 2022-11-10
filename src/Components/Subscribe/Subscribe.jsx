import React from 'react'
import './Subscribe.scss'
import sub from '../../Assets/subscribe.png'
import Fade from 'react-reveal/Fade';
const Subscribe = () => {
    return (
        <div className='subscribe-container'>
            <div className="left-container">
                <img src={sub} alt="" />
            </div>
            <div className="right-container">
                <div className="flex-sub-sect">
                    <Fade top>
                        <h5>Subscribe Us</h5>
                    </Fade>
                    <input className='input-field' type="text" placeholder='Email:' />
                    <button className='send-button'>Send</button>
                </div>
            </div>

        </div>
    )         
}

export default Subscribe
