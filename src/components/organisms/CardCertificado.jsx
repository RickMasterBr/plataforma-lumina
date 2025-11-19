import React from "react";
import Button from "../atoms/Button";
import styles from "./CardCertificado.module.css";

function CardCertificado({ titulo, dataEmissao, imagemUrl }) {
  return (
    <article className={styles.card}>
      {/* Visual do Certificado (Topo) */}
      <div className={styles.visualContainer}>
        {imagemUrl ? (
          <img
            src={imagemUrl}
            alt={`Certificado: ${titulo}`}
            className={styles.image}
          />
        ) : (
          // Placeholder com ícone se não houver imagem
          <div className={styles.placeholder}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
          </div>
        )}
      </div>

      {/* Conteúdo e Ações */}
      <div className={styles.content}>
        <div className={styles.info}>
          <h3 className={styles.title}>{titulo}</h3>
          <span className={styles.date}>Emitido em: {dataEmissao}</span>
        </div>

        <div className={styles.actions}>
          <Button tipo="primario" fullWidth>
            Baixar PDF
          </Button>
          <Button tipo="secundario" fullWidth>
            Compartilhar no LinkedIn
          </Button>
        </div>
      </div>
    </article>
  );
}

export default CardCertificado;
