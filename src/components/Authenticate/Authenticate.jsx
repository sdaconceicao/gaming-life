import {Component} from 'react';
import {connect} from 'react-redux';
import history from '../../history';

export class Authenticate extends Component {

    componentDidMount() {
        const { authenticated } = this.props;

        if ( ! authenticated) {
            history.replace("/login");
        }
    }

    render() {
        const { authenticated } = this.props;
        if (authenticated) {
            return this.props.children
        } else {
            return null
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Authenticate)