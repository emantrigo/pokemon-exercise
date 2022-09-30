import React, { useState, useEffect } from 'react';

import { Routes, Route, useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import api from '../lib/http';

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  // Handle the click on the favorite button
  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.includes(id)) {
      const newFavorites = favorites.filter((favorite) => favorite !== id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setFavorite(false);
    } else {
      localStorage.setItem('favorites', JSON.stringify([...favorites, id]));
      setFavorite(true);
    }
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.includes(id)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, []);

  useEffect(() => {
    api
      .get(`/pokemon/${id}`)
      .then((response) => {
        console.log('pokemon res', response);
        setPokemon(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('pokemon error', error);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='flex items-center justify-center p-5'>
      <div className='bg-blueDark w-max  p-5 px-20 m-5 rounded text-white flex flex-col  justify-between'>
        <h1 className='capitalize text-5xl text-center text-yellowLight'>
          {pokemon.name}
        </h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />

        <div className='flex'>
          <div>
            <p>
              <span className='font-bold'>ID: </span>
              {pokemon.id}
            </p>
            <p>
              <span className='font-bold'>Height: </span>
              {pokemon.height}
            </p>
            <p>
              <span className='font-bold'>Weight: </span>
              {pokemon.weight}
            </p>

            <p className='font-bold'>Stats:</p>
            {pokemon.stats.map((stat, idx) => (
              <p className='ml-5 capitalize' key={idx}>
                - {stat.stat.name}: {stat.base_stat}
              </p>
            ))}
          </div>
          <div>
            <p className='font-bold'>Abilities:</p>
            {pokemon.abilities.map((ability, idx) => (
              <p className='ml-5 capitalize' key={idx}>
                - {ability.ability.name}
              </p>
            ))}
            <p className='font-bold'>Types:</p>
            {pokemon.types.map((type, idx) => (
              <p className='ml-5 capitalize' key={idx}>
                - {type.type.name}
              </p>
            ))}
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <button
            className={`text-white   p-2 rounded my-5 ${
              favorite ? 'bg-red-500 font-bold' : 'bg-slate-300  font-bold'
            }`}
            onClick={() => handleFavorite()}>
            {favorite ? 'Favorite ❤️' : 'Add to favorites'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
