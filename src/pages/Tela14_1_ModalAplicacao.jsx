import React from 'react';
import Tela14_DetalhesProjeto from './Tela14_DetalhesProjeto';
import Modal from '../components/organisms/Modal';
import FormGroup from '../components/molecules/FormGroup';

function Tela14_1_ModalAplicacao() {
  return (
    <div style={{ position: 'relative' }}>
      <Tela14_DetalhesProjeto />
      
      <Modal 
        isOpen={true} 
        title="Aplicar para o Projeto" 
        type="confirmacao" 
        confirmText="Enviar Aplicação"
        onCancel={() => console.log("Cancelar")}
        onConfirm={() => console.log("Enviado")}
      >
        <p style={{ marginBottom: '16px' }}>Conte para o líder do projeto por que você gostaria de participar:</p>
        <FormGroup label="Mensagem" placeholder="Escreva aqui..." fullWidth style={{height: '100px'}} />
      </Modal>
    </div>
  );
}

export default Tela14_1_ModalAplicacao;