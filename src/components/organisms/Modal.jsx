import React from "react";
import Button from "../atoms/Button";
import styles from "./Modal.module.css";

/*
Props:
- isOpen: Controla a visibilidade.
- title: Título do modal.
- children: Conteúdo principal (descrição).
- type: 'confirmacao' (padrão), 'sucesso', 'erro'.
- onConfirm: Função do botão principal.
- onCancel: Função do botão cancelar (apenas para confirmação).
- confirmText: Texto do botão principal.
*/

function Modal({
  isOpen,
  title,
  children,
  type = "confirmacao",
  onConfirm,
  onCancel,
  confirmText = "Confirmar",
}) {
  if (!isOpen) return null;

  // Define cores e textos baseados no tipo (Variantes) [cite: 8967]
  const isErro = type === "erro";
  const isSucesso = type === "sucesso";

  // No sucesso/erro, geralmente só temos um botão de ação/fechar
  const showCancel = type === "confirmacao";
  const finalConfirmText = isSucesso ? "Ok" : confirmText || "Confirmar";

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        {/* Slot de Título [cite: 8925] */}
        <h4 className={`${styles.title} ${isErro ? styles.textError : ""}`}>
          {title}
        </h4>

        {/* Slot de Conteúdo [cite: 8931] */}
        <div className={styles.content}>{children}</div>

        {/* Slot de Botões [cite: 8937] */}
        <div className={styles.actions}>
          {showCancel && (
            <Button tipo="secundario" onClick={onCancel}>
              Cancelar
            </Button>
          )}

          <Button
            tipo="primario"
            onClick={onConfirm}
            // Se for erro, podemos adicionar estilo inline ou uma classe específica no Button para ficar vermelho
            style={
              isErro
                ? {
                    backgroundColor: "var(--color-feedback-error)",
                    borderColor: "var(--color-feedback-error)",
                  }
                : {}
            }
          >
            {finalConfirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
