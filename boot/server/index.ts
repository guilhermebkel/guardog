import express from "express"
import { Express } from "express"

import Middlewares from "boot/server/middlewares"

class Server {
	private app: Express = express()

	public async start() {
		this.setupMiddlewares()
		this.initServer()
	}

	private setupMiddlewares() {
		Middlewares.map(middleware => this.app.use(middleware))
	}

	private initServer() {
		this.app.listen(process.env.PORT, () => {
			console.log(`Server is running... [PORT ${process.env.PORT}]`)
		})
	}
}

export default new Server()
