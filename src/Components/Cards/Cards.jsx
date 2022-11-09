import React from 'react'
import './Card.scss'
import fb from "../../Assets/fb.png"
import ints from "../../Assets/ints.png"
import link from "../../Assets/link.png"
import card from "../../Assets/card.png"

const Cards = () => {
    return (
        <div className='card-container'>
            <div className="text">
                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div className="cards">
                <div class="card">
                    <div className="img">
                        <img src={card} style={{ width: "100%" }} />
                    </div>
                    <div className="bio">
                        <h5>Name</h5>
                        <div class="title">Desigination</div>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                    </div>
                    <div className="icons">
                        <img src={fb} alt="" />
                        <img src={ints} alt="" />
                        <img src={link} alt="" />
                    </div>
                </div>
                <div class="card">
                    <div className="img" >
                        <img src={card} style={{ width: "100%" }} />
                    </div>
                    <div className="bio">
                        <h5>Name</h5>
                        <div class="title">Desigination</div>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                    </div>
                    <div className="icons">
                        <img src={fb} alt="" />
                        <img src={ints} alt="" />
                        <img src={link} alt="" />
                    </div>
                </div>
                <div class="card">
                    <div className="img" >
                        <img src={card} style={{ width: "100%" }} />
                    </div>
                    <div className="bio">
                        <h5>Name</h5>
                        <div class="title">Desigination</div>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                    </div>
                    <div className="icons">
                        <img src={fb} alt="" />
                        <img src={ints} alt="" />
                        <img src={link} alt="" />
                    </div>
                </div>
                <div class="card">
                    <div className="img" >
                        <img src={card} style={{ width: "100%" }} />
                    </div>
                    <div className="bio">
                        <h5>Name</h5>
                        <div class="title">Desigination</div>
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
    )
}

export default Cards
