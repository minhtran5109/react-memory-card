import React from 'react';
import '../styles/Modal.css'; // Optional CSS for styling

function CongratulationModal({ isVisible, onClose, highScore }) {
  if (!isVisible) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Congratulations!</h2>
        <p>You've reached a new high score of {highScore}!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CongratulationModal;
