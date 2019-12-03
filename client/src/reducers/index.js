import { combineReducers } from 'redux';
import counter from './counter';
import { connectRouter } from 'connected-react-router';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    counter,
  });

export default rootReducer;
