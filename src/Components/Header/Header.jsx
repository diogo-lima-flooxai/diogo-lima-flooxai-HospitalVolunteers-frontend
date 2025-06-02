import React from "react";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-950">VoluteersH</h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
