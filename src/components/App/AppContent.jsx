import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {Dashboard} from '../Dashboard/Dashboard';

export const AppContent = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Dashboard}/>
        </Switch>
    </main>
)