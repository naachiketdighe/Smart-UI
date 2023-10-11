import React, { useState, useEffect } from 'react';

function HorizontalScrollBar() {
  const [scrollValue, setScrollValue] = useState(0);

  // Function to handle the scroll event and update the scroll value
  const handleScroll = (e) => {
    const maxScroll = e.target.scrollWidth - e.target.clientWidth;
    const currentValue = (e.target.scrollLeft / maxScroll) * 100;
    setScrollValue(currentValue);
  };

  // Function to handle the scroll value change
  const handleScrollValueChange = (e) => {
    setScrollValue(e.target.value);
    const maxScroll = e.target.parentElement.scrollWidth - e.target.parentElement.clientWidth;
    const newScrollLeft = (e.target.value / 100) * maxScroll;
    e.target.parentElement.scrollLeft = newScrollLeft;
  };

  useEffect(() => {
    // Set the initial scroll value to 0
    setScrollValue(0);
  }, []);

  return (
    <div className="horizontal-scroll-container" onScroll={handleScroll}>
      <input
        type="range"
        min="0"
        max="100"
        value={scrollValue}
        onChange={handleScrollValueChange}
        className="scroll-bar"
        orient="horizontal"
      />
    </div>
  );
}

export default HorizontalScrollBar;
