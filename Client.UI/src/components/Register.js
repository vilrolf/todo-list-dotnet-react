import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'
import axios from 'axios'
import { baseUrl } from '../Constants'
import { login, addUser } from '../actions'

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
        if (this.state.nameValidation === 'success' && this.state.emailValidation === 'success') {
            axios.post(baseUrl + '/api/users', {
                Email: this.state.email,
                Name: this.state.name,
            })
                .then((response) => {
                    console.log(response);
                    alert("SUCCESS");
                    if (this.props.admin) {
                        this.props.dispatch(addUser(response.data));
                    } else {
                        this.props.dispatch(login(response.data));
                    }
                    this.setState({email: '', emailValidation: null, name: '', nameValidation: null})
                })
                .catch(function (error) {
                    console.log(error);
                    alert("ERROR FROM API");

                });
        } else {
            alert("You need to enter valid email + name");
        }
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleRegisterSubmit}>
                {(this.props.admin) ? <h3> Add User </h3> : null}
                <FormGroup
                    controlId="formEmailText"
                    validationState={this.state.emailValidation}
                >
                    <ControlLabel>Email</ControlLabel>
                    <FormControl type="email" onChange={this.handleEmailChange} value={this.state.email} placeholder="Email" />
                    <FormControl.Feedback />
                    <HelpBlock style={(this.state.emailValidation === 'warning') ? { visibility: 'visible' } : { visibility: 'hidden' }}>Email needs to contain a '@'</HelpBlock>
                </FormGroup>
                <FormGroup
                    controlId="formEmailText"
                    validationState={this.state.nameValidation}
                >
                    <ControlLabel>Name</ControlLabel>
                    <FormControl type="text" onChange={this.handleNameChange} value={this.state.name} placeholder="Name" />
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
