// @flow
import eventEmitter from '../eventEmitter';
import createCounter from '../counter';
let emitter = new eventEmitter();
let counter = createCounter();
it('should listener and execute listener', () => {
  let listListener = [];
  function listener<T>(arg: T): T {
    listListener.push(arg);
    return arg;
  }

  emitter.listener('ping', () => listener('ping')).add();
  emitter.listener('ping', () => listener('ping')).add();
  emitter.emit('ping');
  expect(listListener).toEqual(['ping', 'ping']);
  emitter.listener('count', () => counter.inc()).add();
  emitter.listener('count', () => counter.inc()).remove();
  emitter.emit('count');
  expect(counter.getCount()).toEqual(1);
});
