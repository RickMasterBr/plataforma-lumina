import React from 'react';
import Tela05_Dashboard from './Tela05_Dashboard'; // Reutiliza a tela base
import Tooltip from '../components/atoms/Tooltip';
import Button from '../components/atoms/Button';
import styles from './Tela05_1_TourContextual.module.css';

function Tela05_1_TourContextual() {
  return (
    <div className={styles.container}>
      
      {/* 1. A Tela Base (Dashboard) */}
      <div className={styles.baseScreen}>
        <Tela05_Dashboard />
      </div>

      {/* 2. O Overlay Escuro (80% opacidade) */}
      <div className={styles.overlay}>
        
        {/* 3. O "Furo" ou Destaque (Posicionado manualmente para simular) */}
        {/* Em um app real, usaríamos bibliotecas como 'react-joyride', mas aqui simulamos o visual */}
        <div className={styles.highlightArea}>
            
            {/* O Tooltip apontando para o destaque */}
            <div className={styles.tooltipWrapper}>
                <Tooltip 
                    text="Esta é a sua área de Trilhas. Acompanhe seu progresso aqui!" 
                    position="bottom" 
                />
            </div>

        </div>

        {/* 4. Navegação do Tour */}
        <div className={styles.tourControls}>
            <Button tipo="secundario" style={{color: 'white', borderColor: 'white'}}>Pular Tour</Button>
            <Button tipo="primario">Próximo</Button>
        </div>

      </div>
    </div>
  );
}

export default Tela05_1_TourContextual;