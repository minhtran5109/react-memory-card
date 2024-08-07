import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card';

const pokeList = [131,132,133,134,135];

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const index = randomIndex(pokeList.length);
  const pokeNumber = pokeList[index];
  return (
    <>
      <h1>A game of memory</h1>
      <Card pokeNumber={pokeNumber}/>
    </>
  )
}

export default App
