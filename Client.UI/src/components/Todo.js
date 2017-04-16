import React from 'react'
import { connect } from 'react-redux'
import { ListGroupItem, Button, Glyphicon } from 'react-bootstrap'
import axios from 'axios'
import { baseUrl } from '../Constants'

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.markAsDone = this.markAsDone.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  markAsDone() {
    const todo = this.props.todo;
    console.log("todo", todo);
    todo.Done = !(todo.Done);
    axios.put(baseUrl + '/api/todoes/' + todo.Id, {
      todo
    }).then(function (response) {
      console.log(response);

    })
      .catch(function (error) {
        console.log(error);

      });
  }
  deleteTodo() {

  }

  render() {
    const todo = this.props.todo;
    const type = (todo.Type === null) ? '' : todo.Type.Title;
    let trStyle = {};
    let buttonGlyph = "ok";
    if (todo.Done) {
      trStyle = { backgroundColor: '#dff0d8' }
      buttonGlyph = "minus";
    }

    const style = (todo.Done) ? { backgroundColor: '#dff0d8' } : {}
    return (
      <tr style={trStyle}>
        <td> <Button onClick={this.markAsDone} bsStyle="success"> <Glyphicon glyph={buttonGlyph} /> </Button> </td>
        <td> {todo.Title} </td>
        <td> {todo.Description} </td>
        <td> {type} </td>
        <td> <Button onClick={this.deleteTodo} bsStyle="danger"> <Glyphicon glyph="remove" /> </Button> </td>
      </tr>
    )
  }
}

/*
   <tr key={todo.Id}>
        <td> {todo.Title} </td>
        <td> {todo.Description} </td>
        <td> {todo.Type} </td>
        <td> DONE </td>
        <td> DELETE </td>
      </tr>
      */
export default connect()(Todo);
