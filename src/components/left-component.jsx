import React from 'react';
import charging from '../assets/charging.jpeg';
import applewatch from '../assets/applewatch.jpeg';
import airpods from '../assets/airpods.jpeg';

function LeftComponent() {
  return (
    <div className="left-component">
      <div className="app-icons">
        <div className="app-icon">
          <img src={charging} alt="App Icon 1" />
          <span className="app-label">App 1</span>
        </div>
        <div className="app-icon">
          <img src={applewatch} alt="App Icon 2" />
          <span className="app-label">App 2</span>
        </div>
        <div className="app-icon">
          <img src={airpods} alt="App Icon 3" />
          <span className="app-label">App 3</span>
        </div>
      </div>
    </div>
  );
}

export default LeftComponent;
