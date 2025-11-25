import React from 'react';
import styles from './ToggleSwitch.module.css';

/*
Props:
- isOn: Estado atual (true/false).
- onToggle: Função chamada ao clicar.
*/
function ToggleSwitch({ isOn = false, onToggle }) {
    return (
        <button
            className={`${styles.switchBase} ${isOn ? styles.on : styles.off}`}
            onClick={() => onToggle && onToggle(!isOn)}
            type="button"
            role="switch"
            aria-checked={isOn}
        >
            <div className={styles.handle} />
        </button>
    );
}

export default ToggleSwitch;