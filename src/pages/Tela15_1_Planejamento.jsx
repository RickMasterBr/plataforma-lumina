import React from 'react';
import GlobalNav from '../components/organisms/GlobalNav';
import FormGroup from '../components/molecules/FormGroup';
import Button from '../components/atoms/Button';
import styles from './Tela15_GerenciamentoProjeto.module.css';

function Tela15_1_Planejamento() {
  return (
    <div className={styles.pageContainer}>
      <GlobalNav />
      <div className={styles.managementContainer}>
        <header className={styles.header}>
          <h1 className="heading-2">Redesign do App - Planejamento</h1>
           {/* Abas */}
           <div className={styles.tabs}>
            <button className={styles.tab}>Tarefas (Kanban)</button>
            <button className={styles.tab}>Discussão</button>
            <button className={styles.tab}>Arquivos</button>
            <button className={`${styles.tab} ${styles.activeTab}`}>Planejamento 5W2H</button>
          </div>
        </header>

        <main style={{ backgroundColor: 'var(--color-background-secondary)', padding: '32px', borderRadius: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <FormGroup label="What (O que será feito?)" fullWidth />
                <FormGroup label="Why (Por que será feito?)" fullWidth />
                <FormGroup label="Where (Onde?)" fullWidth />
                <FormGroup label="When (Quando?)" fullWidth />
                <FormGroup label="Who (Quem?)" fullWidth />
                <FormGroup label="How (Como?)" fullWidth />
                <FormGroup label="How Much (Quanto custa?)" fullWidth />
            </div>
            <div style={{ marginTop: '24px', textAlign: 'right' }}>
                <Button tipo="primario">Salvar Planejamento</Button>
            </div>
        </main>
      </div>
    </div>
  );
}

export default Tela15_1_Planejamento;