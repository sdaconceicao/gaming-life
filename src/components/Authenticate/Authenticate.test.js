import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {Authenticate} from './Authenticate';

describe('App', ()=> {

    function setup(authenticated){
        const props = {
            children: {},
            authenticated: authenticated || false
        };
        return shallow(<Authenticate {...props} />);
    }

    it('does not allow loading if authenticate is set to false', () => {
        const wrapper = setup(false);
        expect(wrapper.node).toEqual(null);
    });

});
