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

export const createBlockRequest = (data) => {
	return api().createBlock(data)
		.then((res) => {
			if (res.status === 200) return Promise.resolve(res);
		})
		.catch((err) => {
			return Promise.reject(err);
		});
};

/********************************************** Third API ***********************************************/
export const getFilmsRequest = (/*params, store*/) => {
	return api().getFilms()
		.then((res) => {
			if (res.status === 200) {
				console.log(res.data);
				// store.dispatch({/* ... */});
			}
		})
		.catch((err) => {
			console.error(err);
			// store.dispatch({/* ... */});
		});
};
