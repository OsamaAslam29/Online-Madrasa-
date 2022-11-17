import React from 'react';
import './App.scss';
import Atom from './Components/Atoms/Atom';
import Cards from './Components/Cards/Cards';
import Contact from './Components/Contact us/Contact';
import Footer from './Components/Footer/Footer';
import Images from './Components/ImagesContainer/Images';
import Navbar from './Components/Navbar/Navbar'
import MainSlider from './Components/Slider/MainSlider';
import Subscribe from './Components/Subscribe/Subscribe'


function App() {
  return (
    <>
      <Navbar />
      <MainSlider />
      <Images />
      <Subscribe />
      <Cards />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
