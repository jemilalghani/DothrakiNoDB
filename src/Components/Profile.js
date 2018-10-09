import React, { Component } from 'react';
import axios from 'axios';
import './Profile.css';

let number = 29;
class Profile extends Component {
    constructor(){
      super();
      this.state={
          imageURL:[{id:1,url:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/05/01/10/khal-drogo.jpg?w968h681"},
          {id:2,url:"http://cdn.morleymedia.net/imgs/sea_310_533.jpg"},
          {id:3,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-gilly.w710.h473.2x.jpg"},
          {id:4,url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grenn-1502923793.png?crop=1xw:1xh;center,top&resize=480:*"},
          {id:5,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-daenerys.w710.h473.2x.jpg"},
          {id:6,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-missandei.w710.h473.2x.jpg"},
          {id:7,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-grey-worm.w710.h473.2x.jpg"},
          {id:8,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-varys.w710.h473.2x.jpg"},
          {id:9,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-tryion.w710.h473.2x.jpg"},
          {id:10,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-cersei.w710.h473.2x.jpg"},
          {id:11,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-jamie.w710.h473.2x.jpg"},
          {id:12,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-theon-greyjoy.w710.h473.2x.jpg"},
          {id:13,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-yara-greyjoy.w710.h473.2x.jpg"},
          {id:14,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-euron-greyjoy.w710.h473.2x.jpg"},
          {id:15,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-jon-snow.w710.h473.2x.jpg"},
          {id:16,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-bran-stark-2.w710.h473.2x.jpg"},
          {id:17,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/18-arya-stark.w710.h473.2x.jpg"},
          {id:18,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-sansa-stark.w710.h473.2x.jpg"},
          {id:19,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-littlefinger.w710.h473.2x.jpg"},
          {id:20,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-meera-reed.w710.h473.2x.jpg"},
          {id:21,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-the-hound.w710.h473.2x.jpg"},
          {id:22,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-gregor-clegane-2.w710.h473.2x.jpg"},
          {id:23,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-thoros-of-myr.w710.h473.2x.jpg"},
          {id:24,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-beric-dondarrion.w710.h473.2x.jpg"},
          {id:25,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-davos-seaworth.w710.h473.2x.jpg"},
          {id:26,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-brienne-of-tarth.w710.h473.2x.jpg"},
          {id:27,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-olenna-tyrell.w710.h473.2x.jpg"},
          {id:28,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-ellaria-sand.w710.h473.2x.jpg"},
          {id:29,url:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-lyanna-mormont.w710.h473.2x.jpg"}],
          userInput:'',
          postedImg:''
      }
      this.addURL=this.addURL.bind(this);
      this.handleChange=this.handleChange.bind(this);
      this.randomPicker=this.randomPicker.bind(this);
      this.clearImg=this.clearImg.bind(this);
    }
    handleChange( event ) {
        this.setState({ userInput: event.target.value });
    }
    addURL(event){
        const { userInput} = this.state;
        if ( event.key === "Enter" && userInput.length !== 0 ) {
        axios.post( './api/pictures', { userInput } ).then( response => {
            this.setState({ imageURL: response.data });
        });
        number++;
        this.setState({ userInput: '' });
        }
    }
    randomPicker(){
        if (this.state.postedImg) {
            return;
        }
        let help=Math.random()*number;
        let randmIndex=Math.floor(help);
        this.setState({
            postedImg: (this.state.imageURL[randmIndex].url)})
    }
    clearImg(){
        this.setState({
            postedImg:'',
        })
    }
    
    render() {
        return(
        <div className="randomChar">
        <img src={this.state.postedImg} alt="" width='300'/>
            <input placeholder="" 
                 onChange={ this.handleChange }
                 value={ this.state.userInput }
                 onKeyPress={ this.addURL }
            />
          <button onMouseOver={this.randomPicker} onClick={this.clearImg}></button>
        </div>
      );
    }
  }
  
  export default Profile;
  