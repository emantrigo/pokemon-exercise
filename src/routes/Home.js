import React, { useState, useEffect } from 'react';
import api from '../lib/http';

import PokemonCard from '../components/PokemonCard';

import '../index.css';

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  // On Mount and every "offset" update get the list of pokemons from the API
  useEffect(() => {
    setLoading(true);
    api.get(`pokemon?offset=${offset}&limit=${limit}`).then((response) => {
      console.log(response);
      console.log('activou');
      setPokemons(response.data.results);
      setLoading(false);
    });
  }, [, offset]);

  return (
    <>
      <div className='p-10'>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className='m-0 flex  items-center flex-wrap justify-center'>
              {pokemons.map((pokemon) => (
                <PokemonCard
                  url={pokemon.url.split('v2')[1]}
                  key={pokemon.url}
                />
              ))}
            </div>

            <div className='flex gap-4 items-center justify-center'>
              {offset !== 0 && (
                <button
                  className='bg-blueDark p-2 rounded border-yellowLight border-4 text-white'
                  onClick={() => setOffset(offset - limit)}>
                  Previous
                </button>
              )}
              <button
                className='bg-blueDark p-2 rounded border-yellowLight border-4 text-white'
                onClick={() => setOffset(offset + limit)}>
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
