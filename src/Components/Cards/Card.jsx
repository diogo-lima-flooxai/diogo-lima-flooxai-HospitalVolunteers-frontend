import React from "react";
import { Link } from 'react-router-dom'

const Card = () => (
    //card to get the volunteer's attention
  <section className="bg-blue-100 py-20 text-center">
    <h2 className="text-4xl font-bold mb-4">Venha salvar vidas</h2>
    <p className="text-xl mb-8">Conectando voluntários com os hospitais que precisam de ajuda</p>
    <div className="space-x-4">
        <Link to='/voluntário' className="bg-green-500 hover:bg-green-600 font-bold text-white px-6 py-3 rounded-full shadow">
            Quero Ajudar
        </Link>
        <Link to='/hospital' className="bg-blue-600 hover:bg-blue-800 font-bold text-white px-6 py-3 rounded-full shadow">
            Sou um Hospital
        </Link>
    </div>
  </section>
)

export default Card;