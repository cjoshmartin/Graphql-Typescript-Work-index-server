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

  public getDepartmentByID(id: string) : object {
    return { id: '', name: '' };
  }

  public getDepartmentByName(name: string) {
    return { id: '', name: '' };
  }

  // No Reducers are needed because data is already in usable format
}

export default JsonApi;