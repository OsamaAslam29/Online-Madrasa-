import React from 'react'
import './Footer.scss'
import FooterBar from './FooterBar'
import logo from "../../Assets/footerlogo.png"
import arrow from '../../Assets/arrow.png'
import feb from '../../Assets/feb.png'
import insta from '../../Assets/insta.png'
import ins from '../../Assets/in.png'
import Flip from 'react-reveal/Flip';
import MenuIcon from '@mui/icons-material/Menu';
import tomb from '../../Assets/masque.png'
import Rotate from 'react-reveal/Rotate';




const Footer = () => {
    const displays = () => {
        if (document.getElementById("site").style.display === "none") {

            document.getElementById("site").style.display = "flex"
        }
        else {
            document.getElementById("site").style.display = "none"

        }
    }
    const Learning = () => {
        if (document.getElementById("Learning").style.display === "none") {

            document.getElementById("Learning").style.display = "flex"
        }
        else {
            document.getElementById("Learning").style.display = "none"

        }
    }
    const Services = () => {
        if (document.getElementById("Services").style.display === "none") {

            document.getElementById("Services").style.display = "flex"
        }
        else {
            document.getElementById("Services").style.display = "none"

        }
    }
    return (
        <>

            <div className="footer-container">
                <div className="tomb">
                    <img src={tomb} alt="" />
                </div>
                <div className="flex-footer">
                    <Flip top>
                        <div>
                            <img src={logo} alt="Error" />
                        </div>
                    </Flip>
                    <Rotate bottom right>
                        <div className='text'>
                            <p className='text'>The whole learning process is extremely simple. Yet! We are available 24/7 to support our honorable teachers and students.</p>
                        </div>
                    </Rotate>
                </div>
                <div className="search-box">
                    <div className="text">Subscribe For Latest Updates</div>
                    <div className="search">
                        <input type="text" placeholder='Email address' />
                        <button className='sign-up'>Sign up</button>
                    </div>
                </div>

                <div className="manage-display">
                    <div className="info">
                        <div className="section">
                            <div className="heading">
                                <h5>Site Links</h5>
                                <img src={arrow} alt="" />
                                <MenuIcon className='icon' onClick={displays} />

                            </div>
                            <div className="data" id='site'>
                                <Rotate bottom right>
                                    <div>Home</div>
                                    <div>About Us</div>
                                    <div>Our Services</div>
                                    <div>Programs & Events</div>
                                </Rotate>
                            </div>

                        </div>
                        <div className="section">
                            <Rotate bottom right>
                                <div className="heading">
                                    <h5>Support</h5>
                                    <img src={arrow} alt="" />
                                    <MenuIcon className='icon' onClick={Learning} />
                                </div>
                            </Rotate>
                            <div className="data" id='Learning'>
                                <Rotate bottom right>

                                    <div>Help & Support </div>
                                    <div>Trust & Safety</div>
                                    <div>Teaching with Madrasa.io </div>
                                    <div>Studying with Madrasa.io</div>
                                </Rotate>
                            </div>
                        </div>
                        <div className="section">
                            <Rotate bottom right>
                                <div className="heading">
                                    <h5>Legal Area</h5>
                                    <img src={arrow} alt="" />
                                    <MenuIcon className='icon' onClick={Services} />
                                </div>
                            </Rotate>
                            <div className="data" id='Services'>
                                <Rotate bottom right>
                                    <div>Terms & Conditions </div>
                                    <div>Refund Policy</div>
                                    <div>Privacy Policy</div>
                                    <div>Cookie Policy</div>
                                </Rotate>

                            </div>

                        </div>
                        <div className="section">
                            <div className="heading" >
                                <h5>Contact Us</h5>
                                <img src={arrow} alt="" />
                            </div>
                            <div className="contact" >
                                <Rotate bottom right>
                                    <div>Perth, Australia</div>
                                    <div>Phone: +61-000-123-4567</div>
                                    <div>Email: example@example.ios</div>
                                    <div className="icons">
                                        <img src={feb} alt="" />
                                        <img src={insta} alt="" />
                                        <img src={ins} alt="" />
                                    </div>
                                </Rotate>
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
