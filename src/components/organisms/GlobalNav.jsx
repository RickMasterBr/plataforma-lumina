import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Importações do Router
import SearchBar from "../molecules/SearchBar";
import styles from "./GlobalNav.module.css";

function GlobalNav({ simplificado = false }) {
  const location = useLocation(); // Hook para saber a rota atual
  const navigate = useNavigate();

  // Função auxiliar para adicionar classe 'active' se a rota coincidir
  const isActive = (path) =>
    location.pathname.includes(path) ? styles.active : "";

  // Simulação de busca (ao pressionar enter ou algo assim)
  const handleSearch = () => {
    navigate("/busca");
  };

  return (
    <header className={styles.navContainer}>
      {/* 1. Logo (Clica e volta para o Dashboard) */}
      <div className={styles.logoSection}>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <h2 className={styles.logoText}>LÚMINA</h2>
        </Link>
      </div>

      {/* 2. Links de Navegação */}
      {!simplificado && (
        <nav className={styles.navLinks}>
          <Link
            to="/timeline"
            className={`${styles.link} ${isActive("/timeline")}`}
          >
            Timeline
          </Link>
          <Link
            to="/courses"
            className={`${styles.link} ${isActive("/courses")}`}
          >
            Cursos
          </Link>
          <Link
            to="/projects"
            className={`${styles.link} ${isActive("/projects")}`}
          >
            Projetos
          </Link>
          <Link
            to="/podcast"
            className={`${styles.link} ${isActive("/podcast")}`}
          >
            Podcast
          </Link>
        </nav>
      )}

      {/* 3. Ações do Usuário */}
      <div className={styles.userActions}>
        {!simplificado && (
          <>
            <div onClick={handleSearch}>
              <SearchBar placeholder="Pesquisar..." />
            </div>

            {/* Botão de Notificação (Link para configurações ou modal futuro) */}
            <button className={styles.iconButton}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </button>
          </>
        )}

        {/* Avatar (Link para o Perfil) */}
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <div className={styles.avatar}>
            <span>U</span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default GlobalNav;
