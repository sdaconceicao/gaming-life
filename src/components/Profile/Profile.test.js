import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {mount, shallow} from 'enzyme';
import expect from 'expect';
import {accountSuccess} from '../../mocks/Authenticate.mock';
import {Profile} from './Profile';

describe('Profile', ()=> {

    function setup(edit = false, account = accountSuccess){
        const props = {
            account: account || accountSuccess,
            params: {edit}
        };
        return shallow(<Profile {...props} />);
    }

    describe('view mode', () => {
        const wrapper = setup();
        it('renders the view mode footer', () =>{
            expect(wrapper.find('.profile-footer.edit').length).toEqual(0);
        });
    });

    describe('edit mode', () => {
        const wrapper = setup(true);
        it('renders the edit mode footer', () =>{
            expect(wrapper.find('.profile-footer.edit').length).toEqual(1);
        });
    });


});
