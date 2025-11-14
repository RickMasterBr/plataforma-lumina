import React from "react";
import Input from "../atoms/Input";
import styles from "./FormGroup.module.css";

/* 
Props:
- label: O texto do rótulo (Rótulo).
- helpText: O texto de ajuda abaixo do input.
- estado: 'padrao' ou 'erro'.
- ...rest: Outras props (type, placeholder, etc.) são passadas para o Input.
*/

function FormGroup({ label, helpText, estado = 'padrao', ...rest}) {

    // Define a classe do texto de ajuda (normal ou erro)
    const helpTextClass = `
    ${styles.helpText}
    ${estado === 'erro' ? styles.erro : ''}
    `;

    return(
        <div className={styles.formGroupBase}>
            {/* 1. Rótulo Label */}
            {label && (
                <label className={styles.label}>
                    {label}
                </label>
            )}

            {/* 2. O Átomo Input */}
            <Input
            estado = {estado} //Passa o estado (erro)  para o input
            {...rest} // Passa 'type', 
            />

            {/* 3. O Texto de Ajuda */}
            {helpText && (
                <span className={helpTextClass}>
                    {helpText}
                </span>
            )}
        </div>
    );
}

export default FormGroup;