import React from 'react';
import Slider from 'react-slick';
import './App.scss';
import Cards from './Components/Cards/Cards';
import Contact from './Components/Contact us/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar'
import MainSlider from './Components/Slider/MainSlider';
import Subscribe from './Components/Subscribe/Subscribe'


function App() {
  return (
    <>
      <Navbar/>
      <MainSlider/>
      <Subscribe/>
      <Cards/>
      <Contact/>
      <Footer />
      
    </>
  );
}

export default App;
