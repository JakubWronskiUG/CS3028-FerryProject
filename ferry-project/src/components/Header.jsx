import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="up-container">   
            <div className="row">
                <div className="col-lg-9"> 
                    <h1><img src="FerrywaveLogo.png" alt="logo" width="420" height="110"></img></h1>
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