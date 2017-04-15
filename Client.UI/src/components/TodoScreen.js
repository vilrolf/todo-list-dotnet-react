import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { baseUrl } from '../Constants'
import { addTodo, apiAddTodo } from '../actions'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Row, Col } from 'react-bootstrap'

class TodoScreen extends React.Component {
    constructor(props) {
        super(props);
        axios.get(baseUrl + '/api/todoes/' + props.state.user.Id).then(response => {
            console.log(response);
            for (let i = 0; i < response.data.length; i++) {
                props.dispatch(apiAddTodo(response.data[i]))
            }
        })
    }
    render() {
        return (
            <Row>
                <Col md={6}> <h1> TODOS </h1> </Col>
                <Col md={6}> <h1> Done Todos </h1> </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    state: state
});
export default connect(mapStateToProps)(TodoScreen);
