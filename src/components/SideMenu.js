import React, {Component, PropTypes} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/menuActions';
import {Link} from 'react-router';

class SideMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Drawer open={this.props.menuOpen}
                    containerStyle={{'position': 'absolute', 'top': '64px'}}>
                <MenuItem
                    containerElement={<Link to="/expense-planning" />}
                    >Expense Planning</MenuItem>
                <MenuItem
                    containerElement={<Link to="/log-expenses" />}
                    >Log Expenses</MenuItem>
                <Divider />
                <MenuItem
                    containerElement={<Link to="/about" />}
                    >About</MenuItem>
                <MenuItem
                    containerElement={<Link to="/contact" />}
                    >Contact</MenuItem>
            </Drawer>
        );
    }
}

SideMenu.propTypes = {
    menuOpen: PropTypes.bool.isRequired
};

function mapStateToProps(state){
    return {
        menuOpen: state.sideMenuOpen
    };
}

export default connect(mapStateToProps)(SideMenu);