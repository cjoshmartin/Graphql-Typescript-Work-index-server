import { expect } from 'chai';

describe('GraphQL resolvers', () => {

  it('Given a user, should be possiblle to explore relationships and their hierachy and pull in others from same department', () => {
    expect(false).to.be.eq(true);
  });
});


/* // test one 

 person(departmentId:"2798c35b-5b8f-4a5d-9858-0a818d48cbef"){
    firstName
    lastName
  }

*/

/* // second test

 department(departmentId:"aef293ee-8dcc-4d89-99cf-1b8f61bab07b"){
    name
  }

  */

/* // third test

query getDepartments{
departments {
  name
}
}

*/