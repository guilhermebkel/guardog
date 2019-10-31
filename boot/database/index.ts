import { Sequelize } from "sequelize"

import databaseConfig from "config/database"

import models from "~/models"

class Database {
	private postgres: Sequelize

	async start() {
		this.setupPostgres()
		await this.testPostgresConnection()
		this.defineModels()
		await this.syncModels()
	}

	setupPostgres() {
		const config = databaseConfig.POSTGRES
		const uri = `postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`
		this.postgres = new Sequelize(uri, config.options)
	}

	async testPostgresConnection() {
		try {
			await this.postgres.authenticate()
			console.log(`Connected to Postgres... [${process.env.POSTGRES_HOST}]`)
		} catch (error) {
			console.log("[ERROR] Postgres connection: ", error.message)
		}
	}

	defineModels() {
		models.map(model => model.define(this.postgres))
	}

	async syncModels() {
		await this.postgres.sync()
	}
}

export default new Database()
