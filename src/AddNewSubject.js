import React, { Component } from 'react';

export default class AddNewSubject extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);

        this.state = {
            subject: ''
        }
    }

    handleSubjectChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addNew(this.state.subject);
        this.state = {
            subject: ''
        }
    }

    render() {
        return (
             <form>
                <label htmlFor="subject">Subject: </label>
                <input type="text" 
                       placeholder="Subject" 
                       name="subject"
                       id="subject" 
                       value={this.state.subject}
                       onChange={this.handleSubjectChange}
                />

                <button onClick={this.handleSubmit}>Add New Subject</button>
            </form>
        );
    }
}