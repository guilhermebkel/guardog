import * as express from "express"

import SiteController from "~/Controllers/Site"

const app = express.Router()

const routes = [app.post("/site", SiteController.subscribeSite)]

export default routes
