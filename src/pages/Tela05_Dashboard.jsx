// src/pages/Tela05_Dashboard.jsx
import React from 'react';
import GlobalNav from '../components/organisms/GlobalNav';
import styles from './Tela05_Dashboard.module.css';

function Tela05_Dashboard() {
  return (
    <div className={styles.pageContainer}>
      {/* O GlobalNav fica fixo no topo */}
      <GlobalNav />

      {/* Conteúdo Principal (Abaixo da Nav) */}
      <div className={styles.contentGrid}>
        
        {/* Coluna Esquerda (Principal) */}
        <main className={styles.mainColumn}>
          
          <header className={styles.welcomeHeader}>
            <h1 className="heading-1">Olá, Estudante! 👋</h1>
            <p className="body-default" style={{ color: 'var(--color-text-subtle)' }}>
              Que bom te ver de novo. Vamos continuar aprendendo?
            </p>
          </header>

          {/* Seção: Continue de onde parou */}
          <section className={styles.section}>
            <h3 className="heading-3">Continue de Onde Parou</h3>
            <div className={styles.placeholderCard}>
              <p>Placeholder: Card da última aula assistida</p>
            </div>
          </section>

          {/* Seção: Meus Cursos */}
          <section className={styles.section}>
            <h3 className="heading-3">Meus Cursos</h3>
            <div className={styles.horizontalScroll}>
               {/* Placeholders de Cards */}
               <div className={styles.miniCard}>Curso A</div>
               <div className={styles.miniCard}>Curso B</div>
               <div className={styles.miniCard}>Curso C</div>
            </div>
          </section>

        </main>

        {/* Coluna Direita (Lateral) */}
        <aside className={styles.sideColumn}>
           <div className={styles.widgetCard}>
              <h4 className="heading-3" style={{fontSize: '18px'}}>Checklist</h4>
              <ul style={{ paddingLeft: '20px', marginTop: '12px', color: 'var(--color-text-subtle)' }}>
                <li>Complete seu perfil</li>
                <li>Inscreva-se em um curso</li>
              </ul>
           </div>
        </aside>

      </div>
    </div>
  );
}

export default Tela05_Dashboard;