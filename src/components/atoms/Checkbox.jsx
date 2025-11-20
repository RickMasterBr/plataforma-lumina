import React from 'react';
import styles from './Checkbox.module.css';

/*
Props:
- label: Texto ao lado da caixa.
- checked: Estado atual (true/false).
- onChange: Função chamada ao clicar.
*/
function Checkbox({ label, checked = false, onChange }) {
  return (
    <label className={styles.container}>
      <input 
        type="checkbox" 
        className={styles.input} 
        checked={checked} 
        onChange={onChange}
      />
      
      {/* Visual da Caixa Customizada */}
      <div className={`${styles.box} ${checked ? styles.checked : ''}`}>
        {checked && (
            // Ícone de Check (SVG)
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        )}
      </div>

      {/* Texto do Rótulo */}
      <span className={styles.label}>{label}</span>
    </label>
  );
}

export default Checkbox;