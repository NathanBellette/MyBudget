import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/menuActions';

import NavBar from '../components/NavBar';
import UserMenu from '../components/UserMenu';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar toggleSideMenu={this.props.actions.toggleSideMenu}
                        toggleUserMenu={this.props.actions.toggleUserMenu}
                        sideMenuOpen={this.props.sideMenuOpen}
                        userMenuOpen={this.props.userMenuOpen}/>
            </div>
        );
    }
}

Header.propTypes = {
    actions: PropTypes.object.isRequired,
    sideMenuOpen: PropTypes.bool.isRequired,
    userMenuOpen: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        sideMenuOpen: state.sideMenuOpen,
        userMenuOpen: state.userMenuOpen
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);