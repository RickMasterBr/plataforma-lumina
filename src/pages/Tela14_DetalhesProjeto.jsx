import React from "react";
import Button from "../components/atoms/Button";
import Tag from "../components/atoms/Tag"; // Reutilizando o átomo Tag
import MiniPerfil from "../components/organisms/MiniPerfil"; // O novo componente
import styles from "./Tela14_DetalhesProjeto.module.css";
import { useNavigate, useParams } from "react-router-dom";

function Tela14_DetalhesProjeto() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.projectContainer}>
        {/* --- COLUNA ESQUERDA: CONTEÚDO PRINCIPAL --- */}
        <main className={styles.mainContent}>
          {/* Botão de Voltar */}
          <button
            onClick={() => navigate('/projects')}
            style={{ marginBottom: '16px', background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer' }}
          >
            ← Voltar para Projetos
          </button>

          {/* Cabeçalho do Projeto */}
          <header className={styles.header}>
            <div className={styles.headerMeta}>
              <span className={styles.statusBadge}>Em Aberto</span>
              <span className={styles.date}>Publicado há 2 dias</span>
            </div>
            <h1 className="heading-1">Redesign do App de Delivery</h1>
            <p
              className="body-default"
              style={{ color: "var(--color-text-subtle)" }}
            >
              Projeto de impacto social para ajudar pequenos comerciantes locais
              a digitalizarem suas vendas.
            </p>
          </header>

          {/* Seção: Descrição */}
          <section className={styles.section}>
            <h3 className="heading-3">Sobre o Projeto</h3>
            <p className="body-default">
              Estamos buscando uma equipe de designers e desenvolvedores
              voluntários para criar uma solução acessível para entregas locais.
              O objetivo é reduzir as taxas cobradas pelos grandes apps e
              fortalecer a economia do bairro.
            </p>
          </section>

          {/* Seção: Metas */}
          <section className={styles.section}>
            <h3 className="heading-3">Metas</h3>
            <ul className={styles.goalsList}>
              <li>Criar protótipo de alta fidelidade no Figma.</li>
              <li>Desenvolver MVP em React Native.</li>
              <li>Testar com 5 comerciantes locais.</li>
            </ul>
          </section>

          {/* Seção: Habilidades Necessárias */}
          <section className={styles.section}>
            <h3 className="heading-3">Habilidades Necessárias</h3>
            <div className={styles.tagsWrapper}>
              <Tag label="UI/UX Design" />
              <Tag label="React Native" />
              <Tag label="Pesquisa" />
              <Tag label="Gestão de Produto" />
            </div>
          </section>

          {/* Seção: Equipe Atual */}
          <section className={styles.section}>
            <h3 className="heading-3">Membros da Equipe</h3>
            <div className={styles.teamGrid}>
              <MiniPerfil nome="Ana Silva" funcao="Líder" avatarChar="A" />
              <MiniPerfil nome="Carlos B." funcao="Dev Front" avatarChar="C" />
              <MiniPerfil nome="Você?" funcao="Vaga Aberta" avatarChar="+" />
            </div>
          </section>
        </main>

        {/* --- COLUNA DIREITA: CARD CTA (Lateral) --- */}
        <aside className={styles.ctaColumn}>
          <div className={styles.ctaCard}>
            <h3 className="heading-3">Interessado?</h3>
            <p
              className="body-small"
              style={{
                color: "var(--color-text-subtle)",
                marginBottom: "24px",
              }}
            >
              Este projeto aceita colaboração voluntária. Junte-se para ganhar
              experiência e causar impacto.
            </p>

            <div className={styles.ctaInfo}>
              <div className={styles.infoRow}>
                <strong>Nível:</strong> <span>Intermediário</span>
              </div>
              <div className={styles.infoRow}>
                <strong>Dedicação:</strong> <span>4h / semana</span>
              </div>
            </div>

            <Button
              tipo="primario"
              fullWidth
              onClick={() => navigate(`/project/${id}/apply`)}
            >
              Aplicar para Participar
            </Button>
            <div style={{ height: "12px" }}></div>
            <Button tipo="secundario" fullWidth>
              Salvar para Depois
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Tela14_DetalhesProjeto;
