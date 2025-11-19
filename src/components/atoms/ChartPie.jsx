import React from "react";
import styles from "./ChartPie.module.css";

function ChartPie({ title = "Gráfico Pizza" }) {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>

      <div className={styles.donutContainer}>
        {/* SVG para criar o efeito de Donut */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 36 36"
          className={styles.donutChart}
        >
          {/* Fundo do círculo (opcional, invisível aqui) */}
          <circle cx="18" cy="18" r="15.915" fill="transparent"></circle>

          {/* Fatia 1 (Roxa - 70%) */}
          <circle
            cx="18"
            cy="18"
            r="15.915"
            fill="transparent"
            stroke="var(--color-interactive-accent)"
            strokeWidth="4"
            strokeDasharray="70 30" /* 70% preenchido, 30% vazio */
            strokeDashoffset="25" /* Começa do topo (rotação) */
          ></circle>

          {/* Fatia 2 (Verde - 30%) */}
          <circle
            cx="18"
            cy="18"
            r="15.915"
            fill="transparent"
            stroke="var(--color-feedback-success)"
            strokeWidth="4"
            strokeDasharray="30 70" /* 30% preenchido */
            strokeDashoffset="-45" /* Começa onde o roxo termina */
          ></circle>
        </svg>

        {/* Texto central (Total ou Destaque) */}
        <div className={styles.centerText}>
          <strong>70%</strong>
        </div>
      </div>

      {/* Legenda simples */}
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span
            className={styles.dot}
            style={{ backgroundColor: "var(--color-interactive-accent)" }}
          ></span>
          <span>Principal</span>
        </div>
        <div className={styles.legendItem}>
          <span
            className={styles.dot}
            style={{ backgroundColor: "var(--color-feedback-success)" }}
          ></span>
          <span>Secundário</span>
        </div>
      </div>
    </div>
  );
}

export default ChartPie;
