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

const balance = (state = 0, action) => {
	switch (action.type) {
		case types.GET_BALANCE_SUCCESS:
			if (action.balance) return action.balance;
			return state;
		case types.GET_BALANCE_FAILURE:
			return state;
		case types.MINE_BLOCK_SUCCESS:
			if (action.amount) return state + action.amount;
			return state;
		default:
			return state;
	}
};

const transactionPool = (state = [], action) => {
	switch (action.type) {
		case types.GET_TRANSACTION_POOL_SUCCESS:
			if (action.transactionPool) return action.transactionPool;
			return state;
		case types.GET_TRANSACTION_POOL_FAILURE:
			return state;
		default:
			return state;
	}
};

const courseReducer = combineReducers({
	address,
	balance,
	transactionPool
});

export default courseReducer;
