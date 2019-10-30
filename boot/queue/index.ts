import q from "queue"

import queueConfig from "config/queue"

class Queue {
	private queue: q = new q(queueConfig)

	constructor() {
		this.reportJobFinish()
		this.reportJobStart()
	}

	public start() {
		console.log(`Queue is running... [${this.queue.length} jobs]`)
	}

	public push(worker: (callback: any) => void) {
		this.queue.push(worker)
	}

	private reportJobFinish() {
		this.queue.on("success", (result: any, job: () => void) => {
			console.log(`[${job.name}] Done!`)
		})
	}

	private reportJobStart() {
		this.queue.on("start", (job: () => void) => {
			console.log(`[${job.name}] Started!`)
		})
	}
}

export default new Queue()
