import React, { Component } from 'react';
// import './App.css';
import RandomChar from './Components/RandomChar';
import ChatWindow from './Components/ChatWindow';
import Profile from './Components/Profile';

class App extends Component {
  render() {
    return (
    <div id="App__container">
      <ChatWindow />
      <RandomChar />
      <RandomChar />
      <Profile />
    </div>
    );
  }
}

export default App;
