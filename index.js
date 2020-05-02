// const express = require('express');
// const expressGraphQL = require('express-graphql');
// const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
// const app = express();

const { ApolloServer, gpl } = require('apollo-server-express');
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
`;

const server = new ApolloServer({
	typeDefs,
	resolvers
});

server.applyMiddleware({ app });

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

// const schema = new GraphQLSchema({
// 	query: new GraphQLObjectType({
// 		name: 'HelloWorld',
// 		fields: () => ({
// 			message: {
// 				type: GraphQLString,
// 				resolve: () => 'Hello World'
// 			}
// 		})
// 	})
// });

// app.use(
// 	'/graphql',
// 	expressGraphQL({
// 		schema: schema,
// 		graphiql: true
// 	})
// );
// app.listen(5000, () => console.log('Server Running'));
