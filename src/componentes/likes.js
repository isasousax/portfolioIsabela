// Likes.js
import React, { useState } from 'react';

export function Likes() {
  const [likes, setLikes] = useState(0); // Estado para armazenar a contagem de likes

  // Função para incrementar os likes
  const adicionarLike = () => {
    setLikes(likes + 1); // Incrementa a contagem de likes
  };

  return (
    <div className="likes-container">
     {/* Botão para adicionar um like */}
     <h2>Você gostou do meu projeto?</h2>
      <button className="like-button" onClick={adicionarLike}>
        👍 Adicionar Like
      </button>
      <h3>Likes: {likes}</h3> {/* Exibe a contagem de likes */}
    </div>
  );
}

export default Likes;
