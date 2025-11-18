import React from 'react';
import styles from './Tag.module.css';

/**
 * Componente de Tag selecionável.
 * Props:
 * - label: Texto da tag.
 * - selected: Booleano (true/false) se está selecionada.
 * - onClick: Função ao clicar.
 */
function Tag({ label, selected = false, onClick }) {
  return (
    <button
      className={`${styles.tagBase} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Tag;