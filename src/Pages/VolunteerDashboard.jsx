import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {children}
        <div className="text-right mt-4">
          <button
            onClick={onClose}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

const VolunteerDashboard = () => {
  const [userData, setUserData] = useState({
    nome: "Diogo",
    ajudasConcluidas: 12,
    proximasAcoes: 3,
    disponibilidade: ["Seg", "Qua", "Sex"],
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [disponibilidadeTemp, setDisponibilidadeTemp] = useState(
    userData.disponibilidade
  );

  const diasDaSemana = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

  const toggleDia = (dia) => {
    setDisponibilidadeTemp((prev) =>
      prev.includes(dia) ? prev.filter((d) => d !== dia) : [...prev, dia]
    );
  };

  const salvarDisponibilidade = () => {
    setUserData((prev) => ({
      ...prev,
      disponibilidade: disponibilidadeTemp,
    }));
    setIsModalOpen(false);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-950">Dashboard</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:underline">
            Inicio
          </Link>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsProfileModalOpen(true);
            }}
            className="hover:underline"
          >
            Perfil
          </a>
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
          <h2 className="text-4xl font-semibold mb-4">
            Olá, {userData.nome} 👋🏼{" "}
          </h2>

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
            <button
              onClick={() => {
                setDisponibilidadeTemp(userData.disponibilidade); //Reset ao abrir
                setIsModalOpen(true);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Atualizar disponibilidade
            </button>
          </div>
        </section>

        {/* Atualizações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white p-4 rounded-lg shadow ">
            <h3 className="font-medium mb-2">Últimas atualizações</h3>
            <ul className="text-sm space-y-1">
              <li>ex1</li>
              <li>ex2</li>
            </ul>
          </section>
          <section className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium mb-2">Últimas atualizações</h3>
            <ul className="text-sm space-y-1">
              <li>ex3</li>
              <li>ex4</li>
            </ul>
          </section>
        </div>
      </main>

      {/* Modal atualizando disponibilidade do voluntario  */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-lg font-semibold mb-4">
          Atualizar Disponibilidade
        </h2>
        <div className="space-y-2">
          {diasDaSemana.map((dia) => (
            <label key={dia} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={disponibilidadeTemp.includes(dia)}
                onChange={() => toggleDia(dia)}
              />
              <span>{dia}</span>
            </label>
          ))}
        </div>
        <button
          onClick={salvarDisponibilidade}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Salvar
        </button>
      </Modal>

      {/* Modal Perfil do Usuario  */}
      <Modal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      >
        <h2 className="text-xl font-bold mb-4">Perfil do Voluntário</h2>
        <div className="space-y-2">
          <p>
            <strong>Nome: </strong>
            
          </p>
          <p>
            <strong>E-mail: </strong>
            
          </p>
          <p>
            <strong>Área de interesse: </strong>
            
          </p>
        </div>
      </Modal>
      <Footer />
    </div>
  );
};

export default VolunteerDashboard;
