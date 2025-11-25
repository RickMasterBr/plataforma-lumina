import React from "react";
import CardTarefa from "../components/molecules/CardTarefa";
import styles from "./Tela15_GerenciamentoProjeto.module.css";
import { useNavigate, useParams } from "react-router-dom";

function Tela15_GerenciamentoProjeto() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.managementContainer}>
        {/* Cabeçalho do Projeto */}
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button
                onClick={() => navigate(`/project/${id}`)}
                style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', fontSize: '24px' }}
              >
                ←
              </button>
              <h1 className="heading-2">Redesign do App de Delivery</h1>
            </div>
            <button className={styles.inviteBtn}>Convidar Membro</button>
          </div>

          {/* Navegação por Abas (Kanban, Discussão, Arquivos, 5W2H) */}
          <div className={styles.tabs}>
            <button className={`${styles.tab} ${styles.activeTab}`}>
              Tarefas (Kanban)
            </button>
            <button
              className={styles.tab}
              onClick={() => navigate(`/project/${id}/manage/discussion`)}
            >
              Discussão
            </button>
            <button className={styles.tab}>Arquivos</button>
            <button
              className={styles.tab}
              onClick={() => navigate(`/project/${id}/manage/planning`)}
            >
              Planejamento 5W2H
            </button>
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
              <CardTarefa
                titulo="Definir paleta de cores acessível"
                responsavelChar="A"
              />
              <CardTarefa
                titulo="Criar wireframes da tela de checkout"
                responsavelChar="C"
              />
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
              <CardTarefa
                titulo="Prototipar fluxo de login"
                responsavelChar="V"
              />
              <CardTarefa
                titulo="Entrevistar 3 comerciantes locais"
                responsavelChar="A"
              />
            </div>
          </div>

          {/* Coluna: Concluído */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <span className={styles.columnTitle}>Concluído</span>
              <span className={styles.countBadge}>1</span>
            </div>
            <div className={styles.taskList}>
              <CardTarefa
                titulo="Configurar repositório no GitHub"
                responsavelChar="C"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Tela15_GerenciamentoProjeto;
