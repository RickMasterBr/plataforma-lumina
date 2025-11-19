import React from "react";
import Button from "../atoms/Button";
import styles from "./CardModeracao.module.css";

function CardModeracao({ contexto, motivo, conteudo, autorDenuncia }) {
  return (
    <div className={styles.card}>
      {/* Header do Card: Contexto e Motivo */}
      <div className={styles.header}>
        <span className={styles.contexto}>
          <strong>Item denunciado:</strong> {contexto}
        </span>
        <span className={styles.motivo}>
          Sinalizado por <strong>{autorDenuncia}</strong> por:{" "}
          <span className={styles.tagMotivo}>{motivo}</span>
        </span>
      </div>

      {/* Prévia do Conteúdo (caixa cinza) */}
      <div className={styles.preview}>
        <p className={styles.previewText}>"{conteudo}"</p>
      </div>

      {/* Ações de Moderação */}
      <div className={styles.actions}>
        <Button tipo="secundario">Aprovar (Ignorar)</Button>
        <Button tipo="secundario">Remover Conteúdo</Button>
        <Button
          tipo="primario"
          style={{
            backgroundColor: "var(--color-feedback-error)",
            borderColor: "var(--color-feedback-error)",
          }}
        >
          Suspender Usuário
        </Button>
      </div>
    </div>
  );
}

export default CardModeracao;
