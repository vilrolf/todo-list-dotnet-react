import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import axios from 'axios'
import { baseUrl } from '../Constants'
import { addTodo } from '../actions'

class AddTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', description: '', type: 'noType' }

        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }
    handleChangeSelect(event) {
        this.setState({ type: event.target.value });
        if (event.target.value === 'newType') {
            console.log("TODO ADD NEW TYPE");
            this.setState({ type: 'noType' });
        }
    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }

    handleChangeDescription(event) {
        this.setState({ description: event.target.value });
    }

    handleSubmit(event) {
        console.log(this.props);
        event.preventDefault();
        const type = (this.state.type === 'noType') ? null : this.state.type;
        axios.post(baseUrl + '/api/todoes', {
            Title: this.state.title,
            Description: this.state.description,
            TypeId: type,
            Done: false,
            UserId: this.props.user.Id
        }).then(response => {
            this.props.dispatch(addTodo(response.data))
            console.log(response);
        })

        this.setState({ title: '', description: '', type: 'noType' })

        
    }


    render() {
        const makeOption = function (x) { return <option key={x.Id} value={x.Id}> {x.Title} </option> }
        return (
            <form onSubmit={this.handleSubmit}>
                <h3> Add To Do </h3>
                <FormGroup controlId={"formTitleArea"} >
                    <ControlLabel> Title </ControlLabel>
                    <FormControl value={this.state.title} onChange={this.handleChangeTitle} placeholder={"Title"} type={"text"} label={"title"} />
                </FormGroup>
                <FormGroup controlId="formTextarea">
                    <ControlLabel>Description</ControlLabel>
                    <FormControl value={this.state.description} onChange={this.handleChangeDescription} componentClass="textarea" placeholder="Description" />
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Type</ControlLabel>
                    <FormControl value={this.state.type} onChange={this.handleChangeSelect} componentClass="select" placeholder="Type">
                        <option value={"noType"}>No Type</option>
                        {this.props.todoTypes.map(makeOption)}
                        <option value={"newType"}> Add new Type </option>
                    </FormControl>
                </FormGroup>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        )
    }
}
const mapStateToProps = (state) => ({
    todoTypes: state.todoTypes,
    user: state.user
});
export default connect(mapStateToProps)(AddTodoForm);
