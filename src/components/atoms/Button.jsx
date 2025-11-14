import React from "react";
import styles from "./Button.module.css"; //importando estilos

function Button({ children, tipo = 'primario', onClick }){

    // Define a classe CSS base e adiciona a classe do "tipo" (ex: 'primario')
    // 1. A variável 'className' é definida aqui
    const className = `${styles.buttonBase} ${styles[tipo]}`;

    return (
        // 2. O erro estava aqui: usava "classesDoBotao" em vez de "className"
        <button className={className} onClick={onClick}>
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