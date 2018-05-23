import * as types from './../types';
import { fetchAddressRequest } from './../api';

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
// ...
