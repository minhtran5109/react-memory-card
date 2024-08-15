import { useEffect, useState } from 'react'
import './App.css'
import CongratulationModal from './components/CongratulationModal';
import PokeList from './components/PokeList';

const DEFAULT_POKES = [131,132,133,134,135,136];

function App() {
  const [count, setCount] = useState(0);
  const [highScore, setHighScore] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const targetScore = DEFAULT_POKES.length;

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

      <div>Score: {count} / {targetScore}</div>
      <div>Highest score: {highScore}</div>

      <PokeList numbers={DEFAULT_POKES} increaseCount={handleIncreaseCount} resetCount={() => setCount(0)}/>

      <CongratulationModal
        isVisible={showModal}
        onClose={closeModal}
        highScore={highScore}
      />
    </>
  )
}

export default App
