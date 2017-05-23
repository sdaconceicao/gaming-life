import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../redux/Authenticate/Authenticate.actions';
import * as actions from '../../redux/App/App.actions';
import history from '../../history';
import InlineInput from '../Common/Forms/InlineInput/InlineInput';
import Button from '../Common/Forms/Button';
import ProfileIcon from '../Common/ProfileIcon/ProfileIcon';
import './Profile.scss';

export class Profile extends Component {
    constructor(props, context) {
        super(props, context);
        this.onChange = this.onChange.bind(this);
        this.save = this.save.bind(this);
        this.edit = this.edit.bind(this);
        this.cancel = this.cancel.bind(this);
        this._account =  Object.assign({}, props.account);
        this.state = {account: Object.assign({}, props.account), edit: props.params.edit};
    }

    toString(){
        return 'Profile Component'
    }

    componentDidMount() {
        console.log(`${this.toString()} -- componentDidMount`, this.props);
        this.props.actions.setContent({label:'profile.title'});
    }

    componentWillReceiveProps(nextProps){
        if ( nextProps.location.params && nextProps.location.params !==  this.state.edit){
            this.setState({edit: nextProps.location.params.edit});
        }
    }

    onChange(e) {
        console.log(`${this.toString()} -- onChange`, e.target.name, e.target.value);
        let account = Object.assign({}, this._account);
        account[e.target.name] = e.target.value;
        this._account = Object.assign({}, account);
        this.setState({account: this._account});
    }

    save(){
        this.props.authActions.saveAccount(this._account);
        history.goBack();
    }

    edit(){
        history.push('profile/edit');
    }

    cancel(){
        history.goBack();
    }

    render() {

        const {account, edit} = this.state;
        return (
            <div className="profile container-fluid row">
                <div className="profile-desc col-12 col-md-4 list-group">
                    <ProfileIcon account={account} />
                    {!edit && <div className="profile-name">{account.firstname} {account.lastname}</div>}
                    {edit && <InlineInput value={account.firstname}
                                 edit={edit}
                                 className="list-group-item"
                                 name="firstname"
                                 onChange={this.onChange}
                                 label="profile.firstName.label"/>}
                </div>
                <div className="profile-details col-12 col-md-8 list-group">
                    <InlineInput value={account.email}
                                 edit={edit}
                                 className="list-group-item"
                                 name="email"
                                 onChange={this.onChange}
                                 label="profile.email.label"/>
                </div>
                <div className={`col-12 profile-footer ${edit && 'edit'}`}>
                    {!edit &&
                        <Button className="primary block" name="profile-edit" onClick={this.edit}
                            text={{def: {id: 'profile.edit.button'}}}/>
                    }
                    {edit &&
                        <Button className="secondary" name="profile-cancel" onClick={this.cancel}
                            text={{def: {id: 'common.cancel.button'}}}/>
                        }
                    {edit &&
                    <Button className="primary" name="profile-save" onClick={this.save}
                            text={{def: {id: 'common.save.button'}}}/>
                    }
                </div>
            </div>
        );
    }
}

Profile.propTypes = {
    account: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        account: state.auth.account
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        authActions: bindActionCreators(authActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);