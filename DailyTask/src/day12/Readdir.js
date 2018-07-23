//@flow
import * as fs from 'fs';
import denodeify from 'denodeify';
let readdir = denodeify(fs.readdir);
let stat = denodeify(fs.stat);

function doParalel<T>(promiseList: Array<Promise<T>>): Promise<Array<T>> {
  return new Promise((resolve, reject) => {
    let resultList = [];
    let totalList = promiseList.length;
    let numDone = 0;
    promiseList.forEach((promise: Promise<T>, index: number) => {
      promise.then((result: T) => {
        resultList[index] = result;
        numDone += 1;
        if (numDone === totalList) {
          resolve(resultList);
        }
      });
      promise.catch((error) => reject(error));
    });
  });
}

readdir('../ContactManager').then((fileList) => {
  let promiseList = fileList.map((fileName) => {
    return stat('../ContactManager/' + fileName).then((result) => {
      return {name: fileName, ...result};
    });
  });

  doParalel(promiseList).then((results) => {
    console.log(results);
  });
});

// function readDirectory(path: string) {
//   let promise = new Promise((resolve, reject) => {
//     fs.readdir(path, (error, res) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(res);
//       }
//     });
//   });
//   return promise;
// }

// let readDir = readDirectory('../asda');
// readDir.then((result) => console.log(result));
// readDir.catch((error) => console.log('fuck you error', error));
