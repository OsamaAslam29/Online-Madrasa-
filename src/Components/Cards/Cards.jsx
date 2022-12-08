import React from 'react'
import './Card.scss'
import fb from "../../Assets/fb.png"
import ints from "../../Assets/ints.png"
import link from "../../Assets/link.png"
import card from "../../Assets/Icon.png"

const Cards = () => {
    return (
        <>
            <div>
                <div className='card-container'>
                    <div className="text">
                        <h2>Join the Online Quran Community to Learn, Read, and Listen.</h2>
                        <div>As one of the leading online institutes for teaching the Quran online, <br /> we offer the best educational experiences for our students and the world.</div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="img">
                                <img src={card} style={{ width: "100%" }} />
                            </div>
                            <div className="bio">
                                <h5>Name</h5>
                                <div className="title">Desigination</div>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                            </div>
                            <div className="icons">
                                <img src={fb} alt="" />
                                <img src={ints} alt="" />
                                <img src={link} alt="" />
                            </div>
                        </div>
                        <div className="card">
                            <div className="img" >
                                <img src={card} style={{ width: "100%" }} />
                            </div>
                            <div className="bio">
                                <h5>Name</h5>
                                <div className="title">Desigination</div>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                            </div>
                            <div className="icons">
                                <img src={fb} alt="" />
                                <img src={ints} alt="" />
                                <img src={link} alt="" />
                            </div>
                        </div>
                        <div className="card">
                            <div className="img" >
                                <img src={card} style={{ width: "100%" }} />
                            </div>
                            <div className="bio">
                                <h5>Name</h5>
                                <div className="title">Desigination</div>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                            </div>
                            <div className="icons">
                                <img src={fb} alt="" />
                                <img src={ints} alt="" />
                                <img src={link} alt="" />
                            </div>
                        </div>
                        <div className="card">
                            <div className="img" >
                                <img src={card} style={{ width: "100%" }} />
                            </div>
                            <div className="bio">
                                <h5>Name</h5>
                                <div className="title">Desigination</div>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                            </div>
                            <div className="icons">
                                <img src={fb} alt="" />
                                <img src={ints} alt="" />
                                <img src={link} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="contact"></div>
            </div>
        </>

    )
}

export default Cards
