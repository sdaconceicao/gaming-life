import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import history from '../../history';
import {appLogin} from '../../redux/Authenticate/Authenticate.actions';
import {getLibrary} from '../../redux/Library/Library.actions';
import Spinner from '../Common/Spinner/Spinner';
import I18nText from '../Common/I18nText/I18nText';
import InlineInput from '../Common/Forms/InlineInput/InlineInput';
import './Login.scss';

export class Login extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            loading: false,
            authenticating: false,
            error: false,
        };
        this.login = this.login.bind(this);
    }

    toString(){
        return 'Login Component'
    }

    componentWillReceiveProps(nextProps){
        console.log(`${this.toString()} -- componentWillReceiveProps`, nextProps);
        if(nextProps.authenticated){
            this.setState({loading: true, authenticating: false});
            this.props.actions.getLibrary();
            history.push("/home");
        } else {
            this.setState({authenticating: false, error: true});
        }
    }

    login( event ) {
        event.preventDefault();
        this.setState({authenticating: true});
        this.props.actions.appLogin({username: this.username, password: this.password});
    }

    render() {
        const {error, loading, authenticating} = this.state;
        return (
            <div className="app-login-container" >
                { !loading &&
                    <div className="app-login">
                        <img className="app-login-logo"  alt="Gaming Life Logo" />
                        <form id="form-login" onSubmit={this.login}>
                            <InlineInput value={this.username}
                                         edit={true}
                                         className="form-property"
                                         name="username"
                                         onChange={this.onChange}
                                         label="login.username.label"/>
                            <InlineInput value={this.password}
                                         edit={true}
                                         className="form-property"
                                         name="password"
                                         type="password"
                                         onChange={this.onChange}
                                         label="login.password.label"/>
                            <button className="btn primary" type="submit">
                                {authenticating && <span>Logging in....</span>}
                                {!authenticating && <I18nText id="login.submit.button"/>}
                            </button>
                        </form>
                    </div>
                }
                { loading &&
                    <div className="app-login loading">
                        <Spinner/>
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        authenticated: state.auth.authenticated
    };
}

function mapDispatchToProps(dispatch) {
    let actions = Object.assign({}, { appLogin: appLogin, getLibrary: getLibrary });
    return {
        actions: bindActionCreators( actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);