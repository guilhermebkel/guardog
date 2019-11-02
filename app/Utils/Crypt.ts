import uuidv4 from "uuid/v4"

class Crypt {
	generateHash() {
		const hash = uuidv4()
		const sanitizedHash = hash.replace(/-/g, "")
		return sanitizedHash
	}
}

export default new Crypt()
