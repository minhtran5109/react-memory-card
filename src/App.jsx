import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const BASED_API = "https://pokeapi.co/api/v2/pokemon-form"

async function fetchPokemon(pokeNumber) {
  const response = await fetch(`${BASED_API}/${pokeNumber}`)
  const pokeData = await response.json();
  // console.log(pokeData);
  return new Promise((resolve) => {
    resolve({
      name: pokeData.name,
      img_src: pokeData.sprites.front_default,
    });
  });
  // return pokeData;
}

function App() {
  const [pokeData, setPokeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const result = await fetchPokemon(132);
      setPokeData(result);
      setLoading(false);
    }
    loadData();
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>A game of memory</h1>
      <div className="card">
        <img src={pokeData.img_src}></img>
        <span>{pokeData.name}</span>
        <pre>{JSON.stringify(pokeData, null, 2)}</pre>
      </div>
    </>
  )
}

export default App
