import React from "react";
import { useNavigate, Link } from "react-router-dom"; // Importar Router
import Button from "../components/atoms/Button";
import FormGroup from "../components/molecules/FormGroup";
import styles from "./Tela02_Cadastro.module.css";

function Tela02_Cadastro() {
  const navigate = useNavigate();

  const handleCadastro = () => {
    // Aqui viria a lógica de criar conta
    console.log("Conta criada!");
    // Avança para o Onboarding
    navigate("/onboarding");
  };

  return (
    <div className={styles.loginScreen}>
      <div className={styles.loginCard}>
        <h2 className={styles.logo}>Lúmina</h2>
        <h1 className={styles.title}>Crie sua conta</h1>

        {/* Botões sociais também levam ao onboarding neste protótipo */}
        <Button tipo="secundario" fullWidth onClick={handleCadastro}>
          Cadastrar com Google
        </Button>
        <Button tipo="secundario" fullWidth onClick={handleCadastro}>
          Cadastrar com LinkedIn
        </Button>

        <span className={styles.divisor}>ou</span>

        {/* ... (Inputs mantidos iguais) ... */}
        <FormGroup
          label="Nome Completo"
          type="text"
          placeholder="Digite seu nome..."
          fullWidth
        />
        <FormGroup
          label="Email"
          type="email"
          placeholder="Digite seu email..."
          fullWidth
        />
        <FormGroup
          label="Senha"
          type="password"
          placeholder="Crie uma senha..."
          fullWidth
        />
        <FormGroup
          label="Confirmar Senha"
          type="password"
          placeholder="Confirme sua senha..."
          fullWidth
        />

        {/* Ação Principal */}
        <Button tipo="primario" fullWidth onClick={handleCadastro}>
          Criar conta
        </Button>

        <div className={styles.signupLink}>
          <span>Já tem uma conta?</span>
          {/* Link para Login */}
          <Link to="/login">Acesse</Link>
        </div>
      </div>
    </div>
  );
}

export default Tela02_Cadastro;
