import React from 'react';
import Tela14_DetalhesProjeto from './Tela14_DetalhesProjeto';
import Modal from '../components/organisms/Modal';
import { useNavigate, useParams } from 'react-router-dom';

function Tela14_2_Confirmacao() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div style={{ position: 'relative' }}>
      <Tela14_DetalhesProjeto />

      <Modal
        isOpen={true}
        title="Aplicação Enviada!"
        type="sucesso"
        confirmText="Ok"
        onConfirm={() => navigate(`/project/${id}`)}
      >
        <p>O líder do projeto recebeu sua solicitação e entrará em contato em breve.</p>
      </Modal>
    </div>
  );
}

export default Tela14_2_Confirmacao;