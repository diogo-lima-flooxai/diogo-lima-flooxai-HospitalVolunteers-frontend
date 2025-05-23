import React from "react";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className="bg-cyan-700 text-white p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold ">Volutarios para Hospitais</h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
