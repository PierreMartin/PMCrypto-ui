import { combineReducers } from 'redux';
import * as types from './../types';

const address = (state = '', action) => {
	switch (action.type) {
		case types.GET_ADDRESS_SUCCESS:
			if (action.address) return action.address;
			return state;
		case types.GET_ADDRESS_FAILURE:
			return state;
		default:
			return state;
	}
};

const courseReducer = combineReducers({
	address
});

export default courseReducer;
