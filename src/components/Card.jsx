import { useEffect, useState } from 'react'

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
  // const [pokeData, setPokeData] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function loadData() {
  //     const result = await fetchPokemon(pokeNumber);
  //     setPokeData(result);
  //     setLoading(false);
  //   }
  //   loadData();
  // }, [pokeNumber])

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // return (
  //   <div className="card">
  //     <img src={pokeData.img_src}></img>
  //     <span>{pokeData.name}</span>
  //     <pre>{JSON.stringify(pokeData, null, 2)}</pre>
  //   </div>
  // )

  return (
    <div onClick={() => onClick(pokeNumber)} style={{ cursor: 'pointer', padding: '10px', border: '1px solid black', margin: '5px' }}>
    {pokeNumber}
    </div>
  )

};

export default Card;
