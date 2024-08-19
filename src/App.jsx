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
  // const targetScore = 2;

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
    <div className='container'>
      <div className="main-section">
        <img src={pokeLogo} alt='Pokemon Logo' id='main-logo'/>
        <h1>A game of memory</h1>
        <div className='score-section'>
          <div>Score: {count} / {targetScore}</div>
          <div>Highest score: {highScore}</div>
        </div>
        <PokeList numbers={DEFAULT_POKES} increaseCount={handleIncreaseCount} resetCount={() => setCount(0)}/>
        <div id='tutorial'>
          <p><b>How to play:</b> At every turn, try to pick a unique pokemon that you have not picked before.</p>
          <p>Good luck catching them all!</p>
        </div>
      </div>

      <CongratulationModal
        isVisible={showModal}
        onClose={closeModal}
        highScore={highScore}
      />
      <footer>
        <p>Created by <a href='https://github.com/minhtran5109/react-memory-card'>Van Minh Tran</a>. Pokémon API created by Paul Hallet and other contributors from <a href="https://github.com/PokeAPI/pokeapi">PokéAPI</a>. Pokémon and Pokémon logo are trademarks of Nintendo.</p>
      </footer>
    </div>
  )
}

export default App
