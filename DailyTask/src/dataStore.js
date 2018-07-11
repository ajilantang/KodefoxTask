// @flow
type InitialState = {
  id: number;
  createdAt: string;
};
export default class dataStore {
  data: Array<Object> = [];
  constructor(instanceState: Object) {
    let createdAt = `${Date.now()}`;
    let id = this.data.length;
    let initialState: InitialState = {createdAt, id};
    let data = Object.assign(instanceState, initialState);
    this.data = this.data.concat(data);
  }
  setDataStore(data: Object) {
    let createdAt = `${Date.now()}`;
    let id = this.data.length;
    let initialState: InitialState = {createdAt, id};
    let result = Object.assign(data, initialState);
    this.data = this.data.concat(result);
  }
  getDataStores(): Array<Object> {
    return this.data;
  }
  forEach(func: (param: Object) => boolean) {
    let result = [];
    for (let obj of this.data) {
      if (func(obj)) {
        result = result.concat(obj);
      }
    }
    return result;
  }
  getMapDataStores<T>(func: (param: Object) => T) {
    let result = [];
    for (let obj of this.data) {
      result = result.concat(func(obj));
    }
    return result;
  }
}
