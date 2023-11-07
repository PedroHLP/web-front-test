import React, { useState, useEffect } from 'react';
import '../Home.css'

export const Home = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const fetchPokemonData = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      if (response.ok) {
        const data = await response.json();
        setPokemonData(data);
      } else {
        setPokemonData(null);
      }
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };

  useEffect(() => {
    if (pokemonName) {
      fetchPokemonData();
    }
  }, [pokemonName]);

  return (
    <div>
      <h1>Pokémon Search</h1>
      <input
        type="text"
        placeholder="Procure um pokemon (Ex, pikachu)"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={fetchPokemonData}>Search</button>

      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img
            src={pokemonData.sprites.front_default}
            alt={`Sprite of ${pokemonData.name}`}
          />
        </div>
      )}
    </div>
  );
};
