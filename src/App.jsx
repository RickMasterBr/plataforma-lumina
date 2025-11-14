import React from "react";
import Button from "./components/atoms/Button";
import "./styles/App.css";

function App() {
  return(
    <div className="appContainer">
     <h1 className="heading-1">Teste dos Componentes (Átomos)</h1>
      
      <h3>Botão Primário</h3>
      <Button tipo="primario">
        Texto do Botão
      </Button>

      <h3 style={{ marginTop: '24px' }}>Botão Secundário</h3>
      <Button tipo="secundario">
        Continuar com Google
      </Button>
    </div>
  );
}

export default App;