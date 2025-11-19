import React from "react";
import Button from "../atoms/Button";
import Tag from "../atoms/Tag";
import styles from "./CardMentor.module.css";

function CardMentor({ nome, tituloProfissional, avatarUrl, habilidades = [] }) {
  return (
    <div className={styles.card}>
      {/* Avatar Circular */}
      <div className={styles.avatarContainer}>
        {avatarUrl ? (
          <img src={avatarUrl} alt={nome} className={styles.avatarImage} />
        ) : (
          // Placeholder se não tiver imagem
          <div className={styles.avatarPlaceholder}>{nome.charAt(0)}</div>
        )}
      </div>

      {/* Informações do Mentor */}
      <h3 className={styles.name}>{nome}</h3>
      <p className={styles.role}>{tituloProfissional}</p>

      {/* Lista de Habilidades (Tags) */}
      <div className={styles.skillsContainer}>
        {habilidades.map((skill, index) => (
          <Tag key={index} label={skill} />
        ))}
      </div>

      {/* Botão de Ação (Empurrado para o final) */}
      <div className={styles.action}>
        <Button tipo="primario" fullWidth>
          Solicitar Mentoria
        </Button>
      </div>
    </div>
  );
}

export default CardMentor;
