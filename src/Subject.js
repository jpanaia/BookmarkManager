import React, { Component } from 'react';

export default class Subject extends Component {
	constructor(props) {
		super(props);
	}
	// event handlers

	render() {
		return (
			<div>
				<h2>{this.props.items.subject}</h2>
				<ul>
					<li><a href="#">{this.props.items.resources[0].title}</a></li>
				</ul>
			</div>
		)
	}

}
