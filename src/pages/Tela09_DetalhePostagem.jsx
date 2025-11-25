import React from 'react';
import { useParams } from 'react-router-dom';
import Postagem from '../components/organisms/Postagem';
import CompositorComentario from '../components/organisms/CompositorComentario';
import Comentario from '../components/organisms/Comentario';
import styles from './Tela09_DetalhePostagem.module.css';

// Simulação de dados para aninhamento
const dadosComentarios = [
  {
    autor: "Pedro Lucas",
    tempo: "1h atrás",
    conteudo: "Ótima questão, João! Recomendo começar pelo curso de Design System que a Lúmina lançou. Ele aborda o uso do Figma/Tokens de forma excelente.",
    respostas: [
      {
        autor: "Carla Mendes",
        tempo: "30min atrás",
        conteudo: "Concordo! A parte de variáveis e Auto Layout é o essencial para a escalabilidade.",
        respostas: []
      },
    ]
  },
  {
    autor: "Admin Lúmina",
    tempo: "15min atrás",
    conteudo: "Lembrem-se que o modo escuro tem cores específicas para acessibilidade (WCAG). Verifiquem o contraste!",
    respostas: []
  },
];


function Tela09_DetalhePostagem() {
  const { id } = useParams();
  console.log("Visualizando postagem ID:", id);

  // Dados da postagem original (que o usuário clicou)
  const postagemOriginal = {
    autor: "João Silva",
    tempo: "5h atrás",
    conteudo: "Alguém aqui já trabalhou com Design Systems no Figma? Estou com uma dúvida sobre como organizar as variáveis de cor para o modo escuro. Alguma dica?",
    likes: 12,
    comentarios: 8,
  };

  return (
    <div className={styles.pageContainer}>

      <div className={styles.detailContainer}>

        {/* Coluna Focada (Centralizada) */}
        <div className={styles.focoColumn}>

          {/* 1. Postagem Principal no Topo */}
          <Postagem
            autor={postagemOriginal.autor}
            tempo={postagemOriginal.tempo}
            conteudo={postagemOriginal.conteudo}
            likes={postagemOriginal.likes}
            comentarios={postagemOriginal.comentarios}
          />

          {/* 2. Compositor de Comentário */}
          <CompositorComentario
            avatarChar="N"
            placeholder="Responder à postagem..."
          />

          {/* 3. Lista de Comentários Aninhados */}
          <h3 className="heading-4" style={{ marginTop: '16px' }}>Comentários ({postagemOriginal.comentarios})</h3>

          <div className={styles.commentsList}>
            {dadosComentarios.map((comentario, index) => (
              <Comentario
                key={index}
                autor={comentario.autor}
                tempo={comentario.tempo}
                conteudo={comentario.conteudo}
                respostas={comentario.respostas}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Tela09_DetalhePostagem;