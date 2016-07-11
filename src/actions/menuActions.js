import * as types from '../constants/actionTypes';

export function toggleSideMenu(sideMenuOpen){
    return {type: types.TOGGLE_SIDE_MENU, sideMenuOpen};
}

export function toggleUserMenu(userMenuOpen){
    return {type: types.TOGGLE_USER_MENU, userMenuOpen};
}