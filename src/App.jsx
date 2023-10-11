// import './App.css'
// import React, { Component } from 'react';
// import LeftComponent from './components/left-component';
// import RightComponent from './components/right-Component'; // Assuming this is the correct path

// function App() {
//   return (
//     <div className="main-container">
//       <LeftComponent />
//       <RightComponent />
//     </div>
//   );
// }

// export default App

import './App.css'
// import Message from './components/Message';
// import LeftVertical from './components/LeftVertical';
// import RightVertical from './components/RightVertical';
import TopHorizontal from './components/TopHorizontal';
// import Middle from './components/Middle';
import phone from './assets/charging.jpeg';
import watch from './assets/appleWatch.jpeg';
import airpods from './assets/airpods.jpeg';
import canvas from './assets/canvas.png';
import timer from './assets/timer.jpeg';
import safari from './assets/safari.png';
import notes from './assets/notes.png';
import MyComponent from './components/myComponent';
import CountdownTimer from './components/timer';
// import VerticalNotes from './components/VerticalNote';
import TodoList from './components/todolist';
import React, { useState } from 'react';
// import Popup from './components/canvas';
import Canvas from './components/canvas';
import apds from './assets/airpods.png'
import calender from './assets/calender.jpeg';
import outlook from './assets/outlook.png';
import doordash from './assets/doordash.jpeg';
import spotify from './assets/spotify.jpeg';
import teams from './assets/teams.jpeg';
import messenger from './assets/messenger.jpeg';
import youtube from './assets/youtube.png';
import notes1 from './assets/notes.jpg';
import calmapp from './assets/calmapp.webp';

