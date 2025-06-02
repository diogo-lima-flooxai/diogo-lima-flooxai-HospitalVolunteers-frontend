import React from "react";

//list of vacancies available to any user
const ListOpportunities = () => (
  <section className="container  mx-auto py-16 px-4">
    <h3 className=" text-2xl font-bold text-center mb-8 -mt-6">
      Oportunidades em Destaque
    </h3>
    <div className="text-center grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white border rounded-xl p-6 shadow hover:shadow-lg transition">
        <h4 className="text-lg font-semibold text-red-700">Doação de Sangue</h4>
        <p className="text-sm text-gray-600 mt-2">
          Hospital São Lucas precisa de doadores com urgência.
        </p>
      </div>
      <div className="bg-white border rounded-xl p-6 shadow hover:shadow-lg transition">
        <h4 className="text-lg font-semibold text-orange-600">
          Apoio Psicológico
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          Volutários para conversar com pacientes internados
        </p>
      </div>
      <div className="bg-white border rounded-xl p-6 shadow hover:shadow-lg transition">
        <h4 className="text-lg font-semibold text-amber-400">
          Ajuda em Logistica
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          Ajude organizar doações e entregas no hospital
        </p>
      </div>
    </div>
  </section>
);

export default ListOpportunities;
