import React from "react";
import Button from "../atoms/Button";
import styles from "./CardEvento.module.css";

function CardEvento({ imagemUrl, data, titulo, descricao, onInscrever }) {
  return (
    <article className={styles.card}>
      {/* Imagem do Evento (Esquerda) */}
      <div className={styles.imageContainer}>
        {imagemUrl ? (
          <img src={imagemUrl} alt={titulo} className={styles.image} />
        ) : (
          // Placeholder se não houver imagem
          <div className={styles.placeholder}></div>
        )}
      </div>

      {/* Conteúdo e Ação (Direita) */}
      <div className={styles.content}>
        {/* Informações */}
        <div className={styles.info}>
          <span className={styles.date}>{data}</span>
          <h3 className={styles.title}>{titulo}</h3>
          <p className={styles.description}>{descricao}</p>
        </div>

        {/* Botão de Ação (Empurrado para a direita/baixo) */}
        <div className={styles.action}>
          <Button tipo="primario" onClick={onInscrever}>
            Inscrever-se
          </Button>
        </div>
      </div>
    </article>
  );
}

export default CardEvento;
