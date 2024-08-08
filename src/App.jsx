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



const ItemList = ({ numbers , increaseCount, resetCount}) => {
  const [shuffledNumbers, setShuffledNumbers] = useState(numbers);
  const [clickedNumber, setClickedNumber] = useState(null);  //Will I eventually still need this?

  const [clickedRecord, setClickedRecord] = useState([]);

  const handleItemClick = (number) => {
    // if (clickedNumber !== number) {
    //   setIsSameAsLastClick(false);
    //   increaseCount();
    // } else {
    //   setIsSameAsLastClick(true);
    //   resetCount();
    // }
    if (!clickedRecord.includes(number)) {
      increaseCount();
      const newRecord = [...clickedRecord, number];
      setClickedRecord(newRecord);
    } else {
      resetCount();
      setClickedRecord([]);
    }
    setClickedNumber(number);
    setShuffledNumbers(shuffleArray(shuffledNumbers));
  };

  useEffect(() => {
    if(clickedRecord.length === DEFAULT_POKES.length) {
      console.log('finished');
      window.alert("You won! Congratulations!\nThe Game will now reset.");
      window.location.reload();
    }
  }, [clickedRecord]);

  return (
    <div>
      {shuffledNumbers.map((number, index) => (
        <Card key={index} pokeNumber={number} onClick={handleItemClick} />
      ))}
      {clickedNumber !== null && <p>You clicked on: {clickedNumber}</p>}
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
