import React, { Component } from 'react';

export default class Subject extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			isClicked: false,
			url: '',
			title: ''
		}
	}
	// event handlers
	handleClick() {
    	this.setState(prevState => ({
    		isClicked: !prevState.isClicked
    	}));
    	//console.log(this.state.isClicked);      
    }

    swapStyle() {
    	// console.log('hi');
    	// this.setState({
    	// 	newStyle: 'blue'
    	// })
    }

    handleChange(e) {
    	//console.log(e);
    	e.preventDefault();
    	const name = e.target.name;
    	const value = e.target.value;
        
        this.setState({
        	[name]: value
        });

    }

    handleSubmit(e){	
    	//console.log(this.state);
    	e.preventDefault();

    	const newResource = {
    		title: this.state.title,
    		url: this.state.url
    	}
    	//Callback to Parent
        this.props.addResource(this.props.index, newResource);

        this.setState({
        	title: '',
        	url: ''
        })
    }

	render() {
		return (
			<div>
			<h1>{this.age}</h1>
				<h2 onClick={this.handleClick}>
					{!this.state.isClicked ? this.props.items.subject : "Jaime Rocks"}	
				</h2>

				<form onSubmit={this.handleSubmit}>

					<input type="text" 
						   name="title"
						   id="title" 
						   placeholder="title" 
						   value={this.state.title} 
						   onChange={this.handleChange}/>

					<input type="text" 
						   name="url" 
						   id="title"
						   placeholder="url" 
						   value={this.state.url} 
						   onChange={this.handleChange}/>

					<button type="submit">Submit</button>
				</form>

				<ul id="resource-list" className={this.state.newStyle}>
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
