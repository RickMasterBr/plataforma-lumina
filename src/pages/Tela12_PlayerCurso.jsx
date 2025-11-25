import React, { useState } from "react";
import ProgressBar from "../components/molecules/ProgressBar";
import styles from "./Tela12_PlayerCurso.module.css";
import { useParams, useNavigate } from "react-router-dom";

function Tela12_PlayerCurso() {
  // Estado simples para controlar a aba ativa abaixo do vídeo
  const [activeTab, setActiveTab] = useState("qa"); // 'qa', 'notas', 'recursos'
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.playerGrid}>
        {/* --- COLUNA ESQUERDA: CONTEÚDO PRINCIPAL (Vídeo + Abas) --- */}
        <main className={styles.mainContent}>
          {/* Botão de Voltar */}
          <button
            onClick={() => navigate(`/course/${id}`)}
            style={{ marginBottom: '16px', background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer' }}
          >
            ← Voltar para Detalhes
          </button>

          {/* Player de Vídeo (Placeholder) */}
          <div className={styles.videoPlayer}>
            <div className={styles.playButton}>▶</div>
            <div className={styles.videoControls}>
              <span>00:00 / 15:30</span>
              <div className={styles.fakeScrubber}></div>
              <span>HD</span>
            </div>
          </div>

          {/* Título da Aula Atual */}
          <div className={styles.lessonHeader}>
            <h1 className="heading-3">
              Aula 2: Pesquisa com Usuários e Personas
            </h1>
            <div className={styles.lessonActions}>
              <button className={styles.actionBtn}>Anterior</button>
              <button className={styles.actionBtn}>Próxima</button>
            </div>
          </div>

          {/* Painel de Abas Contextuais */}
          <div className={styles.contextPanel}>
            <div className={styles.tabsHeader}>
              <button
                className={`${styles.tab} ${activeTab === "qa" ? styles.active : ""
                  }`}
                onClick={() => setActiveTab("qa")}
              >
                Perguntas e Respostas
              </button>
              <button
                className={`${styles.tab} ${activeTab === "notas" ? styles.active : ""
                  }`}
                onClick={() => setActiveTab("notas")}
              >
                Anotações
              </button>
              <button
                className={`${styles.tab} ${activeTab === "recursos" ? styles.active : ""
                  }`}
                onClick={() => setActiveTab("recursos")}
              >
                Recursos
              </button>
            </div>

            <div className={styles.tabBody}>
              {activeTab === "qa" && (
                <p
                  className="body-default"
                  style={{ color: "var(--color-text-subtle)" }}
                >
                  Nenhuma pergunta nesta aula ainda. Seja o primeiro a
                  perguntar!
                </p>
              )}
              {activeTab === "notas" && (
                <textarea
                  className={styles.notesInput}
                  placeholder="Digite suas anotações aqui..."
                />
              )}
              {activeTab === "recursos" && (
                <ul className={styles.resourceList}>
                  <li>📄 Template de Persona.pdf</li>
                  <li>🔗 Link para ferramenta de mapa de empatia</li>
                </ul>
              )}
            </div>
          </div>
        </main>

        {/* --- COLUNA DIREITA: NAVEGAÇÃO DO CURSO --- */}
        <aside className={styles.courseSidebar}>
          <div className={styles.sidebarHeader}>
            <h4 className="heading-4">Conteúdo do Curso</h4>
            <div className={styles.progressContainer}>
              <div className={styles.progressLabel}>
                <span>35% Concluído</span>
              </div>
              <ProgressBar progresso={35} />
            </div>
          </div>

          {/* Lista de Aulas (Simulando Acordeão Expandido) */}
          <div className={styles.moduleList}>
            {/* Módulo 1 (Concluído) */}
            <div className={styles.moduleSection}>
              <h5 className={styles.moduleTitle}>Módulo 1: Introdução</h5>
              <ul className={styles.lessonList}>
                <li className={styles.lessonItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.lessonName}>1. Boas-vindas</span>
                  <span className={styles.lessonTime}>2m</span>
                </li>
                <li className={styles.lessonItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.lessonName}>2. O que é UX?</span>
                  <span className={styles.lessonTime}>10m</span>
                </li>
              </ul>
            </div>

            {/* Módulo 2 (Ativo) */}
            <div className={styles.moduleSection}>
              <h5 className={styles.moduleTitle}>Módulo 2: Pesquisa</h5>
              <ul className={styles.lessonList}>
                <li className={`${styles.lessonItem} ${styles.activeLesson}`}>
                  <span className={styles.playIcon}>▶</span>
                  <span className={styles.lessonName}>
                    1. Pesquisa com Usuários
                  </span>
                  <span className={styles.lessonTime}>15m</span>
                </li>
                <li className={styles.lessonItem}>
                  <span className={styles.lockIcon}>○</span>
                  <span className={styles.lessonName}>2. Mapa de Empatia</span>
                  <span className={styles.lessonTime}>20m</span>
                </li>
                <li className={styles.lessonItem}>
                  <span className={styles.lockIcon}>○</span>
                  <span className={styles.lessonName}>
                    3. Jornada do Usuário
                  </span>
                  <span className={styles.lessonTime}>12m</span>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Tela12_PlayerCurso;
