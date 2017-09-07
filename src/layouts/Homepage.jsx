import React, { Component } from 'react';
import axios from 'axios';
import brand from '../icons/TWOODLE.png';


export default class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }

    this.submitForm = this.submitForm.bind(this);

  }

  submitForm = (event) => {
    event.preventDefault();
    event.persist();
    const regex = /^[a-z0-9]+$/;
    let boardName = event.target.boardName.value;
    boardName = boardName.toLowerCase().replace(' ','-');

     if (regex.test(boardName)) {

      axios.get(`http://localhost:3001/?boardName=${boardName}`)
        .then((response) => {
          window.location = `/twoodles/${boardName}`;
        })
        .catch((error) => {
          this.setState({error: 'Twoodle name is already taken.'});
        });

     }
     else {
       this.setState({error: 'Please use alphanumerical characters'});
     }
  }

  // NOTE: there should be a limited acceptable characters for the bordname
  render() {
     return (
      <div className='jumbotron'>
      <img className='home-logo' src={brand} />
        <form className='new-twoodle'
        onSubmit={this.submitForm}>
          <input className='twoodle-name' name="boardName"/>
          <button className='twoodle-submit'>submit</button>
        </form>
        <h2 className='slogan'>Welcome to your whiteboard <span className='purple'>on the web</span></h2>
        <p>{this.state.error}</p>
      </div>
    );
  }
}