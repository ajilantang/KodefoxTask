//@flow
// create function return promise

type CallBackFunc<Input, Result> = {
  input: mixed,
  callback: (error: ?Error, result: Result) => void,
};
type PromiseFunc<Input, Result> = (input: Input) => Promise<Result>;
type Denodify<Input, Result> = (
  CallBackFunc<Input, Result>,
) => Promise<Input, Result>;

function denodify<T>(callbackStyleFunc: Function) {
  return (input: T) => {
    return new Promise((resolve, reject) => {
      callbackStyleFunc(input, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };
}

function getStudent(
  schoolId: string,
  callback: (error: ?Error, result: Array<string>) => void,
): void {
  setTimeout(() => {
    callback(null, ['evan', 'dimas']);
  }, 500);
}

let getNewStudent = denodify(getStudent);
let result = getNewStudent('100');
result.then((res) => console.log(res));
