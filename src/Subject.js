import React, { Component } from 'react';

export default class Subject extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);

		this.state = {
			isClicked: false
		}
	}
	// event handlers
	handleClick() {
    	this.setState(prevState => ({
    		isClicked: !prevState.isClicked
    	}));
    	console.log(this.state.isClicked);      
    }

    swapStyle() {
    	console.log('hi');
    	this.setState({
    		newStyle: 'blue'
    	})
    }

	render() {
		return (
			<div>
			<h1>{this.age}</h1>
				<h2 onClick={this.handleClick}>
					{!this.state.isClicked ? this.props.items.subject : "Jaime Rocks"}	
				</h2>
				<ul className={this.state.newStyle}>
					{this.props.items.resources.map((resource, i) => {
						return (
							<li key={i}><a onMouseOver={this.swapStyle.bind(this)} href={resource.url}>{resource.title}</a></li>
						)}
					)}
				</ul>
			</div>
		)
	}

}
