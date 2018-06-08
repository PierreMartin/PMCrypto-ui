import * as types from './../types';
import { sendTransactionRequest } from './../api';

const getMessage = res => res.response && res.response.data && res.response.data.messageServer;

/***************************************** Fetch blocks *****************************************/


/***************************************** Fetch block *****************************************/


/************************************** Send transaction *************************************/
export function sendTransactionSuccess(res) {
	return {
		type: types.SEND_TRANSACTION_SUCCESS,
		messageServer: res.messageServer,
		transactionSended: res.transactionSended
	};
}

export function sendTransactionFailure(messageServer) {
	return {
		type: types.SEND_TRANSACTION_FAILURE,
		messageServer
	};
}

export function sendTransactionAction(address, amount) {
	return (dispatch) => {
		if (!address || !amount) return;

		sendTransactionRequest(address, amount)
			.then((res) => {
				if (res.status === 200) return dispatch(sendTransactionSuccess(res.data));
			})
			.catch((err) => {
				if (err.message) return dispatch(sendTransactionFailure(getMessage(err)));
			});
	};
}
