import * as userDataJsonData from '../../static/UserData.json';
import { DataSource } from 'apollo-datasource';
class JsonApi extends DataSource {
  private dataSet : object;

  constructor() {
    super();
    this.dataSet = userDataJsonData;
  }

//   initialize(config) {
//   this.context = config.context;
// }
}

export default JsonApi;