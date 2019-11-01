import * as Yup from "yup"

import { SiteSubscriptionPayload } from "~/Interfaces/Site"
import Site from "~/Models/Site"

class Validation {
	async isSiteSubscriptionPayloadValid(payload: SiteSubscriptionPayload) {
		const siteSubscriptionPayloadSchema = Yup.object().shape<
			SiteSubscriptionPayload
		>({
			url: Yup.string()
				.url()
				.matches(/herokuapp/),
			bedtime: Yup.bool()
				.notRequired()
				.nullable(),
			bedtime_due: Yup.date()
				.notRequired()
				.nullable()
		})

		try {
			await siteSubscriptionPayloadSchema.validate(payload)
			return true
		} catch (error) {
			return false
		}
	}

	async siteSubscriptionExists(url: string) {
		const siteSubscription = await Site.findOne({ where: { url }, raw: true })

		if (siteSubscription) {
			return true
		} else {
			return false
		}
	}
}

export default new Validation()
