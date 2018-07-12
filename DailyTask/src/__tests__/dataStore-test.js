// @flow
import StoreData from '../dataStore';

type InitialState = {
  id: number;
  createdAt: string;
};
type DataStore = {
  [string]: InitialState;
};
it('should get data from data store', () => {
  let database = new StoreData({name: 'aji', age: 26});
  database.setDataStore({name: 'jon', age: 26});
  expect(
    database.filterObject(
      (x: DataStore): boolean => {
        if (x.hasOwnProperty('id')) {
          return true;
        } else {
          return false;
        }
      },
    )[0].name,
  ).toEqual('aji');
  database.setDataStore({name: 'jin', age: 23});
  let listData = database.getDataStores();
  expect(listData[2].name).toEqual('jin');
  expect(
    database.forEach((res: DataStore) => (res.name ? res.name : res)),
  ).toEqual(['aji', 'jon', 'jin']);
  expect(
    database.getMapDataStores((x: DataStore) => {
      if (x.hasOwnProperty('id')) {
        return x.id;
      }
    }),
  ).toEqual([0, 1, 2]);
});
