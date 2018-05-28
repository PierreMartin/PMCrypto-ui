import restApiClient from './../middlewares/restApiClient';

export function api() {
	const localhostUrl = 'http://localhost:3000';
	const localClient = restApiClient().withConfig({ baseURL: localhostUrl });

	return {
		// Blocks :
		getBlocks: () => localClient.request({
			method: 'GET',
			url: '/api/getblocks'
		}),
		getBlockById: id => localClient.request({
			method: 'GET',
			url: '/api/getblock/' + id
		}),
		sendTransaction: data => localClient.request({
			method: 'POST',
			url: '/api/sendTransaction/' + data.id,
			data
		}),

		// address:
		getAddress: () => localClient.request({
			method: 'GET',
			url: '/api/getaddress/'
		}),

		// balance:
		getBalance: () => localClient.request({
			method: 'GET',
			url: '/api/getbalance/'
		})
	};
}
