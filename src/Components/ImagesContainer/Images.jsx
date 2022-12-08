import React from 'react'
import './Images.scss'
import ImageCard from './ImageCard'
import Flip from 'react-reveal/Flip';
import large from "../../Assets/About Us/Large.jpg";
import small from "../../Assets/About Us/Small.jpg";
import image from '../../Assets/Services/Services.jpg'
import { AiOutlineFileSearch } from 'react-icons/ai';
import { MdOutlineQuiz } from 'react-icons/md';
import { MdOutlineFreeCancellation } from 'react-icons/md';
import { MdOutlineHealthAndSafety } from 'react-icons/md';

const Images = () => {
  return (
    <>
      <div className="images__main" >
        <div className="absolute__images">
          <div className="large">
            <img src={large} alt="" />
            <div className="small">
              <img src={small} alt="" />
            </div>
          </div>
        </div>
        <ImageCard />
        <div className="Image-container"  >
          <div className="flex-card">
            <Flip top>
              <div className="image-card">
                <div className="logo">
                  <AiOutlineFileSearch className='icon'/>
                </div>
                <div>
                  <a href="#">Screening</a>
                </div>
                <span>
                Every teacher is screened for expertise <br /> and is  only accepted to the platform <br />if they meet Madrasa.io’s standards.
                </span>
              </div>
            </Flip>
            <Flip top>
              <div className="image-card">
                <div className="logo">
                  <MdOutlineQuiz className='icon'/>

                </div>
                <div>
                  <a href="#">Quiz system</a>
                </div>
                <span>
                You can see your quizzes rated along with<br /> the teacher’s remarks at any time. Especially  <br />helpful in tracking children’s progress.
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
                  <MdOutlineFreeCancellation className='icon'/>

                </div>
                <div>
                  <a href="#">Cancel Anytime</a>
                </div>
                <span>
                If you are unsatisfied with your teacher, you<br /> can end  the contract the next month and<br /> find another tutor.
                </span>
              </div>
            </Flip>
            <Flip top>
              <div className="image-card">
                <div className="logo">
                  <MdOutlineHealthAndSafety className='icon'/>

                </div>
                <div>
                  <a href="#">A safe place to learn</a>
                </div>
                <span>
                Our screening means you and your children learn <br />in a safe environment. Any inappropriate <br />actions are taken seriously.
                </span>
              </div>
            </Flip>
          </div>
          <div id='subscribe'></div>

        </div>
      </div>
    </>
  );
}

export default Images
