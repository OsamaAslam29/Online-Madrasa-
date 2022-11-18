import React, { useState } from 'react'
import './Navbar.scss'
import Fade from 'react-reveal/Fade';
import logo from '../../Assets/logo.png'
import Scroll from '../Scroll/Scroll';
// import home from "../../Assets/thirds.png";

// import home from '../../Assets/Menu/Contect.svg'
// import about from '../../Assets/Menu/About.svg'
// import services from '../../Assets/Menu/Services.svg'
// import quran from '../../Assets/Menu/Quran.svg'
// import mosque from '../../Assets/Menu/Mosque.svg'
// import contact from '../../Assets/Menu/Phone.svg'
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';


import { AiOutlineHome } from 'react-icons/ai';
import { BsGear } from 'react-icons/bs';
import { GiInfo } from 'react-icons/gi';
import { AiOutlineBell } from 'react-icons/ai';
import { AiOutlineTeam } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';



const Navbar = () => {

  //  ****** Scroll Navbar ********

  const [showNav, setShowNav] = useState(false)
  const changingNavBar = () => {
    if (window.scrollY >= 80) {
      setShowNav(true)
    } else {
      setShowNav(false)
    }
  }
  window.addEventListener("scroll", changingNavBar)
  const [state, setState] = React.useState({

    left: false,
  });



  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 265 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='main'>
        <Fade top>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Fade>
        <div className="nav">

          <div className="mobile_icon" to="/Home">
            {/* <img src={home} alt="" /> */}
            <AiOutlineHome className="icon" />
            <div>Home</div>
          </div>
          <div className="mobile_icon" to="/Home">
            {/* <img src={about} alt="" /> */}
            <GiInfo className="icon" />

            <div style={{ marginTop: "-10px" }}>About </div>
          </div>
          <div className="mobile_icon" to="/Home">
            {/* <img src={services} alt="" /> */}
            <BsGear className="icon" />

            <div style={{ marginTop: "-10px" }}>Services</div>
          </div>
          <div className="mobile_icon" to="/Home">
            {/* <img src={quran} alt="" /> */}
            <AiOutlineBell className="icon" />

            <div style={{ marginTop: "-10px" }}>Suscribe</div>
          </div>
          <div className="mobile_icon" to="/Home">
            {/* <img src={mosque} alt="" /> */}
            <AiOutlineTeam className="icon" />

            <div>Team</div>
          </div>
          <div className="mobile_icon" to="/Home">
            {/* <img src={contact} alt="" /> */}
            <BsTelephone className="icon" />

            <div>Contact</div>
          </div>

        </div>
      </div>

    </Box>
  );


  return (

    <>
      <div className={showNav ? "show_scroll_nav" : "scroll_nav"}>
      <Fade top>
        <Scroll />
        </Fade>
      </div>
      <div style={showNav ? { display: "none" } : {}} className="nav-container">
        <Fade top>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Fade>

        <div className="green-box">
          <Fade top>
            <div className="flex-boxes">
              <div className="box">
                {/* <img src={home} alt="" /> */}
                <AiOutlineHome className="icon" />
                <div>Home</div>
              </div>
              <div className="box">
                {/* <img src={home} alt="" /> */}
                <GiInfo className="icon" />

                <div>About</div>
              </div>
              <div className="box">
                {/* <img src={home} alt="" /> */}
                <BsGear className="icon" />
                <div>Services</div>
              </div>
              <div className="box">
                {/* <img src={home} alt="" /> */}
                <AiOutlineBell className="icon" />
                <div>Suscribe</div>
              </div>
              <div className="box">
                {/* <img src={home} alt="" /> */}
                <AiOutlineTeam className="icon" />
                <div>Team</div>
              </div>
              <div className="box">
                {/* <img src={home} alt="" /> */}
                <BsTelephone className="icon" />
                <div>Contact</div>
              </div>
            </div>
          </Fade>
        </div>
        {/* ************* Mobile menu ************ */}


        <div className="mobile-menu">
          <div className='ham_none'>
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>

                <div className="menu">
                  <Fade top>
                    <MenuIcon onClick={toggleDrawer(anchor, true)} style={{ fontSize: "35px" }} />
                  </Fade>
                </div>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </div>


        </div>



      </div>




    </>

  )
}

export default Navbar
