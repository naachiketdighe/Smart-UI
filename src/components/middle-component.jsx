import Sammy from "../assets/timer.webp";
import Settings from "../assets/settings.jpeg";
import calmApp from "../assets/calmapp.jpg";
import canvas from "../assets/canvas.png";
import notes from "../assets/notes.png";
import safari from "../assets/safari.png";
import React, { useState } from 'react';

function Message() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
    console.log('Popup toggled');
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="center-container">
      <div className="container">
        <div className="app-icon-container">
          <div className="app-icon">
            <img src={Sammy} alt="App Icon" />
            <span className="app-label">Sammy App</span>
          </div>
          <div className="app-icon">
            <img src={calmApp} alt="App Icon" />
          </div>
          <div className="app-icon">
            <img src={Settings} alt="App Icon" />
          </div>
        </div>

        <div className="app-icon-container">
          <div className="app-icon">
            <img src={canvas} alt="App Icon" />
          </div>
          <div className="app-icon">
            <img src={notes} alt="App Icon" />
          </div>
          <div className="app-icon">
            <img src={safari} alt="App Icon" />
          </div>
        </div>

        {/* Popup */}
        {isPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <h2>Popup Content for Sammy App</h2>
              <p className="clock">{getCurrentTime()}</p>
              <button onClick={togglePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Message;
