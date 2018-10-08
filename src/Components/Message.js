import React, { Component } from "react";
// import IoIosJournal from 'react-icons/io';


export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editting: false,
      dothraki:this.props.dothraki,
      text: this.props.text,
      language:this.props.language,
      comments:this.props.comments
      
    };

    this.handleChange = this.handleChange.bind( this );
    this.edit = this.edit.bind( this );
  }

  handleChange( key, event ) {
    this.setState({ [key]: event });
  }

  edit( event ) {
    let { comments } = this.state;
    const { id, edit } = this.props;
    if( event.key === "Enter" && comments.length !== 0 ) {
      edit( id, comments );
      this.setState({ editting: false });
    }
  }

  render() {
    const { id, text, dothraki, language, comments, remove } = this.props;
    const { editting } = this.state;
    return (
      <div className="Message__container">
      <br/>
      {dothraki}
      <br/>
      {text}
      <br/>
      {language} {comments}

        {
          editting
          ?
            <input className="Message__input" value={ this.state.comments } onChange={ e=>this.handleChange('comments',e.target.value) } onKeyPress={ this.edit } />
          :
            <span className="Message__text">{comments}</span>
        }
        <span className="Message__edit" onClick={ () => this.setState({ editting: !this.state.editting,  comments }) }>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M408 64H96c-22.002 0-32 17.998-32 40v344l64-64h280c22.002 0 40-17.998 40-40V104c0-22.002-17.998-40-40-40zM198.4 242H160v-40h38.4v40zm76.8 0h-38.4v-40h38.4v40zm76.8 0h-38.4v-40H352v40z"/></svg>
        </span>
        <span className="Message__delete" onClick={ () => remove( id ) }> 
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M433.5 96H167.2c-12.2 0-21.8 6.2-28.2 15.6L43 256l96 144.2c6.4 9.4 16 15.8 28.2 15.8h266.2c19.5 0 35.5-16 35.5-35.6V131.6C469 112 453 96 433.5 96zm-53.3 223.8l-25 25.1-63.7-63.8-63.7 63.8-25-25.1 63.7-63.8-63.7-63.8 25-25.1 63.7 63.8 63.7-63.8 25 25.1-63.7 63.8 63.7 63.8z"/></svg>
        </span>
      </div>
    )
  }
}