//@flow
function sleep<T>(ms: number, result: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, ms);
  });
}

// let newPromise = Promise.race([
//   sleep(10000000, 'tes'),
//   sleep(1000, {up: 5000}),
// ]);

// newPromise.then((chain) => console.log(chain));
