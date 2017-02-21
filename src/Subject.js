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
    	console.log(this.state.isClicked);      
    }

    handleChange(e) {
    	console.log(e);
    	e.preventDefault();
    	const name = e.target.name;
    	const value = e.target.value;
                this.setState({
        	[name]: value
        });
    }

    handleSubmit(e){	
    	console.log(this.state);
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
            <div className="container">
                <h1>Bookmark Manager</h1>
                {/*<Jaime initialAge={37}/>*/}
                <form>
                    <label htmlFor="subject">Subject: </label>
                    <input type="text" 
                           placeholder="Subject" 
                           name="subject"
                           id="subject" 
                           value={this.state.subject}
                           onChange={this.handleSubjectChange}
                    />

                    <button onClick={this.addSubject}>Add New Subject</button>
                </form>
            </div>
        );
    }

}
