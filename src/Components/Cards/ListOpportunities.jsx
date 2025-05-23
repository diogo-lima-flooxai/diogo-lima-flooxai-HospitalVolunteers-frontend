import React from "react";

//list of vacancies available to any user
const ListOpportunities = () => (
  <section className="container  mx-auto py-16 px-4">
    <h3 className=" text-2xl font-bold text-center mb-8 -mt-6">
      Oportunidades em Destaque
    </h3>
    <div className="text-center grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-9 bg-red-400 border rounded-lg shadow">
        <h4 className="font-bold text-lg mb-2">Doação de Sangue</h4>
        <p>Hospital São Lucas precisa de doadores com urgência.</p>
      </div>
      <div className="p-9 bg-lime-400 border rounded-lg shadow">
        <h4 className="font-bold text-lg mb-2">Apoio Psicológico</h4>
        <p>Volutários para conversar com pacientes internados</p>
      </div>
      <div className="p-9 bg-amber-400 border rounded-lg shadow">
        <h4 className="font-bold text-lg mb-2">Ajuda em Logistica</h4>
        <p>Ajude organizar doações e entregas no hospital</p>
      </div>
    </div>
  </section>
);

export default ListOpportunities;
