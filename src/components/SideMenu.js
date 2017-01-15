import React, {Component, PropTypes} from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/menuActions';
import {Link} from 'react-router';


class SideMenu extends Component {
    constructor(props) {
        super(props);
    }

    menuItemTapped(item){
        this.context.router.push(`/${item}`);
    }

    // categoryTapped(categoryId){
    //     this.context.router.push(`/expense-planning/${categoryId}`);
    // }

    render() {
        // const getCategories = (categories) => {
        //     return categories.map(category => {
        //             return (
        //                 <ListItem
        //                     key={category.id}
        //                     primaryText={category.title}
        //                     onTouchTap={this.categoryTapped.bind(this, category.id)}
        //                 />
        //             );
        //         }
        //     );
        // };

        return (
            <Drawer open={this.props.menuOpen}
                    containerStyle={{'position': 'absolute', 'top': '64px'}}>
                <List>
                    <ListItem
                        primaryText="Expense Planning"
                        key="expense-planning"
                        onTouchTap={this.menuItemTapped.bind(this, "expense-planning")}
                    />
                    <ListItem
                        primaryText="Log Expenses"
                        key="log-expenses"
                        onTouchTap={this.menuItemTapped.bind(this, 'log-expenses')}
                    />,
                    <Divider />,

                    <ListItem
                        key="about"
                        primaryText="About"
                        onTouchTap={this.menuItemTapped.bind(this, 'about')}
                    />

                    <ListItem
                        key="contact"
                        primaryText="Contact"
                        onTouchTap={this.menuItemTapped.bind(this, 'contact')}
                    />
                </List>

            </Drawer>
        );
    }
}

SideMenu.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    categories: PropTypes.arrayOf(Object).isRequired
};

SideMenu.contextTypes = {
    router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        categories: state.categories,
        menuOpen: state.sideMenuOpen
    };
}

export default connect(mapStateToProps)(SideMenu);