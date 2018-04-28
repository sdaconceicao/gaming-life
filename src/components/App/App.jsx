import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.scss';


export class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({authenticated: nextProps.authenticated});
    }

    render() {

        return (
            <div className="app-content">
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
