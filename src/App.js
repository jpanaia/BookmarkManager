import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // stuff applied to everything in constructor
  constructor() {
    super();

    this.state = {};
  }

  //event handlers here

  render() {
    return (
        <ul>
            <li><a href="https://facebook.github.io/react/docs/thinking-in-react.html" target="_blank">Thinking in React</a></li>
        </ul>
    );
  }
}

export default App;
