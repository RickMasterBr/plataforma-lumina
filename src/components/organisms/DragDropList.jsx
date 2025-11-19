import React from "react";
import ListItem from "../atoms/ListItem";
import styles from "./DragDropList.module.css";

function DragDropList({ items = [] }) {
  return (
    <div className={styles.listContainer}>
      {items.map((item, index) => (
        <ListItem
          key={index}
          text={item}
          onDragStart={() => console.log(`Arrastando: ${item}`)}
        />
      ))}

      {/* Estado vazio ou placeholder se não houver itens */}
      {items.length === 0 && (
        <div className={styles.emptyState}>
          Nenhum item na lista. Adicione módulos acima.
        </div>
      )}
    </div>
  );
}

export default DragDropList;
