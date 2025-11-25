import React from 'react';
import Widget from '../components/molecules/Widget';
import ChartBar from '../components/atoms/ChartBar';
import ChartPie from '../components/atoms/ChartPie';
import FormGroup from '../components/molecules/FormGroup';
import Button from '../components/atoms/Button';
import styles from './Tela28_RelatoriosImpacto.module.css';

function Tela28_RelatoriosImpacto() {
  return (
    <div className={styles.contentArea}>
      <header className={styles.header}>
        <h1 className="heading-2">Relatórios de Impacto Social</h1>
      </header>

      {/* Filtros de Período */}
      <div className={styles.filtersContainer}>
        <div className={styles.dateInputs}>
          <FormGroup label="Período Inicial" type="date" />
          <FormGroup label="Período Final" type="date" />
        </div>
        <div className={styles.filterAction}>
          <Button tipo="secundario">Filtrar</Button>
        </div>
      </div>

      {/* Grade de Widgets (KPIs de Impacto) */}
      <div className={styles.widgetsGrid}>
        <Widget title="Microempreendedores Impactados" value="42" />
        <Widget title="Projetos Concluídos" value="35" />
        <Widget title="Horas de Consultoria Voluntária" value="280" />
        <Widget title="Alunos Voluntários Ativos" value="58" />
      </div>

      {/* Seção de Análise Visual */}
      <section className={styles.chartsSection}>
        <h3 className="heading-4">Análise de Impacto</h3>

        <div className={styles.chartsGrid}>
          <ChartBar title="Recursos Aplicados vs. Impacto Gerado" />
          <ChartPie title="Projetos por Categoria de Impacto" />
        </div>
      </section>

    </div>
  );
}

export default Tela28_RelatoriosImpacto;