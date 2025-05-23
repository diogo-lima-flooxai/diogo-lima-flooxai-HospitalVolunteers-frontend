import React from "react";
import Header from "../../Components/Header/HEader";
import Card from "../../Components/Cards/Card";
import ListOpportunities from "../../Components/Cards/ListOpportunities";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Card />
      <ListOpportunities />
      <Footer />
    </div>
  );
};

export default Home;
