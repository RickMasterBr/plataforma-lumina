import React from "react";
import styles from "./ProgressBar.module.css";

function ProgressBar({ progresso = 0 }) {
  // Garante que o progresso esteja entre 0 e 100
  const width = Math.min(Math.max(progresso, 0), 100);

  return (
    <div className={styles.track}>
      <div className={styles.fill} style={{ width: `${width}%` }} />
    </div>
  );
}

export default ProgressBar;
