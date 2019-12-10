import  { ApolloServer, gql } from 'apollo-server';
import  { typeDefs } from './typeDefs';
import resolvers from './resolvers';

import JsonApi from './datasources/json_api';

const SERVERCONFIG = {
  typeDefs: gql(typeDefs) ,
  resolvers,
  dataSources: () => ({
    json_api:  new JsonApi(),
  }),
};

const server = new ApolloServer(SERVERCONFIG);

server.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`));