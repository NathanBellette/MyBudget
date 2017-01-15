import React, {Component, PropTypes} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import css from './plannerStyle';

class Planner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a'
        }
    }


    render()
    {
        return (
            <h1>Planner</h1>
        );
    }
}


export default Planner;