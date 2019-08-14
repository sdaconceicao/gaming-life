import React from 'react';
import TestUtils from 'react-dom/test-utils';
import {mount} from 'enzyme';
import expect from 'expect';
import { IntlProvider } from 'react-intl';

import I18nText from './I18nText';
import * as enMessage from '../../translations/en.json';

describe('I18n', ()=> {

    function setup(type){
        const props = {
            textId: 'activity.name',
            type
        };
        return mount(
            <IntlProvider locale="en" messages={enMessage}>
                <I18nText {...props} />
            </IntlProvider>);
    }

    it('renders without crashing', () => {
        const wrapper = setup();
    });

    it('renders spans by default', () => {
        const wrapper = setup();
        expect(wrapper.find('span').length).toEqual(1);
    });

    it('renders labels if type=label', () => {
        const wrapper = setup('label');
        expect(wrapper.find('label').length).toEqual(1);
    });
});
