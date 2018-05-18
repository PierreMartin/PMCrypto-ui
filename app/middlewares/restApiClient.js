import axios from 'axios';

class RestApiClient {
	constructor(config) {
		this.client = axios.create(config);
	}

	request(options) {
		return this.client.request(options);
	}
}

const restApiClient = () => ({
	withConfig: config => new RestApiClient(config)
});

export default restApiClient;
