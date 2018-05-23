import * as types from './../types';
import { sendTransactionRequest } from './../api';

/***************************************** Fetch blocks *****************************************/


/***************************************** Fetch block *****************************************/


/************************************** Send transaction *************************************/
export function sendTransactionSuccess(res) {
	return {
		type: types.SEND_TRANSACTION_SUCCESS,
		message: res.message,
		data: res.course
	};
}

export function sendTransactionFailure(data) {
	return {
		type: types.SEND_TRANSACTION_FAILURE,
		id: data.id,
		error: data.error
	};
}

export function sendTransactionAction(data) {
	return (dispatch) => {
		if (!data) return;

		sendTransactionRequest(data)
			.then((res) => {
				if (res.status === 200) return dispatch(sendTransactionSuccess(res.data));
			})
			.catch((err) => {
				if (err.message) return dispatch(sendTransactionFailure({error: 'Something went wrong'}));
			});
	};
}
