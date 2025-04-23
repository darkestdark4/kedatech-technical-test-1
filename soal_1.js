function sortDesc(input) {
  const length = input.length // get array length

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      // swap to temporary variable
      if (input[i] < input[j]) {
        const temp = input[i]
        input[i] = input[j]
        input[j] = temp
      }
    }
  }

  return input
}

module.exports = sortDesc