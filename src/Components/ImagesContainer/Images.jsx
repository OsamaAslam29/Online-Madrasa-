import React from 'react'
import './Images.scss'
import home from '../../Assets/homes.png'
import image from '../../Assets/image.jpg'
import ImageCard from './ImageCard'
import Flip from 'react-reveal/Flip';
import large from "../../Assets/large.jpg";
import small from "../../Assets/small.svg";

const Images = () => {
  return (
    <>
      <div className="images__main">
        <div className="absolute__images">
          <div className="large">
            <img src={large} alt="" />
            <div className="small">
              <img src={small} alt="" />
            </div>
          </div>
        </div>
        <ImageCard />

        <div className="Image-container">
          <div className="flex-card">
            <Flip top>
              <div className="image-card">
                <div className="logo">
                  <img src={home} alt="" />
                </div>
                <div>
                  <a href="#">Lorem Ipsum</a>
                </div>
                <span>
                  Lorem Ipsum is simply dummy text of <br />
                  the printing and typesetting industry.
                  <br /> Lorem Ipsum is simply dummy
                </span>
              </div>
            </Flip>
            <Flip top>
              <div className="image-card">
                <div className="logo">
                  <img src={home} alt="" />
                </div>
                <div>
                  <a href="#">Lorem Ipsum</a>
                </div>
                <span>
                  Lorem Ipsum is simply dummy text of <br />
                  the printing and typesetting industry.
                  <br /> Lorem Ipsum is simply dummy
                </span>
              </div>
            </Flip>
          </div>
          <div className="middle-image">
            <img src={image} alt="" />
          </div>
          <div className="flex-card">
            <Flip top>
              <div className="image-card">
                <div className="logo">
                  <img src={home} alt="" />
                </div>
                <div>
                  <a href="#">Lorem Ipsum</a>
                </div>
                <span>
                  Lorem Ipsum is simply dummy text of <br />
                  the printing and typesetting industry.
                  <br /> Lorem Ipsum is simply dummy
                </span>
              </div>
            </Flip>
            <Flip top>
              <div className="image-card">
                <div className="logo">
                  <img src={home} alt="" />
                </div>
                <div>
                  <a href="#">Lorem Ipsum</a>
                </div>
                <span>
                  Lorem Ipsum is simply dummy text of <br />
                  the printing and typesetting industry.
                  <br /> Lorem Ipsum is simply dummy
                </span>
              </div>
            </Flip>
          </div>
        </div>
      </div>
    </>
  );
}

export default Images
