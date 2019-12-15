// https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2
// https://dev.to/neshaz/testing-graphql-server-in-nodejs-55cm

import { expect } from 'chai';
import supertest from 'supertest';

const testUrl = 'https://localhost:4000/';
const request = supertest(testUrl);

describe('GraphQl Server', () => {

  it('should have an id, firstName, lastName, jobTitle, departmentId, and managerId for each Person', () => {

    expect(false).to.be.eq(true);
  });

  it('should return null for managerId, if person\'s jobTitle is "CEO" ', () => {
    expect(false).to.be.eq(true);
  });

  it('each departmentId should correspond to a row in the Departments array', () => {
    expect(false).to.be.eq(true);
  });

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

/*
query getPeople {  
  people(departmentId: "cfd90465-28fa-4b9a-be3e-ef2517e987e9"){
    firstName
    lastName
    department{
      name
    }
  }
}
*/

/*

query getPeople {  
  people(departmentId: "cfd90465-28fa-4b9a-be3e-ef2517e987e9"){
    firstName
    lastName
    department{
      name
    }
    manager {
      firstName
    }
  }
}
*/