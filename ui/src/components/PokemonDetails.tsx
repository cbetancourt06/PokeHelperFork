// src/components/PokemonDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import currentUserIdAtom from '@/atoms/currentUserId.atom.ts';
import favoritesState from '@/atoms/favoritesState.atom';

const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const user = useRecoilValue(currentUserIdAtom);
  const favorites = useRecoilValue(favoritesState);

  useEffect(() => {
    // Fetch Pokemon details from API
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => setPokemonDetails(response.data))
      .catch(error => console.error(error));
  }, [pokemonName]);

  const handleFavorite = () => {
    // if (!user) {
    //     console.log('User not logged in. Cannot add to favorites.');
    //     return;
    //   }

    if (favorites.includes(pokemonDetails.name)) {
        console.log(`${pokemonDetails.name} is already in favorites.`);
        return;
      }

    addToFavorites(pokemonDetails.name);

    console.log(`${pokemonDetails.name} added to favorites by ${user.username}`);
  };

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full justify-center text-center">
      <h1>{pokemonDetails.name}</h1>
      <div className="w-full justify-center text-center">
        <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      </div>
      
      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
      {user && (
        <button onClick={handleFavorite}>Add to Favorites</button>
      )}
    </div>
  );
};

export default PokemonDetails;
