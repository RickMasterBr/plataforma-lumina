import React from "react";
import PlayerAudio from "../components/organisms/PlayerAudio";
import CardCurso from "../components/organisms/CardCurso"; // Da Etapa 11
import CardProjeto from "../components/organisms/CardProjeto"; // Da Etapa 23
import styles from "./Tela17_DetalheEpisodio.module.css";
import { useNavigate, useParams } from "react-router-dom";

function Tela17_DetalheEpisodio() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <button
          onClick={() => navigate('/podcast')}
          style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          ← Voltar para Podcasts
        </button>

        {/* 1. Player de Áudio em Destaque [cite: 3532] */}
        <section className={styles.playerSection}>
          <PlayerAudio />
        </section>

        {/* 2. Informações do Episódio [cite: 3548] */}
        <main className={styles.mainContent}>
          <h1 className="heading-2">O Futuro do Marketing Digital com IA (Episódio {id})</h1>

          <div className={styles.notesSection}>
            <h3 className="heading-4">Notas do Programa</h3>
            <p className="body-default">
              Neste episódio, conversamos com a Dra. Elena Rodrigues,
              especialista em IA Generativa, sobre como as novas ferramentas
              estão transformando a criação de conteúdo e a análise de dados.
            </p>
            <p className="body-default">
              <strong>Tópicos abordados:</strong>
            </p>
            <ul className={styles.topicList}>
              <li>A evolução dos LLMs no último ano.</li>
              <li>Ética na automação de marketing.</li>
              <li>Ferramentas recomendadas para 2025.</li>
            </ul>
            <p className="body-default">
              <strong>Links citados:</strong>{" "}
              <a href="#" className={styles.link}>
                Relatório de Tendências 2025
              </a>
            </p>
          </div>

          <div className={styles.transcriptSection}>
            <h3 className="heading-4">Transcrição</h3>
            <div className={styles.transcriptBox}>
              <p
                className="body-small"
                style={{ color: "var(--color-text-subtle)" }}
              >
                [00:00] <strong>Apresentador:</strong> Olá a todos, bem-vindos a
                mais um Lúmina Cast...
                <br />
                [00:45] <strong>Elena:</strong> É um prazer estar aqui. Acredito
                que estamos num ponto de inflexão...
                <br />
                <br />
                *(Transcrição completa disponível para leitura...)*
              </p>
            </div>
          </div>
        </main>

        {/* 3. Promoção Cruzada (Cursos e Projetos Relacionados) [cite: 3557] */}
        <footer className={styles.relatedSection}>
          <h3 className="heading-3">Aprofunde-se no Assunto</h3>
          <p
            className="body-small"
            style={{ color: "var(--color-text-subtle)", marginBottom: "24px" }}
          >
            Cursos e projetos da Lúmina para você colocar esse conhecimento em
            prática.
          </p>

          <div className={styles.relatedGrid}>
            {/* Exemplo de Curso Relacionado */}
            <CardCurso
              titulo="Marketing Digital para Startups"
              instrutor="Carlos Lima"
              progresso={0}
              mostrarProgresso={false}
            />

            {/* Exemplo de Projeto Relacionado */}
            <CardProjeto
              titulo="Campanha de Marketing Social"
              resumo="Criação de estratégia de mídia paga para ONG de proteção animal."
              habilidades={["Marketing", "Copywriting"]}
              equipe={["Carla"]}
            />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Tela17_DetalheEpisodio;
