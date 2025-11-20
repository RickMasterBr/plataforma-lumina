import React from 'react';
import Button from '../components/atoms/Button';
import FormGroup from '../components/molecules/FormGroup';
import DragDropList from '../components/organisms/DragDropList';
import styles from './Tela26_GerenciamentoTrilhas.module.css';

function Tela26_GerenciamentoTrilhas() {
  // Dados simulados para a lista arrastável
  const modulosIniciais = [
    "Módulo 1: Introdução ao Marketing",
    "Módulo 2: Estratégias de Conteúdo",
    "Módulo 3: SEO Básico",
    "Módulo 4: Análise de Métricas"
  ];

  return (
    <div className={styles.adminContainer}>
      
      {/* --- SIDEBAR (Trilhas Ativo) --- */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>LÚMINA ADMIN</h2>
        <nav className={styles.nav}>
          <button className={styles.navItem}>Dashboard</button>
          <button className={styles.navItem}>Usuários</button>
          <button className={`${styles.navItem} ${styles.active}`}>Trilhas</button>
          <button className={styles.navItem}>Projetos</button>
          <button className={styles.navItem}>Timeline (Moderação)</button>
          <button className={styles.navItem}>Relatórios</button>
        </nav>
      </aside>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <main className={styles.contentArea}>
        <header className={styles.header}>
          <h1 className="heading-2">Gerenciamento de Trilhas</h1>
        </header>

        {/* Formulário de Trilha */}
        <div className={styles.formCard}>
            
            {/* Campos Básicos */}
            <FormGroup 
                label="Título da Trilha" 
                placeholder="Ex: Marketing Digital Completo"
                fullWidth
            />
            
            <FormGroup 
                label="Instrutor Responsável" 
                placeholder="Selecione o instrutor..."
                fullWidth
            />

            {/* Simulação de Editor WYSIWYG */}
            <FormGroup 
                label="Descrição Completa" 
                placeholder="Descreva o conteúdo da trilha..."
                fullWidth
                style={{ height: '200px' }} // Ajuste de altura no CSS ou inline se o componente suportar
            />

            {/* Área de Organização de Módulos */}
            <div className={styles.modulesSection}>
                <h3 className="heading-5" style={{marginBottom: '16px'}}>Módulos e Aulas</h3>
                <DragDropList items={modulosIniciais} />
            </div>

            {/* Ações */}
            <div className={styles.formActions}>
                <Button tipo="secundario">Cancelar</Button>
                <Button tipo="primario">Salvar Trilha</Button>
            </div>

        </div>

      </main>
    </div>
  );
}

export default Tela26_GerenciamentoTrilhas;