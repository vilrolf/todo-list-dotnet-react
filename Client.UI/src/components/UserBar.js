import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import User from './User'
import { Navbar, Form, FormControl, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap'

class UserBar extends React.Component {
    constructor(props) { // .state.user.Id
        super(props);

    }
    render() {

        const user = this.props.user;
        const userLoaded = (user.Email != null)
        console.log("USER", userLoaded)
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        {userLoaded ? <User /> : <Login style={{marginRight: 20, marginTop: 5}} /> }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                )
    }
}
const mapStateToProps = (state) => ({
                    user: state.user
});
export default connect(mapStateToProps)(UserBar);
