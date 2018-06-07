import React, { Component, Fragment } from 'react';

import {AppHeader} from './AppHeader';
import {AppContent} from './AppContent';
import { Public } from '../Routes';
import './App.scss';

export class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {authenticated: true};
    }

    render() {

        const {authenticated} = this.state;
        return (
            <div className="app">
                {authenticated &&
                    <Fragment>
                        <AppHeader/>
                        <AppContent/>
                    </Fragment>
                }
                {!authenticated &&
                    <Public/>
                }
            </div>
        );
    }
}


export default App;
