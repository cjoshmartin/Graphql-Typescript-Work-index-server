"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeDefs = `
type Query {
    people: [Person]
    departments: [Department]
}

type Department {
    departmentId: ID!,
    name: String!,
}

type Person {
    departmentId: ID!,
    mangagerId: ID,
    firstName: String!,
    lastName: String!,
    jobTitle: String!,
}


#EOF
`;
exports.typeDefs = typeDefs;
//# sourceMappingURL=typeDefs.js.map