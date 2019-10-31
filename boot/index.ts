import Server from "boot/server"
import Database from "boot/database"
import Queue from "boot/queue"
import Cron from "boot/cron"

import { version } from "../package.json"

class Boot {
	constructor() {
		console.log(`Guardog v${version}`)
		console.log(`Started... [${process.env.NODE_ENV}]`)
	}

	public async start() {
		await Database.start()
		Server.start()
		Queue.start()
		Cron.start()
	}
}

export default new Boot()
