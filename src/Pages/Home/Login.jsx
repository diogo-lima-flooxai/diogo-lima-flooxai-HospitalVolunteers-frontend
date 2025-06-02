import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        email: form.email,
        password: form.password,
      });

      console.log("resp:", response.data)
      alert("Login bem-sucedido");

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/dashboardV");

    } catch (error) {
      const msg = error?.response?.data?.error;

      if (msg === "Email não encontrado.") {
        alert("Email não cadastrado.");
      } else if (msg === "Senha incorreta.") {
        alert("Senha incorreta.");
      } else {
        alert("Erro ao fazer login. Tente novamente.");
      }
    }
  };

  return (
    <>
    <Header />
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-3xl font-bold mb-7">Login</h1>
      <form onSubmit={handleSubmit} className= "bg-white p-8 rounded-2xl shadow-md w-96">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 rounded"
            placeholder="seuemail@exemplo.com"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Senha
          </label>
          <input
            type="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 rounded"
            placeholder="******"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Entrar
        </button>
      </form>

      <p className="text-sm text-center text-gray-600 mt-4">
        Ainda não tem uma conta?{" "}
        <a href="/register" className="text-blue-500 hover:underline">
          Registre-se
        </a>
      </p>
      <Footer/>
    </div>
    </>
  );
};
export default Login;
