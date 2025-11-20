import React, { useState } from 'react';
import Button from '../components/atoms/Button';
import FormGroup from '../components/molecules/FormGroup';
import Checkbox from '../components/atoms/Checkbox';
import styles from './Tela30_ExportacaoRelatorios.module.css';

function Tela30_ExportacaoRelatorios() {
  // Estados para os checkboxes
  const [relatorios, setRelatorios] = useState({
    impacto: false,
    brand: false,
    usuarios: true // Exemplo: já vem marcado
  });

  const handleCheck = (tipo) => {
    setRelatorios({ ...relatorios, [tipo]: !relatorios[tipo] });
  };

  return (
    <div className={styles.adminContainer}>
      
      {/* --- SIDEBAR (Exportar Ativo) --- */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>LÚMINA ADMIN</h2>
        <nav className={styles.nav}>
          <button className={styles.navItem}>Dashboard</button>
          <button className={styles.navItem}>Usuários</button>
          <button className={styles.navItem}>Trilhas</button>
          <button className={styles.navItem}>Conteúdo</button>
          <button className={styles.navItem}>Relatórios</button>
          {/* Novo item de menu para esta tela */}
          <button className={`${styles.navItem} ${styles.active}`}>Exportar</button>
        </nav>
      </aside>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <main className={styles.contentArea}>
        <header className={styles.header}>
          <h1 className="heading-2">Exportação de Relatórios</h1>
        </header>

        {/* Card do Formulário */}
        <div className={styles.formCard}>
            
            {/* Seção 1: Período */}
            <section className={styles.section}>
                <h3 className="heading-6">Selecione o Período</h3>
                <div className={styles.dateRow}>
                    <FormGroup label="Data Inicial" type="date" fullWidth />
                    <FormGroup label="Data Final" type="date" fullWidth />
                </div>
            </section>

            {/* Seção 2: Tipos de Relatório (Checkboxes) */}
            <section className={styles.section}>
                <h3 className="heading-6">Selecione os Relatórios</h3>
                <div className={styles.checkboxList}>
                    <Checkbox 
                        label="Relatório de Impacto Social (Tela 28)" 
                        checked={relatorios.impacto}
                        onChange={() => handleCheck('impacto')}
                    />
                    <Checkbox 
                        label="Relatório de Brand Equity (Tela 29)" 
                        checked={relatorios.brand}
                        onChange={() => handleCheck('brand')}
                    />
                    <Checkbox 
                        label="Relatório de Usuários Ativos" 
                        checked={relatorios.usuarios}
                        onChange={() => handleCheck('usuarios')}
                    />
                    <Checkbox 
                        label="Dados Brutos (CSV)" 
                        checked={false}
                        onChange={() => {}}
                    />
                </div>
            </section>

            {/* Ação Final */}
            <div className={styles.actions}>
                <Button tipo="primario">Gerar Relatório</Button>
            </div>

        </div>

      </main>
    </div>
  );
}

export default Tela30_ExportacaoRelatorios;