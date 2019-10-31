import Site from "~/Models/Site"
import PingService from "~/Services/Ping"
import Queue from "boot/queue"

class PingJob {
	async start() {
		const sites = (await Site.findAll({ raw: true })) as Site[]

		sites.map((site: Site) => {
			Queue.push(function pingApp(callback) {
				console.log(`[pingApp] ${site.url}`)
				PingService.pingApp(site.url, callback)
			})
		})
	}
}

export default new PingJob()
