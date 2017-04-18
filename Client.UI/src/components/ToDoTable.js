
import React from 'react'
import { connect } from 'react-redux'
import ReactTable from 'react-table'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const columns = [
            {
                header: 'Id',
                accessor: 'Id' // String-based value accessors!
            }, {
                header: 'Title',
                accessor: 'Title' // String-based value accessors!
            }, {
                header: 'Description',
                accessor: 'Description',
                //render: props => <span className='number'>{props.value}</span> // Custom cell components!
            },
            {
                header: 'Type',
                accessor: 'TypeName', // String-based value accessors!

            },
            {
                header: 'User',
                accessor: 'UserName', // String-based value accessors!

            },
            {
                header: 'Done',
                accessor: 'DoneText', // String-based value accessors!

            },]
        const data = this.props.state.todos.map(todo => {  
            let t = Object.assign({}, todo); // To avoid messing with the store.
            t.TypeName = (todo.TypeId) ? this.props.state.todoTypes.find((tt) => tt.Id === todo.TypeId).Title : 'No Type';
            t.UserName = this.props.state.users.find((u) => u.Id === todo.UserId).Name;
            t.DoneText = (todo.Done) ? 'Done' : 'Incomplete';
            return t;
        });
        return (
            <ReactTable
                data={data}
                columns={columns}
                showFilters
            />)
    }
}

const mapStateToProps = (state) => ({
    state: state
});
export default connect(mapStateToProps)(App);
