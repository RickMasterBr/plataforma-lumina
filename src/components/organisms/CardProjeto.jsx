import React from "react";
import Tag from "../atoms/Tag"; // Reutilizando nosso átomo Tag
import styles from "./CardProjeto.module.css";

function CardProjeto({ titulo, resumo, habilidades = [], equipe = [] }) {
  return (
    <article className={styles.card}>
      {/* 1. Título e Resumo */}
      <div className={styles.header}>
        <h3 className={styles.title}>{titulo}</h3>
        <p className={styles.summary}>{resumo}</p>
      </div>

      {/* 2. Habilidades Necessárias (Tags) */}
      <div className={styles.skillsContainer}>
        {habilidades.map((skill, index) => (
          <Tag key={index} label={skill} />
        ))}
      </div>

      {/* 3. Membros da Equipe (Avatares Sobrepostos) */}
      <div className={styles.teamContainer}>
        {equipe.map((membro, index) => (
          <div key={index} className={styles.avatar}>
            {membro.charAt(0)}
          </div>
        ))}
        {equipe.length > 0 && <span className={styles.teamLabel}>Equipe</span>}
      </div>
    </article>
  );
}

export default CardProjeto;
