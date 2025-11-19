import React from "react";
import styles from "./Widget.module.css";

function Widget({ title, value, isAlert = false }) {
  return (
    <div className={styles.card}>
      <span className={styles.title}>{title}</span>
      <strong className={`${styles.value} ${isAlert ? styles.alert : ""}`}>
        {value}
      </strong>
    </div>
  );
}

export default Widget;
