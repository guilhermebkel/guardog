import express from "express"
import * as path from "path"
import * as ejs from "ejs"
import { Express } from "express"

import middlewares from "boot/server/middlewares"
import routes from "~/routes"

class Server {
	app: Express = express()

	async start() {
		this.setupMiddlewares()
		this.setupRoutes()
		this.setupStaticFiles()
		this.renderStaticFiles()
		this.initServer()
	}

	setupMiddlewares() {
		middlewares.map(middleware => this.app.use(middleware))
	}

	setupRoutes() {
		routes.map(route => this.app.use(route))
	}

	setupStaticFiles() {
		this.app.use(
			express.static(path.join(__dirname, "..", "..", "..", "public"))
		)
		this.app.set("views", path.join(__dirname, "..", "..", "..", "public"))
		this.app.engine("html", ejs.renderFile)
		this.app.set("view engine", "html")
	}

	renderStaticFiles() {
		this.app.use("/", (req, res) => {
			res.render("index.html")
		})
	}

	initServer() {
		this.app.listen(process.env.PORT, () => {
			console.log(`Server is running... [PORT ${process.env.PORT}]`)
		})
	}
}

export default new Server()
