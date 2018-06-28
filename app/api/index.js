import { api } from './services';
import * as types from 'types';

/********************************************** Blocks ***********************************************/
export const fetchBlocksRequest = (params, store) => {
	return api().getBlocks()
		.then((res) => {
			if (res.status === 200) {
				store.dispatch({type: types.GET_COURSES_SUCCESS, data: res.data});
			}
		})
		.catch(() => {
			store.dispatch({type: types.GET_COURSES_FAILURE, message: 'error'});
		});
};

export const fetchBlockRequest = (params, store) => {
	return api().getBlockById(params.id)
		.then((res) => {
			if (res.status === 200) {
				store.dispatch({type: types.GET_COURSE_SUCCESS, data: res.data});
			}
		})
		.catch((err) => {
			store.dispatch({type: types.GET_COURSE_FAILURE, message: err.message});
		});
};

/********************************************** Mine Block ***********************************************/
export const mineBlockRequest = () => {
	return api().mineBlock()
		.then((res) => { if (res.status === 200) return Promise.resolve(res); })
		.catch(err => Promise.reject(err));
};

/********************************************** Send Transaction ***********************************************/
export const sendTransactionRequest = (address, amount) => {
	return api().sendTransaction(address, amount)
		.then((res) => {
			if (res.status === 200) return Promise.resolve(res);
		})
		.catch((err) => {
			return Promise.reject(err);
		});
};

/********************************************** Address ***********************************************/
export const fetchAddressRequest = () => {
	return api().getAddress()
		.then((res) => {
			if (res.status === 200) return Promise.resolve(res);
		})
		.catch((err) => {
			return Promise.reject(err);
		});
};

/********************************************** Balance ***********************************************/
export const fetchBalanceRequest = () => {
	return api().getBalance()
		.then((res) => {
			if (res.status === 200) return Promise.resolve(res);
		})
		.catch((err) => {
			return Promise.reject(err);
		});
};

/********************************************** Transaction Pool ***********************************************/
export const fetchTransactionPoolRequest = () => {
	return api().getTransactionPool()
		.then((res) => {
			if (res.status === 200) return Promise.resolve(res);
		})
		.catch((err) => {
			return Promise.reject(err);
		});
};
