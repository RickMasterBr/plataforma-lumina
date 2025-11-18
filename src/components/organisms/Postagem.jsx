import React from 'react';
import styles from './Postagem.module.css';

function Postagem({ autor, tempo, conteudo, likes = 0, comentarios = 0 }) {
  return (
    <article className={styles.postCard}>
      
      {/* 1. Cabeçalho da Postagem */}
      <div className={styles.header}>
        <div className={styles.avatar}>
          {autor.charAt(0)}
        </div>
        <div className={styles.meta}>
          <h4 className={styles.authorName}>{autor}</h4>
          <span className={styles.time}>{tempo}</span>
        </div>
      </div>

      {/* 2. Conteúdo do Texto */}
      <div className={styles.content}>
        <p>{conteudo}</p>
      </div>

      {/* 3. Rodapé de Ações */}
      <div className={styles.actions}>
        <button className={styles.actionButton}>
          {/* Ícone Like (SVG) */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
          <span>Curtir ({likes})</span>
        </button>

        <button className={styles.actionButton}>
          {/* Ícone Comentário (SVG) */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span>Comentar ({comentarios})</span>
        </button>

        <button className={styles.actionButton}>
          {/* Ícone Compartilhar (SVG) */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
          <span>Compartilhar</span>
        </button>
      </div>

    </article>
  );
}

export default Postagem;