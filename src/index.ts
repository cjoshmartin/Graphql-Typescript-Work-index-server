import  { ApolloServer, gql } from 'apollo-server';
import  { typeDefs } from './typeDefs';
import resolvers from './resolvers';

import * as userDataJsonData from '../static/UserData.json'; // To make testing easier

import JsonApi from './datasources/JsonApi';

const SERVERCONFIG = {
  typeDefs: gql(typeDefs) ,
  resolvers,
  dataSources: () => ({
    json_api:  new JsonApi(userDataJsonData),
  }),
};

const server = new ApolloServer(SERVERCONFIG);

server.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`));