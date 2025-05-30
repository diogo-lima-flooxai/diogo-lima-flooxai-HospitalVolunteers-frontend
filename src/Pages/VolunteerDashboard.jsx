import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const VolunteerDashboard = () => {
  const [userData] = useState({
    nome: "Diogo",
    ajudasConcluidas: 12,
    proximasAcoes: 3,
    disponibilidade: ["Seg", "Qua", "Sex"],
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="space-x-6">
          <Link to="#" className="hover:underline">
            Inicio
          </Link>
          <Link to="#" className="hover:underline">
            Perfil
          </Link>
          <Link to="#" className="hover:underline">
            Configurações
          </Link>
          <Link to="/" className="hover:underline">
            Sair
          </Link>
        </div>
      </nav>

      {/* Conteudo */}
      <main className="p-6 grid gap-6">
        {/* Painel Principal */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl text-center font-semibold mb-4">
            Painel principal
          </h2>
          <h2 className="text-4xl font-semibold mb-4">Olá, {userData.nome} 👋🏼 </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-100 p-4 rounded">
              <h3 className="text-sm text-gray-600">Ajudas concluídas</h3>
              <p className="text-2xl font-bold text-blue-800">
                {userData.ajudasConcluidas}
              </p>
            </div>
            <div className="bg-green-100 p-4 rounded">
              <h3 className=" text-sm text-gray-600">Proximas ações</h3>
              <p className="text-2xl font-bold text-green-800">
                {userData.proximasAcoes} agendadas
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-100 p-4 rounded">
            <p className="text-gray-700 mb-2 sm:mb-0">
              Você está disponivel:{" "}
              <strong>{userData.disponibilidade.join(", ")}</strong>
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Atualizar disponibilidade
            </button>
          </div>
        </section>

        {/* Atualizações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium mb-2">Últimas atualizações</h3>
            <ul className="text-sm space-y-1">
              <li>ex1</li>
              <li>ex2</li>
            </ul>
          </section>
          <section className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium mb-2">Últimas atualizações</h3>
            <ul className="text-sm space-y-1">
              <li>Ex3</li>
              <li>Ex4</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VolunteerDashboard;
