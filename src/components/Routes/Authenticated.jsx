import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Library} from '../Library';

export const Authenticated = () => (
    <Switch>
        <Route exact path='/' component={Library}/>
    </Switch>
);

export default Authenticated;