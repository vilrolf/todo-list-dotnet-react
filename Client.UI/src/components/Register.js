import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, FormControl } from 'react-bootstrap'
import axios from 'axios'
import { baseUrl } from '../Constants'

class Register extends React.Component {
    constructor(props) { // .state.user.Id
        super(props);

        this.state = { register: '' };
        this.handleRegisterChange = this.handleRegisterChange.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    }

    handleRegisterChange(event) {
        this.setState({ register: event.target.value });
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
            <Form inline>
                <FormControl type="email" onChange={this.handleRegisterChange} value={this.state.register} placeholder="jane.doe@example.com" />
                <Button onClick={this.handleRegisterSubmit} bsStyle="primary">Register</Button>
            </Form>

        )
    }
}

const mapStateToProps = (state) => ({
    state: state
});
export default connect(mapStateToProps)(Register);
