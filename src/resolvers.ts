const resolvers  = {
  Query: {
    people: (_, __, { dataSources }) => dataSources.JsonApi.getAllPeople(),
    person: (_, { id }, { dataSources }) => dataSources.JsonApi.searchPerson(id),
    departments:(_, __, { dataSources }) => dataSources.JsonApi.getAllDepartments(),
    department:(_, { departmentId }, { dataSources }) => dataSources.JsonApi.searchDepartment(departmentId),
  },
};

export default resolvers;