import React from 'react';
import {actions} from './Library.actions';
import libReducers from './Library.reducers';
import * as libMock from '../../mocks/Library.mock';
import expect from 'expect';

describe('Library Reducers', function(){

    const library = libMock.librarySuccess;

    it('returns the default state back if action not found', ()=>{
        expect(libReducers(undefined, {})).toEqual({});
    });

    describe('library action', ()=>{

        it('returns the library object', ()=>{
            const returnedAction = libReducers({}, {type: actions.LIBRARY_GET, library});
            expect(returnedAction.library).toEqual(library);
        });

    });


});