import * as userDataJsonData from '../../static/UserData.json';
import { DataSource } from 'apollo-datasource';
class JsonApi extends DataSource {
  private department : Array<object>;
  private people: Array<object>;

  constructor() {
    super();
    const dataset = (<any>userDataJsonData);
    this.department = dataset['departments'];
    this.people = dataset['people'];
  }

//   initialize(config) {
//   this.context = config.context;
// }

  getDepartmentByID(id: String) {
    return;
  }
  getDepartmentByName(name: String) {
    return;
  }

  // No Reducers are needed because data is already in usable format
}

export default JsonApi;