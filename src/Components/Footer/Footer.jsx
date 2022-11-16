import React from 'react'
import './Footer.scss'
import FooterBar from './FooterBar'
import logo from "../../Assets/footerlogo.png"
import arrow from '../../Assets/arrow.png'
import feb from '../../Assets/feb.png'
import insta from '../../Assets/insta.png'
import ins from '../../Assets/in.png'
import tomb from '../../Assets/masque.png'
import Flip from 'react-reveal/Flip';
import MenuIcon from '@mui/icons-material/Menu';




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
    const Contact = () => {
        if (document.getElementById("Contact").style.display === "none") {

            document.getElementById("Contact").style.display = "flex"
        }
        else {
            document.getElementById("Contact").style.display = "none"

        }
    }
    return (
        <>

            <div className="footer-container">
                {/* <div className="tomb">
                    <img src={tomb} alt="" />
                </div> */}
                <div className="flex-footer">
                    <Flip top>
                        <div>
                            <img src={logo} alt="Error" />
                        </div>
                    </Flip>
                    <div className='text'>
                        <p className='text'>The whole learning process is extremely simple. Yet! We <br /></p>
                        <p className='text'>are available 24/7 to support our honorable teachers and students. </p>
                    </div>
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
                                <MenuIcon className='icon' onClick={Learning} />
                            </div>
                            <div className="data" id='Learning'>
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
                                <MenuIcon className='icon' onClick={Services} />
                            </div>
                            <div className="data" id='Services'>
                                <div>Lorem Ipsum </div>
                                <div>Lorem Ipsum </div>
                                <div>Lorem Ipsum </div>
                                <div>Lorem Ipsum </div>
                                <div>Lorem Ipsum </div>
                            </div>

                        </div>
                        <div className="section">
                            <div className="heading" >
                                <h5>Contact Us</h5>
                                <img src={arrow} alt="" />
                                <MenuIcon className='icon' onClick={Contact} />
                            </div>
                            <div className="data" id='Contact'>
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
            </div>

            <FooterBar />
        </>
    )
}

export default Footer 
