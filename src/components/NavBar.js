import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
    </nav>
  );
}

export default NavBar;
