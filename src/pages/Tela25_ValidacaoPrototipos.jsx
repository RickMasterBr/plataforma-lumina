import React from "react";
import CardValidacao from "../components/organisms/CardValidacao";
import styles from "./Tela25_ValidacaoPrototipos.module.css";

function Tela25_ValidacaoPrototipos() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.validationContainer}>
        <header className={styles.header}>
          <h1 className="heading-2">Projetos Pendentes de Validação</h1>
          <p
            className="body-default"
            style={{ color: "var(--color-text-subtle)" }}
          >
            Revise os protótipos enviados pelos alunos e forneça seu feedback ou
            aprovação.
          </p>
        </header>

        <div className={styles.validationList}>
          {/* Card 1: Pendente (Formulário Ativo) */}
          <CardValidacao
            titulo="Redesign do App de Delivery (MVP)"
            linkPrototipo="https://figma.com/proto/xyz..."
            estado="pendente"
            onAprovar={() => alert("Projeto Aprovado!")}
            onRevisar={() => alert("Solicitação de revisão enviada.")}
          />

          {/* Card 2: Outro projeto pendente */}
          <CardValidacao
            titulo="Landing Page Institucional"
            linkPrototipo="https://figma.com/proto/abc..."
            estado="pendente"
          />

          {/* Card 3: Aprovado (Histórico) */}
          <CardValidacao
            titulo="Identidade Visual (Logo)"
            linkPrototipo="https://figma.com/proto/logo..."
            estado="aprovado"
          />
        </div>
      </div>
    </div>
  );
}

export default Tela25_ValidacaoPrototipos;
