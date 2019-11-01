import * as express from "express"
import { Response as Res } from "express"

import { ResponseData } from "~/Interfaces/Response"

class Response {
	success: boolean

	deliver(res: Res, code: number, data: ResponseData = {}) {
		if (code > 300) {
			this.success = false
		} else {
			this.success = true
		}

		return res.status(code).json({ ...data, success: this.success })
	}
}

export default new Response()
