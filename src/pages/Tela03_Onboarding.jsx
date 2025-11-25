import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar Router
import Button from "../components/atoms/Button";
import SelectionCard from "../components/molecules/SelectionCard";
import styles from "./Tela03_Onboarding.module.css";

function Tela03_Onboarding() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNext = () => {
    // Avança para a próxima etapa do onboarding
    navigate("/interests");
  };

  return (
    <div className={styles.screenContainer}>
      <div className={styles.onboardingCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Bem-vindo(a) à Lúmina!</h1>
          <p className={styles.subtitle}>Qual seu objetivo principal aqui?</p>
        </div>

        <div className={styles.optionsList}>
          <SelectionCard
            text="Estou aqui para fazer cursos"
            onClick={() => setSelectedOption(1)}
            selected={selectedOption === 1}
          />
          <SelectionCard
            text="Estou procurando projetos"
            onClick={() => setSelectedOption(2)}
            selected={selectedOption === 2}
          />
          <SelectionCard
            text="Quero me conectar com profissionais"
            onClick={() => setSelectedOption(3)}
            selected={selectedOption === 3}
          />
        </div>

        <div className={styles.footer}>
          <Button tipo="primario" fullWidth onClick={handleNext}>
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Tela03_Onboarding;
