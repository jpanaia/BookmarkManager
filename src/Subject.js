import React, { Component } from 'react';

export default class Subject extends Component {
	constructor(props) {
		super(props);

	}
	// event handlers

	render() {
		return (
			<h1>{this.props.subject}</h1>
		)
	}

}
