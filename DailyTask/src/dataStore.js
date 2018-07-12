// @flow
type InitialState = {
  id: number;
  createdAt: string;
};
type DataStore = {
  [string]: InitialState;
};
type CallBackForEachFunction = (value: DataStore) => mixed;
export default class StoreData {
  data: Array<DataStore> = [];
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
  filterObject(func: (param: Object) => boolean) {
    let result = [];
    for (let obj of this.data) {
      if (func(obj)) {
        result = result.concat(obj);
      }
    }
    return result;
  }
  forEach(func: CallBackForEachFunction) {
    let result = [];
    for (let obj of this.data) {
      result = result.concat(func(obj));
    }
    return result;
  }
  getMapDataStores<T>(func: (param: DataStore) => T) {
    let result = [];
    for (let obj of this.data) {
      result = result.concat(func(obj));
    }
    return result;
  }
}
