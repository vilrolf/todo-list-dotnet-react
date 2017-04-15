import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { baseUrl } from '../Constants'
import { addTodo, apiAddTodo } from '../actions'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

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
            
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state: state
});
export default connect(mapStateToProps)(TodoScreen);
