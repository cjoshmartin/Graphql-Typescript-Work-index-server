const typeDefs = `
type Query {
    people: [Person]
    person(id: ID!): Person

    departments: [Department]
    department(id: ID!): Department
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

export { typeDefs as typeDefs } ;
