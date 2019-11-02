import { Request as Req, Response as Res } from "express"

import Response from "~/Utils/Response"
import Validation from "~/Utils/Validation"

import SiteService from "~/Services/Site"

class SiteController {
	async subscribeSite(req: Req, res: Res) {
		const isSiteSubscriptionPayloadValid = await Validation.isSiteSubscriptionPayloadValid(
			req.body
		)
		if (!isSiteSubscriptionPayloadValid) {
			return Response.deliver(res, 400, { error: "InvalidPayload" })
		}

		const result = await SiteService.subscribeSite(req.body)

		if (result) {
			return Response.deliver(res, 200)
		} else {
			return Response.deliver(res, 500)
		}
	}

	async unsubscribeSite(req: Req, res: Res) {
		const isUrlValid = await Validation.isSiteUrlValid(req.query.url)
		if (!isUrlValid) {
			return Response.deliver(res, 400, { error: "InvalidSiteUrl" })
		}

		const result = await SiteService.unsubscribeSite(req.query.url)

		if (result) {
			return Response.deliver(res, 200)
		} else {
			return Response.deliver(res, 500)
		}
	}
}

export default new SiteController()
