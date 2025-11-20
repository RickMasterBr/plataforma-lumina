import React from 'react';
import GlobalNav from '../components/organisms/GlobalNav';
import styles from './Tela33_Privacidade.module.css';

function Tela33_Privacidade() {
  return (
    <div className={styles.pageContainer}>
      <GlobalNav />
      
      <div className={styles.documentContainer}>
        <h1 className="heading-1" style={{ marginBottom: '24px' }}>Política de Privacidade</h1>
        
        <div className={styles.textContent}>
            <p>Última atualização: 20 de Novembro de 2025</p>
            
            <p>A sua privacidade é importante para nós. Esta política explica como coletamos, usamos e protegemos seus dados.</p>
            
            <h3 className="heading-3">1. Coleta de Dados</h3>
            <p>
                Coletamos informações que você nos fornece diretamente, como nome, email e dados de perfil
                ao se cadastrar na plataforma. Também coletamos dados de progresso nos cursos para melhorar sua experiência.
            </p>
            
            <h3 className="heading-3">2. Uso das Informações</h3>
            <p>
                Utilizamos seus dados para:
            </p>
            <ul className={styles.list}>
                <li>Fornecer e manter nossos serviços;</li>
                <li>Personalizar sua experiência de aprendizado;</li>
                <li>Enviar notificações importantes sobre sua conta.</li>
            </ul>
            
            <h3 className="heading-3">3. Compartilhamento de Dados</h3>
            <p>
                Não vendemos seus dados pessoais. Compartilhamos informações apenas com parceiros de serviço
                essenciais para a operação da plataforma (ex: processamento de pagamentos).
            </p>

             <h3 className="heading-3">4. Seus Direitos</h3>
            <p>
                Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento
                através das configurações da sua conta.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Tela33_Privacidade;