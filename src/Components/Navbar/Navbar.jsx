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


const Navbar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
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
          <Fade top>
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
          </Fade>
          {/* <div className="slide-boxes">
            <div>
              <h2> Multiple items </h2>
              <Slider {...settings}>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
                <div>
                  <h3>7</h3>
                </div>
                <div>
                  <h3>8</h3>
                </div>
                <div>
                  <h3>9</h3>
                </div>
              </Slider>
            </div>
          </div> */}
        </div>

      </div>

    </>

  )
}

export default Navbar
