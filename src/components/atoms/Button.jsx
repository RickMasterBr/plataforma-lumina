import React from "react";
import styles from "./Button.module.css"; //importando estilos

function Button({ children, tipo = 'primario', onClick}){

    // Define a classe CSS base e adiciona a classe do "tipo" (ex: 'primario')
    const className = `${styles.buttonBase} ${styles[tipo]}`;

    return (
        <button className={classesDoBotao} onClick={onClick}>
            {children} 
        </button>

    );
}

export default Button;

/*
Informações básicas:

- children: O texto ou ícone a ser exibido dentro do botão.
- tipo: estilo visual (ex.: 'primário', 'secundário')
- onClick: função a ser chamada quando o botão for clicado.

*/