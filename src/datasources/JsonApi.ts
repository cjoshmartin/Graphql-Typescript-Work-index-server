import { DataSource } from 'apollo-datasource';

function isValid(toCheck: any) : Boolean {
  return toCheck !== null && toCheck !== undefined;
}

class JsonApi extends DataSource {
  private department : object[];
  private people: object[];

  constructor(datasource) {
    super();
    const isDataValid : Boolean = isValid(datasource)
    && isValid(datasource['departments'])
    && isValid(datasource['people']);

    if (!isDataValid) {
      throw 'Data supplied to JsonApi Datasource is invalid';
    }

    const dataset = (<any>datasource);
    this.department = dataset['departments'];
    this.people = dataset['people'];
  }

//   initialize(config) {
//   this.context = config.context;
// }
  private search(section: string, id?: string): object[] | object {
    const currentObject = this[section];
    return currentObject.find(obj => obj['id'] === id) || null;
  }

  public searchDepartment(id: string): object  {
    return this.search('department', id);
  }

  public searchPerson(id: string): object  {
    return this.search('people', id);
  }

  public searchDepartments(ids: string[]) : object[] {
    return ids.map(id => this.searchDepartment(id))
              .filter(item => !(item === null || item === undefined));
  }

  public searchPeople(ids: string[]): object[] {
    return ids.map(id => this.searchPerson(id))
              .filter(item => !(item === null || item === undefined));
  }

  public getAllDepartments() : object[] {
    return this.department;
  }

  public getAllPeople(): object[] {
    return this.people;
  }

  // No Reducers are needed because data is already in usable format
}

export default JsonApi;