import React from 'react'
import './Navbar.scss'
import Fade from 'react-reveal/Fade';
import logo from '../../Assets/logo.png'
// import home from "../../Assets/thirds.png";

import home from '../../Assets/Menu/Home.svg'
import about from '../../Assets/Menu/About.svg'
// import mosque from '../../Assets/Menu/Mosque.svg'
import services from '../../Assets/Menu/Services.svg'
// import mosque from '../../Assets/Menu/Mosque.svg'
import quran from '../../Assets/Menu/Quran.svg'
// import quran from '../../Assets/Menu/Quran.svg'



import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import HomeIcon from '@mui/icons-material/Home';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'; 
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
// import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';



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
            <div>Home</div>
          </div>
          <div className="mobile_icon" to="/Home">
            <img src={home} alt="" />
            <div>About </div>
          </div>
          <div className="mobile_icon" to="/Home">
            <img src={home} alt="" />
            <div>Services</div>
          </div>
          <div className="mobile_icon" to="/Home">
            <img src={home} alt="" />
            <div>Quran</div>
          </div>
          <div className="mobile_icon" to="/Home">
            <img src={home} alt="" />
            <div> Mosques</div>
          </div>
          <div className="mobile_icon" to="/Home">
            <img src={home} alt="" />
            <div>Register</div>
          </div>
          <div className="mobile_icon" to="/Home">
            <img src={home} alt="" />
            <div>Contact</div>
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
              <img src={home} alt="" />
              <div>Home</div>
            </div>
            <div className="box">
              <img src={about} alt="" />
              <div>About</div>
            </div>
            <div className="box">
              <img src={services} alt="" />
              <div>Services</div>
            </div>
            <div className="box">
              <img src={quran} alt="" />
              <div>Quran</div>
            </div>
            <div className="box">
              <img src={home} alt="" />
              <div>Mosques</div>
            </div>
            <div className="box">
              <img src={quran} alt="" />
              <div>Register</div>
            </div>
            <div className="box">
              <img src={quran} alt="" />
              <div>Contact</div>
            </div>
          </div>
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
