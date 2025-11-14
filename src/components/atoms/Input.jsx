import React, {useState} from "react";
import styles from "./Input.module.css";

/*
Props:
- placeholder: O texto a ser exibido antes da digitação.
- type: O tipo de input (ex: 'text', 'password', 'email').
*/

function Input({ type = 'text', placeholder }) {
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    // Determina o estado no CSS com base no Foco e se Há texto
    const hasValue = value.length > 0; // Verifica se há texto no input
    const inputState = isFocused ? 'focado' : (hasValue ? 'digitado' : 'placeholder');

    return (
        <input
        type={type} // Define o tipo de input
        className={`${styles.inputBase} ${styles[inputState]}`} // Aplica classes CSS baseadas no estado
        placeholder={placeholder} // Define o placeholder
        value={value} // Define o valor do input
        onChange={(e) => setValue(e.target.value)} // Atualiza o valor do input ao digitar
        onFocus={() => setIsFocused(true)} // Define o estado como focado ao clicar no input
        onBlur={() => setIsFocused(false)} // Define o estado como não focado ao sair do input
        />
    )
}

export default Input;