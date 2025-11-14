import React from "react";
import Button from "./components/atoms/Button";
import Input from "./components/atoms/Input";
import FormGroup from "./components/molecules/FormGroup";
import "./styles/App.css";

function App() {
  return(
    <div className="appContainer">
     <h1 className="heading-1">Teste dos Componentes (Átomos)</h1>
      
      <h3>Botões (Etapa 2)</h3>
      <Button tipo="primario">Texto do Botão</Button>
      <Button tipo="secundario">Continuar com Google</Button>

      {/* 2. Adicionando Inputs para Teste */}
      <h3 style={{ marginTop: '24px'}}>Inputs</h3>
      <Input placeholder="Digite seu email..." type="email"></Input>
      <Input placeholder="Digite sua senha..." type="password"></Input>

      <br></br>

      {/* Estado Padrão */}
      <FormGroup
      label={"Email"}
      helpText={"Texto de ajuda."}
      type={"email"}
      placeholder={"Digite seu email..."}
      >
      </FormGroup>

      {/* Estado de Erro */}
      <FormGroup 
        label="Senha"
        helpText="Mensagem de erro."
        estado="erro" 
        type="password"
        placeholder="Digite sua senha..."
      />

    </div>
  );
}

export default App;