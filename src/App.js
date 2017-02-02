import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // stuff applied to everything in constructor
  constructor() {
    super();

    this.state = { 
        url: "https://facebook.github.io/react/docs/thinking-in-react.html", 
        name: "Thinking in React"
    };
  }
  //event handlers here

  render() {
    return (
        <ul>
            <li><a href={this.state.url} target="_blank">{this.state.name}</a></li>
        </ul>
    );
  }
}

export default App;
