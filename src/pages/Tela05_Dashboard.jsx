import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Tela05_Dashboard.module.css";

function Tela05_Dashboard() {
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentGrid}>
        <main className={styles.mainColumn}>
          <header className={styles.welcomeHeader}>
            <h1 className="heading-1">Olá, Estudante! 👋</h1>
            <p
              className="body-default"
              style={{ color: "var(--color-text-subtle)" }}
            >
              Que bom te ver de novo. Vamos continuar aprendendo?
            </p>
          </header>

          {/* Card de Continuidade -> Vai para o Player */}
          <section className={styles.section}>
            <h3 className="heading-3">Continue de Onde Parou</h3>
            <div
              className={styles.placeholderCard}
              onClick={() => navigate("/course/1/play")}
              style={{ cursor: "pointer" }}
            >
              <p>▶ Aula 2: Pesquisa com Usuários (Clique para continuar)</p>
            </div>
          </section>

          <section className={styles.section}>
            <h3 className="heading-3">Meus Cursos</h3>
            <div className={styles.horizontalScroll}>
              {/* Cards clicáveis */}
              <div
                className={styles.miniCard}
                onClick={() => navigate("/course/1/play")}
                style={{ cursor: "pointer" }}
              >
                UX Design
              </div>
              <div
                className={styles.miniCard}
                onClick={() => navigate("/course/2/play")}
                style={{ cursor: "pointer" }}
              >
                Marketing
              </div>
              <div className={styles.miniCard}>...</div>
            </div>
          </section>

          {/* Meus Projetos */}
          <section className={styles.section}>
            <h3 className="heading-3">Meus Projetos</h3>
            <div className={styles.horizontalScroll}>
              <div
                className={styles.miniCard}
                onClick={() => navigate("/project/1/manage")}
                style={{ cursor: "pointer" }}
              >
                Redesign App
              </div>
            </div>
          </section>
        </main>

        <aside className={styles.sideColumn}>
          <div className={styles.widgetCard}>
            <h4 className="heading-3" style={{ fontSize: "18px" }}>
              Atalhos
            </h4>
            <ul
              style={{
                paddingLeft: "20px",
                marginTop: "12px",
                color: "var(--color-interactive-accent)",
                cursor: "pointer",
              }}
            >
              <li onClick={() => navigate("/profile")}>Meu Perfil</li>
              <li onClick={() => navigate("/profile/certificates")}>
                Meus Certificados
              </li>
              <li onClick={() => navigate("/profile/progress")}>Ver Progresso</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Tela05_Dashboard;
