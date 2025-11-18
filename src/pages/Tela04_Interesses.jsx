
import React, { useState } from 'react';
import Button from '../components/atoms/Button';
import Tag from '../components/atoms/Tag';
import styles from './Tela04_Interesses.module.css';

const TOPICOS = [
  "Marketing Digital",
  "Design UI/UX",
  "Empreendedorismo Social",
  "SEO",
  "Mídia Paga",
  "Inovação",
  "Branding",
  "Copywriting",
  "Gestão de Projetos"
];

function Tela04_Interesses() {
  // Estado para guardar os interesses selecionados (Array)
  const [selectedInterests, setSelectedInterests] = useState([]);

  // Função para adicionar/remover interesse ao clicar
  const toggleInterest = (topic) => {
    if (selectedInterests.includes(topic)) {
      // Se já existe, remove (filtra)
      setSelectedInterests(selectedInterests.filter(item => item !== topic));
    } else {
      // Se não existe, adiciona
      setSelectedInterests([...selectedInterests, topic]);
    }
  };

  return (
    <div className={styles.screenContainer}>
      <div className={styles.onboardingCard}>
        
        <div className={styles.header}>
          <h1 className={styles.title}>Personalize sua jornada</h1>
          <p className={styles.subtitle}>Selecione alguns tópicos de interesse:</p>
        </div>

        {/* Nuvem de Tags */}
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

        {/* Botões de Ação (Voltar / Concluir) */}
        <div className={styles.footerActions}>
          <Button tipo="secundario" fullWidth>Voltar</Button>
          <Button tipo="primario" fullWidth>Concluir</Button>
        </div>

      </div>
    </div>
  );
}

export default Tela04_Interesses;