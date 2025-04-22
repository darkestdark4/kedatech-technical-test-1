const getMaxSubArray = require("../soal_2");

test("test q2 a: input ([100, 200, 300, 400], 2) => output 700", () => {
  const input_q2_p1 = [100, 200, 300, 400]
  const input_q2_p2 = 2
  const output_q2 = 700

  expect(getMaxSubArray(input_q2_p1, input_q2_p2)).toBe(output_q2)
})

test("test q2 b: input ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) => output 39", () => {
  const input_q2_p1 = [1, 4, 2, 10, 23, 3, 1, 0, 20]
  const input_q2_p2 = 4
  const output_q2 = 39

  expect(getMaxSubArray(input_q2_p1, input_q2_p2)).toBe(output_q2)
})

test("test q2 c: input ([-3, 4, 0, -2, 6, -1], 2) => output 5", () => {
  const input_q2_p1 = [-3, 4, 0, -2, 6, -1]
  const input_q2_p2 = 2
  const output_q2 = 5

  expect(getMaxSubArray(input_q2_p1, input_q2_p2)).toBe(output_q2)
})