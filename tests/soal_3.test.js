const getNumberInNestedObject = require("../soal_3");

test("test q3: input {a: 2, b: {b: 2, bb: {b: 3, bb: {b: 2}}}, c: {c: {c: 2}, cc: 'ball', ccc: 5}, d: 1, e: {e: {e: 4}, ee: 'car'}} => output 12", () => {
  const input = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 4}, ee: 'car'}
  };
  const output = 12;

  expect(getNumberInNestedObject(input)).toBe(output);
})