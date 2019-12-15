import { expect } from 'chai';

describe('Graphql Mutations', () => {
  it('should support updating user information', () => {
    expect(false).to.be.eq(true);
  });
});


/* 

mutation{
  InsertPerson(input: {
  id: "sdfghjhgfds-fh5235-25dlakf"
  departmentId: null
  managerId: null
  firstName: "Josh"
  lastName: "Martin"
  jobTitle: "master of programing"
}){
    message
  }
}

*/

/*
mutation {
  InsertDepartment(input: {
    id:"dhkjf-ewkjf32-dfkjhfd"
    name: "master of programing"
  }){
    message
  }
}
*/