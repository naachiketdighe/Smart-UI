import React, { useState } from 'react';

function RightComponent() {
  const [sliderValue, setSliderValue] = useState(50); // Initialize the slider value to 50

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="right-component">
      <input
        type="range"
        min="1"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="slider"
      />
      <p>{sliderValue}</p>
    </div>
  );
}

export default RightComponent;
