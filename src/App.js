import React from 'react';
import './App.scss';
import Cards from './Components/Cards/Cards';
import Contact from './Components/Contact us/Contact';
import Info from './Components/Contact us/Info';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
// https://www.figma.com/file/uu1D1793s1wGMh4XxZiKAY/Madrasa.io?node-id=0%3A1
import Subscribe from './Components/Subscribe/Subscribe'


function App() {
  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      <Subscribe/>
      <Contact/>
      <Cards/>
      <Footer/>
    </>
  );
}

export default App;
