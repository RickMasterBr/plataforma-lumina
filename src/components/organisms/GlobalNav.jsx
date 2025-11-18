
import React from 'react';
import SearchBar from '../molecules/SearchBar';
import styles from './GlobalNav.module.css';

function GlobalNav() {
  return (
    <header className={styles.navContainer}>
      
      {/* 1. Logo */}
      <div className={styles.logoSection}>
        <h2 className={styles.logoText}>LÚMINA</h2>
      </div>

      {/* 2. Links de Navegação (Centro) */}
      <nav className={styles.navLinks}>
        <a href="#" className={`${styles.link} ${styles.active}`}>Timeline</a>
        <a href="#" className={styles.link}>Cursos</a>
        <a href="#" className={styles.link}>Projetos</a>
        <a href="#" className={styles.link}>Podcast</a>
      </nav>

      {/* 3. Ações do Usuário (Direita) */}
      <div className={styles.userActions}>
        <SearchBar />
        
        {/* Ícone de Notificação (Sino) */}
        <button className={styles.iconButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </button>

        {/* Avatar do Usuário (Círculo Simples) */}
        <div className={styles.avatar}>
          <span>U</span>
        </div>
      </div>

    </header>
  );
}

export default GlobalNav;