import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form className="bg-white p-8 rounded-2xl shadow-md w-96">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
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
    </div>
  );
};
export default Login;