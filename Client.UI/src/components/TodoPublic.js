import React from 'react'
import { connect } from 'react-redux'
import { ListGroupItem, Button, Glyphicon } from 'react-bootstrap'
import axios from 'axios'
import { baseUrl } from '../Constants'
import { removeTodo, changeTodo } from '../actions'

class Todo extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const todo = this.props.todo;
        const type = (todo.Type === null) ? '' : todo.Type.Title;
        let trStyle = {};
        if (todo.Done) {
            trStyle = { backgroundColor: '#dff0d8' }
        }

        const style = (todo.Done) ? { backgroundColor: '#dff0d8' } : {}
        return (
            <tr style={trStyle}>
                <td> {todo.Title} </td>
                <td> {todo.Description} </td>
                <td> {type} </td>
            </tr>
        )
    }
}
export default connect()(Todo);
