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
		sendTransaction: (address, amount) => localClient.request({
			method: 'POST',
			url: '/api/sendTransaction/',
			data: { address, amount }
		}),
		mineBlock: () => localClient.request({
			method: 'POST',
			url: '/api/mineBlock/'
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
		}),

		// Transaction Pool:
		getTransactionPool: () => localClient.request({
			method: 'GET',
			url: '/api/gettransactionpool/'
		})
	};
}
