import React, { Component } from 'react';
import {AppHeader} from './AppHeader';
import {AppContent} from './AppContent';
import {AppMenu} from './AppMenu';
import {AppPublic} from './AppPublic';
import styles from './App.scss';

export class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {authenticated: true};
    }

    render() {

        const {authenticated} = this.state;
        return (
            <div className={styles.main}>
                <AppHeader />
                {authenticated &&
                    <div className={styles.wrapper}>
                        <AppMenu/>
                        <AppContent/>
                    </div>
                }
                {!authenticated &&
                    <AppPublic/>
                }
            </div>
        );
    }
}


export default App;
