import React from 'react'
import HomeSlider from './Slider'
import { Fade } from 'react-reveal'

const MainSlider = () => {
  return (
      <div className="slider__main">
          
          <div className="slider__componet">
              <HomeSlider/>
          </div>
              <div className="welcome-section">
              <Fade top>
                <h2>Welcome to Madrasa.io</h2>
                <p>A Place to Learn Quran online with Tajweed from Best Quran Tutors</p>
                </Fade>
              </div>
          
    </div> 
  )
}

export default MainSlider   