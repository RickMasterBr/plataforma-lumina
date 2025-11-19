import React from "react";
import styles from "./Badge.module.css";

/*
Props:
- nivel: 'bloqueado' (padrão), 'bronze', 'prata', 'ouro'.
- icon: Opcional. Se não for passado, usa um padrão baseado no nível.
*/
function Badge({ nivel = "bloqueado", icon }) {
  // Define o ícone padrão com base no nível se nenhum for fornecido
  const renderIcon = () => {
    if (icon) return icon;

    switch (nivel) {
      case "bronze":
      case "prata":
      case "ouro":
        // Ícone de Troféu/Estrela para níveis desbloqueados
        return (
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
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        );
      case "bloqueado":
      default:
        // Ícone de Cadeado para bloqueado
        return (
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
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        );
    }
  };

  return (
    <div className={`${styles.badgeBase} ${styles[nivel]}`}>{renderIcon()}</div>
  );
}

export default Badge;
