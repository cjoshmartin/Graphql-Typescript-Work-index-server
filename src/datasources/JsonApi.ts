import { DataSource } from 'apollo-datasource';
class JsonApi extends DataSource {
  private department : object[];
  private people: object[];

  constructor(datasource) {
    super();
    const dataset = (<any>datasource);
    this.department = dataset['departments'];
    this.people = dataset['people'];
  }

//   initialize(config) {
//   this.context = config.context;
// }
  private search(section: string, value?: string): object[] | object {
    const currentObject = this[section];

    if (value === undefined) {
      return currentObject;
    }

    return currentObject.find(obj => obj['id'] === value) || null;
  }

  public searchDepartment(value?: string): object[] | object  {
    return this.search('department', value);
  }

  public searchPeople(value?: string): object[] | object  {
    return this.search('people', value);
  }

  // No Reducers are needed because data is already in usable format
}

export default JsonApi;