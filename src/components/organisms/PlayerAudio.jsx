import React from "react";
import Button from "../atoms/Button";
import styles from "./PlayerAudio.module.css";

function PlayerAudio() {
  return (
    <div className={styles.playerContainer}>
      {/* Botão Play (Simulado) */}
      <button className={styles.playBtn}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
        </svg>
      </button>

      {/* Barra de Progresso (Placeholder) */}
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: "35%" }}></div>
        <div className={styles.scrubber}></div>
      </div>

      {/* Tempo */}
      <span className={styles.time}>12:45 / 45:30</span>

      {/* Ação Extra */}
      <div className={styles.action}>
        <Button tipo="secundario">Ouvir no Spotify</Button>
      </div>
    </div>
  );
}

export default PlayerAudio;
