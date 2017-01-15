import React from 'react';
import TextField from 'material-ui/TextField';
import Planner from './Planner';

const ExpensePlanningPage = () => {
    return (
        <div>
            <h1>Expense planning</h1>
            <Planner/>
            <TextField
                hintText="Hint Text"
                floatingLabelText="Floating Label Text"
            />
        </div>
    );
};

export default ExpensePlanningPage;