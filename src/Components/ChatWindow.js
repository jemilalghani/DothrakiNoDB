import React, { Component } from "react";
import axios from "axios";
import url from '../api';
import './ChatWindow.css';

import Message from './Message';

export default class ChatWindow extends Component {
    constructor() {
      super();
      this.state = {
        translations:[],
        text:''
      };
      this.editComment = this.editComment.bind( this );
      this.removeTranslation = this.removeTranslation.bind( this );
    }
    componentDidMount() {
        axios.get('/api/translations').then( response => {
          this.setState({ translations: response.data });
        });
      }
      editComment( id, comments ) { 
        axios.put( url + `/${id}`, {comments} ).then( response => {
          this.setState({ translations: response.data });
        });
      }
      removeTranslation( id ) {
        axios.delete( url + `/${id}` ).then( response => {
            console.log(response.data);
          this.setState({ translations: response.data });
        });
      }
      render() {
        return (
          <div id="ChatWindow__container">
            <div id="ChatWindow__messagesParentContainer">
              <div id="ChatWindow__messagesChildContainer">
                {
                  this.state.translations.map( translated=> (
                    <Message id={ translated.id} 
                    key={ translated.id } 
                    dothraki={translated.translated}
                    text={ translated.text } 
                    language={translated.language} 
                    comments={translated.comments}
                    edit={ this.editComment} 
                    remove={ this.removeTranslation } />
                  ))
                }
              </div>
            </div>
          </div>
        )
      }
}