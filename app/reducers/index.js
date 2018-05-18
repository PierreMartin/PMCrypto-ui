import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import blocks from './blocks';

const rootReducer = combineReducers({
  blocks,
  routing
});

export default rootReducer;
