import q from "queue"

import queueConfig from "config/queue"

class Queue {
	queue: q = new q(queueConfig)

	constructor() {
		this.reportJobFinish()
		this.reportJobStart()
	}

	start() {
		console.log(`Queue is running... [${this.queue.length} jobs]`)
	}

	push(worker: (callback: any) => void) {
		this.queue.push(worker)
	}

	reportJobFinish() {
		this.queue.on("success", (result: any, job: () => void) => {
			console.log(`[${job.name}] Done!`)
		})
	}

	reportJobStart() {
		this.queue.on("start", (job: () => void) => {
			console.log(`[${job.name}] Started!`)
		})
	}
}

export default new Queue()
