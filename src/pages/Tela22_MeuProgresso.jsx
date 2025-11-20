import React from "react";
import GlobalNav from "../components/organisms/GlobalNav";
import Widget from "../components/molecules/Widget";
import ChartBar from "../components/atoms/ChartBar";
import ChartPie from "../components/atoms/ChartPie";
import Badge from "../components/atoms/Badge";
import styles from "./Tela22_MeuProgresso.module.css";

function Tela22_MeuProgresso() {
  return (
    <div className={styles.pageContainer}>
      <GlobalNav />

      <div className={styles.progressContainer}>
        {/* Título da Página */}
        <h2 className="heading-2">Meu Progresso e Analytics</h2>

        {/* 1. Grade de Widgets (KPIs) */}
        <div className={styles.widgetsGrid}>
          <Widget title="Trilhas em Andamento" value="3" />
          <Widget title="Habilidades Adquiridas" value="8" />
          <Widget title="Pontos de Gamificação" value="1500" />
          <Widget title="Dias de Atividade (Streak)" value="5" />
        </div>

        {/* 2. Grade de Gráficos (Visualização) */}
        <div className={styles.chartsGrid}>
          {/* Gráfico de Barras */}
          <ChartBar title="Heatmap de Atividade Semanal" />

          {/* Gráfico de Pizza */}
          <ChartPie title="Habilidades (Tags)" />
        </div>

        {/* 3. Seção de Gamificação (Badges) */}
        <div className={styles.badgesSection}>
          <h4 className="heading-4">Badges Conquistadas</h4>

          <div className={styles.badgesList}>
            <Badge nivel="bronze" />
            <Badge nivel="prata" />
            <Badge nivel="bronze" />
            <Badge nivel="bloqueado" />
            <Badge nivel="bloqueado" />
            <Badge nivel="bloqueado" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tela22_MeuProgresso;
