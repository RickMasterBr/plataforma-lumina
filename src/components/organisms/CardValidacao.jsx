import React from "react";
import Button from "../atoms/Button";
import FormGroup from "../molecules/FormGroup";
import styles from "./CardValidacao.module.css";

function CardValidacao({
  titulo,
  linkPrototipo,
  estado = "pendente", // 'pendente' ou 'aprovado'
  onAprovar,
  onRevisar,
}) {
  const isAprovado = estado === "aprovado";

  return (
    <div className={styles.card}>
      {/* Cabeçalho: Título e Link */}
      <div className={styles.header}>
        <h3 className={styles.projectTitle}>Projeto: {titulo}</h3>
        <div className={styles.linkContainer}>
          <span className={styles.labelLink}>Link do Protótipo:</span>
          <a
            href={linkPrototipo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {linkPrototipo}
          </a>
        </div>
      </div>

      {/* Conteúdo condicional baseado no estado */}
      {!isAprovado ? (
        <div className={styles.feedbackForm}>
          <h4 className={styles.feedbackTitle}>Seu Feedback</h4>

          {/* TextArea simulado usando FormGroup com altura customizada */}
          <FormGroup
            label="Por favor, descreva o que achou ou o que precisa ser ajustado:"
            placeholder="Digite seu feedback aqui..."
            fullWidth
            style={{ height: "120px" }} // Passado via rest props para o Input (se suportado) ou ajustado no CSS
          />

          <div className={styles.actions}>
            <Button tipo="secundario" onClick={onRevisar}>
              Solicitar Revisão
            </Button>
            <Button tipo="primario" onClick={onAprovar}>
              Aprovar Protótipo
            </Button>
          </div>
        </div>
      ) : (
        // Estado Aprovado
        <div className={styles.successState}>
          <span className={styles.successIcon}>✓</span>
          <span className={styles.successText}>Protótipo Aprovado!</span>
        </div>
      )}
    </div>
  );
}

export default CardValidacao;
