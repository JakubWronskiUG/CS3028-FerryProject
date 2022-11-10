import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="up-container">   
            <div className="row">
                <div className="col-lg-9">
                    <h1>FerryWave</h1>   
                    <img src="FerrywaveLogo.png" alt="logo" width="300" height="100"></img>
                </div>
                <div className="col-lg-1">
                    <button type="button">Timetables</button> 
                </div>
                <div className="col-lg-1">
                    <button type="button">Register</button> 
                </div>
                <div className="col-lg-1">
                    <button type="button">Log in</button> 
                </div>
            </div>
        </div>
 
    )
}

export default Header;