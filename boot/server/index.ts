import express from "express"
import { Express } from "express"

import Middlewares from "boot/server/middlewares"
import routes from "~/routes"

class Server {
	app: Express = express()

	async start() {
		this.setupMiddlewares()
		this.setupRoutes()
		this.initServer()
	}

	setupMiddlewares() {
		Middlewares.map(middleware => this.app.use(middleware))
	}

	setupRoutes() {
		routes.map(route => this.app.use(route))
	}

	initServer() {
		this.app.listen(process.env.PORT, () => {
			console.log(`Server is running... [PORT ${process.env.PORT}]`)
		})
	}
}

export default new Server()
