import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import api from '../lib/http';

function PokemonCard(props) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // On Mount get the pokemon data
  useEffect(() => {
    api.get(props.url).then((response) => {
      setPokemon(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div
      className='p-10 bg-blueDark text-white m-5 rounded-md cursor-pointer w-max'
      onClick={() => navigate(props.url)}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <a href={props.url}>
          <div className='flex flex-col items-center '>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p className='capitalize font-bold '>{pokemon.name}</p>
          </div>
        </a>
      )}
    </div>
  );
}

export default PokemonCard;
