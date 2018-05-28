import * as types from './../types';
import { fetchAddressRequest, fetchBalanceRequest, fetchTransactionPoolRequest } from './../api';

const getMessage = res => res.response && res.response.data && res.response.data.message;

/***************************************** Fetch address *****************************************/
export function fetchAddressSuccess(res) {
	return {
		type: types.GET_ADDRESS_SUCCESS,
		messageServer: res.messageServer,
		address: res.address
	};
}

export function fetchAddressFailure(messageServer) {
	return {
		type: types.GET_ADDRESS_FAILURE,
		messageServer
	};
}

export function fetchAddressAction() {
	return (dispatch) => {
		fetchAddressRequest()
			.then((res) => {
				if (res.status === 200) return dispatch(fetchAddressSuccess(res.data));
			})
			.catch((err) => {
				if (err.message) return dispatch(fetchAddressFailure(getMessage(err)));
			});
	};
}

/***************************************** Fetch balance *****************************************/
export function fetchBalanceSuccess(res) {
	return {
		type: types.GET_BALANCE_SUCCESS,
		messageServer: res.messageServer,
		balance: res.balance
	};
}

export function fetchBalanceFailure(messageServer) {
	return {
		type: types.GET_BALANCE_FAILURE,
		messageServer
	};
}

export function fetchBalanceAction() {
	return (dispatch) => {
		fetchBalanceRequest()
			.then((res) => {
				if (res.status === 200) return dispatch(fetchBalanceSuccess(res.data));
			})
			.catch((err) => {
				if (err.message) return dispatch(fetchBalanceFailure(getMessage(err)));
			});
	};
}

/***************************************** Fetch TransactionPool *****************************************/
export function fetchTransactionPoolSuccess(res) {
	return {
		type: types.GET_TRANSACTION_POOL_SUCCESS,
		messageServer: res.messageServer,
		transactionPool: res.transactionPool
	};
}

export function fetchTransactionPoolFailure(messageServer) {
	return {
		type: types.GET_TRANSACTION_POOL_FAILURE,
		messageServer
	};
}

export function fetchTransactionPoolAction() {
	return (dispatch) => {
		fetchTransactionPoolRequest()
			.then((res) => {
				if (res.status === 200) return dispatch(fetchTransactionPoolSuccess(res.data));
			})
			.catch((err) => {
				if (err.message) return dispatch(fetchTransactionPoolFailure(getMessage(err)));
			});
	};
}
