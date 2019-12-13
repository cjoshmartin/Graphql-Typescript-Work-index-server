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

  it('should support updating user information', () => {
    expect(false).to.be.eq(true);
  });

});