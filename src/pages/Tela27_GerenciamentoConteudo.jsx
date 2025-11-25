import React, { useState } from 'react';
import SearchBar from '../components/molecules/SearchBar';
import Button from '../components/atoms/Button';
import styles from './Tela27_GerenciamentoConteudo.module.css';

function Tela27_GerenciamentoConteudo() {
  const [activeTab, setActiveTab] = useState('projetos');

  return (
    <div className={styles.contentArea}>
      <header className={styles.header}>
        <h1 className="heading-2">Gerenciamento de Conteúdo</h1>
      </header>

      {/* Abas de Navegação */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'projetos' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('projetos')}
        >
          Projetos Pendentes
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'eventos' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('eventos')}
        >
          Eventos Pendentes
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'podcast' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('podcast')}
        >
          Posts de Podcast
        </button>
      </div>

      {/* Controles da Tabela */}
      <div className={styles.controls}>
        <div style={{ width: '300px' }}>
          <SearchBar placeholder="Buscar conteúdo..." />
        </div>
        <Button tipo="secundario">Filtros</Button>
      </div>

      {/* Tabela de Conteúdo */}
      <div className={styles.tableCard}>

        {/* Cabeçalho da Tabela */}
        <div className={styles.tableHeader}>
          <span className={styles.colTitle}>Título do Projeto</span>
          <span className={styles.colAuthor}>Autor (Aluno)</span>
          <span className={styles.colDate}>Data de Envio</span>
          <span className={styles.colStatus}>Status</span>
          <span className={styles.colActions}>Ações</span>
        </div>

        {/* Linha 1 */}
        <div className={styles.tableRow}>
          <span className={styles.colTitle}><strong>Projeto MVP Cliente-Teste X</strong></span>
          <span className={styles.colAuthor}>Nome do Aluno Líder</span>
          <span className={styles.colDate}>03/11/2025</span>
          <span className={styles.colStatus}>Pendente</span>
          <div className={styles.colActions}>
            <button className={styles.iconBtn} title="Aprovar" style={{ color: 'var(--color-feedback-success)' }}>✓</button>
            <button className={styles.iconBtn} title="Rejeitar" style={{ color: 'var(--color-feedback-error)' }}>✕</button>
          </div>
        </div>

        {/* Linha 2 */}
        <div className={styles.tableRow}>
          <span className={styles.colTitle}><strong>Redesign Site Institucional</strong></span>
          <span className={styles.colAuthor}>Carla Mendes</span>
          <span className={styles.colDate}>02/11/2025</span>
          <span className={styles.colStatus}>Pendente</span>
          <div className={styles.colActions}>
            <button className={styles.iconBtn} title="Aprovar" style={{ color: 'var(--color-feedback-success)' }}>✓</button>
            <button className={styles.iconBtn} title="Rejeitar" style={{ color: 'var(--color-feedback-error)' }}>✕</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Tela27_GerenciamentoConteudo;