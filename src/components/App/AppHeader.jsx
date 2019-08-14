import React, { Component } from 'react';

import {Button} from '../Common/Form';

import './AppHeader.scss';

export class AppHeader extends Component {

    render() {

        return (
            <header className="app-header">
                <div className="col-9">
                    <Button className="menu"></Button>
                    <span className="logo"> My Gaming Life</span>
                </div>
                <div className="right-nav col-3">

                </div>
            </header>
        );
    }
}