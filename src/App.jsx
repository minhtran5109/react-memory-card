import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card';

const DEFAULT_POKES = [131,132,133,134,135];

// function randomIndex(max) {
//   return Math.floor(Math.random() * max);
// }

function shuffleArray(array) {
  const newArray = array.slice(); // Create a copy of the original array
  for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }
  return newArray;
}

const Item = ({ number, onClick }) => (
  <div onClick={() => onClick(number)} style={{ cursor: 'pointer', padding: '10px', border: '1px solid black', margin: '5px' }}>
    {number}
  </div>
);

const ItemList = ({ numbers , increaseCount, resetCount}) => {
  const [shuffledNumbers, setShuffledNumbers] = useState(numbers);
  const [clickedNumber, setClickedNumber] = useState(null);
  const [isSameAsLastClick, setIsSameAsLastClick] = useState(false); //Will I actually need this?

  const handleItemClick = (number) => {
    if (clickedNumber !== number) {
      setIsSameAsLastClick(false);
      increaseCount();
    } else {
      setIsSameAsLastClick(true);
      resetCount();
    }
    setClickedNumber(number);
    setShuffledNumbers(shuffleArray(shuffledNumbers));
  };

  return (
    <div>
      {shuffledNumbers.map((number, index) => (
        <Item key={index} number={number} onClick={handleItemClick} />
      ))}
      {clickedNumber !== null && <p>You clicked on: {clickedNumber}</p>}
      {isSameAsLastClick && <p>The clicked number is the same as the last one!</p>}
    </div>
  );
};

function App() {
  // const index = randomIndex(pokeList.length);
  // const pokeNumber = pokeList[index];
  const [pokeList, setPokeList] = useState(DEFAULT_POKES);
  const [count, setCount] = useState(0);
  

  // console.log(pokeList)
  function handleIncreaseCount() {
    const newCount = count + 1;
    setCount(newCount);
  }

  return (
    <>
      <h1>A game of memory</h1>
      <ItemList numbers={DEFAULT_POKES} increaseCount={handleIncreaseCount} resetCount={() => setCount(0)}/>
      <div>{count}</div>
    </>
  )
}

export default App

//Maybe not comparing to previous number but comparing to a list of clicked numbers instead
