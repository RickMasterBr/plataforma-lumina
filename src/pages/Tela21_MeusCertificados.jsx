import React from "react";
import GlobalNav from "../components/organisms/GlobalNav";
import CardCertificado from "../components/organisms/CardCertificado";
import styles from "./Tela21_MeusCertificados.module.css";

function Tela21_MeusCertificados() {
  return (
    <div className={styles.pageContainer}>
      <GlobalNav />

      <div className={styles.galleryContainer}>
        {/* Título da Página */}
        <h2 className="heading-2" style={{ marginBottom: "24px" }}>
          Meus Certificados
        </h2>

        {/* Grade de Certificados */}
        <div className={styles.certificatesGrid}>
          {/* Instâncias de Exemplo */}
          <CardCertificado
            titulo="UX Design Fundamentals"
            dataEmissao="15 Out 2024"
          />
          <CardCertificado
            titulo="Marketing Digital para Startups"
            dataEmissao="02 Nov 2024"
          />
          <CardCertificado
            titulo="Gestão Ágil de Projetos"
            dataEmissao="10 Dez 2024"
          />
          <CardCertificado titulo="React Avançado" dataEmissao="20 Jan 2025" />
          {/* Adicione mais para testar o wrap */}
        </div>
      </div>
    </div>
  );
}

export default Tela21_MeusCertificados;
