import React from 'react'
import './Footer.scss'
import FooterBar from './FooterBar'
import Masque from './Masque'
import logo from "../../Assets/footerlogo.png"

const Footer = () => {
    return (
        <>
            <Masque />
            <div className="footer-container">
                <div className="flex-footer">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                </div>
                <div className="search-box">
                    <div className="text">Subscribe For Latest Updates</div>
                    <div className="search">
                        <input type="text" placeholder='Email address'/>
                        <button className='sign-up'>Sign up</button>
                    </div>
                </div>

            </div>


            <FooterBar />
        </>
    )
}

export default Footer 
