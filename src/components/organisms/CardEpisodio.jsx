import React from 'react';
import Button from '../atoms/Button';
import styles from './CardEpisodio.module.css';

function CardEpisodio({ titulo, data, resumo, duracao, onClick }) {
  return (
    <article className={styles.card}>
      {/* Imagem do Episódio (Placeholder) */}
      <div className={styles.imageContainer}>
        <div className={styles.playOverlay}>▶</div>
      </div>

      {/* Conteúdo */}
      <div className={styles.content}>
        <div className={styles.meta}>
            <span className={styles.date}>{data}</span>
            <span className={styles.dot}>•</span>
            <span className={styles.duration}>{duracao}</span>
        </div>
        
        <h3 className={styles.title}>{titulo}</h3>
        <p className={styles.summary}>{resumo}</p>

        <div className={styles.action}>
            <Button tipo="secundario" onClick={onClick}>Ouvir Agora</Button>
        </div>
      </div>
    </article>
  );
}

export default CardEpisodio;