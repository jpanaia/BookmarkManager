import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // stuff applied to everything in constructor
  constructor() {
    super();

    this.state = { 
        resources:  [
                        {title: "Thinking in React", url: "https://facebook.github.io/react/docs/thinking-in-react.html"},
                        {title: "Higher Order Functions", url: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"},
                        {title: "ES 6 - part 1", url: "https://www.youtube.com/watch?v=sjyJBL5fkp8"}
                    ]
    };

  }
  //event handlers here

  render() {
    return (
        <ul>
            {this.state.resources.map((resource) => {
                return <li><a href={resource.url} target="_blank">{resource.title}</a></li>
            })}
        </ul>
    );
  }
}

export default App;
