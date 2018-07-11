// @flow

import createCallLog from '../createCallLog';

it('should add and return recent call ', () => {
  let callLog = createCallLog();
  callLog.add('INCOMING', 'ioaia', '+623128884766');
  callLog.add('MISSED', 'aui', '+623128884766');
  expect(callLog.getRecentCall()[1].contactName).toEqual('aui');
});
