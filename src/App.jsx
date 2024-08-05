import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card';

// const BASED_API = "https://pokeapi.co/api/v2/pokemon-form"

// async function fetchPokemon(pokeNumber) {
//   const response = await fetch(`${BASED_API}/${pokeNumber}`)
//   const pokeData = await response.json();
//   // console.log(pokeData);
//   return new Promise((resolve) => {
//     resolve({
//       name: pokeData.name,
//       img_src: pokeData.sprites.front_default,
//     });
//   });
//   // return pokeData;
// }

function App() {
  const example = 132;
  return (
    <>
      <h1>A game of memory</h1>
      <Card pokeNumber={example}/>
    </>
  )
}

export default App
