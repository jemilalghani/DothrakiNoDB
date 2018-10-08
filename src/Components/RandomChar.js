import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
// import Image from './Image';
import './RandomChar.css';

let characterIds=["56ffc5be043244081938576d", "56ffc5be043244081938576e","56ffc5be043244081938576f","56ffc5be0432440819385770","56ffc5be0432440819385775","56ffc5be0432440819385778","56ffc5be043244081938577e","56ffc5bf0432440819385856","56ffc5bf04324408193858c2","56ffc5bf04324408193859b1","56ffc5bf0432440819385a38","56ffc5bf0432440819385a88","56ffc5c00432440819385d91","56ffc5c00432440819385d95","56ffc5c00432440819385db5","56ffc5c00432440819385db6","56ffc5bf0432440819385860","56ffc5bf0432440819385866","56ffc5bf043244081938586d"];

class RandomChar extends Component {
  constructor(){
    super();
    this.state={
        randomCharacter:''
    }
    this.fetchTranslation=this.fetchTranslation.bind(this);
  }
  fetchTranslation(){
    let help=Math.random()*18;
    let randmIndex=Math.floor(help);
    axios.get(`https://api.got.show/api/characters/byId/${characterIds[randmIndex]}`).then(res=>{
    this.setState({
        randomCharacter: res.data.data.name,
    })
    })
  }
  render() {
      return(
      <div className="randomCharButton">
        <h3>{this.state.randomCharacter}</h3>
        <button onClick={this.fetchTranslation}>
        Click
        </button>
      </div>
    );
  }
}

export default RandomChar;
