import React, { Component } from 'react';
import {GameCard} from '../Common/GameCard';
import './Library.scss';


export class Dashboard extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className={"library"}>
                <GameCard title="Test" completed={true} aspect="landscape" image='https://placeimg.com/200/100/nature'/>
                <GameCard title="Test" completed={true} aspect="landscape" image='https://placeimg.com/200/100/nature'/>
                <GameCard title="Test" completed={false} aspect="portrait" image='https://placeimg.com/135/190/nature'/>


            </div>
        );
    }
}


export default Dashboard;
