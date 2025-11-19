import React from "react";
import ProgressBar from "../molecules/ProgressBar";
import styles from "./CardCurso.module.css";

function CardCurso({
  titulo,
  instrutor,
  imagemUrl,
  progresso = 0,
  mostrarProgresso = true,
}) {
  return (
    <article className={styles.card}>
      {/* 1. Imagem do Curso (Placeholder ou Imagem Real) */}
      <div className={styles.imageContainer}>
        {imagemUrl ? (
          <img src={imagemUrl} alt={titulo} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}></div>
        )}
      </div>

      {/* 2. Conteúdo */}
      <div className={styles.content}>
        <h3 className={styles.title}>{titulo}</h3>
        <p className={styles.instructor}>{instrutor}</p>

        {/* 3. Barra de Progresso (Condicional) */}
        {mostrarProgresso && (
          <div className={styles.progressWrapper}>
            <div className={styles.progressLabel}>
              <span>Progresso</span>
              <span>{progresso}%</span>
            </div>
            <ProgressBar progresso={progresso} />
          </div>
        )}
      </div>
    </article>
  );
}

export default CardCurso;
