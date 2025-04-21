function getMaxSubArray(arr, length) {
  let output = 0
  const arrLength = arr.length

  for (let i = 0; i < arrLength; i++) {
    if ((i + length) > arrLength) {
      break
    } else {
      let tempTotal = 0

      for (let j = 0; j < length; j++) {
        tempTotal += arr[i + j]
      }

      if (output < tempTotal) {
        output = tempTotal
      }
    }
  }

  return output
}

module.exports = getMaxSubArray