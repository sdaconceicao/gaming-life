import axios from 'axios';

export const actions = {
    LIBRARY_GET: 'LIBRARY_GET',
    CONSOLES_GET: 'CONSOLES_GET',
    CATEGORIES_GET: 'CATEGORIES_GET',
    GAMES_GET: 'GAMES_GET',
    GAME_SAVE: 'GAME_SAVE',
    GAME_DELETE: 'GAME_DELETE',
};

export function getLibrarySuccess(library){
    return {type: actions.CONSOLES_GET, library};
}

export function getLibrary() {
    return function(dispatch) {
        return axios.get('/library').then((response)=>{
            dispatch(getLibrarySuccess(response.data.data));
        }).catch(error=>{
            throw(error);
        })
    }
}


export function getConsolesSuccess(consoles){
    return {type: actions.CONSOLES_GET, consoles};
}

export function getConsoles() {
    return function(dispatch) {
        return axios.get('/consoles').then((response)=>{
            dispatch(getConsolesSuccess(response.data.data));
        }).catch(error=>{
            throw(error);
        })
    }
}

export function getCategoriesSuccess(categories){
    return {type: actions.CATEGORIES_GET, categories};
}

export function getCategories() {
    return function(dispatch) {
        return axios.get('/categories').then((response)=>{
            dispatch(getCategoriesSuccess(response.data.data));
        }).catch(error=>{
            throw(error);
        })
    }
}

export function getGamesSuccess(games){
    return {type: actions.GAMES_GET, games};
}

export function getGames(console = 'all') {
    return function(dispatch) {
        return axios.get(`${console}/games`).then((response)=>{
            dispatch(getGamesSuccess(response.data.data));
        }).catch(error=>{
            throw(error);
        })
    }
}

export function saveGamesSuccess(game){
    return {type: actions.GAME_SAVE, game};
}

export function saveGame(game){
    return function(dispatch) {
        return axios.put(`game`, {game}).then((response)=>{
            dispatch(saveGamesSuccess(response.data.data));
        }).catch(error=>{
            throw(error);
        })
    }
}


export function deleteGamesSuccess(){
    return {type: actions.GAME_DELETE};
}

export function deleteGame(game){
    return function(dispatch) {
        return axios.delete(`game`, {game}).then((response)=>{
            dispatch(deleteGamesSuccess(response.data.data));
        }).catch(error=>{
            throw(error);
        })
    }
}


