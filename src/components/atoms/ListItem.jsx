import React from "react";
import styles from "./ListItem.module.css";

function ListItem({ text, onDragStart }) {
  return (
    <div
      className={styles.item}
      draggable="true" // Habilita o comportamento nativo de arrastar (visual)
      onDragStart={onDragStart}
    >
      {/* Ícone de Puxador (Drag Handle) */}
      <div className={styles.handle}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="12" r="1"></circle>
          <circle cx="9" cy="5" r="1"></circle>
          <circle cx="9" cy="19" r="1"></circle>
          <circle cx="15" cy="12" r="1"></circle>
          <circle cx="15" cy="5" r="1"></circle>
          <circle cx="15" cy="19" r="1"></circle>
        </svg>
      </div>

      <span className={styles.text}>{text}</span>
    </div>
  );
}

export default ListItem;
