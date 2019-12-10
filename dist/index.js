"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs_1 = require("./typeDefs");
const resolvers_1 = __importDefault(require("./resolvers"));
const json_api_1 = __importDefault(require("./datasources/json_api"));
const SERVERCONFIG = {
    typeDefs: apollo_server_1.gql(typeDefs_1.typeDefs),
    resolvers: resolvers_1.default,
    dataSources: () => ({
        json_api: new json_api_1.default(),
    }),
};
const server = new apollo_server_1.ApolloServer(SERVERCONFIG);
server.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`));
//# sourceMappingURL=index.js.map