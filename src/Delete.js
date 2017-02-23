import React, { Component } from 'react';

export default class Delete extends Component {
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);

		this.state = {

		}
	}

	handleDelete() {
		//console.log('yo');
		//console.log(this.props.item, this.props.subject, this.props.delete);

	    //Callback to Subject
         this.props.delete(this.props.title);	

	}

	render() {
		return (
			<a href="#" className="red" onClick={this.handleDelete}>x</a>
		)
	}

}
