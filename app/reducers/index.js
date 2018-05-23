import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import wallet from './wallet';
import blocks from './blocks';

const rootReducer = combineReducers({
	wallet,
  blocks,
  routing
});

export default rootReducer;
