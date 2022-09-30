import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PokemonCard from '../components/PokemonCard';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // On Mount get the list of favorites from localStorage
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];

    setFavorites(favs);
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='m-0 flex  items-center flex-wrap justify-center'>
      {favorites.map((favorite) => (
        <PokemonCard url={`/pokemon/${favorite}`} />
      ))}
    </div>
  );
}

export default Favorites;
