import React from "react";

export default () => {
  const logo = "../partials/estimmo_logo.png";
  return (
    <div>
      <header className="hero homepage full-vh ">
        <div className="hero-body centerall">
          <img src={logo} alt="logo" height="50" width="50%" />
        </div>
      </header>
    </div>
  );
};
