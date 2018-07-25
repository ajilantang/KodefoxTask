// @flow
import fetch from 'node-fetch';
type Action =
  | {
      type: 'WAIT',
      ms: number,
    }
  | {
      type: 'FETCH',
      url: string,
    };
type Obj = {
  name: string,
};
type Data = {
  value: Action | Array<Object> | null,
  done: boolean,
};
function* getUserRepos(userID: string): Generator<*, *, *> {
  yield {type: 'WAIT', ms: 200};
  let repos = yield {
    type: 'FETCH',
    url: `https://api.github.com/users/${userID}/repos`,
  };
  yield {type: 'WAIT', ms: 300};
  return repos.map((repo) => repo.name);
}

function run(gen): Promise<mixed> {
  return new Promise((resolve) => {
    function processNextResult(data: ?Data) {
      let {value, done} = gen.next(data);
      if (!done && value) {
        switch (value.type) {
          case 'WAIT':
            setTimeout(() => {
              processNextResult();
            }, value.ms);
            return;
          case 'FETCH':
            return fetch(value.url)
              .then((res) => res.json())
              .then((data) => processNextResult(data));

          default:
            processNextResult();
            break;
        }
      } else {
        resolve(value);
      }
    }
    processNextResult();
  });
}
let generator = getUserRepos('ajilantang');
let promise = run(generator);
promise.then((result) => {
  console.log(result);
});
