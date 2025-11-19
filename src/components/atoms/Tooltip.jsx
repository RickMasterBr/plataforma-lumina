import React from "react";
import styles from "./Tooltip.module.css";

/*
Props:
- text: O conteúdo do tooltip.
- position: 'bottom' (padrão, seta em cima) ou 'top' (seta embaixo).
*/
function Tooltip({ text, position = "bottom" }) {
  return (
    <div className={styles.tooltipContainer}>
      {/* Seta no Topo (Renderiza apenas se a posição for 'bottom') */}
      {position === "bottom" && <div className={styles.arrowUp}></div>}

      {/* Caixa de Conteúdo */}
      <div className={styles.box}>
        <p className={styles.text}>{text}</p>
      </div>

      {/* Seta na Base (Renderiza apenas se a posição for 'top') */}
      {position === "top" && <div className={styles.arrowDown}></div>}
    </div>
  );
}

export default Tooltip;
