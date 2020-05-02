const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');

const db = require('./src/data/knexConfig');
const app = express();

require('dotenv').config();

const port = process.env.PORT;

const typeDefs = gql`
	type User {
		id: ID!
		username: String!
		email: String!
		admin: Boolean!
	}

	type Query {
		users: [User]!
	}
`;

const resolvers = {
	Query: {
		users() {
			return db('users');
		}
	}
};

const server = new ApolloServer({
	typeDefs,
	resolvers
});

server.applyMiddleware({ app });

app.listen(port, () => console.log(`Server is running on http://localhost:${port}/graphql`));
