import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';

export class AppHeader extends Component {

    render() {

        return (
            <AppBar title="My Gaming Life" leftIcon="menu" >
                <Navigation type="horizontal">

                </Navigation>
            </AppBar>
        );
    }
}