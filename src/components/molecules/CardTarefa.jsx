import React from 'react';
import styles from './CardTarefa.module.css';

function CardTarefa({ titulo, responsavelChar }) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{titulo}</p>
      {responsavelChar && (
        <div className={styles.avatar}>
          {responsavelChar}
        </div>
      )}
    </div>
  );
}

export default CardTarefa;