import React, {useState} from "react";
import './styles/App.css';
import "react-widgets/styles.css";
import Icons from './components/Icons';
import Ideas from './components/Ideas';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import GetAllButton from './components/GetAllButton';
import DepInput from "./components/DepInput";
import ArrInput from "./components/ArrInput";
import DateTimeInput from "./components/DateTimeInput";



function App() {
  const [arrPort, setArrPort] = useState("");
  const [depPort, setDepPort] = useState("");
  return (

    <div className="App">
      <Header />

      <div className="search">

        <h1>Plan Your Journey</h1>

        <img className="ferryImage" alt="ferryimage" src="ferryimage.jpg" align="right" />

        <br />

        <h2>Departure Port:</h2>

        <DepInput setDepPort={setDepPort} />
        <br />

        <h2>Arrival Port:</h2>

        <ArrInput setArrPort={setArrPort} />
        <br />

        <h2>Date and Time of Departure:</h2>

        <DateTimeInput />
        <br />

        <GetAllButton arrivalPort={arrPort} departurePort={depPort}/>
        <br />

      </div>

      <Ideas />
      <Icons />
      <AboutUs />
      <Footer />

    </div>

  );
}


export default App;
