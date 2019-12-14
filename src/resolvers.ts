const resolvers  = {
  Query: {
    people: (_, { departmentId } , { dataSources }) => dataSources.JsonApi.getAllPeople(departmentId),
    person: (_, { id }, { dataSources }) => dataSources.JsonApi.searchPerson(id),
    departments:(_, __, { dataSources }) => dataSources.JsonApi.getAllDepartments(),
    department:(_, { departmentId }, { dataSources }) => dataSources.JsonApi.searchDepartment(departmentId),
  },
};

export default resolvers;