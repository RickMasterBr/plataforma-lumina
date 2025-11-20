import React from "react";
import GlobalNav from "../components/organisms/GlobalNav";
import SearchBar from "../components/molecules/SearchBar";
import Tag from "../components/atoms/Tag";
import CardMentor from "../components/organisms/CardMentor";
import styles from "./Tela23_ComunidadeMentoria.module.css";

// Dados Mockados de Mentores
const mentores = [
  {
    id: 1,
    nome: "Juliana M.",
    titulo: "Senior Product Designer",
    habilidades: ["UI/UX", "Carreira", "Figma"],
    avatarChar: "J",
  },
  {
    id: 2,
    nome: "Roberto S.",
    titulo: "Tech Lead @ Startup",
    habilidades: ["React", "Node.js", "Arquitetura"],
    avatarChar: "R",
  },
  {
    id: 3,
    nome: "Carla Dias",
    titulo: "Especialista em Marketing",
    habilidades: ["Marketing", "Growth", "SEO"],
    avatarChar: "C",
  },
  {
    id: 4,
    nome: "Marcos V.",
    titulo: "Consultor de Negócios",
    habilidades: ["Business", "Vendas", "Pitch"],
    avatarChar: "M",
  },
];

function Tela23_ComunidadeMentoria() {
  return (
    <div className={styles.pageContainer}>
      <GlobalNav />

      <div className={styles.catalogContainer}>
        {/* --- COLUNA ESQUERDA: FILTROS --- */}
        <aside className={styles.filterColumn}>
          <h2 className="heading-3">Filtros</h2>

          <div className={styles.filterGroup}>
            <SearchBar placeholder="Buscar mentor..." />
          </div>

          {/* Grupo 1: Habilidades */}
          <div className={styles.filterGroup}>
            <h4 className={styles.filterTitle}>Filtrar por Habilidade</h4>
            <div className={styles.tagsFilter}>
              <Tag label="UI/UX" />
              <Tag label="Desenvolvimento" />
              <Tag label="Marketing" />
              <Tag label="Carreira" />
              <Tag label="Liderança" />
            </div>
          </div>

          {/* Grupo 2: Disponibilidade */}
          <div className={styles.filterGroup}>
            <h4 className={styles.filterTitle}>Disponibilidade</h4>
            <label className={styles.filterOption}>
              <input type="checkbox" /> Esta semana
            </label>
            <label className={styles.filterOption}>
              <input type="checkbox" /> Finais de semana
            </label>
            <label className={styles.filterOption}>
              <input type="checkbox" /> Noturno
            </label>
          </div>
        </aside>

        {/* --- COLUNA DIREITA: RESULTADOS --- */}
        <main className={styles.resultsColumn}>
          <div className={styles.resultsHeader}>
            <h1 className="heading-2">Encontre um Mentor</h1>
            <span
              className="body-small"
              style={{ color: "var(--color-text-subtle)" }}
            >
              {mentores.length} mentores disponíveis
            </span>
          </div>

          {/* Grade de Mentores */}
          <div className={styles.mentorsGrid}>
            {mentores.map((mentor) => (
              <CardMentor
                key={mentor.id}
                nome={mentor.nome}
                tituloProfissional={mentor.titulo}
                habilidades={mentor.habilidades}
                avatarChar={mentor.avatarChar}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Tela23_ComunidadeMentoria;
