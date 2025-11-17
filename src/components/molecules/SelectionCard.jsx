import React from "react";
import styles from "./SelectionCard.module.css";

function SelectionCard({ text, onClick, selected = false}){
    return(
        <button className={`${styles.cardBase} ${selected ? styles.selected : ''}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default SelectionCard;