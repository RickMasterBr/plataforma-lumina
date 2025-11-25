import React from "react";
import SearchBar from "../components/molecules/SearchBar";
import Button from "../components/atoms/Button";
import styles from "./Tela19_GerenciamentoUsuarios.module.css";
import { useNavigate } from "react-router-dom";

function Tela19_GerenciamentoUsuarios() {
  const navigate = useNavigate();
  return (
    <div className={styles.contentArea}>
      <header className={styles.header}>
        <h1 className="heading-2">Gerenciamento de Usuários</h1>
      </header>

      {/* Controles da Tabela */}
      <div className={styles.controls}>
        <div style={{ width: "300px" }}>
          <SearchBar placeholder="Buscar usuário..." />
        </div>
        <Button tipo="secundario">Filtros</Button>
      </div>

      {/* Tabela de Usuários */}
      <div className={styles.tableCard}>
        {/* Cabeçalho da Tabela */}
        <div className={styles.tableHeader}>
          <span className={styles.colName}>Nome</span>
          <span className={styles.colEmail}>Email</span>
          <span className={styles.colRole}>Função</span>
          <span className={styles.colActions}>Ações</span>
        </div>

        {/* Linhas (Placeholders) */}
        <div className={styles.tableRow}>
          <span className={styles.colName}>
            <strong>Ana Silva</strong>
          </span>
          <span className={styles.colEmail}>ana.silva@email.com</span>
          <span className={styles.colRole}>Instrutor</span>
          <div className={styles.colActions}>
            {/* Ícones de Ação (Simulados com botões de texto por enquanto) */}
            <button
              className={styles.iconBtn}
              title="Ver Perfil"
              onClick={() => navigate('/profile/101')}
            >
              👁️
            </button>
            <button className={styles.iconBtn} title="Editar">
              ✏️
            </button>
            <button
              className={styles.iconBtn}
              title="Suspender"
              style={{ color: "var(--color-feedback-error)" }}
            >
              🚫
            </button>
          </div>
        </div>

        <div className={styles.tableRow}>
          <span className={styles.colName}>
            <strong>Carlos Souza</strong>
          </span>
          <span className={styles.colEmail}>carlos.souza@email.com</span>
          <span className={styles.colRole}>Aluno</span>
          <div className={styles.colActions}>
            <button className={styles.iconBtn} onClick={() => navigate('/profile/102')}>👁️</button>
            <button className={styles.iconBtn}>✏️</button>
            <button
              className={styles.iconBtn}
              style={{ color: "var(--color-feedback-error)" }}
            >
              🚫
            </button>
          </div>
        </div>

        {/* Adicione mais linhas conforme necessário */}
      </div>
    </div>
  );
}

export default Tela19_GerenciamentoUsuarios;
