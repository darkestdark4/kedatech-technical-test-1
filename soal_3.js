// function for check even number
function evenNumber(input) {
  if (input % 2 === 0) {
    return true
  }
  
  return false
}

function getNumberInNestedObject(input) {
  let total = 0
  const objValue = Object.values(input) // get object value

  for (let i = 0; i < objValue.length; i++) {
    // do recursion for nested object, and check if value is even
    if (typeof objValue[i] === "object") {
      total += getNumberInNestedObject(objValue[i])
    } else if (evenNumber(objValue[i])) {
      total += objValue[i]
    }
  }

  return total
}

module.exports = getNumberInNestedObject