const sortDesc = require("../soal_1");

test("test q1: input [1, 2, 4, 3, 5, 3, 2, 1] => output [5, 4, 3, 3, 2, 2, 1, 1]", () => {
  const input = [1, 2, 4, 3, 5, 3, 2, 1]
  const output = [5, 4, 3, 3, 2, 2, 1, 1]

  expect(sortDesc(input)).toEqual(output)
})