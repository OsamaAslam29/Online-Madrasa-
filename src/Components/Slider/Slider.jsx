import React from "react";
import Slider from "react-slick";
import "./Slider.scss";

import home from "../../Assets/home.svg";

const arr = [
  {
    img: home,
    heading: "Lorem Ipsum",
  },
  {
    img: home,
    heading: "Lorem",
  },
  {
    img: home,
    heading: "Ipsum",
  },
  {
    img: home,
    heading: "Ipsum",
  },
  {
    img: home,
    heading: "Lorem",
  },
  {
    img: home,
    heading: "Ipsum",
  },
  {
    img: home,
    heading: "Ipsum",
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
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
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
  );
};

export default HomeSlider;
