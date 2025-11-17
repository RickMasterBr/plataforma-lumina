import React, { useState } from "react";
import Button from '../components/atoms/Button';
import SelectionCard from '../components/molecules/SelectionCard';
import styles from './Tela03_Onboarding.module.css';

function Tela03_Onboarding() {
    // Estado para saber qual opção foi escolhida
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (optionId) => {
        setSelectedOption(optionId);
    };

    return (
        <div className={styles.screenContainer}>
            <div className={styles.onboardingCard}>
                {/* Cabeçalho */}
                <div className={styles.header}>
                    <h1 className={styles.title}>Bem-vindo(a) à Lúmina!</h1>
                    <p className={styles.subtitle}>Qual seu objetivo principal aqui?</p>
                </div>

                {/* Lista de Opções */}
                <div className={styles.optionsList}>
                    <SelectionCard
                        text="Estou aqui para fazer cursos"
                        onClick={() => handleOptionClick(1)}
                        selected={selectedOption === 1}
                    />
                    <SelectionCard
                        text="Estou procurando projetos"
                        onClick={() => handleOptionClick(2)}
                        selected={selectedOption === 2}
                    />
                    <SelectionCard
                        text="Quero me conectar com profissionais"
                        onClick={() => handleOptionClick(3)}
                        selected={selectedOption === 3}
                    />
                </div>

                {/* Botão de Navegação */}
                <div className={styles.footer}>
                    <Button tipo="primario" fullWidth>Próximo</Button>
                </div>

            </div>
        </div>
    );
}

export default Tela03_Onboarding;