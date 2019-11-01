import Site from "~/Models/Site"
import PingService from "~/Services/Ping"
import Queue from "boot/queue"

import bedtimeConfig from "config/bedtime"

class PingJob {
	async start() {
		const currentHour = new Date().getHours()
		const bedtimeHour = parseInt(bedtimeConfig.time, 36)
		const sites = (await Site.findAll({ raw: true })) as Site[]

		sites
			.filter(
				site =>
					(site.bedtime &&
						site.bedtime_due &&
						// In case the bedtime has reached the expected time
						currentHour > site.bedtime_due + bedtimeHour) ||
					!site.bedtime
			)
			.map(site => {
				Queue.push(function pingApp(callback) {
					console.log(`[pingApp] Pinging - ${site.url}`)
					PingService.pingApp(site.url, callback)
				})
			})
	}
}

export default new PingJob()
