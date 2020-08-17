import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import editor from './ducks/editor';

const rootReducer = combineReducers({
  editor
});

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, {}, componseEnhancers(applyMiddleware(thunk)));