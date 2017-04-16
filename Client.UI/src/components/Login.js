import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { baseUrl } from '../Constants'
import { login } from '../actions'
import { Button, Form, FormControl } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    browserHistory,
    Route,
    Link
} from 'react-router-dom'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { login: '' };
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }


    handleLoginChange(event) {
        this.setState({ login: event.target.value });
    }


    handleLoginSubmit(event) {
        axios.get(baseUrl + '/api/users/?email=' + this.state.login)
            .then((response) => {
                this.props.dispatch(login(response.data));
            })
            .catch(function (error) {
                console.log(error);

            });
    }
    render() {
        return (

            <Form inline style={this.props.style}>
                <FormControl type="email" onChange={this.handleLoginChange} value={this.state.login} placeholder="jane.doe@example.com" />
                <Button onClick={this.handleLoginSubmit} bsStyle="success">Login</Button>
            </Form>
        )
    }
}
export default connect()(Login)