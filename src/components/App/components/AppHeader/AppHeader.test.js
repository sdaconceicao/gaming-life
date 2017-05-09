import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import * as authMock from '../../../../mocks/Authenticate.mock';
import * as libMock from '../../../../mocks/Library.mock';
import {AppHeader} from './AppHeader';

function setup(back = false){
    const props = {
        back,
        account: authMock.loginSuccess,
        content: libMock.librarySuccess
    };
    return shallow(<AppHeader {...props} />);
}

describe('AppHeaderNav', ()=> {

    it('renders without crashing', () => {
        const wrapper = setup();
    });

    it('hides the back button if not within a module', () => {
        const wrapper = setup();
        expect(wrapper.find('.app-header-btn-back').length).toEqual(0);
    });

    it('shows the back button if back is true', () => {
        const wrapper = setup(true);
        expect(wrapper.find('.app-header-btn-back').length).toEqual(1);
    });

});