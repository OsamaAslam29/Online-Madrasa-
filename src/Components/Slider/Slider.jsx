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
    heading: "Lorem Ipsum",
  },
  {
    img: home,
    heading: "Lorem Ipsum",
  },
  {
    img: home,
    heading: "Lorem Ipsum",
  },
  {
    img: home,
    heading: "Lorem Ipsum",
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
    ],
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
