"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const userDataJsonData = __importStar(require("../../static/UserData.json"));
const apollo_datasource_1 = require("apollo-datasource");
class JsonApi extends apollo_datasource_1.DataSource {
    constructor() {
        super();
        this.dataSet = userDataJsonData;
    }
}
exports.default = JsonApi;
//# sourceMappingURL=json_api.js.map