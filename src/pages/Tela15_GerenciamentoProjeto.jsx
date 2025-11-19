import React from 'react';
import GlobalNav from '../components/organisms/GlobalNav';
import CardTarefa from '../components/molecules/CardTarefa';
import styles from './Tela15_GerenciamentoProjeto.module.css';

function Tela15_GerenciamentoProjeto() {
  return (
    <div className={styles.pageContainer}>
      <GlobalNav />

      <div className={styles.managementContainer}>
        
        {/* Cabeçalho do Projeto */}
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <h1 className="heading-2">Redesign do App de Delivery</h1>
            <button className={styles.inviteBtn}>Convidar Membro</button>
          </div>
          
          {/* Navegação por Abas (Kanban, Discussão, Arquivos, 5W2H) */}
          <div className={styles.tabs}>
            <button className={`${styles.tab} ${styles.activeTab}`}>Tarefas (Kanban)</button>
            <button className={styles.tab}>Discussão</button>
            <button className={styles.tab}>Arquivos</button>
            <button className={styles.tab}>Planejamento 5W2H</button>
          </div>
        </header>

        {/* Quadro Kanban */}
        <main className={styles.kanbanBoard}>
          
          {/* Coluna: A Fazer */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <span className={styles.columnTitle}>A Fazer</span>
              <span className={styles.countBadge}>3</span>
            </div>
            <div className={styles.taskList}>
              <CardTarefa titulo="Definir paleta de cores acessível" responsavelChar="A" />
              <CardTarefa titulo="Criar wireframes da tela de checkout" responsavelChar="C" />
              <CardTarefa titulo="Mapear jornada do usuário atual" />
            </div>
            <button className={styles.addTaskBtn}>+ Adicionar tarefa</button>
          </div>

          {/* Coluna: Em Andamento */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <span className={styles.columnTitle}>Em Andamento</span>
              <span className={styles.countBadge}>2</span>
            </div>
            <div className={styles.taskList}>
              <CardTarefa titulo="Prototipar fluxo de login" responsavelChar="V" />
              <CardTarefa titulo="Entrevistar 3 comerciantes locais" responsavelChar="A" />
            </div>
          </div>

          {/* Coluna: Concluído */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <span className={styles.columnTitle}>Concluído</span>
              <span className={styles.countBadge}>1</span>
            </div>
            <div className={styles.taskList}>
              <CardTarefa titulo="Configurar repositório no GitHub" responsavelChar="C" />
            </div>
          </div>

        </main>

      </div>
    </div>
  );
}

export default Tela15_GerenciamentoProjeto;