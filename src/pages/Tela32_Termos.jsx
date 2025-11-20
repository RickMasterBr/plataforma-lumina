import React from 'react';
import GlobalNav from '../components/organisms/GlobalNav';
import styles from './Tela32_Termos.module.css';

function Tela32_Termos() {
  return (
    <div className={styles.pageContainer}>
      <GlobalNav />
      
      <div className={styles.documentContainer}>
        <h1 className="heading-1" style={{ marginBottom: '24px' }}>Termos de Serviço</h1>
        
        <div className={styles.textContent}>
            <p>Última atualização: 20 de Novembro de 2025</p>
            
            <p>Bem-vindo à Lúmina. Ao acessar ou usar nossa plataforma, você concorda em ficar vinculado a estes Termos.</p>
            
            <h3 className="heading-3">1. Aceitação dos Termos</h3>
            <p>
                Ao criar uma conta, você confirma que leu, entendeu e concorda com estes termos.
                Se você não concordar com qualquer parte destes termos, você não deve usar o serviço.
            </p>
            
            <h3 className="heading-3">2. Uso da Plataforma</h3>
            <p>
                A Lúmina concede a você uma licença limitada, não exclusiva e intransferível para acessar
                e usar os cursos e conteúdos disponibilizados, exclusivamente para fins pessoais e não comerciais.
            </p>
            
            <h3 className="heading-3">3. Propriedade Intelectual</h3>
            <p>
                Todo o conteúdo, incluindo textos, gráficos, logotipos e software, é propriedade da Lúmina
                ou de seus licenciadores e está protegido por leis de direitos autorais.
            </p>

             <h3 className="heading-3">4. Conduta do Usuário</h3>
            <p>
                Você concorda em não usar a plataforma para fins ilegais ou não autorizados. O respeito mútuo
                é fundamental em nossa comunidade de aprendizado.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Tela32_Termos;