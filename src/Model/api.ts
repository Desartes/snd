import Config from './config';

type Params = {
	end_point: String,
	location: String,
	radius: Number,
	type: String,
};

class API {
	getNearbyPlaces: Function;
	fetch(params: Params, cb: Function) {
		// tslint:disable-next-line:max-line-length
		// fetch(Config.googleApi.end_point + '/place/nearbysearch/json?location=49.18618,16.59840&radius=500&type=bar&key=' + Config.googleApi.api_key)
		// tslint:disable-next-line:max-line-length
		fetch(Config.googleApi.end_point + params.end_point + this.getPathFromParams(params) + '&key=' + Config.googleApi.api_key)
		.then((response) => response.json())
		.then((responseJson) => {
			if (responseJson.status === 'OK') {
				cb(responseJson.results);
			}
		})
		.catch((error) => {
			console.error(error);
		});
	}

	getPathFromParams(params: Object) {
		const keys = Object.keys(params);
		const pathsArr: Array<String> = [];
		keys.map((key) => {
			if (key !== 'end_point') {
				pathsArr.push(`${key}=${params[key]}`);
			}
		});
		return pathsArr.join('&');
	}

	getNearByPlaces(cb: Function) {
		const params: Params = {
			end_point: '/place/nearbysearch/json?',
			location: '49.18618,16.59840',
			radius: 500,
			type: 'bar',
		};
		this.fetch(params, (result: Object) => {
			cb(result);
		});
	}
}

const api = new API();
export default api;