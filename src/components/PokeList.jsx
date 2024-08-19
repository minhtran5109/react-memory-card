import { useEffect, useState } from 'react'
import Card from './Card';

// Shuffle and return a new array with shuffled elements
function shuffleArray(array) {
  const newArray = array.slice(); // Create a copy of the original array
  for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }
  return newArray;
}

const PokeList = ({ numbers , increaseCount, resetCount}) => {
  const [shuffledNumbers, setShuffledNumbers] = useState(numbers);
  const [clickedRecord, setClickedRecord] = useState([]);

  useEffect(() => {
    setShuffledNumbers(shuffleArray(shuffledNumbers));
  }, [])

  const handleItemClick = (number) => {
    if (!clickedRecord.includes(number)) {
      increaseCount();
      const newRecord = [...clickedRecord, number];
      setClickedRecord(newRecord);
    } else {
      resetCount();
      setClickedRecord([]);
    }
    setShuffledNumbers(shuffleArray(shuffledNumbers));
  };

  return (
    <div className='item-list'>
      {shuffledNumbers.map((number, index) => (
        <Card key={index} pokeNumber={number} onClick={handleItemClick} />
      ))}
    </div>
  );
};

export default PokeList;
