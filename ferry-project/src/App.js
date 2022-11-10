import React from 'react';
import './styles/App.css';
import TextInput from './components/Text';
import Icons from './components/Icons';
import Ideas from './components/Ideas';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import GetAllButton from './components/GetAllButton';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="search">
      <h2>Enter departure port:</h2>
      <TextInput/>
      <h2>Enter arrival port:</h2>
      <TextInput/>
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
