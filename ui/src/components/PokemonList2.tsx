// src/components/PokemonList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PokemonList2 = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // Fetch Pokemon list from API
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => setPokemonList(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList2;
