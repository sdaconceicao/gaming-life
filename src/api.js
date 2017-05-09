import MockAdapter from 'axios-mock-adapter';
import * as authMock from './mocks/Authenticate.mock';
import * as libMock from './mocks/Library.mock';

export function apiConfig(client, mockEnabled = false) {

    if (mockEnabled){
        const mock = new MockAdapter(client, {delayResponse: 500});
        mock.onPost('/login').reply(200, {data: authMock.loginSuccess})
            .onGet('/library').reply(200, {data: libMock.librarySuccess})
            .onGet('/consoles').reply(200, {data: libMock.consolesSuccess})
            .onGet('/categories').reply(200, {data: libMock.categoriesSucces})
            .onGet('/profile').reply(200, {data: authMock.loginSuccess})
            .onPut('/profile').reply(200, {data: authMock.loginSuccess})
            .onAny().passThrough();
        return mock;
    }

}