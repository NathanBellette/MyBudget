import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function sideMenuReducer(state = initialState.sideMenuOpen, action){
    switch(action.type){
        case types.TOGGLE_SIDE_MENU:
            return action.sideMenuOpen;
        default:
            return state;
    }
}