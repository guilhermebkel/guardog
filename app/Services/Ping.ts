import fetch from "node-fetch"

class PingService {
	async pingApp(url: string, callback: () => void) {
		try {
			await fetch(url, {
				method: "GET"
			})
			callback()
		} catch (error) {
			console.log(`[${this.pingApp.name}] Failed to ping - ${url}`)
			callback()
		}
	}
}

export default new PingService()
