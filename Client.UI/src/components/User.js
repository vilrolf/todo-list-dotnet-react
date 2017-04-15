import React from 'react'
import { connect } from 'react-redux'
import { DropdownButton, NavDropdown , MenuItem } from 'react-bootstrap';


class User extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const user = this.props.user;

        return (
            <NavDropdown  style={{marginRight: 15}} bsStyle={'primary'} title={user.Email.toLowerCase()} id="dropDownUser">
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3">Active Item</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Log out</MenuItem>
            </NavDropdown >
        )
    }
}




const mapStateToProps = (state) => ({
    user: state.user
});
export default connect(mapStateToProps)(User);