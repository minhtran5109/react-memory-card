import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card';
import CongratulationModal from './components/CongratulationModal';

const DEFAULT_POKES = [131,132,133,134,135,136];

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
  const [clickedRecord, setClickedRecord] = useState([]);

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

function App() {
  const [count, setCount] = useState(0);
  const [highScore, setHighScore] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const targetScore = DEFAULT_POKES.length;
  
  useEffect(() => {
    const savedHighScore = parseInt(localStorage.getItem("highScore"), 10) || 0;
    setHighScore(savedHighScore);
  }, [])

  useEffect(() => {
    if (count > highScore) {
      setHighScore(count);
      // localStorage.setItem('highScore', count);

      if (count === targetScore) {
        setShowModal(true);
      }
    }
  }, [count, highScore])

  function handleIncreaseCount() {
    const newCount = count + 1;
    setCount(newCount);
  }

  function closeModal() {
    setShowModal(false);
    window.location.reload();
  }

  return (
    <>
      <h1>A game of memory</h1>
      <ItemList numbers={DEFAULT_POKES} increaseCount={handleIncreaseCount} resetCount={() => setCount(0)}/>
      <div>Score: {count} / {targetScore}</div>
      <div>Highest score: {highScore}</div>
      
      <CongratulationModal
        isVisible={showModal}
        onClose={closeModal}
        highScore={highScore}
      />
    </>
  )
}

export default App
