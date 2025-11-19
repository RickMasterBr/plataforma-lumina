import React from "react";
import styles from "./MiniPerfil.module.css";

function MiniPerfil({ nome, funcao, avatarChar }) {
  return (
    <div className={styles.card}>
      {/* Avatar Circular */}
      <div className={styles.avatar}>{avatarChar || nome.charAt(0)}</div>

      {/* Informações */}
      <div className={styles.info}>
        <h4 className={styles.name}>{nome}</h4>
        <span className={styles.role}>{funcao}</span>
      </div>
    </div>
  );
}

export default MiniPerfil;
