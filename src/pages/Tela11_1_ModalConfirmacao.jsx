import React from "react";
import Tela11_DetalhesCurso from "./Tela11_DetalhesCurso";
import Modal from "../components/organisms/Modal";
import { useNavigate, useParams } from "react-router-dom";

function Tela11_1_ModalConfirmacao() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div style={{ position: "relative" }}>
      {/* Tela de Fundo */}
      <Tela11_DetalhesCurso />

      {/* O Modal Ativo */}
      <Modal
        isOpen={true}
        title="Confirmar Inscrição"
        type="confirmacao"
        confirmText="Confirmar"
        onCancel={() => navigate(`/course/${id}`)} // Volta para detalhes
        onConfirm={() => navigate(`/course/${id}/play`)} // Vai para o curso (player)
      >
        <p>
          Deseja se inscrever na trilha <strong>UX Design Fundamentals</strong>?
        </p>
        <p style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>
          Ao confirmar, você terá acesso imediato a todas as aulas.
        </p>
      </Modal>
    </div>
  );
}

export default Tela11_1_ModalConfirmacao;
