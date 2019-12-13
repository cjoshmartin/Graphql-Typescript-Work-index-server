import { expect } from 'chai';

describe('GraphQl Datasources', () => {

  describe('support retrieving by ', () => {
    describe('users by', () => {
      it('id', () => {
        expect(false).to.be.eq(true);
      });

      it('total list', () => {
        expect(false).to.be.eq(true);
      });
    });

    describe('departments by ', () => {
      it('id', () => {
        const id = '920a774e-617a-4a5b-82ea-8205c18eef75';
        const expectDepartmentName = 'Engineering';
        const acutualDepartmentName = null; //todo

        expect(false).to.be.eq(expectDepartmentName);
      });

      it('total list', () => {
        expect(false).to.be.eq(true);
      });
    });
  });
});