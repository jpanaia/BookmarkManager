import React, { Component } from 'react';

export default class Button extends Component {
	constructor() {
		super();
		this.state = {
			color: 'white',
			backgroundColor: 'blue'
		}
	}

	render() {

		return (
			<button className={this.props.class} style={this.state}>{this.props.name}</button>
		)
	}
}
