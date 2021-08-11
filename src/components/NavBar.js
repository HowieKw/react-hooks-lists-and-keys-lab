import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const NavLinks = links.map((bar) => {
    return <a href={`#${bar}`} key={bar}>{bar}</a>;
  });

  return <nav> {NavLinks} </nav>;
}

export default NavBar;
