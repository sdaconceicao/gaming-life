import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {Login} from '../Login';

export const AppPublic = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login}/>
        </Switch>
    </main>
)