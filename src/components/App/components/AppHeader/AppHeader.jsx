import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import history from '../../../../history';
import I18nText from '../../../Common/I18nText/I18nText';
import * as appActions from '../../../../redux/App/App.actions';
import * as authActions from '../../../../redux/Authenticate/Authenticate.actions';
import {FaArrowLeft} from 'react-icons/lib/fa';
import ProfileIcon from '../../../Common/ProfileIcon/ProfileIcon';
import './AppHeader.scss';

export class AppHeader extends Component {

    constructor(props, context){

        super(props, context);
        this.goHome = this.goHome.bind(this);
        this.goBack = this.goBack.bind(this);

        this.state = {
            app: props.app,
            back: props.back,
            account: props.account,
            content: props.content
        };
    }

    toString() {
        return 'AppHeaderNav Component'
    }

    componentWillReceiveProps(nextProps) {
        console.log(`${this.toString()} -- componentWillReceiveProps`, nextProps);
        this.setState({back: nextProps.back});
        if (nextProps.content !== this.state.content) {
            this.setState({content: nextProps.content});
        }
        if (nextProps.account !== this.state.account) {
            this.setState({account: nextProps.account});
        }
    }

    goBack() {
        history.goBack();
    }

    goHome() {
        history.push('/home');
    }

    render() {
        const {account, content, back} = this.state;
        return (
            <header className="app-header fixed-top">
                <nav className="app-header-nav-controls">
                    {back && content && <button className="app-header-btn app-header-btn-back" onClick={this.goBack}><FaArrowLeft/></button>}
                    {content && <button className={`app-header-btn app-header-btn-home ${back && 'back-enabled'}`} onClick={this.goHome}><FaArrowLeft/></button>}
                </nav>
                <div className="app-header-nav-title">
                    {content && <I18nText type="h1" id={content.label} />}
                </div>
                <nav className="app-header-nav">
                    {account && <ProfileIcon className="app-header-btn " account={account} />}
                </nav>
            </header>
        );
    }
}

AppHeader.propTypes = {
    app: PropTypes.object,
    back: PropTypes.bool,
    account: PropTypes.object,
    content: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        app: state.authReducers.app,
        back: state.appReducers.back,
        account: state.authReducers.account,
        content: state.appReducers.content
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...appActions, ...authActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);