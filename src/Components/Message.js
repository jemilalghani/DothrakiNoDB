import React, { Component } from "react";



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
      {language}
      <br/>
      {comments}

        {
          editting
          ?
            <input className="Message__input" value={ this.state.comments } onChange={ e=>this.handleChange('comments',e.target.value) } onKeyPress={ this.edit } />
          :
            <span className="Message__text">{comments}</span>
        }
        <span className="Message__edit" onClick={ () => this.setState({ editting: !this.state.editting,  comments }) }> EDIT </span>
        <span className="Message__delete" onClick={ () => remove( id ) }> DELETE </span>
      </div>
    )
  }
}