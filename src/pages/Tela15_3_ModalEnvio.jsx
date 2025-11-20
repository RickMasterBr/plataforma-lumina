import React from 'react';
import Tela15_GerenciamentoProjeto from './Tela15_GerenciamentoProjeto';
import Modal from '../components/organisms/Modal';
import styles from './Tela15_3_ModalEnvio.module.css';

function Tela15_3_ModalEnvio() {
  return (
    <div className={styles.container}>
      
      {/* Tela de Fundo */}
      <div className={styles.backgroundWrapper}>
        <Tela15_GerenciamentoProjeto />
      </div>

      {/* O Modal de Sucesso */}
      <Modal 
        isOpen={true}
        title="Projeto Enviado"
        type="sucesso"
        confirmText="Ok"
        onConfirm={() => console.log("Fechar")}
      >
        <p>Sua solicitação foi enviada para análise. Nossa equipe entrará em contato em breve.</p>
      </Modal>

    </div>
  );
}

export default Tela15_3_ModalEnvio;