import React from "react";
import { useNavigate, Link } from "react-router-dom"; // Importar Hooks
import Button from "../components/atoms/Button";
import FormGroup from "../components/molecules/FormGroup";
import styles from "./Tela01_Login.module.css";

function Tela01_Login() {
  const navigate = useNavigate(); // Hook de navegação

  const handleLogin = () => {
    // Simulação de login
    console.log("Login efetuado!");
    navigate("/dashboard"); // Redireciona para o Dashboard
  };

  return (
    <div className={styles.loginScreen}>
      <div className={styles.loginCard}>
        <h2 className={styles.logo}>Lúmina</h2>
        <h1 className={styles.title}>Acesse sua conta</h1>

        <Button tipo="secundario" fullWidth>
          Continuar com Google
        </Button>
        <Button tipo="secundario" fullWidth>
          Continuar com LinkedIn
        </Button>

        <span className={styles.divisor}>ou</span>

        <FormGroup
          label="Email"
          type="email"
          placeholder="Digite seu email..."
          fullWidth
        />
        <FormGroup
          label="Senha"
          type="password"
          placeholder="Digite sua senha..."
          fullWidth
        />

        {/* Link usando React Router */}
        <Link to="/recover-password" className={styles.forgotPassword}>
          Esqueci a senha
        </Link>

        {/* Botão com ação de navegação */}
        <Button tipo="primario" fullWidth onClick={handleLogin}>
          Entrar
        </Button>

        <div className={styles.signupLink}>
          <span>Não tem uma conta?</span>
          {/* Link para Cadastro */}
          <Link to="/register">Cadastre-se</Link>
        </div>

        {/* Link Secreto para Admin (Para facilitar testes) */}
        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <Link to="/admin" style={{ fontSize: "12px", color: "#666" }}>
            Acesso Admin
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tela01_Login;
