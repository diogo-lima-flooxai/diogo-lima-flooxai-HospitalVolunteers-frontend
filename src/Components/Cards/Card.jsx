import React from "react";
import Logo from '../../Assets/medical-icon.svg'
import { Link } from "react-router-dom";

const Card = () => (
    //card to get the volunteer's attention
  <section className="bg-blue-50 py-16">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    <img src={Logo} alt="Ajuda Médica" className="w-22 md:w-48" />
    <div>
      <h1 className="text-4xl font-bold text-blue-900">Salve Vidas</h1>
      <p className="text-lg text-gray-600 mt-4">
        Conectando voluntários com hospitais que precisam de ajuda.
      </p>
      <div className="mt-6 flex gap-4">
        <Link to='/login' className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
          Quero Ajudar
        </Link>
        <Link to='/hospital' className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
          Sou um Hospital
        </Link>
      </div>
    </div>
  </div>
</section>
)

export default Card;