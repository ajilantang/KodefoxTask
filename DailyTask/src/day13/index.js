//@flow

function queue<T>(list: Array<T>) {
  let stack = list;
  let result = [];
  return {
    onQueue: (): Array<T> => {
      if (Boolean(list.length)) {
        result.push(list.pop());
        return result;
      }
      return result;
    },
    getOldList: () => {
      return stack;
    },
  };
}

function onWaitingQueue<T>(list: Array<T>) {
  return (times: Array<number>) => {
    let params = times.reduce((acc, curr, index) => {
      if (list[list.length - (1 + index)]) {
        return acc.concat(onWaiting(curr, list[list.length - (1 + index)]));
      }
      return acc;
    }, []);
    return Promise.all(params);
  };
}

var onWaiting = function onWaiting(time: number, result: mixed) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time, result);
  });
};

let testWaiting = onWaitingQueue([5, 6, 7, 4, 15]);
testWaiting([1, 2, 3, 1, 1, 1]).then((res) => console.log(res));
