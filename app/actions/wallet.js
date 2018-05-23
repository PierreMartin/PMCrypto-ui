import * as types from './../types';
import { fetchAddressRequest } from './../api';

/***************************************** Fetch address *****************************************/
export function fetchAddressSuccess(res) {
	return {
		type: types.GET_ADDRESS_SUCCESS,
		message: res.message,
		address: res.address
	};
}

export function fetchAddressFailure(data) {
	return {
		type: types.GET_ADDRESS_FAILURE,
		id: data.id,
		error: data.error
	};
}

export function fetchAddressAction() {
	return (dispatch) => {
		fetchAddressRequest()
			.then((res) => {
				if (res.status === 200) return dispatch(fetchAddressSuccess(res.data));
			})
			.catch((err) => {
				if (err.message) return dispatch(fetchAddressFailure({error: 'Something went wrong'}));
			});
	};
}

/***************************************** Fetch balance *****************************************/
// ...
