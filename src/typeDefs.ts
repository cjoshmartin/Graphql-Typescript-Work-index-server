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

export { typeDefs as typeDefs } ;
