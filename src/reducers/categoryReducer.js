import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function categoryReducer(state = initialState.categories, action){
    switch (action.type){
        case types.GET_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
}
