import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CardCurso from '../components/organisms/CardCurso';
import CardProjeto from '../components/organisms/CardProjeto';
import styles from './Tela31_ResultadosBusca.module.css';

function Tela31_ResultadosBusca() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || "React";

  return (
    <div className={styles.pageContainer}>

      <div className={styles.contentContainer}>
        <header className={styles.header}>
          <h1 className="heading-2">Resultados para "{query}"</h1>
          <p className={styles.metaText}>
            Encontramos 3 resultados correspondentes.
          </p>
        </header>

        <div className={styles.resultsGroup}>
          {/* Seção Cursos */}
          <section className={styles.section}>
            <h3 className="heading-3" style={{ marginBottom: '16px' }}>Cursos</h3>
            <div className={styles.grid}>
              <CardCurso
                titulo="React Avançado"
                instrutor="Diego Fernandes"
                progresso={0}
                mostrarProgresso={false}
              />
              <CardCurso
                titulo="Fundamentos de React"
                instrutor="Ana Souza"
                progresso={0}
                mostrarProgresso={false}
              />
            </div>
          </section>

          <div className={styles.divider}></div>

          {/* Seção Projetos */}
          <section className={styles.section}>
            <h3 className="heading-3" style={{ marginBottom: '16px' }}>Projetos</h3>
            <div className={styles.grid}>
              <CardProjeto
                titulo="E-commerce em React"
                resumo="Frontend para loja de roupas sustentáveis focada em performance."
                habilidades={['React', 'Frontend']}
                equipe={['Diego', 'Eliana']}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Tela31_ResultadosBusca;