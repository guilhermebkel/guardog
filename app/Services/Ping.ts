import fetch from "node-fetch"

class PingService {
	async pingApp(url: string, callback: () => void) {
		await fetch(url, {
			method: "GET"
		})
		callback()
	}
}

export default new PingService()
