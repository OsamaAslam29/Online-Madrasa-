import React from 'react'
import './Info.scss'
import first from '../../Assets/firsts (2).png'
import second from '../../Assets/second.png'
import third from '../../Assets/third.png'
import location from '../../Assets/contact/Location.svg'
import email from '../../Assets/contact/Email.svg'
import phone from '../../Assets/contact/Phone.svg'



const Info = () => {
    return (
        <>
            <div className='info-contanier'>
                <div className="info">
                    <div className="left-container">
                        <h2>#Contact <br /> <span>Get in touch with us</span></h2>
                    </div>
                    <div className="divider-line"></div>
                    <div className="right-container">
                    Although we do our services 100% online, and there is no need to visit physically,  still Our main head office is in Perth, Australia.
                    </div>
                </div>
                <div className="flex-cards">
                    <div className="card-data">
                        <div className="icon">
                            <img src={location} alt="" />
                        </div>
                        <div className="card-info">
                            <h5>Visit Us:</h5>
                            <a>Perth Australia</a>
                        </div>
                    </div>
                    <div className="card-data">
                        <div className="icon">
                            <img src={email} alt="" />
                        </div>
                        <div className="card-info">
                            <h5>Email Us:</h5>
                            <a>info@madrasa.io</a>
                        </div>
                    </div>
                    <div className="card-data">
                        <div className="icon">
                            <img src={phone} alt="" />
                        </div>
                        <div className="card-info">
                            <h5>Phone:</h5>
                            <a>+61 000 123 4567</a>
                        </div>
                    </div>
                </div>
                <div className="bio">
                    <div className="image">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d432906.0603743683!2d115.96153564999999!3d-32.04006395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32966cdb47733d%3A0x304f0b535df55d0!2sPerth%20WA%2C%20Australia!5e0!3m2!1sen!2s!4v1668101901258!5m2!1sen!2s" width="650" height="380" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="message">
                        <form action="" className='flex-field'>
                            <h5>Sent Us a Message</h5>
                            <input type="text" placeholder='Name:' />
                            <input type="text" placeholder='Phone:' />
                            <input type="text" placeholder='Email:' />
                            <button>Send</button>
                        </form>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Info
