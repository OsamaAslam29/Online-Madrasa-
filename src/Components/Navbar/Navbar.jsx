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
const Navbar = () => {
  return (
    <>



      <div className="nav-container">
          <Fade top>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Fade>
        <Fade top>
        <div className="green-box">
          <div className="flex-boxes">
            <div className="box">
              <img src={one} alt="" />
              <div>One</div>
            </div>
            <div className="box">
              <img src={two} alt="" />
              <div>Two</div>
            </div>
            <div className="box">
              <img src={three} alt="" />
              <div>Three</div>
            </div>
            <div className="box">
              <img src={four} alt="" />
              <div>Four</div>
            </div>
            <div className="box">
              <img src={five} alt="" />
              <div>Five</div>
            </div>
            <div className="box">
              <img src={six} alt="" />
              <div>Six</div>
            </div>
            <div className="box">
              <img src={seven} alt="" />
              <div>Seven</div>
            </div>
          </div>
        </div>
        </Fade>
      </div>

    </>

  )
}

export default Navbar
