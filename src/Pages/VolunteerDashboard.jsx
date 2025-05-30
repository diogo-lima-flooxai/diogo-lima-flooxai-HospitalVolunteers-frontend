import React from "react";
import Nav from "../Components/Nav/Nav";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const VolunteerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2x1 font-bold">Dashboard</h1>
        <div className="space-x-6">
            <Link to='#' className="hover:underline">Inicio</Link>
            <Link to='#' className="hover:underline">Perfil</Link>
            <Link to='#' className="hover:underline">Configurações</Link>
            <Link to='/' className="hover:underline">Sair</Link>
        </div>
      </nav>

        {/* Conteudo */}
      <main className="p-6 grid gap-6">
         {/* Painel Principal */}
        <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Painel principal</h2>
            <div className="h-24 bg-gray-100 rounded mb-4"></div>
            <div className="flex items-center space-x-4">
                <div className="w-1/2 h-20 bg-gray-200 rounded"></div>
                <div className="w-1/2 h-20 bg-gray-200 rounded"></div>
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
