import React from 'react';
import Postagem from '../components/organisms/Postagem';
import styles from './Tela08_Timeline.module.css';

function Tela08_Timeline() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.timelineGrid}>

        {/* --- COLUNA ESQUERDA (Identidade) --- [cite: 1754-1755, 1761-1764] */}
        <aside className={styles.leftColumn}>
          <div className={styles.miniProfileCard}>
            <div className={styles.coverBg}></div>
            <div className={styles.miniAvatar}>U</div>
            <h3 className="heading-3" style={{ fontSize: '18px', marginTop: '8px' }}>Nome Sobrenome</h3>
            <p className="body-small" style={{ color: 'var(--color-text-subtle)' }}>Designer de Produto</p>

            <div className={styles.statsRow}>
              <div><strong>350</strong> <span>Conexões</span></div>
              <div><strong>42</strong> <span>Visitas</span></div>
            </div>
          </div>
        </aside>

        {/* --- COLUNA CENTRAL (Feed) --- [cite: 1756-1757, 1766-1772] */}
        <main className={styles.feedColumn}>

          {/* Compositor (Criar Post) */}
          <div className={styles.composerCard}>
            <div className={styles.composerInputRow}>
              <div className={styles.smallAvatar}>U</div>
              <input type="text" placeholder="Começar uma publicação..." className={styles.composerInput} />
            </div>
            <div className={styles.composerActions}>
              <button className={styles.mediaBtn}>📷 Mídia</button>
              <button className={styles.mediaBtn}>📅 Evento</button>
              <button className={styles.mediaBtn}>📄 Artigo</button>
            </div>
          </div>

          {/* Lista de Postagens */}
          <Postagem
            autor="Carla Mendes"
            tempo="2h atrás"
            conteudo="Acabei de finalizar o curso de UX Research aqui na Lúmina! As técnicas de entrevista foram essenciais para o meu projeto atual. Recomendo a todos! #UX #Lumina #Aprendizado"
            likes={24}
            comentarios={5}
          />

          <Postagem
            autor="João Silva"
            tempo="5h atrás"
            conteudo="Alguém aqui já trabalhou com Design Systems no Figma? Estou com uma dúvida sobre como organizar as variáveis de cor para o modo escuro. Alguma dica?"
            likes={12}
            comentarios={8}
          />

          <Postagem
            autor="Lúmina Oficial"
            tempo="1d atrás"
            conteudo="Novidade na plataforma! 🚀 Lançamos hoje a nova trilha de Inteligência Artificial para Negócios. Confiram na aba de Cursos."
            likes={156}
            comentarios={42}
          />

        </main>

        {/* --- COLUNA DIREITA (Widgets) --- [cite: 1758-1759, 1773-1776] */}
        <aside className={styles.rightColumn}>
          <div className={styles.widgetCard}>
            <h4 className="heading-3" style={{ fontSize: '16px' }}>Tópicos em Alta</h4>
            <ul className={styles.topicList}>
              <li>#MarketingDigital</li>
              <li>#InovacaoSocial</li>
              <li>#ReactJS</li>
              <li>#Empreendedorismo</li>
              <li>#Carreira</li>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
}

export default Tela08_Timeline;