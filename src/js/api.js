import axios from 'axios'
import { setupCache, buildWebStorage } from 'axios-cache-interceptor';

const instance = axios.create({
	baseURL: 'https://www.swapi.tech/api/'
})

// persist on refresh and expire after 1 hour
const api = setupCache(instance, {
	storage: buildWebStorage(localStorage, 'axios-cache:'),
	ttl: 36000000
})

export default {
	async fetchFilms() {
		try {
			const response = await api.get("/films")
			console.log(response.cached)

			return response.data
		} catch (error) {
			console.error('Error fetching films', error)
		}
	},

	async fetchPeopleOrVehicles(path) {
		try {
			const response = await api.get(path)
			const results = response.data.results

			const detailPromises = results.map(record => api.get(record.url))
			const detailResponses = await Promise.all(detailPromises)

			// order is preserved in Promise.all
			const detailResults = detailResponses.map((response) => response.data)
			response.data.results = detailResults
			return response.data
		} catch (error) {
			console.error('Error fetching people/vehicles', error)
		}
	},

	async fetchRecord(path) {
		try {
			const response = await api.get(path)
			console.log(response.cached)

			return response.data
		} catch (error) {
			console.error('Error fetching record', error)
		}
	},
}