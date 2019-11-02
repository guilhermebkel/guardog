import { DataTypes, Model, Sequelize } from "sequelize"

import Crypt from "~/Utils/Crypt"

export default class Site extends Model {
	id: string
	url: string
	bedtime: boolean | null
	bedtime_due: number | null
	created_at: Date
	updated_at: Date

	static define(sequelize: Sequelize) {
		this.init(
			{
				id: {
					type: DataTypes.STRING,
					allowNull: false,
					primaryKey: true,
					defaultValue: () => Crypt.generateHash()
				},
				url: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true
				},
				bedtime: {
					type: DataTypes.BOOLEAN,
					allowNull: true,
					defaultValue: false
				},
				bedtime_due: {
					type: DataTypes.INTEGER,
					allowNull: true
				},
				created_at: {
					type: DataTypes.DATE,
					allowNull: false
				},
				updated_at: {
					type: DataTypes.DATE,
					allowNull: false
				}
			},
			{
				sequelize,
				tableName: "sites"
			}
		)

		return this
	}
}
