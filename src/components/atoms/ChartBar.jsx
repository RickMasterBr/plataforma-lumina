import React from "react";
import styles from "./ChartBar.module.css";

function ChartBar({ title = "Gráfico de Exemplo" }) {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>

      <div className={styles.chartArea}>
        {/* Barras simuladas com alturas variadas */}
        <div className={styles.bar} style={{ height: "40%" }}></div>
        <div
          className={styles.bar}
          style={{
            height: "70%",
            backgroundColor: "var(--color-feedback-success)",
          }}
        ></div>
        <div className={styles.bar} style={{ height: "50%" }}></div>
        <div className={styles.bar} style={{ height: "90%" }}></div>
        <div className={styles.bar} style={{ height: "60%" }}></div>
        <div className={styles.bar} style={{ height: "30%" }}></div>
      </div>

      {/* Eixo X simulado */}
      <div className={styles.xAxis}>
        <span>Jan</span>
        <span>Fev</span>
        <span>Mar</span>
        <span>Abr</span>
        <span>Mai</span>
        <span>Jun</span>
      </div>
    </div>
  );
}

export default ChartBar;
