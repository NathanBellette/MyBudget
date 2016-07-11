import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';

class NavBar extends Component{
    constructor(props) {
        super(props);
        this.handleToggleSideMenu = this.handleToggleSideMenu.bind(this);
        this.handleUserMenuToggle = this.handleUserMenuToggle.bind(this);
    }

    handleToggleSideMenu(){
        this.props.toggleSideMenu(!this.props.sideMenuOpen);
    }

    handleUserMenuToggle(){
        this.props.toggleUserMenu(!this.props.userMenuOpen);
    }

    render(){
        return(
            <AppBar title="Money Manager"
                    iconElementRight={<IconButton><MoreVertIcon /></IconButton>}
                    onLeftIconButtonTouchTap={this.handleToggleSideMenu}
                    onRightIconButtonTouchTap={this.handleUserMenuToggle}
            />

        );
    }
}

NavBar.propTypes = {
    toggleSideMenu: PropTypes.func.isRequired,
    toggleUserMenu: PropTypes.func.isRequired,
    sideMenuOpen: PropTypes.bool.isRequired,
    userMenuOpen: PropTypes.bool.isRequired
};

export default NavBar;