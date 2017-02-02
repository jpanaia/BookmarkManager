import React, { Component } from 'react';
import Subject from './Subject';

class App extends Component {

  // stuff applied to everything in constructor
    constructor() {
        super();

        this.state = { 
            resources: [
                {   subject: "Functional Programming",
                    resources: [
                                    {title: "Thinking in React", url: "https://facebook.github.io/react/docs/thinking-in-react.html"},
                                    {title: "Higher Order Functions", url: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"},
                                    {title: "var, let and const - What, why and how", url: "https://www.youtube.com/watch?v=sjyJBL5fkp8"}
                                ]
                },
                {   subject:  "ES6",
                    resources: [
                                    {title: "Arrow functions in JavaScript - What, Why and How", url: "https://www.youtube.com/watch?v=6sQDTgOqh-I"},
                                    {title: "Essential ES6", url: "https://www.youtube.com/watch?v=CozSF5abcTA"},
                                    {title: "JavaScript ES6+: var, let, or const?", url: "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.1iy2d9be9"},
                                    {title: "ES6 Interactive Guide", url: "http://stack.formidable.com/es6-interactive-guide/#/"},
                                    {title: "Javascript ES6 Cheatsheet - the best of JS ES6", url: "https://www.youtube.com/watch?v=AfWYO8t7ed4"},
                                    {title: "Javascript ES6 Cheatsheet #2 - the best of JS ES6", url: "https://www.youtube.com/watch?v=LmL0Gh193M0"},
                                    {title: "ECMAScript 6 / ES6 New Features - Tutorial 1 - Let", url: "https://www.youtube.com/watch?v=ZJZfIw3P8No&list=PL6gx4Cwl9DGBhgcpA8eTYYWg7im72LgLt"}
                                ]
                },
                {   subject: "Beginning React",
                    resources: [
                                    {title: "ReactJS Basics Playlist - Mindspace", url: "https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skSt"},
                                    {title: "REACT JS TUTORIAL - LearnCode.academy", url: "https://www.youtube.com/watch?v=fd2Cayhez58&feature=youtu.be"}
                                ]
                }
            ]
        }
    }
  //event handlers here

    render() {
        return (
            <div>
                Parent component
               <Subject />
            </div>
        );
    }
}

export default App;
