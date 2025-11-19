import React from 'react';
import GlobalNav from '../components/organisms/GlobalNav';
import CardEpisodio from '../components/organisms/CardEpisodio';
import styles from './Tela16_PodcastPrincipal.module.css';

// Dados Mockados
const episodios = [
  { id: 1, titulo: "O Futuro do Marketing Digital com IA", data: "15 Out 2025", duracao: "45 min", resumo: "Conversamos com especialistas sobre como a inteligência artificial está reescrevendo as regras do marketing." },
  { id: 2, titulo: "Design Inclusivo na Prática", data: "08 Out 2025", duracao: "32 min", resumo: "Dicas práticas para tornar seus produtos digitais acessíveis para todos os públicos desde o dia um." },
  { id: 3, titulo: "Empreendedorismo Social: Do Zero ao Impacto", data: "01 Out 2025", duracao: "50 min", resumo: "Estudo de caso de uma startup que transformou uma comunidade local através da tecnologia." },
  { id: 4, titulo: "Carreira em Tech: Generalista vs Especialista", data: "24 Set 2025", duracao: "40 min", resumo: "Qual o melhor caminho para quem está começando? Analisamos o mercado atual." },
];

function Tela16_PodcastPrincipal() {
  return (
    <div className={styles.pageContainer}>
      <GlobalNav />

      <div className={styles.contentContainer}>
        
        {/* Cabeçalho do Podcast (Arte da Capa e Descrição) */}
        <header className={styles.podcastHeader}>
            <div className={styles.coverArt}>
                <span className={styles.coverText}>Engaj(ai)</span>
            </div>
            <div className={styles.headerInfo}>
                <h1 className="heading-1">Engaj(ai)</h1>
                <p className="heading-5" style={{color: 'var(--color-text-subtle)', fontWeight: '400'}}>
                    Conversas profundas sobre inovação, educação e impacto social.
                </p>
                <div className={styles.platforms}>
                    <span className={styles.platformTag}>Spotify</span>
                    <span className={styles.platformTag}>Apple Podcasts</span>
                    <span className={styles.platformTag}>Google</span>
                </div>
            </div>
        </header>

        {/* Lista de Episódios */}
        <section className={styles.episodesSection}>
            <h2 className="heading-2" style={{marginBottom: '24px'}}>Últimos Episódios</h2>
            
            <div className={styles.episodesList}>
                {episodios.map(ep => (
                    <CardEpisodio 
                        key={ep.id}
                        titulo={ep.titulo}
                        data={ep.data}
                        duracao={ep.duracao}
                        resumo={ep.resumo}
                        onClick={() => console.log(`Reproduzir ${ep.id}`)}
                    />
                ))}
            </div>
        </section>

      </div>
    </div>
  );
}

export default Tela16_PodcastPrincipal;