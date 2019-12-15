const resolvers  = {
  Query: {
    people: (_, { departmentId } , { dataSources }) => dataSources.JsonApi.getAllPeople(departmentId),
    person: (_, { id }, { dataSources }) => dataSources.JsonApi.searchPerson(id),
    departments:(_, __, { dataSources }) => dataSources.JsonApi.getAllDepartments(),
    department:(_: any, { departmentId }: any, { dataSources }: any) => dataSources.JsonApi.searchDepartment(departmentId),
  },
  Mutation: {
    DeleteRecord: (_, { section, id }, { dataSources }) => {
      const success: Boolean = dataSources.JsonApi.deleteRecord(section.toLowerCase(), id);

      return {
        success,
        message: success
            ? `✅: the selected ${section} has been DELETED`
            : `❌: ${section} with the ID of '${id}' cannot be found, maybe they are hiding...` ,
      };
    },
  },
};

export default resolvers;