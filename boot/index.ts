import Server from "boot/server"
import Database from "boot/database"

class Boot {
	public async start() {
		await Database.start()
		await Server.start()
	}
}

export default new Boot()
