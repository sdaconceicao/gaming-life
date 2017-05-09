import {hashHistory, browserHistory} from 'react-router';

let app;
try {
    app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
} catch(e) {
    app = false;
}
let history = app ? hashHistory : browserHistory;

export default history;
