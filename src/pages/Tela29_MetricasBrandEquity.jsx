import React from 'react';
import Widget from '../components/molecules/Widget';
import ChartBar from '../components/atoms/ChartBar';
import ChartPie from '../components/atoms/ChartPie';
import FormGroup from '../components/molecules/FormGroup';
import Button from '../components/atoms/Button';
import styles from './Tela29_MetricasBrandEquity.module.css';

function Tela29_MetricasBrandEquity() {
  return (
    <div className={styles.contentArea}>
      <header className={styles.header}>
        <h1 className="heading-2">Métricas de Brand Equity</h1>
      </header>

      {/* Filtros de Período (Reutilizados) */}
      <div className={styles.filtersContainer}>
        <div className={styles.dateInputs}>
          <FormGroup label="Período Inicial" type="date" />
          <FormGroup label="Período Final" type="date" />
        </div>
        <div className={styles.filterAction}>
          <Button tipo="secundario">Filtrar</Button>
        </div>
      </div>

      {/* Grade de Widgets (KPIs de Marca) */}
      <div className={styles.widgetsGrid}>
        <Widget title="Qualidade Percebida" value="4.8 / 5.0" />
        <Widget title="Lealdade (Retenção)" value="78%" />
        <Widget title="Reconhecimento da Marca" value="1.2k" />
        <Widget title="Tráfego (do Ânima Hub)" value="+15%" />
      </div>

      {/* Seção de Análise Visual */}
      <section className={styles.chartsSection}>
        <h3 className="heading-4">Análise de Percepção</h3>

        <div className={styles.chartsGrid}>
          <ChartBar title="Avaliações de Qualidade (6 meses)" />
          <ChartPie title="Fontes de Reconhecimento" />
        </div>
      </section>

    </div>
  );
}

export default Tela29_MetricasBrandEquity;