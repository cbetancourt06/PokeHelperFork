// src/components/FavoritePokemonList.js
import React from 'react';

const FavoritePokemonList = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div>
      <h2>Favorite Pokemon</h2>
      <ul>
        {favorites.map(pokemon => (
          <li key={pokemon}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritePokemonList;
