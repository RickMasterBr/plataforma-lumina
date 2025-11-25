import React from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleSwitch from '../components/atoms/ToggleSwitch'; // Certifique-se que criou este componente na Etapa 64
import styles from './Tela07_Configuracoes.module.css'; // Reutiliza o CSS da Tela 7

function Tela07_1_Acessibilidade() {
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentGrid}>
        <aside className={styles.navColumn}>
          <nav className={styles.settingsNav}>
            <button className={styles.navItem} onClick={() => navigate('/settings')}>Editar Perfil</button>
            <button className={styles.navItem}>Segurança da Conta</button>
            <button className={styles.navItem}>Notificações</button>
            <button className={styles.navItem} onClick={() => navigate('/privacy')}>Privacidade</button>
            {/* Item Ativo */}
            <button className={`${styles.navItem} ${styles.active}`}>Acessibilidade</button>
            <button className={`${styles.navItem} ${styles.dangerItem}`}>Excluir Conta</button>
          </nav>
        </aside>

        <main className={styles.contentColumn}>
          <h2 className="heading-2" style={{ marginBottom: '24px' }}>Acessibilidade</h2>

          <div className={styles.formCard}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid var(--color-border-default)' }}>
              <span>Modo Alto Contraste</span>
              <ToggleSwitch />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0' }}>
              <span>Aumentar Fonte</span>
              <ToggleSwitch />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Tela07_1_Acessibilidade;