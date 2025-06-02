import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       await axios.post("http://localhost:3001/api/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      }); 

      alert("Conta criada com sucesso!")
      navigate('/login')

    } catch (error) {
      const msg = error?.response?.data?.error;

      if (msg === "Email já cadastrado.") {
        alert("Erro: Email já cadastrado.");
      } else if (msg === "Nome já cadastrado.") {
        alert("Erro: Nome já cadastrado.");
      } else if (msg === "Senha já cadastrada.") {
        alert("Erro: Senha já cadastrada.");
      } else {
        alert("Erro ao criar conta. Tente novamente.");
      }
    }
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Criar Conta</h2>
        <p className="text-center text-gray-600 mb-4">
          Preencha os campos abaixo para criar uma nova conta.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Nome</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Seu nome completo"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="seuemail@exemplo.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Senha</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="******"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Cadastrar
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Já tem uma conta?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Entrar
          </Link>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Register;
