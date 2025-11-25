import React from "react";
import CardModeracao from "../components/organisms/CardModeracao";
import styles from "./Tela20_FilaModeracao.module.css";

function Tela20_FilaModeracao() {
  return (
    <div className={styles.contentArea}>
      <header className={styles.header}>
        <h1 className="heading-2">Fila de Moderação de Conteúdo</h1>
      </header>

      <div className={styles.queueList}>
        <CardModeracao
          contexto="Postagem na Timeline"
          motivo="Discurso de Ódio"
          autorDenuncia="Carla Mendes"
          conteudo="Este framework é lixo e quem usa não sabe nada..."
        />
        <CardModeracao
          contexto="Comentário em Projeto"
          motivo="Spam"
          autorDenuncia="Sistema (Automático)"
          conteudo="Ganhe dinheiro rápido acessando este link: www.fake-link.com"
        />
        <CardModeracao
          contexto="Postagem na Timeline"
          motivo="Assédio"
          autorDenuncia="João Silva"
          conteudo="[Conteúdo removido para demonstração]"
        />
      </div>
    </div>
  );
}

export default Tela20_FilaModeracao;
