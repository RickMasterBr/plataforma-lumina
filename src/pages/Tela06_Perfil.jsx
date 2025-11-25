import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';
import Tag from '../components/atoms/Tag';
import styles from './Tela06_Perfil.module.css';

function Tela06_Perfil() {
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentGrid}>

        {/* --- COLUNA ESQUERDA: IDENTIDADE --- */}
        <aside className={styles.identityColumn}>

          {/* Card de Perfil */}
          <div className={styles.profileCard}>
            {/* Avatar Grande */}
            <div className={styles.avatarLarge}>U</div>

            {/* Nome e Título [cite: 98] */}
            <div className={styles.profileInfo}>
              <h2 className="heading-2">Nome Sobrenome</h2>
              <p className="body-default" style={{ color: 'var(--color-text-subtle)' }}>
                Designer de Produto | Lúmina
              </p>
            </div>

            {/* Botão de Ação [cite: 2791-2793] */}
            <Button tipo="secundario" fullWidth onClick={() => navigate('/settings')}>Editar Perfil</Button>

            {/* Métricas [cite: 99-100] */}
            <div className={styles.metricsContainer}>
              <div className={styles.metricItem}>
                <strong>5</strong>
                <span>Cursos</span>
              </div>
              <div className={styles.metricItem}>
                <strong>3</strong>
                <span>Projetos</span>
              </div>
              <div className={styles.metricItem}>
                <strong>42</strong>
                <span>Seguidores</span>
              </div>
            </div>

            {/* Biografia [cite: 101] */}
            <div className={styles.bioSection}>
              <h4 className="heading-3" style={{ fontSize: '18px' }}>Sobre</h4>
              <p className="body-small" style={{ color: 'var(--color-text-subtle)' }}>
                Apaixonado por criar experiências digitais que impactam a vida das pessoas.
                Buscando projetos de impacto social na área de educação.
              </p>
            </div>

            {/* Habilidades (Reutilizando Tags!) [cite: 101] */}
            <div className={styles.skillsSection}>
              <h4 className="heading-3" style={{ fontSize: '18px' }}>Habilidades</h4>
              <div className={styles.tagsWrapper}>
                <Tag label="UI/UX" />
                <Tag label="Figma" />
                <Tag label="React" />
                <Tag label="Marketing" />
              </div>
            </div>
          </div>

        </aside>

        {/* --- COLUNA DIREITA: CONTEÚDO --- */}
        <main className={styles.contentColumn}>

          {/* Navegação por Abas [cite: 103, 2760-2768] */}
          <div className={styles.tabsHeader}>
            <button className={`${styles.tab} ${styles.activeTab}`}>Postagens</button>
            <button className={styles.tab}>Projetos</button>
            <button className={styles.tab} onClick={() => navigate('/profile/certificates')}>Certificados</button>
          </div>

          {/* Área de Conteúdo da Aba */}
          <div className={styles.feedPlaceholder}>
            <p className="body-default" style={{ color: 'var(--color-text-subtle)' }}>
              Feed de atividades do usuário aparecerá aqui...
            </p>
          </div>

        </main>

      </div>
    </div>
  );
}

export default Tela06_Perfil;