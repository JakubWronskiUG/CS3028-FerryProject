import React from "react";

function NavBar2({ handleRegisterClick }) {
  const handleClick = () => {
    handleRegisterClick();
  };
  return (
    <div className="navbar">
      <div>
        <span onClick={handleClick} className="loginicon">
          Register
        </span>
      </div>
    </div>
  );
}

export default NavBar2;