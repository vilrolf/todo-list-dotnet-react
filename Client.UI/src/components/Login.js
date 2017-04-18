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
        console.log("jasd")
        axios.get(baseUrl + '/api/users/?email=' + this.state.login)
            .then((response) => {
                console.log(response);
                this.props.dispatch(login(response.data));
            })
            .catch(function (error) {
                console.log(error);

            });
        event.preventDefault();
    }
    render() {
        return (

            <Form onSubmit={this.handleLoginSubmit} inline style={this.props.style}>
                <FormControl type="email" onChange={this.handleLoginChange} value={this.state.login} placeholder="jane.doe@example.com" />
                <Button type="submit" bsStyle="success">Login</Button>
            </Form>
        )
    }
}
export default connect()(Login)