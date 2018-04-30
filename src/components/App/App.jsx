import React, { Component } from 'react';
import {AppHeader} from './AppHeader';
import {AppContent} from './AppContent';
import './App.scss';


export class App extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <div className="app-content">
                <AppHeader/>
                <AppContent/>
            </div>
        );
    }
}


export default App;
