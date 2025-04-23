function getMaxSubArray(arr, length) {
  let output = 0
  const arrLength = arr.length

  for (let i = 0; i < arrLength; i++) {
    // check if next index is out of range
    if ((i + length) > arrLength) {
      break
    } else {
      let tempTotal = 0

      // calculate sub array selected
      for (let j = 0; j < length; j++) {
        tempTotal += arr[i + j]
      }

      // check if current total is greater than output
      if (output < tempTotal) {
        output = tempTotal
      }
    }
  }

  return output
}

module.exports = getMaxSubArray