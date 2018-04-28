import React from 'react';
import {Route, Router, IndexRedirect, browserHistory as history} from 'react-router';
import App from './components/App/App';

const Routes = (
    <Router history={history}>
        <Route path="/" component={App}>
            
        </Route>
    </Router>
);

export default Routes;
export {browserHistory as history} from 'react-router';

