import  { ApolloServer, gql } from 'apollo-server';
import  { typeDefs } from './typeDefs';
import resolvers from './resolvers';

import * as userDataJsonData from '../static/UserData.json'; 

import JsonApi from './datasources/JsonApi';

const SERVERCONFIG = {
  resolvers,
  typeDefs: gql(typeDefs) ,
  dataSources: () => ({
    JsonApi:  new JsonApi(userDataJsonData),
  }),
};

const server = new ApolloServer(SERVERCONFIG);

export default server;