import React from 'react'
import './Subscribe.scss'
import sub from '../../Assets/subscribe.png'
const Subscribe = () => {
    return (
        <div className='subscribe-container'>
            <div className="left-container">
                <img src={sub} alt="" />
            </div>
            <div className="right-container">
                <div className="flex-sub-sect">
                <div className="content">Subscribe Us</div>
                    <input className='input-field' type="text" placeholder='Email:' />
                    <button className='send-button'>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Subscribe
