import React, { Component } from 'react';
import {AppHeader} from './AppHeader';
import {AppContent} from './AppContent';
import {AppPublic} from './AppPublic';
import './App.scss';


export class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {authenticated: true};
    }

    render() {

        const {authenticated} = this.state;
        return (
            <div className="app-content">
                <AppHeader />
                {authenticated &&
                    <AppContent/>
                }
                {!authenticated &&
                    <AppPublic/>
                }
            </div>
        );
    }
}


export default App;
