import { Sequelize } from "sequelize"

import databaseConfig from "config/database"

class Database {
	private postgres: Sequelize

	public async start() {
		this.setupPostgres()
		await this.testPostgresConnection()
	}

	private setupPostgres() {
		const config = databaseConfig.POSTGRES
		const uri = `postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`
		this.postgres = new Sequelize(uri, config.options)
	}

	private async testPostgresConnection() {
		try {
			await this.postgres.authenticate()
			console.log(`Connected to Postgres... [${process.env.POSTGRES_HOST}]`)
		} catch (error) {
			console.log("[ERROR] Postgres connection: ", error.message)
		}
	}
}

export default new Database()
