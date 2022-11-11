import React from 'react'
import './Navbar.scss'
import Fade from 'react-reveal/Fade';
import logo from '../../Assets/logo.png'
import one from '../../Assets/one.png'
import two from '../../Assets/two.png'
import three from '../../Assets/three.png'
import four from '../../Assets/four.png'
import five from '../../Assets/five.png'
import six from '../../Assets/six.png'
import seven from '../../Assets/seven.png'
import Slider from "react-slick";
import MainSlider from '../Slider/MainSlider';
import HomeSlider from '../Slider/Slider';
import home from "../../Assets/home.svg";


const arr = [
  {
    img: one,
    heading: "One",
  },
  {
    img: one,
    heading: "Two",
  },
  {
    img: one,
    heading: "Three",
  },
  {
    img: one,
    heading: "Four",
  },
  {
    img: one,
    heading: "Five",
  },
  {
    img: one,
    heading: "Six",
  },
  {
    img: one,
    heading: "Seven",
  },
];
const Navbar = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,

        },
      },

    ],
  };
  return (

    <>
      <div className="nav-container">
        <Fade top>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Fade>

        <div className="green-box">
          {/* <Fade top>
            <div className="flex-boxes">
              <div className="box">
                <img src={one} alt="" />
                <div>One</div>
              </div>
              <div className="box">
                <img src={one} alt="" />
                <div>Two</div>
              </div>
              <div className="box">
                <img src={one} alt="" />
                <div>Three</div>
              </div>
              <div className="box">
                <img src={one} alt="" />
                <div>Four</div>
              </div>
              <div className="box">
                <img src={one} alt="" />
                <div>Five</div>
              </div>
              <div className="box">
                <img src={one} alt="" />
                <div>Six</div>
              </div>
              <div className="box">
                <img src={one} alt="" />
                <div>Seven</div>
              </div>
            </div>
          </Fade> */}
          <div className="parent">
            <Slider {...settings}>
              {arr.map((data, i) => {
                return (
                  <div className="slide_parent" key={i}>
                    <div>
                      <img src={data.img} alt="Icons" />
                    </div>
                    <div className="text">{data.heading}</div>
                  </div>
                );
              })}
            </Slider>
          </div>

        </div>

      </div>

    </>

  )
}

export default Navbar
