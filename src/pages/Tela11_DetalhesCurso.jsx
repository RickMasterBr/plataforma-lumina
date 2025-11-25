import React from "react";
import Button from "../components/atoms/Button";
import styles from "./Tela11_DetalhesCurso.module.css";
import { useNavigate, useParams } from "react-router-dom";

function Tela11_DetalhesCurso() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.detailsContainer}>
        {/* --- COLUNA ESQUERDA: CONTEÚDO PRINCIPAL --- */}
        <main className={styles.mainContent}>
          {/* Título e Metadados */}
          <h1 className="heading-1">UX Design Fundamentals</h1>

          <div className={styles.metaData}>
            <span
              className="body-small"
              style={{ color: "var(--color-text-subtle)" }}
            >
              Instrutor: <strong>Ana Souza</strong>
            </span>
            <span
              className="body-small"
              style={{ color: "var(--color-text-subtle)" }}
            >
              Duração: <strong>8 horas</strong>
            </span>
            <span
              className="body-small"
              style={{ color: "var(--color-text-subtle)" }}
            >
              Nível: <strong>Iniciante</strong>
            </span>
          </div>

          {/* Navegação por Abas */}
          <div className={styles.tabs}>
            <button className={`${styles.tab} ${styles.activeTab}`}>
              Currículo
            </button>
            <button className={styles.tab}>Avaliações</button>
            <button className={styles.tab}>Sobre</button>
          </div>

          {/* Conteúdo da Aba Currículo */}
          <div className={styles.tabContent}>
            <h3 className="heading-4">O que você vai aprender</h3>

            {/* Placeholder da Lista de Aulas (Acordeão) */}
            <div className={styles.curriculumList}>
              <div className={styles.moduleItem}>
                <strong>Módulo 1: Introdução</strong>
                <span>3 aulas • 45 min</span>
              </div>
              <div className={styles.moduleItem}>
                <strong>Módulo 2: Pesquisa com Usuários</strong>
                <span>5 aulas • 1h 20m</span>
              </div>
              <div className={styles.moduleItem}>
                <strong>Módulo 3: Prototipagem</strong>
                <span>4 aulas • 2h 10m</span>
              </div>
            </div>
          </div>
        </main>

        {/* --- COLUNA DIREITA: CARD CTA (Inscrição) --- */}
        <aside className={styles.ctaColumn}>
          <div className={styles.ctaCard}>
            {/* Vídeo Trailer (Placeholder) */}
            <div className={styles.videoPlaceholder}>
              {/* Ícone de Play simulado */}
              <div className={styles.playIcon}>▶</div>
              <span>Prévia do Curso</span>
            </div>

            {/* Área de Ação */}
            <div className={styles.ctaActions}>
              <h3 className="heading-3" style={{ marginBottom: "8px" }}>
                Gratuito
              </h3>
              <p
                className="body-small"
                style={{
                  color: "var(--color-text-subtle)",
                  marginBottom: "24px",
                }}
              >
                Acesso total vitalício • Certificado de conclusão
              </p>
              <Button
                tipo="primario"
                fullWidth
                onClick={() => navigate(`/course/${id}/confirm`)}
              >
                Inscreva-se Agora
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Tela11_DetalhesCurso;
