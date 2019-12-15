const resolvers  = {
  Query: {
    people: (_, { departmentId } , { dataSources }) => dataSources.JsonApi.getAllPeople(departmentId),
    person: (_, { id }, { dataSources }) => dataSources.JsonApi.searchPerson(id),
    departments:(_, __, { dataSources }) => dataSources.JsonApi.getAllDepartments(),
    department:(_: any, { departmentId }: any, { dataSources }: any) => dataSources.JsonApi.searchDepartment(departmentId),
  },
  Mutation: {
    InsertPerson: (_ , { input }, { dataSources }) : object => {
      const record = input;
      const success: Boolean = dataSources.JsonApi.insertRecord('people', input);

      return {
        success,
        message: success
            ? '✅: the selected person has been INSERTED'
            : `❌: person with the following record of '${record}' Already exist or does not have a valid id ` ,
      };
    },

    InsertDepartment: (_ , { input }, { dataSources }) : object => {
      const record = input;
      const success: Boolean = dataSources.JsonApi.insertRecord('department', input);

      return {
        success,
        message: success
            ? '✅: the selected Department has been INSERTED'
            : `❌: Department with the following record of '${record}' Already exist or does not have a valid id ` ,
      };
    },
    DeleteRecord: (_, { section, id }, { dataSources }) : object => {
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