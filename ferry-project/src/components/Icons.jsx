import React from "react";
import './Icons.css';

const Icons = () => {
    return (

    <div className="features">
        <div className="row">
        <div className="feature-box col-lg-3">
            <i className="icon fas fa-utensils fa-4x"></i>
            <h3>Larger luggage allowance</h3>
            <h5>Some text here here here hereeeeee</h5>
        </div>
    
    <div className="feature-box col-lg-3">
      <i className="icon fas fa-smile-beam fa-4x"></i>
      <h3>Access hidden gems</h3>
      <h5>Some text here here here hereeeeee</h5>
    </div>

    <div className="feature-box col-lg-3">
      <i className="icon fas fa-walking fa-4x"></i>
      <h3>Bring your own car*</h3>
      <h5>Some text here here here hereeeeee</h5>
    </div>
    <div className="feature-box col-lg-3">
        <i className="icon fas fa-walking fa-4x"></i>
        <h3>Beautiful views</h3>
        <h5>Some text here here here hereeeeee</h5>
      </div>
  </div>  
</div>  
    )
}

export default Icons;