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
<<<<<<< HEAD
      <div className="search">
=======
      <div class="search">
      <h1>Single Journey</h1>
>>>>>>> 0f69164f009ddd4692cda392b078d99f9abc9c46
      <h2>Enter departure port:</h2>
      <TextInput/>
      <h2>Enter arrival port:</h2>
      <TextInput/>
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
