import React from 'react';
import styles from './Toast.module.css';

/*
Props:
- tipo: 'sucesso' (verde) ou 'erro' (vermelho)
- mensagem: Texto do toast
*/
function Toast({ tipo = 'sucesso', mensagem }) {
  const isErro = tipo === 'erro';

  return (
    <div className={`${styles.toast} ${isErro ? styles.erro : styles.sucesso}`}>
      {/* Ícone */}
      <div className={styles.icon}>
        {isErro ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
        ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
        )}
      </div>

      <span className={styles.message}>{mensagem}</span>
    </div>
  );
}

export default Toast;