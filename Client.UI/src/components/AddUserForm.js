import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'

class AddUserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: '', name: '' };
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>

                <ControlLabel>Email</ControlLabel>
                <FormControl type="email" onChange={this.handleEmailChange} value={this.state.register} placeholder="Email" />

                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" onChange={this.handleNameChange} value={this.state.register} placeholder="Name" />
                <br />
                <Button type="submit" bsStyle="primary">Register</Button>
            </Form>
        )
    }
}

const mapStateToProps = (state) => ({
    state: state
});
export default connect(mapStateToProps)(AddUserForm);
