import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import reposReducer from './reducers/reposReducer';

const reducers = combineReducers({
    user: userReducer,
    repos: reposReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;