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



import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'; import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';



const Navbar = () => {
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
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="nav">
          <div className="mobile_icon" to="/Home">
            <img src={home} alt="" />
            <div>One</div>
          </div>
          <div className="mobile_icon" to="/Home">
            <img src={home} alt="" />
            <div>Two</div>
          </div>
          <div className="mobile_icon" to="/Home">
            <img src={home} alt="" />
            <div>Three</div>
          </div>
          <div className="mobile_icon" to="/Home">
            <img src={home} alt="" />
            <div>Four</div>
          </div>
          <div className="mobile_icon" to="/Home">
            <img src={home} alt="" />
            <div>Five</div>
          </div>
          <div className="mobile_icon" to="/Home">
            <img src={home} alt="" />
            <div>Six</div>
          </div>
          <div className="mobile_icon" to="/Home">
            <img src={home} alt="" />
            <div>Seven</div>
          </div>
          
        </div>
      </div>

    </Box>
  );


  return (

    <>
      <div className="nav-container">
        <Fade top>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Fade>

        <div className="green-box">
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
        </div>
        {/* ************* Mobile menu ************ */}


        <div className="mobile-menu">
          <div className='ham_none'>
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>

                <div className="menu">
                  <MenuIcon onClick={toggleDrawer(anchor, true)} style={{ fontSize: "35px" }} />
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
