import React, { useState, useEffect } from 'react';

function Canvas({ onClose }) {
  return (
    <div className="Canvas">
      <div className="Canvas-content">
        {/* Add your Canvas content here */}
        <h2>Canvas Content</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Canvas;
