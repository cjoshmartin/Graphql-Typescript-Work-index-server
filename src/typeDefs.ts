const typeDefs = `
type Query {
    people(departmentId: String): [Person]!
    person(id: String!): Person

    departments: [Department]
    department(departmentId: String!): Department

}

type Department {
    id: String!,
    name: String!,
}

type Person {
    id: String!
    department: Department,
    manager: Person,
    firstName: String!,
    lastName: String!,
    jobTitle: String!,
}

# Mutations
type Mutation {
    InsertPerson(input: NewPerson!): UpdateResponse!
    InsertDepartment(input: NewDepartment!): UpdateResponse!
    DeleteRecord(section: TypeOfRecord!, id: String!): UpdateResponse!
  #  LinkDepartment:(departmentId: String!, id: String!): UpdateResponse!
}


type UpdateResponse {
    success: Boolean!
    message: String
}

enum TypeOfRecord {
    DEPARTMENT
    PEOPLE
}
input NewDepartment {
    id: String!,
    name: String!,
}

input NewPerson {
    id: String!
    departmentId: String,
    managerId: String,
    firstName: String!,
    lastName: String!,
    jobTitle: String!,
}


#EOF
`;

export { typeDefs as typeDefs } ;
