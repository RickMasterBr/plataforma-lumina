import React from 'react';
import Input from '../atoms/Input'; // Reutilizando o átomo Input
import styles from './CompositorComentario.module.css';

function CompositorComentario({ avatarChar = 'U', placeholder = 'Adicione um comentário...' }) {
  return (
    <div className={styles.composerWrapper}>
      {/* Avatar (Usa o char do usuário logado) */}
      <div className={styles.avatar}>{avatarChar}</div>
      
      {/* Input de Comentário (Reutiliza o nosso Input) */}
      <input 
        type="text" 
        className={styles.input} 
        placeholder={placeholder} 
      />

      {/* Ação: Simplesmente um ícone de envio (Placeholder) */}
      <button className={styles.sendButton}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </div>
  );
}

export default CompositorComentario;