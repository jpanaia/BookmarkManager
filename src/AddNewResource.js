import React, { Component } from 'react';

export default class AddNewResource extends Component {
	constructor(props) {
		super(props);

		console.log(props);

		this.addNewResource = this.addNewResource.bind(this);
        this.addSubject = this.addSubject.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);

		this.state = { 
            subject: '',
            resource: this.props.resources,
        }
	}

	addNewResource(subject, resource) {
        const tempState = this.state;
        tempState.resources[subject].resources.push(resource);
        this.setState(tempState)
    }

    addSubject(e) {
        e.preventDefault();
        const tempState = this.state;
        const resource = { subject: this.state.subject, resources: [] };
        // console.log(tempState);
        console.log(resource);
        console.log(resource);
        // tempState.resources.push(resource);
        this.setState(tempState); 
    }

    handleSubjectChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

	render() {
		return (
			<div>
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
		)
	}

}
