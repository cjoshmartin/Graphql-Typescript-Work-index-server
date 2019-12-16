import { DataSource } from 'apollo-datasource';

function isValid(toCheck: any) : Boolean {
  return toCheck !== null && toCheck !== undefined;
}

class JsonApi extends DataSource {
  private department : object[];
  private people: object[];
  private cachedPeople: object[];

  constructor(datasource: object) {
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
    this.cachedPeople = null;

    this.updatePeopleCache();
  }

  private search(section: string, typeOfId: string = 'id', id?: string): object[] {

    const currentObject = this[section];
    const subSetOfObject = currentObject
                           .filter((obj: object): Boolean => obj[typeOfId] === id);

    return subSetOfObject;
  }

  public searchDepartment(id: string, typeOfId: string = 'id'): object  {
    if (id === undefined) {
      return undefined;
    }
    const searchOutputArray = this.search('department', typeOfId, id);
    // department is nullable, someone could be new or benched
    const result = searchOutputArray[0] || null;
    return result;
  }

  public searchPerson(id: string, typeOfId: string = 'id'): object  {
    if (id === undefined) {
      return undefined;
    }
    const searchOutput =  this.search('people', typeOfId, id);
    const result = searchOutput.length === 1 ? searchOutput[0] : null; // Person is nullabe

    return this.personReducer(result);
  }

  public searchDepartments(ids: string[]) : object[] {
    return ids.map(id => this.searchDepartment(id));
  }

  public searchPeople(ids: string[]): object[] {
    return ids.map(id => this.searchPerson(id));
  }

  public getAllDepartments() : object[] {
    return this.department;
  }
  public getAllPeople(departmentId?: string): object[] {

    const searchByDepartment = (): object[] => {
      const result = this.search('people', 'departmentId', departmentId);
      return result;
    };

    const peopleList: object[] =  departmentId !== undefined
    ? this.generatePeopleRecords(searchByDepartment())
    : this.cachedPeople;

    return  peopleList;
  }

  private generatePeopleRecords(records: object []) {
    return records.map((person: object): object => this.personReducer(person));
  }

  private updatePeopleCache(): void {
    this.cachedPeople = this.generatePeopleRecords(this.people);
  }

  private nullifyAField (field: string, value: any) { // currying
    return (obj: object): object => {
      if (obj[field] === value) {
        obj[field] = null;
      }
      return obj;
    };
  }

  public insertRecord(section: string, record: object): Boolean {
    const currentSection = this[section];
    const idOfRecord = record['id'];
    if (!isValid(idOfRecord)) {
      return false;
    }

    const searchForRecord = this.search(section, 'id', idOfRecord);
    const doesRecordExist = searchForRecord.length > 0;
    if (doesRecordExist) {
      return false;
    }

    currentSection.push(record);
    this.updatePeopleCache();

    return true;
  }

  public deleteRecord(section: string, id: string) : Boolean {
    const currentSection: object[] = this[section];
    let hasFoundRecord: Boolean = false;
    const isDeletingAPerson: Boolean = (section === 'people');

    for (let i: number = 0; i < currentSection.length; i += 1) {
      const currentObj: object = currentSection[i];

      if (currentObj
        && currentObj['id'] === id) {
        currentSection.splice(i, 1);
        hasFoundRecord = true;
      }

    } // end of forloop
    if (hasFoundRecord) {

      this[section] = this[section].map(
        this.nullifyAField(isDeletingAPerson ? 'managerId' : 'departmentId', id));

      this.updatePeopleCache();
    }
    return hasFoundRecord;
  }

  private personReducer(person: object) : object {
    if (person === null) {
      return null;
    }

    const department = this.searchDepartment(person['departmentId']);
    const manager = this.searchPerson(person['managerId'], 'id');
    return {
      department,
      manager,
      id: person['id'],
      firstName: person['firstName'],
      lastName: person['lastName'],
      jobTitle: person['jobTitle'],
    };
  }
}

export default JsonApi;