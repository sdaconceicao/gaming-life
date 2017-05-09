import React from 'react';
import {actions} from './App.actions';
import appReducers from './App.reducers';
import expect from 'expect';

describe('App Reducers', function(){

    it('returns the default state back if action not found', ()=>{
        const state = {back: true};
        expect(appReducers(undefined, {})).toEqual({});
    });

    describe('home action', ()=> {
        it('sets back to false when home', () => {
            const returnedAction = appReducers({back: true},
                {type: actions.APP_SET_HOME, home: true});
            expect(returnedAction.back).toEqual(false);
        });

        it('sets back to true when home false', () => {
            const returnedAction = appReducers({back: true},
                {type: actions.APP_SET_HOME, home: false});
            expect(returnedAction.back).toEqual(true);
        });
    });

});