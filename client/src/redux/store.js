// filepath: /Users/prem/CODE/fullstack-app/client/src/redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './reducers';

const rootReducer = combineReducers({
    movies: moviesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;