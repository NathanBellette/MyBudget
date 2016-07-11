import React, {Component, PropTypes} from 'react';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/menuActions';
import {Link} from 'react-router';

class UserMenu extends Component{
    constructor(props){
        super(props);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    handleRequestClose(){
        console.log('Menu closed');
    }

    render(){
        return (
            <Popover
                open={this.props.menuOpen}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.handleRequestClose}>

                <Menu>
                    <MenuItem primaryText="Profile" />
                    <MenuItem primaryText="Settings" />
                    <Divider />
                    <MenuItem primaryText="Sign out" />
                </Menu>
            </Popover>
        );
    }
}

UserMenu.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    anchorElement: PropTypes.string.isRequired
};

function mapStateToProps(state){
    return {
        menuOpen: state.userMenuOpen
    };
}

export default connect(mapStateToProps)(UserMenu);