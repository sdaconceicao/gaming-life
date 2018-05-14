import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import theme from './AppHeader.scss';

export class AppHeader extends Component {

    render() {

        return (
            <AppBar title="My Gaming Life" leftIcon="menu" theme={theme}/>
        );
    }
}