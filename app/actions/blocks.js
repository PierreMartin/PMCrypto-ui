import * as types from './../types';
import { createBlockRequest } from './../api';


/************************ Create block ***********************/
export function typingCreateBlockAction(text) {
	return {
		type: types.TYPING_CREATE_COURSE_ACTION,
		typingCurrentValue: text
	};
}

export function createBlockSuccess(res) {
	return {
		type: types.CREATE_COURSE_SUCCESS,
		message: res.message,
		data: res.course
	};
}

export function createBlockFailure(data) {
	return {
		type: types.CREATE_COURSE_FAILURE,
		id: data.id,
		error: data.error
	};
}

export function createBlockAction(data) {
	return (dispatch/*, getState*/) => {
		if (!data) return;

		createBlockRequest(data)
			.then((res) => {
				if (res.status === 200) return dispatch(createBlockSuccess(res.data));
			})
			.catch((err) => {
				if (err.message) return dispatch(createBlockFailure({error: 'Something went wrong'}));
			});
	};
}
