"use strict";
// https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2
// https://dev.to/neshaz/testing-graphql-server-in-nodejs-55cm
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const supertest_1 = __importDefault(require("supertest"));
const testUrl = 'https://localhost:4000/';
const request = supertest_1.default(testUrl);
describe('GraphQl Server', () => {
    it('should have an id, firstName, lastName, jobTitle, departmentId, and managerId for each Person', () => {
        chai_1.expect(false).to.be.eq(true);
    });
    it('should return null for managerId, if person\'s jobTitle is "CEO" ', () => {
        chai_1.expect(false).to.be.eq(true);
    });
    it('each departmentId should correspond to a row in the Departments array', () => {
        chai_1.expect(false).to.be.eq(true);
    });
    it('should support retrieving by ', () => {
        it('users by', () => {
            it('id', () => {
                chai_1.expect(false).to.be.eq(true);
            });
            it('total list', () => {
                chai_1.expect(false).to.be.eq(true);
            });
        });
        it('departments by ', () => {
            it('id', () => {
                chai_1.expect(false).to.be.eq(true);
            });
            it('total list', () => {
                chai_1.expect(false).to.be.eq(true);
            });
        });
    });
    it('should support updating user information', () => {
        chai_1.expect(false).to.be.eq(true);
    });
    it('Given a user, should be possiblle to explor relationships and their hierachy and pull in others from same department', () => {
        chai_1.expect(false).to.be.eq(true);
    });
});
//# sourceMappingURL=graphql_server.test.js.map