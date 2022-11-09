import React from 'react'
import './Images.scss'
import home from '../../Assets/homes.png'
import image from '../../Assets/image.jpg'
import ImageCard from './ImageCard'

const Images = () => {
    return (
        <>
            <ImageCard/>
            
            <div className='Image-container'>
                <div className="flex-card">
                    <div className="image-card">
                        <div className="logo">
                            <img src={home} alt="" />
                        </div>
                        <div>
                            <a href="#">Lorem Ipsum</a>
                        </div>
                        <span>Lorem Ipsum is simply dummy text of <br />the printing and typesetting industry.<br /> Lorem Ipsum is simply dummy</span>
                    </div>
                    <div className="image-card">
                        <div className="logo">
                            <img src={home} alt="" />
                        </div>
                        <div>
                            <a href="#">Lorem Ipsum</a>
                        </div>
                        <span>Lorem Ipsum is simply dummy text of <br />the printing and typesetting industry.<br /> Lorem Ipsum is simply dummy</span>
                    </div>
                </div>
                <div className="middle-image">
                    <img src={image} alt="" />
                </div>
                <div className="flex-card">
                    <div className="image-card">
                        <div className="logo">
                            <img src={home} alt="" />
                        </div>
                        <div>
                            <a href="#">Lorem Ipsum</a>
                        </div>
                        <span>Lorem Ipsum is simply dummy text of <br />the printing and typesetting industry.<br /> Lorem Ipsum is simply dummy</span>
                    </div>
                    <div className="image-card">
                        <div className="logo">
                            <img src={home} alt="" />
                        </div>
                        <div>
                            <a href="#">Lorem Ipsum</a>
                        </div>
                        <span>Lorem Ipsum is simply dummy text of <br />the printing and typesetting industry.<br /> Lorem Ipsum is simply dummy</span>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Images
