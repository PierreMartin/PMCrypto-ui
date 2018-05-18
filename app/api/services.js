import restApiClient from './../middlewares/restApiClient';

export function api() {
	const localhostUrl = 'http://localhost:3000';
	const swapiUrl = 'https://swapi.co';

	const localClient = restApiClient().withConfig({ baseURL: localhostUrl });
	const swapiClient = restApiClient().withConfig({ baseURL: swapiUrl });

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
		createBlock: data => localClient.request({
			method: 'POST',
			url: '/api/addblock/' + data.id,
			data
		}),
		deleteBlock: id => localClient.request({
			method: 'DELETE',
			url: '/api/block/' + id
		}),
		updateBlock: (id, data) => localClient.request({
			method: 'PUT',
			url: '/api/block/' + id,
			data
		}),

		// Films (example with swapi API) :
		getFilms: () => swapiClient.request({
			method: 'GET',
			url: '/api/films/1/'
		})
	};
}
