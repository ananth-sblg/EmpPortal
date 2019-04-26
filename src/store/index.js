import { createStore, combineReducers } from 'redux';
import employeeReducers from './reducers/employeeReducers';
import logInReducers from './reducers/logInReducers';



const store = createStore(combineReducers({
    employeesList: employeeReducers,
    isLoggedIn: logInReducers
}));

export default store;