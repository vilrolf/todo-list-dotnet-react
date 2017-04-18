import React from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import { Panel, Col, Button, Glyphicon } from 'react-bootstrap'
import { removeUser } from '../actions'
import axios from 'axios'
import { baseUrl } from '../Constants'

class UserPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.deleteUser = this.deleteUser.bind(this);
    }
    deleteUser(event) {
        const user = this.props.user;
        axios.delete(baseUrl + '/api/users/' + user.Id).then((response) => {
            console.log(response);
            this.props.dispatch(removeUser(user));
        })
            .catch((error) => {
                console.log(error);
            });

        //event.preventDefault()
    }
    render() {
        const user = this.props.user;
        console.log(this.props);
        return (<Panel collapsible  onClick={() => this.setState({ open: !this.state.open })} header={user.Email + "  " + user.Name + " : " + this.props.todosLength} eventKey={user.Id}>
            <Col md={3}> <AddTodoForm userId={user.Id} /> </Col>
            <Col md={8}> <TodoList userId={user.Id} /> </Col>
            <Col md={1}><Button bsStyle="danger" onClick={this.deleteUser} style={{ float: 'right' }}> Delete User <Glyphicon glyph="remove" /> </Button> </Col>
        </Panel>)
    }
}

const mapStateToProps = (state) => ({
    todosLength: state.todos.filter((todo) => todo.UserId === users[i].Id).length
});
export default connect()(UserPanel);
