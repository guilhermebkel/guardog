import express from "express"
import { Express } from "express"

import Middlewares from "boot/server/middlewares"

class Server {
	app: Express = express()

	async start() {
		this.setupMiddlewares()
		this.initServer()
	}

	setupMiddlewares() {
		Middlewares.map(middleware => this.app.use(middleware))
	}

	initServer() {
		this.app.listen(process.env.PORT, () => {
			console.log(`Server is running... [PORT ${process.env.PORT}]`)
		})
	}
}

export default new Server()
