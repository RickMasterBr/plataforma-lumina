import React from 'react';
import GlobalNav from '../components/organisms/GlobalNav';
import Button from '../components/atoms/Button';
import styles from './TelaGeral02_Erro404.module.css';

function TelaGeral02_Erro404() {
  return (
    <div className={styles.pageContainer}>
      <GlobalNav />

      <div className={styles.errorContainer}>
        <div className={styles.content}>
            {/* Ícone de Alerta (SVG Gigante) */}
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-feedback-error)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            
            <h2 className="heading-2">Página Não Encontrada</h2>
            
            <p className={styles.description}>
                Desculpe, o recurso que você procura não existe ou foi movido.
            </p>
            
            <div style={{marginTop: '16px'}}>
                <Button tipo="primario">Voltar ao Dashboard</Button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default TelaGeral02_Erro404;