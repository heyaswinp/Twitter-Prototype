`use strict`

module.exports = {
	session: process.env.SESSION,
	token: process.env.TOKEN,
	database: {
		mongoDbUrl: process.env.MONGODB_URL,
		name: process.env.DATABASE,
		user: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		host: process.env.DB_HOST,
		port: process.env.DB_DBPORT,
		dialect: process.env.DB_DIALECT,
	},
	awsS3Keys : {
		AWS_SECRET_ACCESS: process.env.AWS_SECRET_ACCESS,
		AWS_ACCESSKEY: process.env.AWS_ACCESSKEY,
		REGION:process.env.REGION,
	},
}
