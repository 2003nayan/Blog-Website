import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="border-b-2">
      <Link to="/">
        <img src="client/src/assets/logo-no-background.png" />
      </Link>
    </Navbar>
  );
};

export default Header;
