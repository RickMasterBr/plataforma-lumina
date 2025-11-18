import React from 'react';
import GlobalNav from '../components/organisms/GlobalNav';
import Button from '../components/atoms/Button';
import FormGroup from '../components/molecules/FormGroup';
import styles from './Tela07_Configuracoes.module.css';

function Tela07_Configuracoes() {
  return (
    <div className={styles.pageContainer}>
      <GlobalNav />

      <div className={styles.contentGrid}>
        
        {/* --- COLUNA ESQUERDA: NAVEGAÇÃO --- */}
        <aside className={styles.navColumn}>
          <nav className={styles.settingsNav}>
            <button className={`${styles.navItem} ${styles.active}`}>
              Editar Perfil
            </button>
            <button className={styles.navItem}>
              Segurança da Conta
            </button>
            <button className={styles.navItem}>
              Notificações
            </button>
            <button className={styles.navItem}>
              Privacidade
            </button>
            {/* Item de Perigo (Excluir Conta) */}
            <button className={`${styles.navItem} ${styles.dangerItem}`}>
              Excluir Conta
            </button>
          </nav>
        </aside>

        {/* --- COLUNA DIREITA: CONTEÚDO (Formulário) --- */}
        <main className={styles.contentColumn}>
          
          <h2 className="heading-2" style={{ marginBottom: '24px' }}>Editar Perfil</h2>

          <div className={styles.formCard}>
            
            {/* Foto de Perfil (Placeholder) */}
            <div className={styles.avatarSection}>
                <div className={styles.avatar}>U</div>
                <Button tipo="secundario">Alterar Foto</Button>
            </div>

            {/* Campos do Formulário */}
            <div className={styles.formGrid}>
                <FormGroup 
                    label="Nome Completo" 
                    placeholder="Seu nome..." 
                    defaultValue="Nome Sobrenome"
                    fullWidth
                />
                
                <FormGroup 
                    label="Título Profissional" 
                    placeholder="Ex: Designer | Lúmina" 
                    fullWidth
                />

                {/* Simulação de Textarea usando Input */}
                <FormGroup 
                    label="Biografia" 
                    placeholder="Conte um pouco sobre você..." 
                    fullWidth
                />
            </div>

            {/* Rodapé do Formulário */}
            <div className={styles.formFooter}>
                <Button tipo="primario">Salvar Alterações</Button>
            </div>

          </div>

        </main>

      </div>
    </div>
  );
}

export default Tela07_Configuracoes;