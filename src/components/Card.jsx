import { useEffect, useState } from 'react'
import '../styles/memGame.css'

const BASED_API = "https://pokeapi.co/api/v2/pokemon-form"

async function fetchPokemon(pokeNumber) {
  const response = await fetch(`${BASED_API}/${pokeNumber}`)
  const pokeData = await response.json();
  return new Promise((resolve) => {
    resolve({
      name: pokeData.name,
      img_src: pokeData.sprites.front_default,
    });
  });
}

function Card({pokeNumber, onClick}) {
  const [pokeData, setPokeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const result = await fetchPokemon(pokeNumber);
      setPokeData(result);
      setLoading(false);
    }
    loadData();
  }, [pokeNumber])

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div onClick={() => onClick(pokeNumber)} className='card'>
      <img src={pokeData.img_src}></img>
    </div>
  )

};

export default Card;
