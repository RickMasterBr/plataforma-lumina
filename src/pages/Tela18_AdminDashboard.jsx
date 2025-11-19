import React from "react";
import Widget from "../components/molecules/Widget";
import styles from "./Tela18_AdminDashboard.module.css";

function Tela18_AdminDashboard() {
  return (
    <div className={styles.adminContainer}>
      {/* --- ADMIN SIDEBAR (Navegação Persistente) --- */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>LÚMINA ADMIN</h2>

        <nav className={styles.nav}>
          {/* Item Ativo */}
          <button className={`${styles.navItem} ${styles.active}`}>
            Dashboard
          </button>
          {/* Itens Inativos */}
          <button className={styles.navItem}>Usuários</button>
          <button className={styles.navItem}>Cursos</button>
          <button className={styles.navItem}>Projetos</button>
          <button className={styles.navItem}>Timeline (Moderação)</button>
          <button className={styles.navItem}>Relatórios</button>
        </nav>
      </aside>

      {/* --- ADMIN CONTENT AREA --- */}
      <main className={styles.contentArea}>
        <header className={styles.header}>
          <h1 className="heading-2">Dashboard</h1>
        </header>

        {/* Grade de Widgets */}
        <div className={styles.widgetsGrid}>
          <Widget title="Total de Usuários" value="1,234" />
          <Widget title="Novos Usuários (7d)" value="82" />
          <Widget title="Novos Cursos" value="12" />
          {/* Widget com alerta de moderação */}
          <Widget title="Fila de Moderação" value="5" isAlert={true} />
        </div>
      </main>
    </div>
  );
}

export default Tela18_AdminDashboard;
