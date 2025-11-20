import React from 'react';
import Button from '../atoms/Button';
import styles from './EmptyState.module.css';

function EmptyState({ title, description, actionLabel, onAction }) {
  return (
    <div className={styles.container}>
      {/* Ícone Ilustrativo (SVG) */}
      <div className={styles.iconWrapper}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      {actionLabel && (
        <div className={styles.action}>
            <Button tipo="primario" onClick={onAction}>{actionLabel}</Button>
        </div>
      )}
    </div>
  );
}

export default EmptyState;