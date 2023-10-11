import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const initialTime = 1200; // 20 minutes in seconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    // Update the timer every second
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        // Reset the timer when it hits 20 minutes
        if (prevTime === 0) {
          // Display a notification when the timer runs out
          if ('Notification' in window) {
            Notification.requestPermission().then((permission) => {
              if (permission === 'granted') {
                new Notification('Time to take a break!', {
                  body: 'Remember to stretch and relax for a while.',
                });
              }
            });
          }
          // Reset the timer to 20 minutes (1200 seconds)
          return initialTime;
        }
        // Decrement the time remaining by 1 second
        return prevTime - 1;
      });
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // Convert seconds to minutes and seconds for display
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div>
      <p>
        Remember to take a break in: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
}

export default CountdownTimer;
