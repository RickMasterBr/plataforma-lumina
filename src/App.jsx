import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/atoms/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Rotas de Autenticação
import Tela01_Login from "./pages/Tela01_Login";
import Tela01_1_RecuperarSenha from "./pages/Tela01_1_RecuperarSenha";
import Tela02_Cadastro from "./pages/Tela02_Cadastro";
import Tela03_Onboarding from "./pages/Tela03_Onboarding";
import Tela04_Interesses from "./pages/Tela04_Interesses";
import Tela32_Termos from "./pages/Tela32_Termos";
import Tela33_Privacidade from "./pages/Tela33_Privacidade";

// Rotas da Plataforma Principal
import Tela05_Dashboard from "./pages/Tela05_Dashboard";
import Tela06_Perfil from "./pages/Tela06_Perfil";
import Tela21_MeusCertificados from "./pages/Tela21_MeusCertificados";
import Tela22_MeuProgresso from "./pages/Tela22_MeuProgresso";
import Tela07_Configuracoes from "./pages/Tela07_Configuracoes";
import Tela07_1_Acessibilidade from "./pages/Tela07_1_Acessibilidade";
import Tela08_Timeline from "./pages/Tela08_Timeline";
import Tela09_DetalhePostagem from "./pages/Tela09_DetalhePostagem";
import Tela31_ResultadosBusca from "./pages/Tela31_ResultadosBusca";

// Aprendizado e Mentoria
import Tela10_CatalogoCursos from "./pages/Tela10_CatalogoCursos";
import Tela11_DetalhesCurso from "./pages/Tela11_DetalhesCurso";
import Tela12_PlayerCurso from "./pages/Tela12_PlayerCurso";
import Tela12_1_Simulador from "./pages/Tela12_1_Simulador";
import Tela23_ComunidadeMentoria from "./pages/Tela23_ComunidadeMentoria";
import Tela24_EventosWebinars from "./pages/Tela24_EventosWebinars";
import Tela16_PodcastPrincipal from "./pages/Tela16_PodcastPrincipal";
import Tela17_DetalheEpisodio from "./pages/Tela17_DetalheEpisodio";

// Projetos
import Tela13_MarketplaceProjetos from "./pages/Tela13_MarketplaceProjetos";
import Tela13_1_CriarProjeto from "./pages/Tela13_1_CriarProjeto";
import Tela14_DetalhesProjeto from "./pages/Tela14_DetalhesProjeto";
import Tela14_1_ModalAplicacao from "./pages/Tela14_1_ModalAplicacao";
import Tela14_2_Confirmacao from "./pages/Tela14_2_Confirmacao";
import Tela15_GerenciamentoProjeto from "./pages/Tela15_GerenciamentoProjeto";
import Tela15_1_Planejamento from "./pages/Tela15_1_Planejamento";
import Tela15_2_Discussao from "./pages/Tela15_2_Discussao";
import Tela25_ValidacaoPrototipos from "./pages/Tela25_ValidacaoPrototipos";

// Rotas Administrativas
import Tela18_AdminDashboard from "./pages/Tela18_AdminDashboard";
import Tela19_GerenciamentoUsuarios from "./pages/Tela19_GerenciamentoUsuarios";
import Tela20_FilaModeracao from "./pages/Tela20_FilaModeracao";
import Tela26_GerenciamentoTrilhas from "./pages/Tela26_GerenciamentoTrilhas";
import Tela27_GerenciamentoConteudo from "./pages/Tela27_GerenciamentoConteudo";
import Tela28_RelatoriosImpacto from "./pages/Tela28_RelatoriosImpacto";
import Tela29_MetricasBrandEquity from "./pages/Tela29_MetricasBrandEquity";
import Tela30_ExportacaoRelatorios from "./pages/Tela30_ExportacaoRelatorios";

// Geral
import TelaGeral01_Loading from "./pages/TelaGeral01_Loading";
import TelaGeral02_Erro404 from "./pages/TelaGeral02_Erro404";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* 1. Rotas Públicas/Autenticação */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Tela01_Login />} />
        <Route path="/recover-password" element={<Tela01_1_RecuperarSenha />} />
        <Route path="/register" element={<Tela02_Cadastro />} />
        <Route path="/onboarding" element={<Tela03_Onboarding />} />
        <Route path="/interests" element={<Tela04_Interesses />} />
        <Route path="/terms" element={<Tela32_Termos />} />
        <Route path="/privacy" element={<Tela33_Privacidade />} />

        {/* 2. Rotas da Plataforma Principal (Área do Usuário) */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Tela05_Dashboard />} />
          <Route path="/profile" element={<Tela06_Perfil />} />
          <Route path="/profile/certificates" element={<Tela21_MeusCertificados />} />
          <Route path="/profile/progress" element={<Tela22_MeuProgresso />} />
          <Route path="/settings" element={<Tela07_Configuracoes />} />
          <Route path="/settings/accessibility" element={<Tela07_1_Acessibilidade />} />
          <Route path="/timeline" element={<Tela08_Timeline />} />
          <Route path="/post/:id" element={<Tela09_DetalhePostagem />} />
          <Route path="/search" element={<Tela31_ResultadosBusca />} />

          {/* 3. Aprendizado e Mentoria */}
          <Route path="/courses" element={<Tela10_CatalogoCursos />} />
          <Route path="/course/:id" element={<Tela11_DetalhesCurso />} />
          <Route path="/course/:id/play" element={<Tela12_PlayerCurso />} />
          <Route path="/course/:id/simulator" element={<Tela12_1_Simulador />} />
          <Route path="/mentorship" element={<Tela23_ComunidadeMentoria />} />
          <Route path="/events" element={<Tela24_EventosWebinars />} />
          <Route path="/podcast" element={<Tela16_PodcastPrincipal />} />
          <Route path="/podcast/:id" element={<Tela17_DetalheEpisodio />} />

          {/* 4. Projetos */}
          <Route path="/projects" element={<Tela13_MarketplaceProjetos />} />
          <Route path="/projects/create" element={<Tela13_1_CriarProjeto />} />
          <Route path="/project/:id" element={<Tela14_DetalhesProjeto />} />
          <Route path="/project/:id/apply" element={<Tela14_1_ModalAplicacao />} />
          <Route path="/project/:id/confirm" element={<Tela14_2_Confirmacao />} />
          <Route path="/project/:id/manage" element={<Tela15_GerenciamentoProjeto />} />
          <Route path="/project/:id/manage/planning" element={<Tela15_1_Planejamento />} />
          <Route path="/project/:id/manage/discussion" element={<Tela15_2_Discussao />} />
          <Route path="/project/:id/validation" element={<Tela25_ValidacaoPrototipos />} />
        </Route>

        {/* 5. Rotas Administrativas */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Tela18_AdminDashboard />} />
          <Route path="users" element={<Tela19_GerenciamentoUsuarios />} />
          <Route path="moderation" element={<Tela20_FilaModeracao />} />
          <Route path="tracks" element={<Tela26_GerenciamentoTrilhas />} />
          <Route path="content" element={<Tela27_GerenciamentoConteudo />} />
          <Route path="reports" element={<Tela28_RelatoriosImpacto />} />
          <Route path="brand" element={<Tela29_MetricasBrandEquity />} />
          <Route path="export" element={<Tela30_ExportacaoRelatorios />} />
        </Route>

        {/* 6. Geral */}
        <Route path="*" element={<TelaGeral02_Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
