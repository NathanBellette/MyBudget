import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ExpensePlanningPage from './components/ExpensePlanningPage';
import LogExpensesPage from './components/LogExpensesPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="home" component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="contact" component={ContactPage}/>
        <Route path="expense-planning" component={ExpensePlanningPage}/>
        <Route path="log-expenses" component={LogExpensesPage}/>
    </Route>
);
