import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import intl from 'intl';
import * as enMessage from './translations/en.json';
import Store from './redux/store';
import Routes from './routes';
import axios from 'axios';
import {apiConfig} from './api';
import './styles/index.scss';

if (!global.Intl){
    global.Intl = intl;
}
//MOCKS_ENABLED is set by params passed into build
apiConfig(axios, MOCKS_ENABLED);  // eslint-disable-line no-undef

const StoreInstance = Store();

ReactDOM.render(
    <Provider store={StoreInstance}>
        <IntlProvider locale="en" messages={enMessage}>
            {Routes}
        </IntlProvider>
    </Provider>,
    document.getElementById('root')
);
