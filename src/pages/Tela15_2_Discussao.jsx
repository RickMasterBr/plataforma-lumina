import React from 'react';
import styles from './Tela15_GerenciamentoProjeto.module.css';
import { useNavigate, useParams } from 'react-router-dom';

function Tela15_2_Discussao() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.managementContainer}>
        <header className={styles.header}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <button
              onClick={() => navigate(`/project/${id}`)}
              style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', fontSize: '24px' }}
            >
              ←
            </button>
            <h1 className="heading-2">Redesign do App - Discussão</h1>
          </div>
          <div className={styles.tabs}>
            <button
              className={styles.tab}
              onClick={() => navigate(`/project/${id}/manage`)}
            >
              Tarefas (Kanban)
            </button>
            <button className={`${styles.tab} ${styles.activeTab}`}>Discussão</button>
            <button className={styles.tab}>Arquivos</button>
            <button
              className={styles.tab}
              onClick={() => navigate(`/project/${id}/manage/planning`)}
            >
              Planejamento 5W2H
            </button>
          </div>
        </header>

        <main style={{ height: '500px', backgroundColor: 'var(--color-background-secondary)', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
          {/* Área de Mensagens */}
          <div style={{ flex: 1, padding: '24px' }}>
            <p style={{ color: 'var(--color-text-subtle)' }}>Início do chat da equipe...</p>
          </div>
          {/* Input */}
          <div style={{ padding: '16px', borderTop: '1px solid var(--color-border-default)', display: 'flex', gap: '12px' }}>
            <input type="text" placeholder="Digite sua mensagem..." style={{ flex: 1, padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: 'var(--color-background-primary)', color: 'white' }} />
            <button style={{ padding: '12px 24px', backgroundColor: 'var(--color-interactive-accent)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Enviar</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Tela15_2_Discussao;