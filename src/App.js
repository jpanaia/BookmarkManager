import React, { Component } from 'react';
import Subject from './Subject';
import AddNewSubject from './AddNewSubject';
//import Delete from './Delete';

//import Button from './Button';
//import Jaime from './Jaime';


class App extends Component {

  // stuff applied to everything in constructor
    constructor(props) {
        super(props);

        this.addNewResource = this.addNewResource.bind(this);
        this.addSubject = this.addSubject.bind(this);
        this.deleteOneResource = this.deleteOneResource.bind(this);
        this.deleteOneSubject = this.deleteOneSubject.bind(this);

        this.state = {
            subject: '',
            resources: [
                {   subject: "Functional Programming",
                    resources: [
                                    {title: "Thinking in React", url: "https://facebook.github.io/react/docs/thinking-in-react.html"},
                                    {title: "Higher Order Functions", url: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"},
                                    {title: "var, let and const - What, why and how", url: "https://www.youtube.com/watch?v=sjyJBL5fkp8"},
                                    {title: "Hexlet's Intro To JavaScript Programming course", url: "https://www.youtube.com/playlist?list=PL-xu4i_QDSxcoDNeh8rx5-pHCCTOg0XsI"},
                                    {title: "Understanding Javascript function-prototype bind", url: "https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/"},
                                    {title: "Event Handlers", url: "https://www.youtube.com/watch?v=_D1JGNidMr4&feature=youtu.be"}
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
                                    {title: "ECMAScript 6 / ES6 New Features - Tutorial 1 - Let", url: "https://www.youtube.com/watch?v=ZJZfIw3P8No&list=PL6gx4Cwl9DGBhgcpA8eTYYWg7im72LgLt"},
                                    {title: "6 Great Uses of the Spread Operator", url: "https://davidwalsh.name/spread-operator"}
                                ]
                },
                {   subject: "Intro to React",
                    resources: [
                                    {title: "ReactJS Basics Playlist - Mindspace", url: "https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skSt"},
                                    {title: "REACT JS TUTORIAL - LearnCode.academy", url: "https://www.youtube.com/watch?v=fd2Cayhez58&feature=youtu.be"},
                                    {title: "Handling Events", url: "https://facebook.github.io/react/docs/handling-events.html"},
                                    {title: "Stateless Functional Components", url: "https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.7vqh2zp8m"},
                                ]
                },
                {   subject: "Stylin in React",
                    resources: [

                                {title: "A toolchain for React component styling", url: "https://github.com/FormidableLabs/radium"}
                            ]
                }
            ]
        }
    }

    addNewResource(subject, resource) {
        const tempState = this.state;
        console.log(tempState.resources[subject]);
        tempState.resources[subject].resources.push(resource);
        this.setState(tempState);
    }

    addSubject(subject) {
        const tempState = this.state;
        const newSubject = {
            subject: subject,
            resources: []
        }
        tempState.resources.push(newSubject);
        this.setState(tempState);
    }

    deleteOneResource(subject, resource){
        const tempState = this.state;
        tempState.resources[subject].resources.splice(resource, 1);
        this.setState(tempState);
    }

    deleteOneSubject(subject){
        const tempState = this.state;
        tempState.resources.splice(subject, 1);
        this.setState(tempState);
    }

    render() {
        return (
            <div className="container">
                <h1>Bookmark Manager</h1>
                {/*<Jaime initialAge={37}/>*/}
                <AddNewSubject addNew={this.addSubject}/>

                {this.state.resources.map((resource, i) => {
                    return (
                            <Subject key={i}
                                     items={resource}
                                     addResource={this.addNewResource}
                                     index={i}
                                     deleteResource={this.deleteOneResource}
                                     deleteSubject={this.deleteOneSubject}
                            />
                    )}
                )}

            </div>
        );
    }
}

export default App;
