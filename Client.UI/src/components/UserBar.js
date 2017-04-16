import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import User from './User'
import { Navbar, Form, FormControl, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    browserHistory,
    Route,
    Link
} from 'react-router-dom'

class UserBar extends React.Component {
    constructor(props) { // .state.user.Id
        super(props);

    }
    render() {
        const user = this.props.user;
        const userLoaded = (user.Email != null)
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>To Do </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1}> <Link to={'/'}>Home </Link> </NavItem>
                        <NavItem eventKey={2}> <Link to={'/Users'}>Users </Link> </NavItem>
                    </Nav>
                    <Nav pullRight>
                        {userLoaded ? <User /> : <Login style={{ marginRight: 20, marginTop: 5 }} />}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user,
    state: state
});
export default connect(mapStateToProps)(UserBar);
