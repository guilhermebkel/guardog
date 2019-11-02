import Validation from "~/Utils/Validation"

import { SiteSubscriptionPayload } from "~/Interfaces/Site"

import Site from "~/Models/Site"

class SiteService {
	async subscribeSite(payload: SiteSubscriptionPayload) {
		const { url, bedtime, bedtime_due } = payload

		const siteSubscriptionExists = await Validation.siteSubscriptionExists(url)

		if (siteSubscriptionExists) {
			if (!bedtime || !bedtime_due) {
				return false
			}

			await Site.update({ bedtime, bedtime_due }, { where: { url } })
			return true
		} else {
			await Site.create({ url, bedtime, bedtime_due })
			return true
		}
	}

	async unsubscribeSite(url: string) {
		try {
			await Site.destroy({ where: { url } })
			return true
		} catch (error) {
			return false
		}
	}
}

export default new SiteService()
