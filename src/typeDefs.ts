const typeDefs = `
type Query {
    # people: [Person]!
    people(departmentId: String): [Person]!
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

# Mutations
type Mutation {
    DeletePerson(id: String!): UpdateResponse!
    DeleteDepartment(departmentId: String!): UpdateResponse!
}

type UpdateResponse {
    success: Boolean!
    message: String
}

#EOF
`;

export { typeDefs as typeDefs } ;
