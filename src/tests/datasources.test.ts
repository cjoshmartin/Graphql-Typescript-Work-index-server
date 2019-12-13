import { expect } from 'chai';
import JsonApi from '../datasources/JsonApi';

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
    const testDataSource = new JsonApi(data);

    describe('support retrieving by ', () => {
      describe('departments by ', () => {
          // TODO: Remove this `.only`
        it.only('should return an object if id is in the list', () => {
          const id = '920a774e-617a-4a5b-82ea-8205c18eef75';
          const expectDepartmentName = 'Engineering';

          const acutualDepartment =  testDataSource.getDepartmentByID(id);

          expect(acutualDepartment).to.be.an.instanceof(Object);
          expect(acutualDepartment['name']).to.be.eq(expect);
        });

        it('total list', () => {
          expect(false).to.be.eq(true);
        });

        describe('users by', () => {
          it('id', () => {
            expect(false).to.be.eq(true);
          });

          it('total list', () => {
            expect(false).to.be.eq(true);
          });
        });

      });
    });
  });
});