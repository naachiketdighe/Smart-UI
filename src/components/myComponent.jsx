// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString();

//   // Calculate the current time + 12 hours
//   const twelveHoursLater = new Date(currentTime);
//   twelveHoursLater.setHours(twelveHoursLater.getHours() + 12);
//   const formattedTwelveHoursLater = twelveHoursLater.toLocaleTimeString();

//   return (
//     <p>UI/UX Homework due in {formattedTwelveHoursLater}</p>
//   );
// }

// export default MyComponent;

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [remainingTime, setRemainingTime] = useState(12 * 60 * 60); // 12 hours in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Convert remaining time to hours, minutes, and seconds
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  return (
    <p>
      UI/UX Homework due in {hours} hours, {minutes} minutes 
    </p>
  );
}

export default MyComponent;

