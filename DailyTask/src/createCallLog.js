// @flow

type CallType = 'INCOMING' | 'OUTGOING' | 'MISSED';
type Call = {
  type: CallType;
  phoneNumber: string;
  contactName: string;
  timeStamp: string;
};

function createCallLog() {
  console.log('tes')
  let listCall: Array<Call> = [];
  return {
    add: (type: CallType, contactName: string, phoneNumber: string) => {
      let timeStamp = `${Date.now()}`;
      listCall.push({type, contactName, phoneNumber, timeStamp});
    },
    getRecentCall: () => {
      return listCall;
    },
  };
}
export default createCallLog;
