import { combineReducers } from 'redux';
import sideMenuReducer from './sideMenuReducer';
import userMenuReducer from './userMenuReducer';

const rootReducer = combineReducers({
   sideMenuOpen: sideMenuReducer,
   userMenuOpen: userMenuReducer
});

export default rootReducer;
