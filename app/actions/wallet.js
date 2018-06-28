import * as types from './../types';
import { fetchAddressRequest, fetchBalanceRequest, fetchTransactionPoolRequest, sendTransactionRequest, mineBlockRequest } from './../api';

const getMessage = res => res.response && res.response.data && res.response.data.messageServer;

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
				if (res.status === 200) {
					dispatch(sendTransactionSuccess(res.data));
					return fetchTransactionPoolRequest(); // add fetchAddressRequest() ??
				}
			})
			.then((res) => { if (res.data) dispatch(fetchTransactionPoolSuccess(res.data)); })
			.catch((err) => { if (err.message) return dispatch(sendTransactionFailure(getMessage(err))); });
	};
}

/************************************** Mine Block *************************************/
export function mineBlockSuccess(res) {
	let amount = 0;
	if (res.newBlock && res.newBlock.data[0] && res.newBlock.data[0].txOuts[0] && res.newBlock.data[0].txOuts[0].amount) {
		amount = res.newBlock.data[0].txOuts[0].amount;
	}

	return {
		type: types.MINE_BLOCK_SUCCESS,
		messageServer: res.messageServer,
		newBlock: res.newBlock,
		amount
	};
}

export function mineBlockFailure(messageServer) {
	return {
		type: types.MINE_BLOCK_FAILURE,
		messageServer
	};
}

export function mineBlockAction() {
	return (dispatch) => {
		mineBlockRequest()
			.then((res) => {
				if (res.status === 200) {
					dispatch(mineBlockSuccess(res.data));
					return fetchTransactionPoolRequest(); // add fetchAddressRequest() ??
				}
			})
			.then((res) => { if (res.data) dispatch(fetchTransactionPoolSuccess(res.data)); })
			.catch((err) => { if (err.message) return dispatch(mineBlockFailure(getMessage(err))); });
	};
}
