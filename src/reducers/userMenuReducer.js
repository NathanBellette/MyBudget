import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function userMenuReducer(state = initialState.userMenuOpen, action){
    switch(action.type){
        case types.TOGGLE_USER_MENU:
            return action.userMenuOpen;
        default:
            return state;
    }
}