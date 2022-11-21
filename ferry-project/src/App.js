import React, { useState } from "react";
import './styles/App.css';
import TextInput from './components/Text';
import Icons from './components/Icons';
import Ideas from './components/Ideas';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import GetAllButton from './components/GetAllButton';
import Calender from './components/Calender';



function App() {

  return (
    <div className="App">
      <Header/>
      
      <div className="search">
      <h1>Single Journey</h1>
      <img align="right" src="ferryimage.jpg" alt="image" width="375.5" height="281.7"></img>
      <br></br>
      <h2>Enter departure port:</h2>
      <TextInput/>
      <br></br>
      <h2>Enter arrival port:</h2>
      <TextInput/>
      <br></br>
      <h2>Enter date and time of travel:</h2>
      <Calender/>
      <GetAllButton/>
      </div>
      <Ideas/>
      <Icons/>
      <AboutUs/>
      <Footer/>
    </div>
    
  );
}


export default App;
