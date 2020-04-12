import React from "react";
import "./styles/App.css";

import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Especialidades from "./components/Especialidades";
import Experiencias from "./components/Experiencias";
import Ajuda from "./components/Ajuda";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Sobre />
      <Especialidades />
      <Experiencias />
      <Ajuda />
      <Footer />
    </div>
  );
}

export default App;
