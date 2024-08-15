import { useEffect, useState } from 'react'
import './App.css'
import CongratulationModal from './components/CongratulationModal';
import PokeList from './components/PokeList';
import pokeLogo from './assets/logo.png'

const DEFAULT_POKES = [9,31,55,73,130,131,132,134,148,62,320,376];

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
      <img src={pokeLogo} alt='Pokemon Logo' id='main-logo'/>
      <h1>A game of memory</h1>

      <div>Score: {count} / {targetScore}</div>
      <div>Highest score: {highScore}</div>

      <PokeList numbers={DEFAULT_POKES} increaseCount={handleIncreaseCount} resetCount={() => setCount(0)}/>

      <div id='tutorial'>How to play: At every turn, try to pick a unique pokemon that you have not picked before. Good luck catching them all!</div>

      <CongratulationModal
        isVisible={showModal}
        onClose={closeModal}
        highScore={highScore}
      />
    </>
  )
}

export default App
