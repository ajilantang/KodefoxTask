// @flow

export default function createCounter() {
  let count = 0;
  return {
    inc: () => {
      count += 1;
    },
    dec: () => {
      count -= 1;
    },
    getCount: () => count,
  };
}

it('should return 4', () => {
  let counter = createCounter();
  counter.inc();
  counter.inc();
  counter.inc();
  counter.inc();
  counter.inc();
  counter.inc();
  counter.dec();
  counter.dec();
  expect(counter.getCount()).toEqual(4);
});
