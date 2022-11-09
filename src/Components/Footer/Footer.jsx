import React from 'react'
import './Footer.scss'
import FooterBar from './FooterBar'
import logo from "../../Assets/footerlogo.png"
import arrow from '../../Assets/arrow.png'
import feb from '../../Assets/feb.png'
import insta from '../../Assets/insta.png'
import ins from '../../Assets/in.png'

const Footer = () => {
    return (
        <>
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
                        <input type="text" placeholder='Email address' />
                        <button className='sign-up'>Sign up</button>
                    </div>
                </div>
                <div className="info">
                    <div className="section">
                        <div className="heading">
                            <h5>Site Links</h5>
                            <img src={arrow} alt="" />
                        </div>
                        <div className="data">
                            <div>Home</div>
                            <div>About Us</div>
                            <div>Our Services</div>
                            <div>Programs & Events</div>
                            <div>Latest News</div>
                        </div>
                        
                    </div>
                    <div className="section">
                        <div className="heading">
                            <h5>Learning</h5>
                            <img src={arrow} alt="" />
                        </div>
                        <div className="data">
                            <div>Lorem Ipsum </div>
                            <div>Lorem Ipsum </div>
                            <div>Lorem Ipsum </div>
                            <div>Lorem Ipsum </div>
                            <div>Lorem Ipsum </div>
                        </div>
                        
                    </div>
                    <div className="section">
                        <div className="heading">
                            <h5>Our Services</h5>
                            <img src={arrow} alt="" />
                        </div>
                        <div className="data">
                            <div>Lorem Ipsum </div>
                            <div>Lorem Ipsum </div>
                            <div>Lorem Ipsum </div>
                            <div>Lorem Ipsum </div>
                            <div>Lorem Ipsum </div>
                        </div>
                        
                    </div>
                    <div className="section">
                        <div className="heading">
                            <h5>Contact Us</h5>
                            <img src={arrow} alt="" />
                        </div>
                        <div className="data">
                            <div>Perth, Australia</div>
                            <div>Phone: +61-000-123-4567</div>
                            <div>Email: example@example.ios</div>
                            <div className="icons">
                                <img src={feb} alt="" />
                                <img src={insta} alt="" />
                                <img src={ins} alt="" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <FooterBar />
        </>
    )
}

export default Footer 
