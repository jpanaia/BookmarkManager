import React, { Component } from 'react';

export default class Jaime extends Component {
	constructor(props) {
		super(props);

		this.state = {
			age: props.initialAge,
			status: 0
		}
	}
	// event handlers
	onMakeOlder() {
		// re-render the UI
		this.setState({
			age: this.state.age + 3
		});
		//console.log(this.age);
	}

	onResetAge() {
		this.setState({
			age: 37
		});
	}

	handleHide(e){
        console.log(e);
        e.currentTarget.style.visibility = "hidden";
    }

    handleShow(e){
        console.log(e);
        e.currentTarget.style.visibility = "visible";
    }
	render() {
		return (
			<div>
				<h1 onMouseOver={this.handleHide.bind(this)} onMouseOut={this.handleShow.bind(this)}>Jaime is {this.state.age}</h1>

				<a href="#" onClick={() => this.onMakeOlder()}>Increase my age</a><br/>
				<a href="#" onClick={() => this.onResetAge()}>Ok enough</a>
			</div>
		)
	}

}
