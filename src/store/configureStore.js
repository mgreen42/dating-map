import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import gameListReducer from '../reducers/gameList';
import progressReducer from '../reducers/progress';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      games: gameListReducer,
      progress: progressReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
