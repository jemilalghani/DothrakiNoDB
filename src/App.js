import React, { Component } from 'react';
import './App.css';
import RandomChar from './Components/RandomChar';
import ChatWindow from './Components/ChatWindow';
import Profile from './Components/Profile';
import Image from './Components/Image';

class App extends Component {
  constructor(){
    super();
    this.state={
      url: 'https://c1.staticflickr.com/6/5513/9807707293_fde377fa22_b.jpg'
    }
  }
  render() {
    return (
    <div id="App__container">
      <header>

      </header>

      <style>
        @import url('https://fonts.googleapis.com/css?family=Aladin|Averia+Libre|Faster+One|Finger+Paint|Freckle+Face|Fruktur|Gamja+Flower|Hanalei+Fill|Libre+Baskerville|Marcellus+SC|Nosifer|Nothing+You+Could+Do|Piedra|Press+Start+2P');
      </style>
      <style>
      @import url('https://fonts.googleapis.com/css?family=Cinzel');
      </style>

      <div className='header'>
          <Image view={this.state.url} />
          <p>"Dothraki are riders! Warriors! Dothraki babies shoot bows from horseback when they are but four years old. Dothraki will abandon a sick or injured who no longer ride. 
            Become a Dothrakhqoyi."
          <br/>
          <br/>
          Pledge your life to the khal. 
          <br/>
          <br/>
          Qoy Qoyi ("Blood of my blood")
          </p>
      </div>

      <div className="content">
        <div className="borderText">
          <ChatWindow />
        </div>
        <div className="bodyCenter">
          <Profile />
          <p> Qoy Qoyi!! Ignore title of previous you.
          <br/>
          Touch thy mirror and be reborn!!! 
          <br/><br/>
          Me nem nesa 
          <br/>
          <br/>
          Pick up either saddle and learn thy name</p>
        <div className="buttons">
          <RandomChar />
          <RandomChar />
        </div>
      </div>
    </div>
      <div className="foot">
      <h1> <a href="https://docs.dothraki.org/Dothraki.pdf">Dothraki Starter Pack</a></h1>
      </div>
  </div>
    );
  }
}

export default App;
