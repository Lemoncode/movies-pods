import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';
import { history } from './history';
import { rootReducer } from './reducer';


// Add redux dev tool support
const composeEnhancer = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const sagaMiddleware = createSagaMiddleware();
  
export const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      ReduxThunk,
      sagaMiddleware,
    ),
  ),
);


