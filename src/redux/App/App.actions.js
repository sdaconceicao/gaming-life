export const actions = {
    APP_SET_HOME: 'APP_SET_HOME',
    APP_SET_CONTENT: 'APP_SET_CONTENT'
};

export function setHomeSuccess(home) {
    return {type: actions.APP_SET_HOME, home};
}

export function setHome(home){
    return function(dispatch) {
        dispatch(setHomeSuccess(home));
    }
}

export function setContentSuccess(content){
    return {type: actions.APP_SET_CONTENT, content};
}

export function setContent(content){
    return function(dispatch) {
        dispatch(setContentSuccess(content));
    }
}