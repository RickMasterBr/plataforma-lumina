import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar Router
import Button from "../components/atoms/Button";
import Tag from "../components/atoms/Tag";
import styles from "./Tela04_Interesses.module.css";

const TOPICOS = [
  "Marketing Digital",
  "Design UI/UX",
  "Empreendedorismo Social",
  "SEO",
  "Mídia Paga",
  "Inovação",
  "Branding",
  "Copywriting",
  "Gestão de Projetos",
];

function Tela04_Interesses() {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (topic) => {
    if (selectedInterests.includes(topic)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== topic));
    } else {
      setSelectedInterests([...selectedInterests, topic]);
    }
  };

  return (
    <div className={styles.screenContainer}>
      <div className={styles.onboardingCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Personalize sua jornada</h1>
          <p className={styles.subtitle}>
            Selecione alguns tópicos de interesse:
          </p>
        </div>

        <div className={styles.tagCloud}>
          {TOPICOS.map((topic) => (
            <Tag
              key={topic}
              label={topic}
              selected={selectedInterests.includes(topic)}
              onClick={() => toggleInterest(topic)}
            />
          ))}
        </div>

        <div className={styles.footerActions}>
          {/* Voltar para Metas */}
          <Button
            tipo="secundario"
            fullWidth
            onClick={() => navigate("/onboarding")}
          >
            Voltar
          </Button>

          {/* Concluir -> Ir para Dashboard (com Tour) */}
          <Button tipo="primario" fullWidth onClick={() => navigate("/dashboard")}>
            Concluir
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Tela04_Interesses;
