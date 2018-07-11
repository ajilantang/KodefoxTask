// @flow
import dataStore from '../dataStore';

it('should get data from data store', () => {
  let database = new dataStore({name: 'aji', age: 26});
  database.setDataStore({name: 'jon', age: 26});
  expect(database.forEach((x) => x.id === 1)[0].name).toEqual('jon');
  database.setDataStore({name: 'jin', age: 23});
  expect(database.getDataStores()[2].name).toEqual('jin');
  expect(database.getMapDataStores((x) => x.id)).toEqual([0, 1, 2]);
});
