import { combineReducers } from 'redux';
import * as types from './../types';

const addBlock = (state = {}, action) => {
	switch (action.type) {
		case types.CREATE_COURSE_SUCCESS:
			return action.data;
		default:
			return state;
	}
};

const blocks = (state = [], action) => {
	switch (action.type) {
		case types.GET_COURSES_SUCCESS:
			if (action.data) return action.data;
			return state;
		case types.GET_COURSES_FAILURE:
			if (action.data) return action.data;
			return state;
		case types.CREATE_COURSE_SUCCESS:
			return [...state, addBlock(undefined, action)];
		case types.CREATE_COURSE_FAILURE:
			return state.filter(t => t.id !== action.id);
		default:
			return state;
	}
};

const courseReducer = combineReducers({
	blocks
});

export default courseReducer;
