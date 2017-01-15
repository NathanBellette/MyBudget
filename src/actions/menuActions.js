import * as types from '../constants/actionTypes';

export const toggleSideMenu = (sideMenuOpen) => {
    return {type: types.TOGGLE_SIDE_MENU, sideMenuOpen};
};

export const toggleUserMenu = (userMenuOpen) => {
    return {type: types.TOGGLE_USER_MENU, userMenuOpen};
};