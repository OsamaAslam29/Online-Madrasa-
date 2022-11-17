import React from "react";
import Slider from "react-slick";
import "./Slider.scss";
import home from "../../Assets/home.svg";
import Fade from 'react-reveal/Fade';


import { AiOutlineFileSearch } from 'react-icons/ai';
import { TbHandClick } from 'react-icons/tb';
import { MdOutlineQuiz } from 'react-icons/md';
import { MdOutlineFreeCancellation } from 'react-icons/md';


const arr = [
  {
    img: <AiOutlineFileSearch />,
    heading: "Screening",
  },
  {
    img: <TbHandClick />,
    heading: "Easy to Use",
  },
  {
    img: <MdOutlineQuiz />,
    heading: "Quiz System",
  },
  {
    img: <MdOutlineFreeCancellation />,
    heading: "Cancel ",
  },
];
const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          initialSlide: 0,

        },
      },
    ],
  };
  return (
    <div className="parent">
      <Slider {...settings}>
        {arr.map((data, index) => {
          return (
            <Fade top  key={index.toString()}>
              <div className="slide_parent">

                <div className="icon">
                  {data.img}
                </div>
                <h5>{data.heading}</h5>
              </div>
            </Fade>
          );
        })}
      </Slider>
    </div>
  );
};

export default HomeSlider;
