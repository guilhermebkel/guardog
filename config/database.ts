const databaseConfig = {
	POSTGRES: {
		host: process.env.POSTGRES_HOST,
		database: process.env.POSTGRES_DATABASE,
		user: process.env.POSTGRES_USER,
		port: +process.env.POSTGRES_PORT || 5432,
		password: process.env.POSTGRES_PASSWORD,
		options: {
			dialectOptions: {
				ssl: true
			},
			define: {
				createdAt: "created_at",
				updatedAt: "updated_at",
				timestamps: true,
				freezeTableName: true,
				underscored: true
			},
			logging: process.env.DB_LOGGER ? console.log : null
		}
	}
}

export default databaseConfig
