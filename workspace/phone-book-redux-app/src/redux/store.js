// a store is created by combining all reducers that we have in our application
import { combineReducers, legacy_createStore as createStore } from 'redux';
import phonebookReducer from './reducers/phonebookReducer';

export default createStore(
  combineReducers({
    phonebookReducer,
  })
);
