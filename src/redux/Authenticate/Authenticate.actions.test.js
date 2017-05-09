import React from 'react';
import * as loginActions from './Authenticate.actions';
import * as authMock from '../../mocks/Authenticate.mock';
import expect from 'expect';

describe('Login actions', ()=>{

    const account = authMock.loginSuccess;

    describe('login action', ()=>{
        it('creates a authenticated action', ()=>{
            const expectedAction = {
                type: loginActions.actions.APP_LOGIN,
                account
            };
            const action = loginActions.appLoginSuccess(account);
            expect(action).toEqual(expectedAction);
        });
    });

    describe('logout action', ()=>{
        it('creates a logout action', ()=>{
            const expectedAction = {
                type: loginActions.actions.APP_LOGOUT
            };
            const action = loginActions.appLogoutSuccess();
            expect(action).toEqual(expectedAction);
        });
    });


});