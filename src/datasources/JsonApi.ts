import { DataSource } from 'apollo-datasource';

function isValid(toCheck: any) : Boolean {
  return toCheck !== null && toCheck !== undefined;
}

class JsonApi extends DataSource {
  private department : object[];
  private people: object[];
  private cachedPeople: object[];

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
    this.cachedPeople = null;
  }

  private search(section: string, typeOfId: string = 'id', id?: string): object[] {

    const currentObject = this[section];
    const subSetOfObject = currentObject
                           .filter((obj: object): Boolean => obj[typeOfId] === id) || null;

    return subSetOfObject;
  }

  public searchDepartment(id: string, typeOfId: string = 'id'): object  {
    if (id === undefined) {
      return undefined;
    }
    const searchOutputArray = this.search('department', typeOfId, id);
    const result = searchOutputArray[0]; // department in not nullable, everyone is in a department
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

  public getAllPeople(departmentId?: string): object[] {

    const searchByDepartment = (): object[] => {
      const result = this.search('people', 'departmentId', departmentId);
      return result;
    };

    const peopleList: object[] =  departmentId !== undefined
    ? searchByDepartment()
    : this.people;

    let result = null;

    if (this.cachedPeople === null) { // TODO: need to do cache invalidation for mutations
      result = peopleList.map(person => this.personReducer(person));
      this.cachedPeople = result;
    } else {
      result = this.cachedPeople;
    }

    return  result;
  }

  private personReducer(person: object): object {
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