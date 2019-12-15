import { expect } from 'chai';
import JsonApi from '../datasources/JsonApi';

// TODO: Test reducer

describe('GraphQl Datasources', () => {

  describe('JsonAPI', () => {
    const data = {
      departments: [
        { name: 'Engineering', id: '920a774e-617a-4a5b-82ea-8205c18eef75' },
        { name: 'Sales', id: 'cfd90465-28fa-4b9a-be3e-ef2517e987e9' },
        { name: 'Marketing', id: '252fc1e8-aead-45cc-9d7d-e6003897bbf9' },
      ],
      people: [
        {
          id: '2798c35b-5b8f-4a5d-9858-0a818d48cbef',
          firstName: 'Orval',
          lastName: 'Hauck',
          jobTitle: 'CEO',
          departmentId: '2b9edccb-41fc-4fc5-b832-ac86a034a877',
        },
        {
          id: 'd44390cd-b306-4e11-b7d5-a5e0e6fe1e3d',
          firstName: 'Asia',
          lastName: 'Streich',
          jobTitle: 'Dynamic Branding Orchestrator',
          departmentId: 'aef293ee-8dcc-4d89-99cf-1b8f61bab07b',
          managerId: '2798c35b-5b8f-4a5d-9858-0a818d48cbef',
        },
      ],
    };

    //todo: pass unvalid data
    const testDataSource = new JsonApi(data);

    describe('support retrieving by ', () => {
      describe('departments by ', () => {
        it('should return correct object, if ID is in the list', () => {
          const id = '920a774e-617a-4a5b-82ea-8205c18eef75';
          const expectDepartment = {
            name: 'Engineering',
            id: '920a774e-617a-4a5b-82ea-8205c18eef75',
          };

          const acutualDepartment =  testDataSource.searchDepartment(id);
          expect(expectDepartment).to.deep.equal(acutualDepartment);
        });

        it('should return null, if ID is not in the list', () => {
          const id = 'fake-id-9999';
          const expectValue = null;

          const acutualDepartment =  testDataSource.searchDepartment(id);

          expect(expectValue).to.be.eq(acutualDepartment);
        });
        it('should get a range of departments', () => {

          const ids = ['920a774e-617a-4a5b-82ea-8205c18eef75', 'cfd90465-28fa-4b9a-be3e-ef2517e987e9'];
          const expectDepartments = [
              { name: 'Engineering', id: '920a774e-617a-4a5b-82ea-8205c18eef75' },
              { name: 'Sales', id: 'cfd90465-28fa-4b9a-be3e-ef2517e987e9' },
          ];

          const acutualDepartment =  testDataSource.searchDepartments(ids);
          expect(expectDepartments).to.deep.equal(acutualDepartment);
        });

        it('total list', () => {
          const expectDepartments = data['departments'];

          const acutualDepartment = testDataSource.getAllDepartments();
          expect(expectDepartments).to.deep.equal(acutualDepartment);
        });
      });
      describe('users by', () => {
        it('should return correct object, if ID is in the list', () => {
          const id = 'd44390cd-b306-4e11-b7d5-a5e0e6fe1e3d';
          const expectPeople = {
            id: 'd44390cd-b306-4e11-b7d5-a5e0e6fe1e3d',
            firstName: 'Asia',
            lastName: 'Streich',
            jobTitle: 'Dynamic Branding Orchestrator',
            departmentId: 'aef293ee-8dcc-4d89-99cf-1b8f61bab07b',
            managerId: '2798c35b-5b8f-4a5d-9858-0a818d48cbef',
          };

          const acutualPeople = testDataSource.searchPerson(id);
          expect(expectPeople).to.deep.equal(acutualPeople);
        });

        it('should return null, if ID is not in the list', () => {
          const id = 'fake-id-9999';
          const expectValue = null;

          const acutualPeople =  testDataSource.searchPerson(id);

          expect(expectValue).to.be.eq(acutualPeople);
        });

        it('should get a range of people', () => {
          const ids = ['2798c35b-5b8f-4a5d-9858-0a818d48cbef', 'd44390cd-b306-4e11-b7d5-a5e0e6fe1e3d'];
          const expectPeople = [
            {
              id: '2798c35b-5b8f-4a5d-9858-0a818d48cbef',
              firstName: 'Orval',
              lastName: 'Hauck',
              jobTitle: 'CEO',
              departmentId: '2b9edccb-41fc-4fc5-b832-ac86a034a877',
            },
            {
              id: 'd44390cd-b306-4e11-b7d5-a5e0e6fe1e3d',
              firstName: 'Asia',
              lastName: 'Streich',
              jobTitle: 'Dynamic Branding Orchestrator',
              departmentId: 'aef293ee-8dcc-4d89-99cf-1b8f61bab07b',
              managerId: '2798c35b-5b8f-4a5d-9858-0a818d48cbef',
            },
          ];

          const acutualPeople = testDataSource.searchPeople(ids);
          expect(expectPeople).to.deep.equal(acutualPeople);
        });

        it('total list', () => {
          const expectPeoples = [
            {
              id: '2798c35b-5b8f-4a5d-9858-0a818d48cbef',
              firstName: 'Orval',
              lastName: 'Hauck',
              jobTitle: 'CEO',
              departmentId: '2b9edccb-41fc-4fc5-b832-ac86a034a877',
            },
            {
              id: 'd44390cd-b306-4e11-b7d5-a5e0e6fe1e3d',
              firstName: 'Asia',
              lastName: 'Streich',
              jobTitle: 'Dynamic Branding Orchestrator',
              departmentId: 'aef293ee-8dcc-4d89-99cf-1b8f61bab07b',
              managerId: '2798c35b-5b8f-4a5d-9858-0a818d48cbef',
            },
          ];

          const acutualPeople = testDataSource.getAllPeople();
          expect(expectPeoples).to.deep.equal(acutualPeople);
        });
      });
    });

  });
});