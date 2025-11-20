import React from 'react';
import Tela11_DetalhesCurso from './Tela11_DetalhesCurso';
import Modal from '../components/organisms/Modal';

function Tela11_1_ModalConfirmacao() {
  return (
    <div style={{ position: 'relative' }}>
      
      {/* Tela de Fundo */}
      <Tela11_DetalhesCurso />

      {/* O Modal Ativo */}
      <Modal 
        isOpen={true}
        title="Confirmar Inscrição"
        type="confirmacao"
        confirmText="Confirmar"
        onCancel={() => console.log("Cancelado")}
        onConfirm={() => console.log("Inscrito!")}
      >
        <p>Deseja se inscrever na trilha <strong>UX Design Fundamentals</strong>?</p>
        <p style={{marginTop: '8px', fontSize: '12px', color: '#999'}}>Ao confirmar, você terá acesso imediato a todas as aulas.</p>
      </Modal>

    </div>
  );
}

export default Tela11_1_ModalConfirmacao;