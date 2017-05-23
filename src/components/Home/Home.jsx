import React, {Component} from 'react';
import history from '../../history';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/App/App.actions';

export class Home extends Component {

    toString() {
        return 'Home Component'
    }

    componentDidMount() {
        console.log(`${this.toString()} -- componentDidMount`);
        this.props.actions.setHome(true);
    }

    render() {
        return (
            <div>
                Home
            </div>
        );
    }
};


function mapStateToProps(state, ownProps) {
    return {
        back: state.app.back
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);