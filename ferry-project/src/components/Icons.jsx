import React from "react";
import './Icons.css';

const Icons = () => {
    return (

    <div className="features">
        <div className="row">
        <div className="feature-box col-lg-3">
            <i className="icon fas fa-suitcase fa-4x"></i>
            <h3>Larger luggage allowance</h3>
            <h5>Some text here here here hereeeeee</h5>
        </div>
    
    <div className="feature-box col-lg-3">
      <i className="icon fas fa-gem fa-4x"></i>
      <h3>Access hidden gems</h3>
      <h5>Some text here here here hereeeeee</h5>
    </div>

    <div className="feature-box col-lg-3">
      <i className="icon fas fa-car fa-4x"></i>
      <h3>Bring your own car*</h3>
      <h5>Some text here here here hereeeeee</h5>
    </div>
    <div className="feature-box col-lg-3">
        <i className="icon fas fa-mountain fa-4x"></i>
        <h3>Beautiful views</h3>
        <h5>Some text here here here hereeeeee</h5>
      </div>
  </div>  
</div>  
    )
}

export default Icons;