import Server from "boot/server"
import Database from "boot/database"
import Queue from "boot/queue"

class Boot {
	public async start() {
		await Database.start()
		Server.start()
		Queue.start()
	}
}

export default new Boot()
