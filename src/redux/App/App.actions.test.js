import React from 'react';
import * as appActions from './App.actions';
import expect from 'expect';

describe('App actions', function(){

    it('creates a home action', ()=>{
        const home = false;
        const expectedAction = {
            type: appActions.actions.APP_SET_HOME,
            home
        };

        const action = appActions.setHomeSuccess(home);
        expect(action).toEqual(expectedAction);
    });

});