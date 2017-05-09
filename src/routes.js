import React from 'react';
import {Route, Router, IndexRedirect} from 'react-router';
import history from './history';
import App from './components/App/App';
import Authenticate from './components/Authenticate/Authenticate';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

const Routes = (
    <Router history={history}>
        <Route path="/" component={App}>
            <Route path="/login" component={Login} />
            <Route component={Authenticate}>
                <IndexRedirect to="/home" />
                <Route path="/home" component={Home} />
                <Route path="/profile(/:edit)" component={Profile} />
            </Route>
        </Route>
    </Router>
);

export default Routes;