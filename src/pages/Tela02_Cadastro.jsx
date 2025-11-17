import React from "react";
import Button from "../components/atoms/Button";
import FormGroup from "../components/molecules/FormGroup";

import styles from "./Tela02_Cadastro.module.css"; 

function Tela02_Cadastro() {
    return (
    <div className={styles.loginScreen}>
        <div className={styles.loginCard}>
            <h2 className={styles.logo}>Lúmina</h2>

            {/* Título atualizado */}
            <h1 className={styles.title}>Crie sua conta</h1>

            {/* Botões sociais atualizados */}
            <Button tipo="secundario" fullWidth>Cadastrar com Google</Button>
            <Button tipo="secundario" fullWidth>Cadastrar com LinkedIn</Button>

            <span className={styles.divisor}>ou</span>

            {/* Novos campos adicionados (Nome e Confirmar Senha) */}
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

            {/* Botão Principal */}
            <Button tipo="primario" fullWidth>Criar conta</Button>

            {/* Rodapé atualizado */}
            <div className={styles.signupLink}>
                <span>Já tem uma conta?</span>
                <a href="#">Acesse</a>
            </div>
        </div>
    </div>
    );
}

export default Tela02_Cadastro;