// Update with your config settings.
require('dotenv').config();

module.exports = {
	development: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: './src/data/migrations'
		},
		seeds: {
			directory: './src/data/seeds'
		}
	}
};
