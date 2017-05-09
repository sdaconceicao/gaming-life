import React from 'react';
import {actions} from './Authenticate.actions';
import authReducers from './Authenticate.reducers';
import * as authMock from '../../mocks/Authenticate.mock';
import expect from 'expect';

describe('Login Reducers', function(){

    const account = authMock.loginSuccess;

    it('returns the default state back if action not found', ()=>{
        const state = {back: true};
        expect(authReducers(undefined, {})).toEqual({});
    });

    describe('login action', ()=>{

        it('sets the authenticated value to true on authentication', ()=>{
            const returnedAction = authReducers({account},
                {type: actions.APP_LOGIN});
            expect(returnedAction.authenticated).toEqual(true);
        });

    });

    describe('logout action', ()=>{

        it('clears the account on logout', ()=>{
            const returnedAction = authReducers({account},
                {type: actions.APP_LOGOUT});
            expect(returnedAction.account).toEqual(null);
            expect(returnedAction.authenticated).toEqual(false);
        });

    });

});