import { expect } from 'chai';
import JsonApi from '../datasources/JsonApi';

// TODO: Test reducer

describe('GraphQl Datasources', () => {

  describe('JsonAPI', () => {
    const data = {
      departments: [
        { name: 'Executive', id: 'aef293ee-8dcc-4d89-99cf-1b8f61bab07b' },
        { name: 'Sales', id: 'cfd90465-28fa-4b9a-be3e-ef2517e987e9' },
        { name: 'Management', id: '2b9edccb-41fc-4fc5-b832-ac86a034a877' },
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
        {
          id: '24341d42-8235-47a1-9ec5-c6afcbdcef16',
          firstName: 'Ofelia',
          lastName: 'Buckridge',
          jobTitle: 'Direct Applications Architect',
          departmentId: 'cfd90465-28fa-4b9a-be3e-ef2517e987e9',
          managerId: 'd44390cd-b306-4e11-b7d5-a5e0e6fe1e3d',
        },
      ],
    };

    // todo: pass unvalid data
    const testDataSource = new JsonApi(data);

    describe('support retrieving by ', () => {
      describe('departments by ', () => {
        it('should return correct object, if ID is in the list', () => {
          const id = 'cfd90465-28fa-4b9a-be3e-ef2517e987e9';
          const expectDepartment = {
            name: 'Sales',
            id: 'cfd90465-28fa-4b9a-be3e-ef2517e987e9',
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

          const ids = ['cfd90465-28fa-4b9a-be3e-ef2517e987e9', '2b9edccb-41fc-4fc5-b832-ac86a034a877'];
          const expectDepartments = [
            { name: 'Sales', id: 'cfd90465-28fa-4b9a-be3e-ef2517e987e9' },
            { name: 'Management', id: '2b9edccb-41fc-4fc5-b832-ac86a034a877' },
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
          const id = '2798c35b-5b8f-4a5d-9858-0a818d48cbef';
          const expectPeople = {
            id: '2798c35b-5b8f-4a5d-9858-0a818d48cbef',
            firstName: 'Orval',
            lastName: 'Hauck',
            jobTitle: 'CEO',
            department: { name: 'Management', id: '2b9edccb-41fc-4fc5-b832-ac86a034a877' },
            manager: null,
          };

          const acutualPeople = testDataSource.searchPerson(id);
          expect(expectPeople).to.deep.equal(acutualPeople);
        });

        // test for sub managers
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
              manager: null,
              department: { name: 'Management', id: '2b9edccb-41fc-4fc5-b832-ac86a034a877' },
            },
            {
              id: 'd44390cd-b306-4e11-b7d5-a5e0e6fe1e3d',
              firstName: 'Asia',
              lastName: 'Streich',
              jobTitle: 'Dynamic Branding Orchestrator',
              department: { name: 'Executive', id: 'aef293ee-8dcc-4d89-99cf-1b8f61bab07b' },
              manager: {
                id: '2798c35b-5b8f-4a5d-9858-0a818d48cbef',
                firstName: 'Orval',
                lastName: 'Hauck',
                jobTitle: 'CEO',
                manager: null,
                department: { name: 'Management', id: '2b9edccb-41fc-4fc5-b832-ac86a034a877' },
              },
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
              manager: null,
              department: { name: 'Management', id: '2b9edccb-41fc-4fc5-b832-ac86a034a877' },
            },
            {
              id: 'd44390cd-b306-4e11-b7d5-a5e0e6fe1e3d',
              firstName: 'Asia',
              lastName: 'Streich',
              jobTitle: 'Dynamic Branding Orchestrator',
              department: { name: 'Executive', id: 'aef293ee-8dcc-4d89-99cf-1b8f61bab07b' },
              manager: {
                id: '2798c35b-5b8f-4a5d-9858-0a818d48cbef',
                firstName: 'Orval',
                lastName: 'Hauck',
                jobTitle: 'CEO',
                manager: null,
                department: { name: 'Management', id: '2b9edccb-41fc-4fc5-b832-ac86a034a877' },
              },
            },
            {
              id: '24341d42-8235-47a1-9ec5-c6afcbdcef16',
              firstName: 'Ofelia',
              lastName: 'Buckridge',
              jobTitle: 'Direct Applications Architect',
              department: { name: 'Sales', id: 'cfd90465-28fa-4b9a-be3e-ef2517e987e9' },
              manager: {
                id: 'd44390cd-b306-4e11-b7d5-a5e0e6fe1e3d',
                firstName: 'Asia',
                lastName: 'Streich',
                jobTitle: 'Dynamic Branding Orchestrator',
                department: { name: 'Executive', id: 'aef293ee-8dcc-4d89-99cf-1b8f61bab07b' },
                manager: {
                  id: '2798c35b-5b8f-4a5d-9858-0a818d48cbef',
                  firstName: 'Orval',
                  lastName: 'Hauck',
                  jobTitle: 'CEO',
                  manager: null,
                  department: { name: 'Management', id: '2b9edccb-41fc-4fc5-b832-ac86a034a877' },
                },
              },
            },
          ];

          const acutualPeople = testDataSource.getAllPeople();
          expect(expectPeoples).to.deep.equal(acutualPeople);
        });
      });
    });

  });
});