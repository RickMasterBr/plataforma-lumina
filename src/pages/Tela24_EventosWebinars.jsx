import React from "react";
import Button from "../components/atoms/Button";
import CardEvento from "../components/organisms/CardEvento";
import styles from "./Tela24_EventosWebinars.module.css";

// Dados Mockados de Eventos
const eventos = [
  {
    id: 1,
    data: "SEX, 15 DE NOV • 19:00",
    titulo: "Workshop: Design System na Prática",
    descricao:
      "Aprenda a criar e manter um Design System escalável utilizando Figma e React com tokens de design.",
    imagemUrl: null, // Placeholder
  },
  {
    id: 2,
    data: "QUA, 20 DE NOV • 18:30",
    titulo: "Webinar: O Futuro das EdTechs",
    descricao:
      "Um debate com líderes do mercado sobre as tendências de educação e tecnologia para 2026.",
    imagemUrl: null,
  },
  {
    id: 3,
    data: "SÁB, 23 DE NOV • 10:00",
    titulo: "Hackathon Social Lúmina",
    descricao:
      "Um dia inteiro de codificação para resolver problemas reais de ONGs parceiras. Prêmios para as melhores soluções.",
    imagemUrl: null,
  },
];

function Tela24_EventosWebinars() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.eventsContainer}>
        {/* Cabeçalho e Filtros */}
        <header className={styles.header}>
          <h2 className="heading-2">Eventos e Webinars</h2>

          <div className={styles.filters}>
            <Button tipo="primario">Próximos</Button>
            <Button tipo="secundario">Eventos Passados</Button>
          </div>
        </header>

        {/* Lista de Eventos */}
        <div className={styles.eventsList}>
          {eventos.map((evento) => (
            <CardEvento
              key={evento.id}
              data={evento.data}
              titulo={evento.titulo}
              descricao={evento.descricao}
              imagemUrl={evento.imagemUrl}
              onInscrever={() => alert(`Inscrito no evento: ${evento.titulo}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tela24_EventosWebinars;
