import { expect } from 'chai';

import resolvers from '../resolvers';
import JsonApi from '../datasources/JsonApi';

const noop = () => {};

describe('Graphql Mutations', () => {
  describe('should support updating user information', () => {
    describe('by inserting', () => {
      const { InsertPerson, InsertDepartment } = resolvers.Mutation;
      let data: object;
      let testDataSource : JsonApi;

      beforeEach(() => {
        data = {
          departments: [],
          people: [],
        };
        testDataSource = new JsonApi(data);
      });

      it('should increase the number of People by 1', () => {
        const newHire = {
          id: 'sdfghjhgfds-fh5235-25dlakf',
          departmentId: null,
          managerId: null,
          firstName: 'Josh',
          lastName: 'Martin',
          jobTitle: 'programmer',
        };
        const parent = noop;
        const args = { input: newHire };
        const info = { dataSources: { JsonApi: testDataSource } };

        const peopleBeforeInsertion : object[] = testDataSource.getAllPeople();

        InsertPerson(parent, args, info);

        const peopleAfterInsertion :object[] = testDataSource.getAllPeople();

        expect(peopleBeforeInsertion.length + 1).to.be.eq(peopleAfterInsertion.length);
      });

      it('should increase the number of Departments by 1', () => {
        const newDepartment = {
          name: 'Benched',
          id: 'wqoiruq-qeirqiue-qe23r',
        };

        const parent = noop;
        const args = { input: newDepartment };
        const info = { dataSources: { JsonApi: testDataSource } };

        const departmentsBeforeInsertion : object[] = testDataSource.getAllDepartments();

        InsertDepartment(parent, args, info);

        const departmentsAfterInsertion :object[] = testDataSource.getAllDepartments();

        expect(departmentsBeforeInsertion.length + 1).to.be.eq(departmentsAfterInsertion.length);
      });
    });
  });

  describe('by deleting', () => {
    const { DeleteRecord } = resolvers.Mutation;
    let data: object;
    let testDataSource : JsonApi;

    beforeEach(() => {
      data = {
        departments: [{
          name: 'Benched',
          id: 'wqoiruq-qeirqiue-qe23r',
        }],
        people: [{
          id: 'sdfghjhgfds-fh5235-25dlakf',
          departmentId: null,
          managerId: null,
          firstName: 'Josh',
          lastName: 'Martin',
          jobTitle: 'programmer',
        }],
      };
      testDataSource = new JsonApi(data);
    });

    it('should decrease the number of People by 1', () => {
      const section = 'people';
      const id = 'sdfghjhgfds-fh5235-25dlakf';

      const parent = noop;
      const args = { section, id };
      const info = { dataSources: { JsonApi: testDataSource } };

      const peopleBeforeDeletion : object[] = testDataSource.getAllPeople();

      DeleteRecord(parent, args, info);

      const peopleAfterDeletion :object[] = testDataSource.getAllPeople();

      expect(peopleBeforeDeletion.length - 1).to.be.eq(peopleAfterDeletion.length);
    });

    it('should decrease the number of Departments by 1', () => {
      const section = 'department';
      const id = 'wqoiruq-qeirqiue-qe23r';

      const parent = noop;
      const args = { id, section };
      const info = { dataSources: { JsonApi: testDataSource } };

      const departmentsBeforeDeletion : object[] = testDataSource.getAllDepartments();

      DeleteRecord(parent, args, info);

      const departmentsAfterDeletion :object[] = testDataSource.getAllDepartments();

      expect(departmentsBeforeDeletion.length - 1).to.be.eq(departmentsAfterDeletion.length);
    });
  });
});
