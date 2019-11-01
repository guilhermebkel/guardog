import { DataTypes, Model, Sequelize } from "sequelize"

export default class Site extends Model {
	id: number
	url: string
	bedtime: boolean | null
	bedtime_due: number | null
	created_at: Date
	updated_at: Date

	static define(sequelize: Sequelize) {
		this.init(
			{
				id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
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
					type: DataTypes.NUMBER,
					allowNull: true,
					defaultValue: ""
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
