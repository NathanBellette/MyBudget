import { combineReducers } from 'redux';
import sideMenuReducer from './sideMenuReducer';
import userMenuReducer from './userMenuReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
   sideMenuOpen: sideMenuReducer,
   userMenuOpen: userMenuReducer,
   categories: categoryReducer
});

export default rootReducer;
