import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import * as actions from '../../redux/App/App.actions';
import AppHeader from './components/AppHeader/AppHeader';
import './App.scss';


export class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {authenticated: props.authenticated};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({authenticated: nextProps.authenticated});
    }

    getPosition(string, subString, index) {
        return string.split(subString, index).join(subString).length;
    }

    render() {
        const {authenticated} = this.state;
        const path = (this.props.location && this.props.location.pathname) || '';
        const segments = path.split('/');
        const segment = segments[2] || (segments[1] === 'home' ? 'root' : 'login');
        const key = path.substr(0, this.getPosition(path, '/', 3));
        return (
            <div className="app-content">
                {authenticated && <AppHeader/>}
                <CSSTransitionGroup transitionEnterTimeout={500}
                                    transitionAppearTimeout={500}
                                    transitionLeaveTimeout={500}
                                    transitionName={segment === 'root' ? 'reversePageSwap' :
                                                        segment === 'login' ? 'fadeIn' : 'pageSwap'}
                                    className='app-container'
                                    component='span'
                                    transitionEnter={true}
                                    transitionLeave={true}>
                    {React.cloneElement(this.props.children, {
                        key
                    })}
                </CSSTransitionGroup>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        authenticated: state.authReducers.authenticated
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
