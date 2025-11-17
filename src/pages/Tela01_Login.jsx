import React from "react";
import Button from "../components/atoms/Button";
import FormGroup from "../components/molecules/FormGroup";
import styles from "./Tela01_Login.module.css";

function Tela01_Login() {
    return (
    // O container da tela inteira (fundo escuro)
    <div className={styles.loginScreen}>

        {/* O card centralizado  */}
        <div className={styles.loginCard}>

            {/* Logo (Placeholder) */}
            <h2 className={styles.logo}>Lúmina</h2>

            {/* Título */}
            <h1 className={styles.title}>Acesse sua conta</h1>

            {/* Botões Sociais */}
            <Button tipo="secundario" fullWidth>Continuar com Google</Button>
            <Button tipo="secundario" fullWidth>Continuar com LinkedIn</Button>

            {/* Divisor "ou" [cite: 1760-1765] */}
            <span className={styles.divisor}>ou</span>

            {/* Formulário de Email e Senha */}
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

            {/* Link "Esqueci a senha" [cite: 1778-1783] */}
            <a href="#" className={styles.forgotPassword}>
                Esqueci a senha
            </a>

            {/* Botão Principal de Login [cite: 1784-1789] */}
            <Button tipo="primario" fullWidth>Entrar</Button>

            {/* Link de Cadastro [cite: 1790-1801] */}
            <div className={styles.signupLink}>
                <span>Não tem uma conta?</span>
                <a href="#">Cadastre-se</a>

            </div>
        </div>
    </div>
    );
}

export default Tela01_Login;