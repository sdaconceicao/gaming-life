import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Login} from '../Login';

export const Public = () => (
    <Switch>
        <Route exact path='/' component={Login}/>
    </Switch>
);

export default Public;