import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'
import axios from 'axios'
import { baseUrl } from '../Constants'

class Register extends React.Component {
    constructor(props) { // .state.user.Id
        super(props);

        this.state = { email: '', emailValidation: null, name: '', nameValidation: null };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.getEmailValidationState = this.getEmailValidationState.bind(this);
        this.getNameValidationState = this.getNameValidationState.bind(this);
    }

    handleEmailChange(event) {
        const email = event.target.value;
        this.getEmailValidationState(email);
        this.setState({ email: event.target.value });
    }

    handleNameChange(event) {
        const name = event.target.value;
        this.getNameValidationState(name);
        this.setState({ name: event.target.value });
    }

    getEmailValidationState(email) {
        const length = email.length;
        if (length === 0) {
            this.setState({ emailValidation: null });
        }
        else if (email.includes('@')) {
            this.setState({ emailValidation: 'success' });
        } else if (length > 0) {
            this.setState({ emailValidation: 'warning' });
        }
    }

    getNameValidationState(name) {
        const length = name.length;
        if (length === 0) {
            this.setState({ nameValidation: null });
        }
        if (length > 0) {
            this.setState({ nameValidation: 'success' });
        }
    }


    handleRegisterSubmit(event) {
        axios.post(baseUrl + '/api/users', {
            Email: this.state.register,
        })
            .then(function (response) {
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);

            });
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleRegisterSubmit}>
                <FormGroup
                    controlId="formEmailText"
                    validationState={this.state.emailValidation}
                >
                    <ControlLabel>Email</ControlLabel>
                    <FormControl type="email" onChange={this.handleEmailChange} value={this.state.register} placeholder="Email" />
                    <FormControl.Feedback />
                    <HelpBlock style={(this.state.emailValidation === 'warning') ? {visibility:'visible'} : {visibility:'hidden'}}>Email needs to contain a '@'</HelpBlock>
                </FormGroup>
                <FormGroup
                    controlId="formEmailText"
                    validationState={this.state.nameValidation}
                >
                    <ControlLabel>Name</ControlLabel>
                    <FormControl type="text" onChange={this.handleNameChange} value={this.state.register} placeholder="Name" />
                    <FormControl.Feedback />
                </FormGroup>
                <br />
                <Button type="submit" bsStyle="primary">Register</Button>
            </Form>

        )
    }
}

const mapStateToProps = (state) => ({
    state: state
});
export default connect(mapStateToProps)(Register);
