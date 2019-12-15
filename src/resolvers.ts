const resolvers  = {
  Query: {
    people: (_, { departmentId } , { dataSources }) => dataSources.JsonApi.getAllPeople(departmentId),
    person: (_, { id }, { dataSources }) => dataSources.JsonApi.searchPerson(id),
    departments:(_, __, { dataSources }) => dataSources.JsonApi.getAllDepartments(),
    department:(_: any, { departmentId }: any, { dataSources }: any) => dataSources.JsonApi.searchDepartment(departmentId),
  },
  Mutation: {
    DeletePerson: (_, { id }, { dataSources }) => {
      const success: Boolean = dataSources.JsonApi.deleteRecord('people', id);

      return {
        success,
        message: success
            ? 'DeletePerson: Person has been fired... 🔥'
            : 'DeletePerson: Person cannot be found, maybe they are hiding...' ,
        people: null,
      };
    },
    DeleteDepartment: (_, { departmentId }, { dataSources }) => {
      const success: Boolean = dataSources.JsonApi.deleteRecord('Department', departmentId);

      return {
        success,
        message: success
            ? 'DeleteDepartment: You got rid of a whole department and have Benched Some people... 💤'
            : 'DeleteDepartment: Department cannot be found, maybe it is hiding from your balance sheet...' ,
        people: null,
      };
    },
  },
};

export default resolvers;