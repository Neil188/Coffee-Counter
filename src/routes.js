import React from 'react';
import { HashRouter as Router, Route, hashHistory, Switch } from 'react-router-dom';

import App from './components/App';
import Whoops404 from './components/Whoops404';


const Routes = () =>
    <Router history={hashHistory} >
        <Switch>
            <Route exact path='/' component={App} />

            <Route path='/list-days/:filter' component={App}/>
            <Route path='/list-days' component={App} />

            <Route path='/add-coffee' component={App} />

            <Route path='*' component={Whoops404} />
        </Switch>
    </Router>

export default Routes;