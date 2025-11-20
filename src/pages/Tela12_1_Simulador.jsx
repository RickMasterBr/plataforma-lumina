import React from "react";
import GlobalNav from "../components/organisms/GlobalNav";
import styles from "./Tela12_PlayerCurso.module.css"; // Reutiliza CSS da Tela 12

function Tela12_1_Simulador() {
  return (
    <div className={styles.pageContainer}>
      <GlobalNav />
      <div className={styles.playerGrid}>
        <main className={styles.mainContent}>
          {/* Simulador Placeholder */}
          <div className={styles.videoPlayer} style={{ backgroundColor: '#1e1e2e', border: '2px solid var(--color-interactive-accent)' }}>
            <div style={{ textAlign: 'center' }}>
                <h3 className="heading-3">Simulador de Projetos Interativo</h3>
                <p className="body-default" style={{color: 'var(--color-text-subtle)'}}>Ambiente de código carregado...</p>
            </div>
          </div>
          {/* ... Resto do conteúdo (cabeçalho da aula, etc.) ... */}
        </main>
        
        <aside className={styles.courseSidebar}>
           {/* ... Sidebar igual à Tela 12, mas com o item "Atividade Prática" ativo ... */}
           <div style={{padding: '24px', color: 'var(--color-text-subtle)'}}>Lista de aulas...</div>
        </aside>
      </div>
    </div>
  );
}

export default Tela12_1_Simulador;