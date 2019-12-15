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
    DeleteRecord(section: TypeOfRecords!, id: String!): UpdateResponse!
  #  LinkDepartment:(departmentId: String!, id: String!): UpdateResponse!
}

enum TypeOfRecords {
    DEPARTMENT
    PEOPLE
}

type UpdateResponse {
    success: Boolean!
    message: String
}

#EOF
`;

export { typeDefs as typeDefs } ;
