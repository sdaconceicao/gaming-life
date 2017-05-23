import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import history from '../../../../history';
import {Link} from 'react-router';
import I18nText from '../../../Common/I18nText/I18nText';
import * as appActions from '../../../../redux/App/App.actions';
import * as authActions from '../../../../redux/Authenticate/Authenticate.actions';
import FaHome from 'react-icons/lib/fa/home';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';
import ProfileIcon from '../../../Common/ProfileIcon/ProfileIcon';
import './AppHeader.scss';

export class AppHeader extends Component {

    constructor(props, context){

        super(props, context);
        this.goBack = this.goBack.bind(this);

        this.state = {
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

    render() {
        const {account, content, back} = this.state;
        return (
            <header className="app-header fixed-top">
                <nav className="app-header-nav">
                    <div className="app-header-nav-controls">
                        {back && content && <button className="app-header-btn app-header-btn-back" onClick={this.goBack}><FaArrowLeft/></button>}
                        {content && <button className={`app-header-btn app-header-btn-home ${back && 'back-enabled'}`} onClick={this.goHome}><FaArrowLeft/></button>}
                    </div>
                    <div className="app-header-nav-title">
                        {content && <I18nText type="h1" id={content.label} />}
                    </div>
                    <div className="app-header-nav-profile">
                        {account && <ProfileIcon className="app-header-btn " account={account} />}
                    </div>
                </nav>
                <nav className="app-header-menu">
                    <ul>
                        <li>
                            <Link className="app-header-menu-entry"
                                  activeClassName="active"
                                  to={{pathname: `/home/`}}>
                                <I18nText className="app-header-menu-entry-txt" id="app.nav.home"/>
                                <FaHome className="app-header-menu-entry-icon"/>
                            </Link>
                        </li>
                    </ul>
                </nav>

            </header>
        );
    }
}

AppHeader.propTypes = {
    back: PropTypes.bool,
    account: PropTypes.object,
    content: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        back: state.app.back,
        account: state.auth.account,
        content: state.app.content
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...appActions, ...authActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);