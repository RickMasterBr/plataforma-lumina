import React from 'react';
import styles from './Comentario.module.css';

// O componente 'Comentario' é aninhável, ou seja, pode conter uma lista de outros comentários (respostas)
function Comentario({ autor, tempo, conteudo, respostas = [] }) {
  
  // Para renderizar o Comentário de Resposta dentro da Área de Respostas.
  // IMPORTANTE: Se o seu arquivo Comentario.jsx for renderizado antes, você pode precisar 
  // mudar a importação para ser 'const Comentario = ({...}) => {...}' no lugar do export default.
  // Por simplicidade, assumimos que ele está importando a si mesmo corretamente ou que você fará a importação do Comentario dentro dele mesmo.
  const NestedComentario = Comentario; 

  return (
    <div className={styles.commentContainer}>
      
      {/* 1. Conteúdo Principal do Comentário */}
      <div className={styles.mainContent}>
        <div className={styles.avatar}>
          {autor ? autor.charAt(0) : 'U'}
        </div>
        
        <div className={styles.body}>
          <p className={styles.authorName}>{autor}</p>
          <p className={styles.text}>{conteudo}</p>
          
          {/* Ações e Metadata */}
          <div className={styles.actions}>
            <span className={styles.time}>{tempo}</span>
            <button className={styles.actionBtn}>Curtir</button>
            <button className={styles.actionBtn}>Responder</button>
          </div>
        </div>
      </div>

      {/* 2. Área de Respostas (para aninhamento) */}
      {respostas.length > 0 && (
        <div className={styles.repliesArea}>
          {respostas.map((resposta, index) => (
            // Recursivamente renderiza o próprio componente Comentario para as respostas
            <NestedComentario 
              key={index} 
              autor={resposta.autor}
              tempo={resposta.tempo}
              conteudo={resposta.conteudo}
              respostas={resposta.respostas} // Suporta mais um nível de aninhamento se necessário
            />
          ))}
        </div>
      )}
      
    </div>
  );
}

export default Comentario;