import React from "react";
import SearchBar from "../components/molecules/SearchBar";
import CardProjeto from "../components/organisms/CardProjeto";
import Button from "../components/atoms/Button";
import styles from "./Tela13_MarketplaceProjetos.module.css";
import { useNavigate } from "react-router-dom";

// Dados Mockados
const projetos = [
  {
    id: 1,
    titulo: "Redesign do App de Delivery",
    resumo:
      "Buscamos designers para reformular a experiência de usuário do nosso app de entregas locais.",
    habilidades: ["UI/UX", "Figma", "Mobile"],
    equipe: ["Ana", "Beto"],
  },
  {
    id: 2,
    titulo: "Campanha de Marketing Social",
    resumo: "Criação de estratégia de mídia paga para ONG de proteção animal.",
    habilidades: ["Marketing", "Copywriting"],
    equipe: ["Carla"],
  },
  {
    id: 3,
    titulo: "Plataforma de E-commerce",
    resumo: "Desenvolvimento de front-end para loja de roupas sustentáveis.",
    habilidades: ["React", "CSS", "Frontend"],
    equipe: ["Diego", "Eliana", "Fabio"],
  },
  {
    id: 4,
    titulo: "Identidade Visual Startup",
    resumo:
      "Criação de logo e manual de marca para fintech em estágio inicial.",
    habilidades: ["Branding", "Illustrator"],
    equipe: ["Gustavo"],
  },
];

function Tela13_MarketplaceProjetos() {
  const navigate = useNavigate();
  return (
    <div className={styles.pageContainer}>
      <div className={styles.marketplaceContainer}>
        {/* --- COLUNA ESQUERDA: FILTROS --- */}
        <aside className={styles.filterColumn}>
          <h2 className="heading-3">Filtros</h2>

          <div className={styles.filterGroup}>
            <SearchBar placeholder="Buscar projetos..." />
          </div>

          {/* Filtros Específicos de Projeto */}
          <div className={styles.filterGroup}>
            <h4 className={styles.filterTitle}>Habilidades Necessárias</h4>
            <label className={styles.filterOption}>
              <input type="checkbox" /> UI/UX Design
            </label>
            <label className={styles.filterOption}>
              <input type="checkbox" /> Desenvolvimento Web
            </label>
            <label className={styles.filterOption}>
              <input type="checkbox" /> Marketing Digital
            </label>
            <label className={styles.filterOption}>
              <input type="checkbox" /> Gestão
            </label>
          </div>

          <div className={styles.filterGroup}>
            <h4 className={styles.filterTitle}>Estágio do Projeto</h4>
            <label className={styles.filterOption}>
              <input type="checkbox" /> Ideação
            </label>
            <label className={styles.filterOption}>
              <input type="checkbox" /> MVP (Protótipo)
            </label>
            <label className={styles.filterOption}>
              <input type="checkbox" /> Crescimento
            </label>
          </div>

          <div className={styles.filterGroup}>
            <h4 className={styles.filterTitle}>Compensação</h4>
            <label className={styles.filterOption}>
              <input type="checkbox" /> Voluntário (Pro Bono)
            </label>
            <label className={styles.filterOption}>
              <input type="checkbox" /> Remunerado
            </label>
            <label className={styles.filterOption}>
              <input type="checkbox" /> Permuta
            </label>
          </div>
        </aside>

        {/* --- COLUNA DIREITA: RESULTADOS --- */}
        <main className={styles.resultsColumn}>
          <div className={styles.resultsHeader}>
            <h1 className="heading-2">Projetos em Aberto</h1>
            <span
              className="body-small"
              style={{ color: "var(--color-text-subtle)" }}
            >
              Mostrando {projetos.length} projetos
            </span>
          </div>

          {/* Grade de Cards de Projeto */}
          {/* Botão de Criar Projeto no topo da lista */}
          <div style={{ marginBottom: "24px", textAlign: "right" }}>
            <Button onClick={() => navigate("/projects/create")}>
              + Novo Projeto
            </Button>
          </div>

          <div className={styles.projectsGrid}>
            {projetos.map((projeto) => (
              <div
                key={projeto.id}
                onClick={() => navigate(`/project/${projeto.id}`)}
              >
                <CardProjeto
                  titulo={projeto.titulo}
                  resumo={projeto.resumo}
                  habilidades={projeto.habilidades}
                  equipe={projeto.equipe}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Tela13_MarketplaceProjetos;