function App() {

  const [bgColor, setBgColor] = useState('#fffcfc');
  const [selectedProfile, setSelectedProfile] = useState('User Profile 1');
  // Function to handle the button click and change the background color
  const changeBackgroundColor = () => {
    // Generate a new random background color
    const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(newColor);
  };
  
  const changeUserProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const offButtonContent = () => {
    switch (selectedProfile) {
      case 'User Profile 1':
        return (
          <>
            <img src={calender} alt="App Icon 1" />
            {/* <img src={outlook}/> */}
          </>
        );
      case 'User Profile 2':
        return (
          <>
            <img src={spotify} alt="App Icon 2" />
          </>
        );
      case 'User Profile 3':
        // Add content for User Profile 3
        return (
          <>
            <img src={teams} alt="App Icon 2" />
          </>
        );
      case 'User Profile 4':
        // Add content for User Profile 4
        return (
          <>
            <img src={doordash} alt="App Icon 2" />
          </>
        );
      default:
        return null;
    }
  };


  const offButtonContentone = () => {
    switch (selectedProfile) {
      case 'User Profile 1':
        return (
          <>
            <img src={outlook} alt="App Icon 1" />
            {/* <img src={outlook}/> */}
          </>
        );
      case 'User Profile 2':
        return (
          <>
            <img src={messenger} alt="App Icon 2" />
          </>
        );
      case 'User Profile 3':
        return (
          <>
            <img src={youtube} alt="App Icon 2" />
          </>
        );
      case 'User Profile 4':
        // Add content for User Profile 4
        return (
          <>
            <img src={spotify} alt="App Icon 2" />
          </>
        );
      default:
        return null;
    }
  };



  const offButtonContenttwo = () => {
    switch (selectedProfile) {
      case 'User Profile 1':
        return (
          <>
            <img src={doordash} alt="App Icon 1" />
            {/* <img src={outlook}/> */}
          </>
        );
      case 'User Profile 2':
        return (
          <>
            <img src={teams} alt="App Icon 2" />
          </>
        );
      case 'User Profile 3': return (
        <>
          <img src={calender} alt="App Icon 2" />
        </>
      );
        break;
      case 'User Profile 4':
        return (
          <>
            <img src={outlook} alt="App Icon 2" />
          </>
        );
      default:
        return null;
    }
  };

  // document.documentElement.style.setProperty('--app-background-color', newColor);

  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div class="parent">
        <div class="div1">
          
            <div class="circle">
            {offButtonContent()}
            </div>
            <div class="circle">
            {offButtonContentone()}
            </div>
            <div class="circle">
            {offButtonContenttwo()}
            </div>
        </div>
        <div class="div2">

            <header class="horizontal-scroll-container"><TopHorizontal> </TopHorizontal>
            </header>

        </div>
        
        
        
        <div class="div3">
            <div class="vertical-section">
              {/* <VerticalNotes/> */}
              <TodoList />
            </div>
        </div>
       
       
        <div class="div4">
    <div class="circle-pair">
        <div class="circle">
        <img src={timer}/>
        </div>
  
        <div class="circle">
        <img src={canvas}/>
        <button onClick={togglePopup} className="image-button"></button>
        </div>
    </div>
    <div class="circle-pair">
        <div class="circle">
        <img src={safari}/>
        </div>
        <div class="circle">
        <img src={notes1}/>
        </div>
    </div>
</div>



<div class="div5">
    <div class="day-schedule">
        {/* <div class="schedule-item">9:00 AM - 10:00 AM</div>
        <div class="schedule-item">10:30 AM - 11:30 AM</div>
        <div class="schedule-item">1:00 PM - 2:00 PM</div>
        <div class="schedule-item">3:30 PM - 4:30 PM</div> */}
        <div class="schedule-item">
        <div class="app-icon-container">
          <img src={canvas}  class="app-icon-side" />
          </div>
          <div class="text-container">
          <header> Canvas </header>
          <MyComponent> </MyComponent>
          </div>
          </div>
          <div class="schedule-item">
          <div class="app-icon-container">
          <img src={calmapp}  class="app-icon-side" />
          </div>
          <div class="text-container">
          <header> Calm </header>
          <CountdownTimer />
          </div>
          </div>
          <div class="schedule-item">
          <div class="app-icon-container">
          <img src={calender}  class="app-icon-side" />
          </div>
          <div class="text-container">
          <header> Calender </header>
           <p> Meet Ron near Pavillion at 2:30pm today</p>
           {/* <p> UI/UX class at 1:30 pm today</p> */}
          </div>
            </div>
    </div>
</div>

<div class="div6">
  <div class="off-button-container">
    <button class="off-button">
    <img src={airpods}/>
    </button>
    <button class="off-button">
    <img src={watch}/>
    </button>
    <button class="off-button">
    <img src={phone}/>
    </button>
    </div>
    {/* <div class="user-profiles">
    <button class="user-profile-button">User Profile</button>
    <button class="user-profile-button">User Profile 2</button>
    <button class="user-profile-button">User Profile 3</button>
    <button class="user-profile-button">User Profile 4</button> */}
    <div class="user-profiles">
          <button
            onClick={() => changeUserProfile('User Profile 1')}
            className={`user-profile-button ${
              selectedProfile === 'User Profile 1' ? 'active' : ''
            }`}
          >
            Nachi
          </button>
          <button
            onClick={() => changeUserProfile('User Profile 2')}
            className={`user-profile-button ${
              selectedProfile === 'User Profile 2' ? 'active' : ''
            }`}
          >
            Jenna
          </button>
          <button
            onClick={() => changeUserProfile('User Profile 3')}
            className={`user-profile-button ${
              selectedProfile === 'User Profile 3' ? 'active' : ''
            }`}
          >
            Caleb
          </button>
          <button
            onClick={() => changeUserProfile('User Profile 4')}
            className={`user-profile-button ${
              selectedProfile === 'User Profile 4' ? 'active' : ''
            }`}
          >
            Vikram
          </button>
    </div>
    {/* <button class="user-profile-button">User Profile 2</button> */}
    {/* <button class="user-profile-button">User Profile 3</button>
    <button class="user-profile-button">User Profile 4</button> */}
</div>
    </div>
  )}

  export default App;