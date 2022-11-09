import React from 'react'
import './Info.scss'
import first from '../../Assets/first.png'
import second from '../../Assets/second.png'
import third from '../../Assets/third.png'
import image from '../../Assets/image.png'

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
                        <span>Visit Us:</span>
                        <h5>Perth Australia</h5>
                    </div>
                </div>
                <div className="card-data">
                    <div className="icon">
                        <img src={second} alt="" />
                    </div>
                    <div className="card-info">
                        <span>Visit Us:</span>
                        <h5>info@madrasa.io</h5>
                    </div>
                </div>
                <div className="card-data">
                    <div className="icon">
                        <img src={third} alt="" />
                    </div>
                    <div className="card-info">
                        <span>Phone:</span>
                        <h5>+61 000 123 4567</h5>
                    </div>
                </div>
            </div>
            <div className="bio">
                <div className="image">
                    <img src={image} alt="" />
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
