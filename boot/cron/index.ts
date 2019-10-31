import * as cron from "node-cron"
import jobs from "boot/cron/jobs"

class Cron {
	public start() {
		console.log(`Cron is running... [${jobs.length} jobs]`)
		jobs.map(job =>
			cron.schedule(job.due, () => {
				job.function.start()
			})
		)
	}
}

export default new Cron()
