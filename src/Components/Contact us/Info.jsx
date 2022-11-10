import React from 'react'
import './Info.scss'
import first from '../../Assets/first.png'
import second from '../../Assets/second.png'
import third from '../../Assets/third.png'

const Info = () => {
    return (
        <>
            <div className='info-contanier'>
                <div className="info">
                    <div className="left-container">
                        <h5>#Contact <br /> <span>Get in touch with us</span></h5>
                    </div>
                    <div className="divider-line"></div>
                    <div className="right-container">
                        Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.
                    </div>
                </div>
                <div className="flex-cards">
                    <div className="card-data">
                        <div className="icon">
                            <img src={first} alt="" />
                        </div>
                        <div className="card-info">
                            <h5>Visit Us:</h5>
                            <span>Perth Australia</span>
                        </div>
                    </div>
                    <div className="card-data">
                        <div className="icon">
                            <img src={second} alt="" />
                        </div>
                        <div className="card-info">
                            <h5>Visit Us:</h5>
                            <span>info@madrasa.io</span>
                        </div>
                    </div>
                    <div className="card-data">
                        <div className="icon">
                            <img src={third} alt="" />
                        </div>
                        <div className="card-info">
                            <h5>Phone:</h5>
                            <span>+61 000 123 4567</span>
                        </div>
                    </div>
                </div>
                <div className="bio">
                    {/* map link : https://www.google.com/maps/place/Perth+WA,+Australia/@-32.0400639,115.9615356,10z/d[…]966cdb47733d:0x304f0b535df55d0!8m2!3d-31.9523123!4d115.861309 */}
                    <div className="image">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d432906.0603743683!2d115.96153564999999!3d-32.04006395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32966cdb47733d%3A0x304f0b535df55d0!2sPerth%20WA%2C%20Australia!5e0!3m2!1sen!2s!4v1668101901258!5m2!1sen!2s" width="650" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
