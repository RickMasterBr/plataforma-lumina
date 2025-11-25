import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/atoms/Button';
import FormGroup from '../components/molecules/FormGroup';
import styles from './Tela01_1_RecuperarSenha.module.css';

function Tela01_1_RecuperarSenha() {
  return (
    <div className={styles.screen}>
      <div className={styles.card}>
        <h2 className={styles.logo}>LÚMINA</h2>

        <h1 className={styles.title}>Recuperar Senha</h1>
        <p className={styles.description}>
          Digite seu email cadastrado e enviaremos um link para você redefinir sua senha.
        </p>

        <FormGroup
          label="Email"
          type="email"
          placeholder="exemplo@email.com"
          fullWidth
        />

        <Button tipo="primario" fullWidth>Enviar Link de Recuperação</Button>

        <Link to="/login" className={styles.backLink}>Voltar para o Login</Link>
      </div>
    </div>
  );
}

export default Tela01_1_RecuperarSenha;