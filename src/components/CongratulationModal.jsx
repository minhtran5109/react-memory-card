import React from 'react';
import '../styles/Modal.css'; // Optional CSS for styling

function CongratulationModal({ isVisible, onClose, highScore }) {
  if (!isVisible) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Congratulations!</h2>
        <p>You've catched all {highScore} pokemon!</p>
        <button onClick={onClose}>Play Again</button>
      </div>
    </div>
  );
}

export default CongratulationModal;
