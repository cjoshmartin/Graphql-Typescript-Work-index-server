const typeDefs = `
type Query {
    people: [Person]!
    person(id: String!): Person

    departments: [Department]
    department(departmentId: String!): Department


}

type Department {
    departmentId: String!,
    name: String!,
}

type Person {
    id: String!
    department: Department!,
    manager: Person,
    firstName: String!,
    lastName: String!,
    jobTitle: String!,
}


#EOF
`;

export { typeDefs as typeDefs } ;
