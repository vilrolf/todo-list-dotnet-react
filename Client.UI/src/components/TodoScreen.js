import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { baseUrl } from '../Constants'
import { addTodo, apiAddTodos, apiAddTodoTypes } from '../actions'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Row, Col } from 'react-bootstrap'
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'

class TodoScreen extends React.Component {
    constructor(props) {
        super(props);
        axios.get(baseUrl + '/api/todoes/' + props.state.user.Id).then(response => {
            props.dispatch(apiAddTodos(response.data))

        })
        axios.get(baseUrl + '/api/todotypes/').then(response => {
            props.dispatch(apiAddTodoTypes(response.data))

        })
    }
    render() {
        return (
            <Row>
                <Col md={4}> <AddTodoForm /> </Col>
                <Col md={8}>  <TodoList /> </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    state: state
});
export default connect(mapStateToProps)(TodoScreen);
