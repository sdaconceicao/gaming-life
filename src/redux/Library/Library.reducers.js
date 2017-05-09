import {actions} from './Library.actions';

export default function libraryReducers ( state= {}, action){
    switch (action.type){
        case actions.LIBRARY_GET:
            return Object.assign({}, state, {library: action.library});
        case actions.CONSOLES_GET:
            return Object.assign({}, state, {consoles: action.consoles});
        case actions.CATEGORIES_GET:
            return Object.assign({}, state, {categories: action.categories});
        case actions.GAMES_GET:
            return Object.assign({}, state, {games: action.games});
        case actions.GAME_SAVE:
            return Object.assign({}, state, {game: action.game});
        case actions.GAME_DELETE:
            return Object.assign({}, state, {game: null});
        default:
            return state;
    }
}
