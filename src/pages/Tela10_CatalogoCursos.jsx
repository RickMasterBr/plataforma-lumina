import React from "react";
import GlobalNav from "../components/organisms/GlobalNav";
import SearchBar from "../components/molecules/SearchBar"; // Reutilizando
import CardCurso from "../components/organisms/CardCurso";
import styles from "./Tela10_CatalogoCursos.module.css";

// Dados Mockados para teste
const cursos = [
  {
    id: 1,
    titulo: "UX Design Fundamentals",
    instrutor: "Ana Souza",
    progresso: 0,
  },
  {
    id: 2,
    titulo: "Marketing Digital para Startups",
    instrutor: "Carlos Lima",
    progresso: 0,
  },
  {
    id: 3,
    titulo: "React Avançado",
    instrutor: "Diego Fernandes",
    progresso: 0,
  },
  {
    id: 4,
    titulo: "Gestão Ágil de Projetos",
    instrutor: "Fernanda Dias",
    progresso: 0,
  },
  {
    id: 5,
    titulo: "Introdução ao Figma",
    instrutor: "Ana Souza",
    progresso: 0,
  },
  {
    id: 6,
    titulo: "Copywriting Persuasivo",
    instrutor: "Kant",
    progresso: 0,
  },
];

function Tela10_CatalogoCursos() {
  return (
    <div className={styles.pageContainer}>
      <GlobalNav />

      <div className={styles.catalogContainer}>
        {/* --- COLUNA ESQUERDA: FILTROS --- */}
        <aside className={styles.filterColumn}>
          <h2 className="heading-3">Filtros</h2>

          <div className={styles.filterGroup}>
            <SearchBar placeholder="Buscar cursos..." />
          </div>

          {/* Placeholders de Filtros (Acordeões simples por enquanto) */}
          <div className={styles.filterGroup}>
            <h4 className={styles.filterTitle}>Tópico</h4>
            <div className={styles.filterOption}>
              <input type="checkbox" /> Marketing
            </div>
            <div className={styles.filterOption}>
              <input type="checkbox" /> Design
            </div>
            <div className={styles.filterOption}>
              <input type="checkbox" /> Programação
            </div>
          </div>

          <div className={styles.filterGroup}>
            <h4 className={styles.filterTitle}>Nível</h4>
            <div className={styles.filterOption}>
              <input type="checkbox" /> Iniciante
            </div>
            <div className={styles.filterOption}>
              <input type="checkbox" /> Intermediário
            </div>
            <div className={styles.filterOption}>
              <input type="checkbox" /> Avançado
            </div>
          </div>
        </aside>

        {/* --- COLUNA DIREITA: RESULTADOS --- */}
        <main className={styles.resultsColumn}>
          <div className={styles.resultsHeader}>
            <h1 className="heading-2">Cursos Disponíveis</h1>
            <span
              className="body-small"
              style={{ color: "var(--color-text-subtle)" }}
            >
              Showing {cursos.length} courses
            </span>
          </div>

          {/* Grade de Cards */}
          <div className={styles.coursesGrid}>
            {cursos.map((curso) => (
              <CardCurso
                key={curso.id}
                titulo={curso.titulo}
                instrutor={curso.instrutor}
                progresso={curso.progresso}
                mostrarProgresso={false} // No catálogo geralmente não mostramos progresso
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Tela10_CatalogoCursos;
